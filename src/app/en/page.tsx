import { Container } from "@/components/Container";
import { H1, P, Button, Card } from "@/components/ui";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import {
  ProblemSection,
  SolutionSection,
  HowItWorksSection,
  ProductProofSection,
  NotForEveryoneSection,
  PricingSection,
  FinalCTASection,
} from "@/components/sections.en";

export const metadata = {
  title: "BareCRM – A simple CRM for teams outgrowing spreadsheets",
  description:
    "BareCRM is a lightweight CRM for consultants and small B2B teams who need structure without the complexity of traditional CRM systems.",
};


export default function Home() {
  return (
    <main className="min-h-screen">
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: "var(--divider)",
          background: "rgba(248,250,252,0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img
                src="/logo/BareCRM_wordmark.svg"
                alt="BareCRM"
                className="h-6 md:h-7"
              />
            </div>
            <nav
            className="hidden sm:flex items-center gap-6 text-sm"
            style={{ color: "var(--graphite-700)" }}
            >
            <a href="#features" className="hover:opacity-80">
                Features
            </a>

            <LanguageSwitch current="en" />

            <a
                href="#waitlist"
                className="rounded-md px-4 py-2 font-medium"
                style={{
                background: "var(--brand-base)",
                color: "var(--graphite-900)",
                }}
            >
                Early access
            </a>
            </nav>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section
        className="pt-28 pb-32"
        style={{
          background:
            "radial-gradient(70% 120% at 50% 0%, rgba(66,199,217,0.12) 0%, rgba(66,199,217,0) 55%)",
        }}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6">
              <H1 className="max-w-[18ch] text-[48px] sm:text-[56px]">
                A CRM without the overhead.
              </H1>
              <P className="mt-6 max-w-[52ch] text-[18px] leading-relaxed">
                Structure where you need it — nothing more.<br />
                When spreadsheets start to crack, and big CRMs feel too heavy.
              </P>

              <div className="mt-10 flex gap-4 flex-wrap items-center">
                <Button href="#waitlist" className="text-base px-7 py-3">Early access</Button>

                <Button href="#how" variant="secondary" className="text-base px-6 py-3">
                  How it works →
                </Button>
              </div>

            </div>

            <div className="lg:col-span-6">
              <Card className="relative overflow-hidden p-6 md:p-8 shadow-[0_34px_90px_rgba(0,0,0,0.16)]">
                <img
                  src="/logo/B_color.svg"
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 opacity-[0.08]"
                />
                <img
                  src="/screenshots/pipeline.png"
                  alt="BareCRM pipeline"
                  className="mt-3 w-full rounded-xl border shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
                  style={{ borderColor: "var(--divider)" }}
                />
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* SEO context – screen reader only */}
      <section className="sr-only">
        <h2>Simple CRM for small B2B teams</h2>
        <p>
          BareCRM is a lightweight CRM for small B2B teams that have outgrown
          spreadsheets and need structure for follow-ups, deals and pipeline
          management – without the complexity of traditional CRM systems.
        </p>
      </section>

      {/* WIREFRAME SECTIONS */}
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ProductProofSection />
      <NotForEveryoneSection />
      <PricingSection />
      <FinalCTASection />

      <footer
        className="py-10 border-t"
        style={{ borderColor: "var(--divider)" }}
      >
        <Container>
          <div
            className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm"
            style={{ color: "var(--graphite-700)" }}
          >
            <div>© {new Date().getFullYear()} BareCRM</div>
            <div className="flex gap-4">
              <a href="/en/privacy" className="hover:opacity-80">
                Privacy
              </a>
              <a href="mailto:martin@barecrm.se" className="hover:opacity-80">
                Contact
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
