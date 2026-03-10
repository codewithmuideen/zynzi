import { WAITLIST_EMAIL, COPYRIGHT_YEAR } from '../constants'

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-roboto font-bold text-brand-text text-xl mb-3">{title}</h2>
    <div className="font-roboto font-light text-brand-body text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
)

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-brand-cream pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5">

        {/* Header */}
        <div className="mb-12">
          <p className="font-roboto text-xs font-bold tracking-[0.2em] uppercase text-brand-sky mb-4">
            Legal
          </p>
          <h1 className="font-roboto font-black text-brand-text text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-3">
            Terms of Use
          </h1>
          <p className="font-roboto text-sm text-brand-muted">
            Last updated: March {COPYRIGHT_YEAR}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-brand-border p-8 md:p-12 shadow-brand-sm">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Zynzi platform ("Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, you may not use the Service.
            </p>
            <p>
              We reserve the right to update these terms at any time. Continued use of the Service after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </Section>

          <Section title="2. Eligibility">
            <p>
              You must be at least 18 years old to use Zynzi. By using the Service, you confirm that you meet this requirement and that all information you provide is accurate and complete.
            </p>
          </Section>

          <Section title="3. Account Responsibilities">
            <p>You are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Providing accurate and up-to-date profile information</li>
              <li>Notifying us immediately of any unauthorised use of your account</li>
            </ul>
          </Section>

          <Section title="4. Acceptable Use">
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Harass, abuse, threaten, or harm other users</li>
              <li>Post false, misleading, or fraudulent content</li>
              <li>Impersonate any person or entity</li>
              <li>Violate any applicable law or regulation</li>
              <li>Scrape, reverse-engineer, or misuse our platform in any way</li>
              <li>Use the Service for commercial solicitation without prior written consent</li>
            </ul>
          </Section>

          <Section title="5. User Content">
            <p>
              You retain ownership of any content you submit to Zynzi. By submitting content, you grant us a non-exclusive, worldwide, royalty-free licence to use, display, and distribute that content solely for the purpose of operating the Service.
            </p>
            <p>
              You are solely responsible for the content you post. We reserve the right to remove any content that violates these terms or our community guidelines.
            </p>
          </Section>

          <Section title="6. Safety & Trust">
            <p>
              Zynzi is built on a trust-first model. We implement verification features and community reporting to keep the platform safe. However, you are responsible for your own safety when meeting other users in person. Always meet in public places and exercise personal judgment.
            </p>
          </Section>

          <Section title="7. Termination">
            <p>
              We reserve the right to suspend or terminate your account at any time, with or without notice, if we believe you have violated these Terms. You may also delete your account at any time by contacting us.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or free of harmful components.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Zynzi shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including but not limited to personal injury, loss of data, or financial loss.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about these Terms of Use, please contact us at:{' '}
              <a
                href={`mailto:${WAITLIST_EMAIL}`}
                className="text-brand-sky hover:text-brand-navy font-medium transition-colors"
              >
                {WAITLIST_EMAIL}
              </a>
            </p>
          </Section>

        </div>
      </div>
    </main>
  )
}
