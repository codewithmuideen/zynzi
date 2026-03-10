import { WAITLIST_EMAIL, COPYRIGHT_YEAR } from '../constants'

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-roboto font-bold text-brand-text text-xl mb-3">{title}</h2>
    <div className="font-roboto font-light text-brand-body text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
)

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-cream pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5">

        {/* Header */}
        <div className="mb-12">
          <p className="font-roboto text-xs font-bold tracking-[0.2em] uppercase text-brand-sky mb-4">
            Legal
          </p>
          <h1 className="font-roboto font-black text-brand-text text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="font-roboto text-sm text-brand-muted">
            Last updated: March {COPYRIGHT_YEAR}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-brand-border p-8 md:p-12 shadow-brand-sm">

          <Section title="1. Introduction">
            <p>
              Welcome to Zynzi ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our platform.
            </p>
            <p>
              By using Zynzi, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our services.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Name, email address, and account credentials when you register</li>
              <li>Profile information such as age, interests, and location preferences</li>
              <li>Messages and communications you send through the platform</li>
              <li>Feedback, survey responses, and support requests</li>
            </ul>
            <p>We also collect certain information automatically when you use our services, such as device information, IP address, and usage data.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provide, maintain, and improve our services</li>
              <li>Match you with nearby events and other users</li>
              <li>Send you service updates, security alerts, and support messages</li>
              <li>Personalise your experience on the platform</li>
              <li>Monitor and analyse usage trends to improve the app</li>
              <li>Detect and prevent fraudulent or harmful activity</li>
            </ul>
          </Section>

          <Section title="4. Sharing of Information">
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Other users, only to the extent needed to facilitate meetups you join</li>
              <li>Service providers who assist us in operating the platform (e.g. hosting, analytics)</li>
              <li>Law enforcement or regulators where required by law</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your personal data for as long as your account is active or as needed to provide our services. You may request deletion of your account and associated data at any time by contacting us.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p>To exercise any of these rights, please contact us at the email below.</p>
          </Section>

          <Section title="7. Cookies">
            <p>
              We use cookies and similar tracking technologies to operate and improve our platform. You can control cookie settings through your browser. Some features may not function correctly if cookies are disabled.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorised access. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Continued use of Zynzi after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:{' '}
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
