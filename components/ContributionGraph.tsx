const LEVEL_ALPHA = [0, 0.25, 0.45, 0.7, 1];
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const GITHUB_USER = "LucasTor";

type Day = { date: string; count: number; level: number };

async function fetchContributions(): Promise<{ days: Day[]; total?: number } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    if (!Array.isArray(json.contributions) || json.contributions.length === 0) return null;
    const totals = json.total ? Object.values(json.total) : [];
    return {
      days: json.contributions,
      total: typeof totals[0] === "number" ? totals[0] : undefined,
    };
  } catch {
    return null;
  }
}

// Deterministic stand-in for when the GitHub API is unreachable.
function placeholderDays(): Day[] {
  let seed = 42;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  const days: Day[] = [];
  const start = Date.now() - 364 * 86400000;
  for (let i = 0; i < 365; i++) {
    const r = rnd();
    const level = r > 0.82 ? 4 : r > 0.66 ? 3 : r > 0.5 ? 2 : r > 0.34 ? 1 : 0;
    days.push({
      date: new Date(start + i * 86400000).toISOString().slice(0, 10),
      count: level * 2,
      level,
    });
  }
  return days;
}

function dayOfWeek(date: string) {
  return new Date(date + "T00:00:00Z").getUTCDay();
}

function toWeeks(days: Day[]): (Day | null)[][] {
  const weeks: (Day | null)[][] = [];
  let week: (Day | null)[] = new Array(dayOfWeek(days[0].date)).fill(null);
  for (const d of days) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function monthLabels(weeks: (Day | null)[][]): (string | null)[] {
  let prev = -1;
  return weeks.map((week, i) => {
    const first = week.find(Boolean);
    if (!first) return null;
    const month = new Date(first.date + "T00:00:00Z").getUTCMonth();
    const changed = month !== prev;
    prev = month;
    // Skip a label in the first column when the real month boundary lands a week later.
    if (i === 0 && weeks[1]?.find(Boolean) && dayOfWeek(first.date) !== 0) return null;
    return changed ? MONTHS[month] : null;
  });
}

export default async function ContributionGraph() {
  const data = await fetchContributions();
  const days = data?.days ?? placeholderDays();
  const weeks = toWeeks(days);
  const labels = monthLabels(weeks);

  return (
    <div className="w-max">
      <div className="mb-1.5 flex gap-[3px]">
        {labels.map((m, i) => (
          <div
            key={i}
            className="w-[9px] overflow-visible font-mono text-[10px] whitespace-nowrap text-faint"
          >
            {m ?? ""}
          </div>
        ))}
      </div>
      <div className="flex gap-[3px]">
        {weeks.map((week, i) => (
          <div key={i} className="flex flex-col gap-[3px]">
            {week.map((d, j) =>
              d ? (
                <div
                  key={j}
                  title={`${d.count} contributions on ${d.date}`}
                  className="h-[9px] w-[9px] rounded-[2px]"
                  style={{
                    background:
                      d.level === 0
                        ? "var(--cell)"
                        : `color-mix(in oklab, var(--accent) ${LEVEL_ALPHA[d.level] * 100}%, transparent)`,
                  }}
                />
              ) : (
                <div key={j} className="h-[9px] w-[9px]" />
              )
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 text-[11px] text-faint">
        {data
          ? `${data.total ?? "—"} contributions in the last year — all github activity, work + open source`
          : "[ contribution graph — placeholder data, github api unreachable ]"}
      </div>
    </div>
  );
}
