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
      {/* liten “glow” upptill för att bryta helvitt (utan att skrika) */}
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
      title: "Excel är flexibelt. Det är problemet.",
      text: "Du vet att den är fel. Du använder den ändå.",
    },
    {
      title: "Magkänsla är ingen forecast",
      text: "Det finns siffror. De speglar sällan verkligheten.",
    },
    {
      title: "De flesta CRM kan allt. De flesta används till lite.",
      text: "Funktioner är billiga. Förlorad användning är dyr.",
    },
  ];

  return (
    <Section subtle glow>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <H2>Excel fungerar. Tills verkligheten kommer ikapp.</H2>
          <P muted className="mt-4 max-w-[55ch]">
            Första kontakten är enkel att logga.<br />
            Andra kontakten med kund går ofta också bra.<br /><br />

            Det är när uppföljning, tajming och flera parallella dialoger ska hållas ihop som det börjar glida.<br />
            Inte för att någon gör fel utan för att inget system hjälper till när vardagen blir rörig.
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
              <div className="mt-2 text-base leading-relaxed" style={{ color: "var(--graphite-700)" }}>
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
      title: "Uppföljning som inte kräver minne",
      text: "Nästa steg finns där när det är dags. Inte när någon kommer ihåg det.",
    },
    {
      title: "Siffror som går att lita på",
      text: "Pipeline uppdateras när arbetet görs – inte i efterhand.",
    },
    {
      title: "Byggt för att användas",
      text: "Ett verktyg. Inte ett projekt.",
    },
  ];

  return (
    <Section id="features">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <H2>Struktur där den behövs. Inget mer.</H2>
          <P muted className="mt-4 max-w-[60ch]">
            BareCRM håller ihop uppföljning, affärer och siffror<br />
            Utan att bli ett system som tar över vardagen.
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
              <div className="mt-2 text-base leading-relaxed" style={{ color: "var(--graphite-700)" }}>
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
    { n: "1", title: "Skapa konto", text: "Inget kort. Inget krångel." },
    { n: "2", title: "Lägg in affärer", text: "Pipeline klar direkt." },
    { n: "3", title: "Följ pipen", text: "Se exakt vad som händer." },
  ];

  return (
    <Section id="how" subtle>
      <H2>Kom igång på minuter</H2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
            <Card
              key={s.n}
              className="p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
            <div className="flex items-baseline gap-3">
              <div
                className="text-sm font-semibold rounded-md px-2.5 py-1 border"
                style={{ borderColor: "var(--divider)", color: "var(--graphite-700)" }}
              >
                {s.n}
              </div>
              <div className="text-base md:text-lg font-semibold tracking-tight">{s.title}</div>
            </div>
            <div className="mt-2 text-base leading-relaxed" style={{ color: "var(--graphite-700)" }}>
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
            Flytta affärer. Se värde direkt.
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
            Exakt koll – utan rapportbyggande.
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
    "Inte för organisationer med tunga processer",
    "Inte för CRM som primärt används för rapportering",
    "Inte för system som kräver implementation för att fungera",
  ];

  const isFor = [
    "För dig som vill ha koll och jobba vidare",
  ];

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <H2>BareCRM är inte för alla</H2>
          <P muted className="mt-4 max-w-[60ch]">
            Det här är helt medvetet. Rätt verktyg för rätt jobb.
          </P>
        </div>

        <Card className="lg:col-span-7 p-6">
          {/* ❌ Inte */}
          <ul className="grid gap-3">
            {notFor.map((x) => (
              <li key={x} className="text-sm flex gap-3">
                <span aria-hidden>❌</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div
            className="my-6"
          />

          {/* ✔️ Är */}
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
          <H2>Enkelt pris. Allt ingår.</H2>
          <P muted className="mt-4 max-w-[60ch]">
            Starta med trial. Betala när appen är live och du faktiskt använder den.
          </P>
        </div>

        <Card className="lg:col-span-7 p-8">
          <div className="text-sm font-medium">Public Beta</div>
          <div className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
            € 9 <span className="text-base font-medium" style={{ color: "var(--graphite-700)" }}>
              {" "} / användare / månad
            </span>
          </div>
          <div className="mt-3 text-base" style={{ color: "var(--graphite-700)" }}>
            14 dagar Trial. Ingen kortinfo behövs. Avsluta när du vill.
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
              Redo att släppa Excel?
            </div>
            <div
              className="mt-3 text-base"
              style={{ color: "var(--graphite-700)" }}
            >
              Appen lanseras inom kort som early access. Ställ dig i kö så hör vi av oss när
              BareCRM är redo.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <WaitlistForm locale="sv" />
            <p
              className="mt-3 text-xs"
              style={{ color: "var(--graphite-700)" }}
            >
              Ingen spam. Bara en ping när det är dags.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
