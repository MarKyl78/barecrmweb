import { Container } from "@/components/Container";
import { H1, H2, P } from "@/components/ui";

export default function PrivacySV() {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <div className="max-w-[80ch]">
          <H1>Integritetspolicy (GDPR)</H1>

          <P muted className="mt-3">
            Senast uppdaterad: 2026-02-10
          </P>

          <div className="mt-10 grid gap-10">
            <section>
              <H2>1. Personuppgiftsansvarig</H2>
              <P muted className="mt-4">
                Personuppgiftsansvarig för behandlingen av personuppgifter enligt
                denna integritetspolicy är:
              </P>
              <P className="mt-4">
                <strong>BareCRM (Martin Kylberg AB)</strong>
                <br />
                Organisationsnummer: 559487-9453
                <br />
                Adress: Vävnadsvägen 13, 178 37 Ekerö
                <br />
                E-post: martin@barecrm.se
              </P>
              <P muted className="mt-4">
                BareCRM ansvarar för att personuppgifter behandlas i enlighet med
                EU:s dataskyddsförordning (GDPR).
              </P>
            </section>

            <section>
              <H2>2. Policyns tillämpningsområde</H2>
              <P muted className="mt-4">
                Denna integritetspolicy gäller för behandling av personuppgifter
                som rör:
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• användare av BareCRM-tjänsten</li>
                <li>• kundrepresentanter vars uppgifter registreras i systemet</li>
                <li>• besökare på BareCRMs webbplatser och tjänster</li>
              </ul>
              <P muted className="mt-4">
                BareCRM behandlar endast personuppgifter i den omfattning som är
                nödvändig för att tillhandahålla och driva tjänsten.
              </P>
            </section>

            <section>
              <H2>3. Kategorier av personuppgifter</H2>

              <P className="mt-4">
                BareCRM kan behandla följande kategorier av personuppgifter:
              </P>

              <div className="mt-6">
                <P className="font-semibold">3.1 Konto- och identitetsuppgifter</P>
                <ul className="mt-3 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                  <li>• Namn</li>
                  <li>• E-postadress</li>
                  <li>• Användar-ID</li>
                  <li>• Roll och behörighetsnivå</li>
                  <li>• Organisationstillhörighet</li>
                </ul>
              </div>

              <div className="mt-6">
                <P className="font-semibold">3.2 Kunddata (registrerad av användare)</P>
                <ul className="mt-3 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                  <li>• Kontaktpersoners namn</li>
                  <li>• E-postadresser</li>
                  <li>• Telefonnummer</li>
                  <li>• Befattning/titel</li>
                  <li>• Anteckningar, aktiviteter, mötesloggar och säljrelaterad information</li>
                </ul>
                <P muted className="mt-3">
                  Sådan data behandlas uteslutande på uppdrag av kunden.
                </P>
              </div>

              <div className="mt-6">
                <P className="font-semibold">3.3 Teknisk data och användningsdata</P>
                <ul className="mt-3 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                  <li>• Inloggningshändelser</li>
                  <li>• Tidsstämplar</li>
                  <li>• Loggar för spårbarhet och revision</li>
                  <li>• Säkerhetsrelaterad metadata</li>
                  <li>• IP-adress (i den utsträckning som krävs för säkerhet och bedrägeriförebyggande åtgärder)</li>
                </ul>
              </div>
            </section>

            <section>
              <H2>4. Ändamål och rättslig grund för behandling</H2>
              <P className="mt-4">
                Personuppgifter behandlas för följande ändamål:
              </P>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left text-sm" style={{ color: "var(--graphite-700)" }}>
                  <thead>
                    <tr>
                      <th className="py-2 pr-4 font-semibold" style={{ color: "var(--graphite-900)" }}>
                        Ändamål
                      </th>
                      <th className="py-2 font-semibold" style={{ color: "var(--graphite-900)" }}>
                        Rättslig grund (GDPR art. 6)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Tillhandahållande och drift av tjänsten</td>
                      <td className="py-2">Avtal</td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Autentisering och åtkomstkontroll</td>
                      <td className="py-2">Avtal</td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Säkerhet, loggning och spårbarhet</td>
                      <td className="py-2">Berättigat intresse</td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Uppfyllande av rättsliga skyldigheter</td>
                      <td className="py-2">Rättslig förpliktelse</td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Stabilitet och förbättring av tjänsten</td>
                      <td className="py-2">Berättigat intresse</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <P muted className="mt-4">
                BareCRM använder inte personuppgifter för profilering eller automatiserat beslutsfattande.
              </P>
            </section>

            <section>
              <H2>5. Kunddata och rollen som personuppgiftsbiträde</H2>
              <P muted className="mt-4">
                För kunddata som registreras i systemet (t.ex. CRM-kontakter och anteckningar) gäller att:
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• Kunden är personuppgiftsansvarig</li>
                <li>• BareCRM agerar som personuppgiftsbiträde enligt artikel 28 GDPR</li>
                <li>• Behandlingen regleras genom ett personuppgiftsbiträdesavtal (DPA)</li>
                <li>• BareCRM behandlar kunddata endast enligt dokumenterade instruktioner från kunden</li>
              </ul>
            </section>

            <section>
              <H2>6. Lagring av personuppgifter</H2>
              <P muted className="mt-4">
                Personuppgifter lagras endast så länge som krävs för sitt ändamål.
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• Kontouppgifter lagras under hela kundrelationens giltighetstid</li>
                <li>• Kunddata raderas eller återlämnas vid upphörande av avtalet, i enlighet med DPA</li>
                <li>• Lagstadgade arkiveringskrav kan medföra längre lagringstid</li>
              </ul>
            </section>

            <section>
              <H2>7. Informationssäkerhet</H2>
              <P muted className="mt-4">
                BareCRM tillämpar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda personuppgifter, inklusive:
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• Rollbaserad åtkomstkontroll</li>
                <li>• Isolering mellan organisationer (multi-tenant-säkerhet)</li>
                <li>• Krypterad kommunikation</li>
                <li>• Loggning och spårbarhet</li>
                <li>• Principen om minsta möjliga behörighet</li>
              </ul>
              <P muted className="mt-4">Säkerhetsåtgärder ses över löpande.</P>
            </section>

            <section>
              <H2>8. Delning av personuppgifter och underbiträden</H2>
              <P muted className="mt-4">BareCRM säljer aldrig personuppgifter.</P>
              <P muted className="mt-4">
                Personuppgifter kan delas med godkända underbiträden som är nödvändiga för att tillhandahålla tjänsten (t.ex. drift- och infrastrukturleverantörer).
              </P>
              <P muted className="mt-4">Samtliga underbiträden omfattas av:</P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• GDPR-anpassade personuppgiftsbiträdesavtal</li>
                <li>• Lämpliga skyddsåtgärder enligt kapitel V GDPR, där tillämpligt</li>
              </ul>
              <P muted className="mt-4">En aktuell förteckning över underbiträden tillhandahålls på begäran.</P>
            </section>

            <section>
              <H2>9. Internationella överföringar</H2>
              <P muted className="mt-4">
                Personuppgifter behandlas inom EU/EES eller överförs med stöd av godkända skyddsåtgärder, såsom:
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• EU-kommissionens standardavtalsklausuler (SCC)</li>
                <li>• Beslut om adekvat skyddsnivå</li>
              </ul>
            </section>

            <section>
              <H2>10. Registrerades rättigheter</H2>
              <P muted className="mt-4">
                Registrerade personer har följande rättigheter enligt GDPR:
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• Rätt till tillgång (art. 15)</li>
                <li>• Rätt till rättelse (art. 16)</li>
                <li>• Rätt till radering (art. 17)</li>
                <li>• Rätt till begränsning av behandling (art. 18)</li>
                <li>• Rätt till dataportabilitet (art. 20)</li>
                <li>• Rätt att invända mot behandling (art. 21)</li>
              </ul>
              <P className="mt-4">
                Begäran kan skickas till:{" "}
                <a className="underline hover:opacity-80" href="mailto:privacy@barecrm.com">
                  privacy@barecrm.com
                </a>
              </P>
            </section>

            <section>
              <H2>11. Klagomål</H2>
              <P muted className="mt-4">
                Registrerade har rätt att lämna klagomål till tillsynsmyndighet, exempelvis:
              </P>
              <P className="mt-4">
                Integritetsskyddsmyndigheten (IMY){" "}
                <a
                  className="underline hover:opacity-80"
                  href="https://www.imy.se"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.imy.se
                </a>
              </P>
            </section>

            <section>
              <H2>12. Ändringar i policyn</H2>
              <P muted className="mt-4">
                Denna integritetspolicy kan uppdateras vid förändringar i lagstiftning eller tjänstens funktionalitet.
                Den senaste versionen finns alltid tillgänglig på denna sida.
              </P>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
