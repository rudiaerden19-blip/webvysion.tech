'use client'

import { useLang } from '@/context/LanguageContext'

const content = {
  nl: {
    title: 'Privacybeleid',
    updated: 'Laatst bijgewerkt: maart 2026',
    sections: [
      { heading: '1. Wie zijn wij?', body: 'WebVysion (Vysion IT, Siberièstraat 24, 3900 Pelt) is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid. Contact: rudiaerden19@gmail.com' },
      { heading: '2. Welke gegevens verzamelen wij?', body: 'Via het contactformulier op onze website verzamelen wij uw naam, e-mailadres en het bericht dat u ons stuurt. Wij verzamelen geen andere persoonlijke gegevens zonder uw uitdrukkelijke toestemming.' },
      { heading: '3. Waarvoor gebruiken wij uw gegevens?', body: 'Uw gegevens worden uitsluitend gebruikt om uw vraag of projectaanvraag te beantwoorden. Wij gebruiken uw gegevens niet voor marketing zonder uw toestemming en verkopen uw gegevens nooit aan derden.' },
      { heading: '4. Hoe lang bewaren wij uw gegevens?', body: 'Uw persoonsgegevens worden bewaard zolang nodig voor het doel waarvoor ze zijn verzameld, of zolang wettelijk vereist. Contactaanvragen worden maximaal 2 jaar bewaard.' },
      { heading: '5. Uw rechten (GDPR)', body: 'U heeft het recht op inzage, correctie, verwijdering, beperking van verwerking en overdraagbaarheid van uw gegevens. U kunt uw toestemming te allen tijde intrekken. Stuur uw verzoek naar rudiaerden19@gmail.com.' },
      { heading: '6. Beveiliging', body: 'Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies of diefstal.' },
      { heading: '7. Cookies', body: 'Wij gebruiken cookies op onze website. Raadpleeg ons cookiebeleid voor meer informatie.' },
      { heading: '8. Klachten', body: 'Heeft u een klacht over de verwerking van uw persoonsgegevens? U kunt contact opnemen met de Gegevensbeschermingsautoriteit (GBA): www.gegevensbeschermingsautoriteit.be' },
    ],
  },
  fr: {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour: mars 2026',
    sections: [
      { heading: '1. Qui sommes-nous?', body: 'WebVysion (Vysion IT, Siberièstraat 24, 3900 Pelt) est responsable du traitement des données personnelles décrit dans cette politique. Contact: rudiaerden19@gmail.com' },
      { heading: '2. Quelles données collectons-nous?', body: 'Via le formulaire de contact, nous collectons votre nom, adresse e-mail et le message que vous nous envoyez. Nous ne collectons pas d\'autres données personnelles sans votre consentement explicite.' },
      { heading: '3. À quoi servent vos données?', body: 'Vos données sont utilisées uniquement pour répondre à votre question ou demande de projet. Nous ne les utilisons pas à des fins marketing sans votre consentement et ne les vendons jamais à des tiers.' },
      { heading: '4. Combien de temps conservons-nous vos données?', body: 'Vos données personnelles sont conservées aussi longtemps que nécessaire pour la finalité pour laquelle elles ont été collectées. Les demandes de contact sont conservées maximum 2 ans.' },
      { heading: '5. Vos droits (RGPD)', body: 'Vous avez le droit d\'accès, de rectification, d\'effacement, de limitation du traitement et de portabilité de vos données. Envoyez votre demande à rudiaerden19@gmail.com.' },
      { heading: '6. Sécurité', body: 'Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou vol.' },
      { heading: '7. Cookies', body: 'Nous utilisons des cookies sur notre site. Consultez notre politique de cookies pour plus d\'informations.' },
      { heading: '8. Plaintes', body: 'Pour toute plainte concernant le traitement de vos données, vous pouvez contacter l\'Autorité de protection des données (APD): www.autoriteprotectiondonnees.be' },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: März 2026',
    sections: [
      { heading: '1. Wer sind wir?', body: 'WebVysion (Vysion IT, Siberièstraat 24, 3900 Pelt) ist verantwortlich für die Verarbeitung personenbezogener Daten gemäß dieser Datenschutzerklärung. Kontakt: rudiaerden19@gmail.com' },
      { heading: '2. Welche Daten erfassen wir?', body: 'Über das Kontaktformular erfassen wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht. Wir erfassen keine anderen personenbezogenen Daten ohne Ihre ausdrückliche Zustimmung.' },
      { heading: '3. Wofür verwenden wir Ihre Daten?', body: 'Ihre Daten werden ausschließlich verwendet, um Ihre Anfrage zu beantworten. Wir verwenden sie nicht für Marketingzwecke ohne Ihre Zustimmung und verkaufen sie niemals an Dritte.' },
      { heading: '4. Wie lange speichern wir Ihre Daten?', body: 'Ihre personenbezogenen Daten werden so lange aufbewahrt, wie es für den Zweck erforderlich ist. Kontaktanfragen werden maximal 2 Jahre aufbewahrt.' },
      { heading: '5. Ihre Rechte (DSGVO)', body: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Senden Sie Ihre Anfrage an rudiaerden19@gmail.com.' },
      { heading: '6. Sicherheit', body: 'Wir ergreifen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer personenbezogenen Daten.' },
      { heading: '7. Cookies', body: 'Wir verwenden Cookies auf unserer Website. Weitere Informationen finden Sie in unserer Cookie-Richtlinie.' },
      { heading: '8. Beschwerden', body: 'Bei Beschwerden über die Verarbeitung Ihrer Daten können Sie sich an die Datenschutzbehörde wenden: www.dataprotectionauthority.be' },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: March 2026',
    sections: [
      { heading: '1. Who are we?', body: 'WebVysion (Vysion IT, Siberièstraat 24, 3900 Pelt) is responsible for the processing of personal data as described in this privacy policy. Contact: rudiaerden19@gmail.com' },
      { heading: '2. What data do we collect?', body: 'Through the contact form, we collect your name, email address and the message you send us. We do not collect other personal data without your explicit consent.' },
      { heading: '3. How do we use your data?', body: 'Your data is used solely to answer your question or project request. We do not use it for marketing without your consent and never sell it to third parties.' },
      { heading: '4. How long do we keep your data?', body: 'Your personal data is kept as long as necessary for the purpose for which it was collected. Contact requests are kept for a maximum of 2 years.' },
      { heading: '5. Your rights (GDPR)', body: 'You have the right to access, correction, deletion, restriction of processing and data portability. Send your request to rudiaerden19@gmail.com.' },
      { heading: '6. Security', body: 'We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or theft.' },
      { heading: '7. Cookies', body: 'We use cookies on our website. Please consult our cookie policy for more information.' },
      { heading: '8. Complaints', body: 'If you have a complaint about the processing of your personal data, you can contact the Data Protection Authority: www.dataprotectionauthority.be' },
    ],
  },
}

export default function PrivacyPage() {
  const { lang } = useLang()
  const tr = content[lang as keyof typeof content] ?? content.nl

  return (
    <div className="min-h-screen pt-24 pb-20 px-6" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.40)] p-10">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3">WebVysion</p>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{tr.title}</h1>
          <p className="text-xs text-slate-400 mb-10">{tr.updated}</p>
          <div className="space-y-8">
            {tr.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-base font-bold text-slate-900 mb-2">{s.heading}</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
