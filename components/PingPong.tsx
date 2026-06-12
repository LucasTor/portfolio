"use client";

import { useEffect, useRef, useState } from "react";

const TRIGGER = "pong";
const W = 560;
const H = 360;
const PADDLE_W = 8;
const PADDLE_H = 64;
const BALL = 8;
const WIN_SCORE = 7;

function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let playerY = H / 2 - PADDLE_H / 2;
    let cpuY = playerY;
    let ballX = W / 2;
    let ballY = H / 2;
    let vx = 3.4 * (Math.random() > 0.5 ? 1 : -1);
    let vy = 2.2 * (Math.random() > 0.5 ? 1 : -1);
    let playerScore = 0;
    let cpuScore = 0;
    let over = false;
    let upPressed = false;
    let downPressed = false;
    let raf = 0;

    const resetBall = (towards: 1 | -1) => {
      ballX = W / 2;
      ballY = H / 2;
      vx = 3.4 * towards;
      vy = 2.2 * (Math.random() > 0.5 ? 1 : -1);
    };

    const restart = () => {
      playerScore = 0;
      cpuScore = 0;
      over = false;
      resetBall(Math.random() > 0.5 ? 1 : -1);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w") {
        upPressed = true;
        e.preventDefault();
      }
      if (e.key === "ArrowDown" || e.key === "s") {
        downPressed = true;
        e.preventDefault();
      }
      if ((e.key === "r" || e.key === "R") && over) restart();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w") upPressed = false;
      if (e.key === "ArrowDown" || e.key === "s") downPressed = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      playerY = ((e.clientY - rect.top) / rect.height) * H - PADDLE_H / 2;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("mousemove", onMouseMove);

    const clamp = (v: number) => Math.max(0, Math.min(H - PADDLE_H, v));

    const update = () => {
      if (over) return;
      if (upPressed) playerY -= 5.5;
      if (downPressed) playerY += 5.5;
      playerY = clamp(playerY);

      // CPU only reacts once the ball crosses into its half, with a slow
      // capped speed — it drifts back to center the rest of the time.
      const chasing = vx > 0 && ballX > W / 2;
      const target = chasing ? ballY - PADDLE_H / 2 : H / 2 - PADDLE_H / 2;
      const maxSpeed = chasing ? 2.6 : 1.4;
      cpuY = clamp(cpuY + Math.max(-maxSpeed, Math.min(maxSpeed, target - cpuY)));

      ballX += vx;
      ballY += vy;

      if (ballY <= 0 || ballY + BALL >= H) vy = -vy;

      if (ballX <= 18 + PADDLE_W && ballX >= 18 && ballY + BALL >= playerY && ballY <= playerY + PADDLE_H && vx < 0) {
        vx = -vx * 1.04;
        vy += ((ballY + BALL / 2 - (playerY + PADDLE_H / 2)) / PADDLE_H) * 4;
      }
      if (ballX + BALL >= W - 18 - PADDLE_W && ballX + BALL <= W - 18 && ballY + BALL >= cpuY && ballY <= cpuY + PADDLE_H && vx > 0) {
        vx = -vx * 1.04;
        vy += ((ballY + BALL / 2 - (cpuY + PADDLE_H / 2)) / PADDLE_H) * 4;
      }

      if (ballX < -BALL) {
        cpuScore++;
        if (cpuScore >= WIN_SCORE) over = true;
        else resetBall(1);
      }
      if (ballX > W + BALL) {
        playerScore++;
        if (playerScore >= WIN_SCORE) over = true;
        else resetBall(-1);
      }
    };

    const draw = () => {
      const css = getComputedStyle(document.documentElement);
      const accent = css.getPropertyValue("--accent").trim();
      const faint = css.getPropertyValue("--faint").trim();
      const line = css.getPropertyValue("--line").trim();
      const bg = css.getPropertyValue("--bg").trim();
      const text = css.getPropertyValue("--text").trim();

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = line;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.moveTo(W / 2, 0);
      ctx.lineTo(W / 2, H);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = "26px 'IBM Plex Mono', monospace";
      ctx.fillStyle = faint;
      ctx.textAlign = "center";
      ctx.fillText(String(playerScore).padStart(2, "0"), W / 2 - 50, 40);
      ctx.fillText(String(cpuScore).padStart(2, "0"), W / 2 + 50, 40);

      ctx.fillStyle = text;
      ctx.fillRect(18, playerY, PADDLE_W, PADDLE_H);
      ctx.fillRect(W - 18 - PADDLE_W, cpuY, PADDLE_W, PADDLE_H);

      ctx.fillStyle = accent;
      ctx.fillRect(ballX, ballY, BALL, BALL);

      if (over) {
        ctx.fillStyle = text;
        ctx.font = "16px 'IBM Plex Mono', monospace";
        ctx.fillText(playerScore > cpuScore ? "you win_" : "cpu wins_", W / 2, H / 2 - 10);
        ctx.fillStyle = faint;
        ctx.font = "12px 'IBM Plex Mono', monospace";
        ctx.fillText("press r to restart", W / 2, H / 2 + 16);
      }
    };

    const loop = () => {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={W}
      height={H}
      className="block h-auto w-[560px] max-w-[calc(90vw-70px)] cursor-none border border-line"
    />
  );
}

export default function PingPong() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let buffer = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && /input|textarea|select/i.test(e.target.tagName)) return;
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-TRIGGER.length);
      if (buffer === TRIGGER) {
        buffer = "";
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[oklch(0.1_0_0/0.6)] backdrop-blur-[6px]"
      onClick={() => setOpen(false)}
    >
      <div className="relative p-[14px]" onClick={(e) => e.stopPropagation()}>
        <span className="absolute top-0 left-0 h-[22px] w-[22px] border-t-2 border-l-2 border-accent" />
        <span className="absolute top-0 right-0 h-[22px] w-[22px] border-t-2 border-r-2 border-accent" />
        <span className="absolute bottom-0 left-0 h-[22px] w-[22px] border-b-2 border-l-2 border-accent" />
        <span className="absolute right-0 bottom-0 h-[22px] w-[22px] border-r-2 border-b-2 border-accent" />
        <div className="border border-line bg-bg p-5">
          <div className="mb-4 flex items-baseline gap-[14px] text-xs tracking-[0.06em]">
            <span className="text-accent">~/games/pong</span>
            <span className="text-faint">first to {WIN_SCORE} — mouse or ↑/↓</span>
            <span className="flex-1" />
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer border-0 bg-transparent p-0 font-mono text-xs text-faint hover:text-accent"
            >
              [ esc ]
            </button>
          </div>
          <PongGame />
        </div>
      </div>
    </div>
  );
}
