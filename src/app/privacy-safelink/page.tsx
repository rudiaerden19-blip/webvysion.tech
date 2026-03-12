export const metadata = {
  title: 'Privacy Policy — SafeLink',
  description: 'Privacy Policy for the SafeLink app, developed by Vysion.',
}

export default function SafeLinkPrivacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy — SafeLink</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: March 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Who are we?</h2>
        <p className="leading-relaxed">SafeLink is a free help app developed by Vysion.<br /><br />
          Company name: Vysion<br />
          Address: Siberiëstraat 24, 3900 Pelt (Limburg), Belgium<br />
          VAT number: BE 1003.226.953<br />
          Phone: +32 492 12 93 83<br />
          Email: info@vysion.com<br />
          Website: www.vysion.com<br /><br />
          The app is intended for anyone who finds themselves in an unsafe or difficult situation and needs quick access to help or information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. What data do we process?</h2>
        <p className="leading-relaxed">
          <strong>Data you enter yourself:</strong><br />
          The name and phone number of your trusted contact are stored locally on your device only. We have no access to this.<br /><br />
          <strong>Location data:</strong><br />
          The app only requests access to your location when you activate the Emergency notification in the settings. Location is not permanently tracked.<br /><br />
          <strong>Forum messages:</strong><br />
          Messages on the forum are posted anonymously. Messages are stored on the servers of Supabase (European Union). No personal data is linked to forum messages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. What do we use your data for?</h2>
        <p className="leading-relaxed">
          • Location: only to send a WhatsApp message to your trusted contact if you activate this yourself.<br />
          • Trusted contact: only for calling or sending an emergency alert.<br />
          • We never use your data for marketing, analysis or sales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Is data shared with third parties?</h2>
        <p className="leading-relaxed">
          We do not share any personal data with third parties.<br /><br />
          • <strong>WhatsApp:</strong> only when you activate an Emergency notification yourself, your location is shared with your trusted contact via WhatsApp.<br />
          • <strong>Supabase:</strong> anonymous forum messages are stored at Supabase (EU servers). No personal data is transferred. Supabase complies with GDPR.<br /><br />
          Appropriate agreements have been made with all processors in accordance with GDPR.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. How long do we store data?</h2>
        <p className="leading-relaxed">
          All data is stored locally on your device only. If you delete the app, all data is automatically deleted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Your rights</h2>
        <p className="leading-relaxed">
          • You have the right to view, modify or delete your data.<br />
          • Delete data by clearing the app settings or deleting the app.<br />
          • Questions? Send an email to info@vysion.com.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Security</h2>
        <p className="leading-relaxed">
          We take the protection of your data seriously. Data is stored locally and no passwords or sensitive data are sent to our servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Changes</h2>
        <p className="leading-relaxed">
          We may update this privacy policy. The most recent version is always available in the app and on this page.
        </p>
      </section>

      <p className="text-sm text-gray-400 mt-12">Vysion © 2026 — info@vysion.com</p>
    </main>
  )
}
