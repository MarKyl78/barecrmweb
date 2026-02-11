import { Container } from "@/components/Container";
import { H2, P, Card, Button } from "@/components/ui";
import { WaitlistForm } from "@/components/WaitlistForm";

function Section({
  id,
  children,
  borderTop = true,
  subtle = false,
  glow = false,
}: {
  id?: string;
  children: React.ReactNode;
  borderTop?: boolean;
  subtle?: boolean;
  glow?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${borderTop ? "border-t" : ""}`}
      style={{
        borderColor: "var(--divider)",
        background: subtle ? "var(--subtle)" : "var(--bg-base)",
      }}
    >
      {/* subtle glow at the top to break the all-white look (without shouting) */}
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, rgba(66,199,217,0.14) 0%, rgba(66,199,217,0) 70%)",
          }}
        />
      )}
      <div className="relative">
        <Container>{children}</Container>
      </div>
    </section>
  );
}

export function ProblemSection() {
  const items = [
    {
      title: "Spreadsheets are flexible. That’s the problem.",
      text: "You know it’s wrong. You use it anyway.",
    },
    {
      title: "Gut feel isn’t a forecast",
      text: "The numbers exist. They rarely match reality.",
    },
    {
      title: "Most CRMs can do everything. Most get used for very little.",
      text: "Features are cheap. Lost adoption is expensive.",
    },
  ];

  return (
    <Section subtle glow>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <H2>Spreadsheets work. Until reality catches up.</H2>
          <P muted className="mt-4 max-w-[55ch]">
            Logging the first touch is easy.<br />
            The second customer interaction often goes fine too.<br />
            <br />
            It’s when follow-ups, timing, and multiple parallel conversations need to stay connected that things start to slip.<br />
            Not because people do something wrong — but because no system helps when the day gets messy.
          </P>
        </div>

        <div className="lg:col-span-7 grid gap-4">
          {items.map((x) => (
            <Card
              key={x.title}
              className="p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="text-base md:text-lg font-semibold tracking-tight">
                {x.title}
              </div>
              <div
                className="mt-2 text-base leading-relaxed"
                style={{ color: "var(--graphite-700)" }}
              >
                {x.text}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function SolutionSection() {
  const items = [
    {
      title: "Follow-ups that don’t rely on memory",
      text: "The next step is there when it’s time — not when someone happens to remember.",
    },
    {
      title: "Numbers you can trust",
      text: "Your pipeline updates when work happens — not afterwards.",
    },
    {
      title: "Built to be used",
      text: "A tool. Not a project.",
    },
  ];

  return (
    <Section id="features">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <H2>Structure where you need it. Nothing more.</H2>
          <P muted className="mt-4 max-w-[60ch]">
            BareCRM keeps follow-ups, deals, and numbers together<br />
            without turning into a system that takes over your day.
          </P>
        </div>

        <div className="lg:col-span-7 grid gap-4">
          {items.map((x) => (
            <Card
              key={x.title}
              className="p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="text-base md:text-lg font-semibold tracking-tight">
                {x.title}
              </div>
              <div
                className="mt-2 text-base leading-relaxed"
                style={{ color: "var(--graphite-700)" }}
              >
                {x.text}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function HowItWorksSection() {
  const steps = [
    { n: "1", title: "Create an account", text: "No card. No hassle." },
    { n: "2", title: "Add deals", text: "Your pipeline is ready right away." },
    { n: "3", title: "Track the pipeline", text: "See exactly what’s happening." },
  ];

  return (
    <Section id="how" subtle>
      <H2>Get started in minutes</H2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <Card
            key={s.n}
            className="p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-baseline gap-3">
              <div
                className="text-sm font-semibold rounded-md px-2.5 py-1 border"
                style={{
                  borderColor: "var(--divider)",
                  color: "var(--graphite-700)",
                }}
              >
                {s.n}
              </div>
              <div className="text-base md:text-lg font-semibold tracking-tight">
                {s.title}
              </div>
            </div>
            <div
              className="mt-2 text-base leading-relaxed"
              style={{ color: "var(--graphite-700)" }}
            >
              {s.text}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function ProductProofSection() {
  return (
    <Section subtle>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="text-base md:text-lg font-semibold tracking-tight">Pipeline</div>
          <div className="mt-2 text-sm" style={{ color: "var(--graphite-700)" }}>
            Move deals. See value instantly.
          </div>
          <img
            src="/screenshots/pipeline.png"
            alt="BareCRM pipeline"
            className="mt-6 w-full rounded-xl border shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{ borderColor: "var(--divider)" }}
          />
        </Card>

        <Card className="p-6">
          <div className="text-base md:text-lg font-semibold tracking-tight">Dashboard</div>
          <div className="mt-2 text-sm" style={{ color: "var(--graphite-700)" }}>
            Clear insight — without report-building.
          </div>
          <img
            src="/screenshots/dashboard.png"
            alt="BareCRM dashboard"
            className="mt-6 w-full rounded-xl border shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{ borderColor: "var(--divider)" }}
          />
        </Card>
      </div>
    </Section>
  );
}

export function NotForEveryoneSection() {
  const notFor = [
    "Not for organizations with heavy processes",
    "Not for CRMs used primarily for reporting",
    "Not for systems that require an implementation project to work",
  ];

  const isFor = ["For people who want control — and want to keep moving."];

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <H2>BareCRM isn’t for everyone</H2>
          <P muted className="mt-4 max-w-[60ch]">
            That’s intentional. The right tool for the right job.
          </P>
        </div>

        <Card className="lg:col-span-7 p-6">
          {/* ❌ Not for */}
          <ul className="grid gap-3">
            {notFor.map((x) => (
              <li key={x} className="text-sm flex gap-3">
                <span aria-hidden>❌</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6" />

          {/* ✔️ For */}
          <ul className="grid gap-3">
            {isFor.map((x) => (
              <li key={x} className="text-sm flex gap-3">
                <span aria-hidden>✔️</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

export function PricingSection() {
  return null; // TODO: enable for v1 launch
  return (
    <Section id="pricing" subtle glow>
      <div className="grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <H2>Simple pricing. Everything included.</H2>
          <P muted className="mt-4 max-w-[60ch]">
            Start with a trial. Pay when the app is live and you actually use it.
          </P>
        </div>

        <Card className="lg:col-span-7 p-8">
          <div className="text-sm font-medium">Public Beta</div>
          <div className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
            € 9{" "}
            <span
              className="text-base font-medium"
              style={{ color: "var(--graphite-700)" }}
            >
              {" "}
              / user / month
            </span>
          </div>
          <div className="mt-3 text-base" style={{ color: "var(--graphite-700)" }}>
            14-day trial. No card required. Cancel anytime.
          </div>
          <div className="mt-8">
            <Button href="#waitlist">Early access</Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

export function FinalCTASection() {
  return (
    <Section id="waitlist" borderTop={true}>
      <Card className="p-10">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Text */}
          <div className="lg:col-span-5">
            <div className="text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to drop the spreadsheet?
            </div>
            <div className="mt-3 text-base" style={{ color: "var(--graphite-700)" }}>
              Early access is coming soon. Join the list and we’ll reach out when BareCRM is ready.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <WaitlistForm locale="en" />
            <p className="mt-3 text-xs" style={{ color: "var(--graphite-700)" }}>
              No spam. Just a ping when it’s time.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
