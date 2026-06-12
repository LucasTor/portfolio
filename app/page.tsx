import Image from "next/image";
import ContributionGraph from "@/components/ContributionGraph";
import CursorGlow from "@/components/CursorGlow";
import PingPong from "@/components/PingPong";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import { email, experience, githubUrl, linkedinUrl, repos, stacks } from "@/lib/data";

const navItems = [
  { num: "01", label: "experience", href: "#experience", note: "6 roles" },
  { num: "02", label: "stack", href: "#stack", note: "17 tools" },
  { num: "03", label: "about", href: "#about", note: "1 human" },
  { num: "04", label: "open source", href: "#oss", note: "3 repos" },
  { num: "05", label: "contact", href: "#contact", note: "1 inbox" },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function SectionHeader({
  num,
  label,
  right,
}: {
  num: string;
  label: string;
  right?: React.ReactNode;
}) {
  return (
    <Reveal className="flex gap-[14px] border-b border-line pb-[14px] text-xs tracking-[0.06em]">
      <span className="text-accent">{num}</span>
      <span>{label}</span>
      <span className="flex-1" />
      {right}
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center pt-20 pb-[60px]">
      <div
        className="anim-fade-up mb-[30px] text-xs leading-loose text-faint"
        style={{ animationDuration: "0.9s" }}
      >
        <span className="text-accent">~/portfolio</span> — last updated 06.2026
      </div>
      <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between md:gap-14">
        <div className="min-w-0">
          <h1
            className="anim-fade-up mb-10 text-[clamp(48px,7vw,92px)] font-medium tracking-[-0.03em] leading-[1.04]"
            style={{ animationDelay: "0.1s" }}
          >
            lucas
            <br />
            torresan
            <span className="text-accent animate-[blink_1.2s_steps(1)_infinite]">_</span>
          </h1>
          <div
            className="anim-fade-up grid max-w-[640px] grid-cols-[110px_1fr] gap-x-7 gap-y-2.5 text-[13px] leading-[1.7]"
            style={{ animationDelay: "0.24s" }}
          >
            <span className="text-faint">role</span>
            <span>senior software engineer</span>
            <span className="text-faint">stack</span>
            <span>
              python · typescript · react · next · django · express · postgres · aws · terraform
            </span>
            <span className="text-faint">status</span>
            <span className="flex items-center gap-[9px] text-accent">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent animate-[blink_2.4s_ease_infinite]" />
              [ e.g. open to senior roles ]
            </span>
          </div>
        </div>
        <div
          className="anim-fade-up relative flex-shrink-0 p-[14px]"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="absolute top-0 left-0 h-[22px] w-[22px] border-t-2 border-l-2 border-accent" />
          <span className="absolute top-0 right-0 h-[22px] w-[22px] border-t-2 border-r-2 border-accent" />
          <span className="absolute bottom-0 left-0 h-[22px] w-[22px] border-b-2 border-l-2 border-accent" />
          <span className="absolute right-0 bottom-0 h-[22px] w-[22px] border-r-2 border-b-2 border-accent" />
          <Image
            src="/portrait.png"
            alt="Lucas Torresan"
            width={720}
            height={900}
            priority
            className="block aspect-[4/5] w-[clamp(230px,24vw,320px)] object-cover"
          />
        </div>
      </div>
      <nav
        className="anim-fade-up mt-[70px] flex max-w-[560px] flex-col text-[13px]"
        style={{ animationDelay: "0.4s" }}
      >
        {navItems.map((item) => (
          <a
            key={item.num}
            href={item.href}
            className="flex items-baseline gap-[14px] py-[11px] text-inherit no-underline hover:text-accent"
          >
            <span className="text-faint">{item.num}</span>
            <span>{item.label}</span>
            <span className="flex-1 -translate-y-1 border-b border-dotted border-line" />
            <span className="text-faint">{item.note}</span>
          </a>
        ))}
      </nav>
      <div className="mt-16 flex items-center gap-2.5 text-[11px] text-faint">
        <span className="animate-[drift_2.6s_ease-in-out_infinite]">↓</span> scroll
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="pt-[110px] pb-[30px]">
      <SectionHeader
        num="01"
        label="experience"
        right={<span className="text-faint">2020 — present</span>}
      />
      {experience.map((job) => (
        <Reveal
          key={job.period}
          className="-mx-5 grid grid-cols-1 gap-4 border-b border-line px-5 py-[38px] hover:bg-bg2 md:grid-cols-[150px_1fr_1.4fr] md:gap-9"
        >
          <div className="text-xs leading-[1.9] text-faint">
            <div>{job.period}</div>
            <div>{job.loc}</div>
          </div>
          <div>
            <div className="mb-1.5 font-sans text-[19px] font-medium tracking-[-0.01em]">
              {job.role}
            </div>
            <div className="text-xs text-accent">{job.company}</div>
          </div>
          <div className="flex flex-col gap-2.5">
            {job.points.map((pt) => (
              <div
                key={pt}
                className="flex gap-2.5 font-sans text-[14.5px] leading-[1.6] text-muted"
              >
                <span className="font-mono text-[13px] text-accent">→</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="pt-[110px] pb-[30px]">
      <SectionHeader
        num="02"
        label="stack"
        right={<span className="text-faint">sorted by affection</span>}
      />
      {stacks.map((grp) => (
        <Reveal
          key={grp.label}
          className="grid grid-cols-1 items-baseline gap-4 border-b border-line py-[30px] sm:grid-cols-[150px_1fr] sm:gap-9"
        >
          <span className="text-xs text-faint">{grp.label}</span>
          <div className="flex flex-wrap gap-2.5">
            {grp.items.map((tech) => (
              <span
                key={tech}
                className="cursor-default border border-line px-[15px] py-[9px] text-[13px] lowercase hover:border-accent hover:text-accent"
              >
                [ {tech} ]
              </span>
            ))}
          </div>
        </Reveal>
      ))}
      <Reveal className="grid grid-cols-1 items-baseline gap-4 border-b border-line py-[30px] sm:grid-cols-[150px_1fr] sm:gap-9">
        <span className="text-xs text-faint">loading…</span>
        <div className="flex flex-wrap gap-2.5">
          <span className="border border-dashed border-line px-[15px] py-[9px] text-[13px] text-faint">
            [ ··· reserved for whatever&apos;s next ]
          </span>
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="pt-[110px] pb-[30px]">
      <div className="mb-10">
        <SectionHeader
          num="03"
          label="about"
          right={<span className="text-faint">the human behind the commits</span>}
        />
      </div>
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[228px_1fr] md:gap-14">
        <Reveal className="relative w-max p-[14px]">
          <span className="absolute top-0 left-0 h-[22px] w-[22px] border-t-2 border-l-2 border-accent" />
          <span className="absolute top-0 right-0 h-[22px] w-[22px] border-t-2 border-r-2 border-accent" />
          <span className="absolute bottom-0 left-0 h-[22px] w-[22px] border-b-2 border-l-2 border-accent" />
          <span className="absolute right-0 bottom-0 h-[22px] w-[22px] border-r-2 border-b-2 border-accent" />
          <Image
            src="/about.png"
            alt="Lucas in Zurich"
            width={1440}
            height={1800}
            className="block h-[200px] w-[200px] object-cover"
          />
        </Reveal>
        <div className="font-sans">
          <Reveal as="p" className="mb-5 text-[21px] font-light leading-[1.55]">
            Engineer with no fear of unexplored paths: the undocumented protocol, the missing
            integration, the tool nobody wrote.
          </Reveal>
          <Reveal as="p" className="mb-9 max-w-[60ch] text-[15px] leading-[1.75] text-muted">
            I&apos;ve been messing with computers and electronics since I was a kid, so this was
            always the obvious path. I started in electrical engineering, building hardware and
            software for IoT devices, then moved into web development — six years later I&apos;m a
            senior engineer shipping web applications, with side projects that usually involve a
            car, a solar inverter, or something that wasn&apos;t meant to be programmable — and
            the fun lies in the challenge.
          </Reveal>
          <Reveal className="grid grid-cols-[110px_1fr] gap-x-7 gap-y-2 font-mono text-[13px] leading-[1.7]">
            <span className="text-faint">based_in</span>
            <span>[ São Marcos - RS, Brasil ]</span>
            <span className="text-faint">experience</span>
            <span>[ 7+ ] years</span>
            <span className="text-faint">currently</span>
            <span>[ Lumenalta ]</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section id="oss" className="pt-[110px] pb-[30px]">
      <div className="mb-9">
        <SectionHeader
          num="04"
          label="open source"
          right={
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener"
              className="text-faint no-underline hover:text-accent"
            >
              github.com/LucasTor ↗
            </a>
          }
        />
      </div>
      <Reveal className="mb-11 overflow-x-auto">
        <ContributionGraph />
      </Reveal>
      <div className="flex flex-col">
        {repos.map((repo) => (
          <Reveal
            key={repo.name}
            as="a"
            href={repo.url}
            target="_blank"
            rel="noopener"
            className="flex flex-col gap-2 border-t border-line py-[17px] text-[13px] text-inherit no-underline hover:text-accent"
          >
            <span className="flex items-baseline gap-4">
              <span className="font-medium">{repo.name}</span>
              <span className="flex-1" />
              <span className="text-[11px] text-faint">{repo.lang}</span>
              <span className="text-[11px] text-faint">{repo.stars}</span>
            </span>
            <span className="max-w-[70ch] whitespace-pre-line font-sans text-sm leading-[1.65] text-muted">
              {repo.desc}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="pt-[130px]">
      <SectionHeader num="05" label="contact" />
      <Reveal className="mt-[60px] mb-[14px] text-[13px] text-faint">$ get in touch</Reveal>
      <Reveal
        as="a"
        href={`mailto:${email}`}
        className="inline-block text-[clamp(24px,4vw,44px)] font-medium tracking-[-0.02em] text-accent no-underline hover:underline"
      >
        → {email}
      </Reveal>
      <Reveal
        as="p"
        className="mt-[26px] max-w-[460px] font-sans text-[15px] font-light leading-[1.7] text-muted"
      >
        Hiring for a senior role? Tell me about the problem — I read everything sent here.
      </Reveal>
      <Reveal className="mt-9 flex flex-wrap gap-2.5 text-[13px]">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2.5 border border-line px-[15px] py-[9px] text-inherit no-underline hover:border-accent hover:text-accent"
        >
          <GitHubIcon />
          github ↗
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2.5 border border-line px-[15px] py-[9px] text-inherit no-underline hover:border-accent hover:text-accent"
        >
          <LinkedInIcon />
          linkedin ↗
        </a>
      </Reveal>
      <footer className="mt-[130px] flex items-center justify-between border-t border-line pt-[26px] pb-10 text-[11px] text-faint">
        <span>© 2026 lucas torresan</span>
        <span className="hidden sm:block">[ type &ldquo;pong&rdquo; for a surprise ]</span>
        <div className="flex gap-[26px]">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener"
            className="text-faint no-underline hover:text-accent"
          >
            github ↗
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener"
            className="text-faint no-underline hover:text-accent"
          >
            linkedin ↗
          </a>
          <a href="https://lucas.torresan.dev" className="text-faint no-underline hover:text-accent">
            résumé ↗
          </a>
        </div>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <ThemeToggle />
      <PingPong />
      <div className="relative z-[1] mx-auto max-w-[1060px] px-6 sm:px-10">
        <Hero />
        <Experience />
        <Stack />
        <About />
        <OpenSource />
        <Contact />
      </div>
    </>
  );
}
