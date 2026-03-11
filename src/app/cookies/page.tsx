'use client'

import { useLang } from '@/context/LanguageContext'

const content = {
  nl: {
    title: 'Cookiebeleid',
    updated: 'Laatst bijgewerkt: maart 2026',
    sections: [
      { heading: '1. Wat zijn cookies?', body: 'Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons de website correct te laten werken en uw ervaring te verbeteren.' },
      { heading: '2. Welke cookies gebruiken wij?', body: 'Wij gebruiken:\n• Functionele cookies: noodzakelijk voor het correct functioneren van de website (bijv. taalvoorkeur, cookietoestemming).\n• Analytische cookies: via Vercel Analytics om anoniem websiteverkeer te meten. Er worden geen persoonlijke gegevens gedeeld met derden.' },
      { heading: '3. Hoe lang blijven cookies actief?', body: 'Functionele cookies blijven actief tot u ze verwijdert of tot het einde van uw browsersessie. Analytische cookies worden maximaal 12 maanden bewaard.' },
      { heading: '4. Cookies beheren of weigeren', body: 'U kunt cookies weigeren via de cookiebanner op onze website, of via de instellingen van uw browser. Houd er rekening mee dat het uitschakelen van cookies de werking van de website kan beïnvloeden.' },
      { heading: '5. Meer informatie', body: 'Voor vragen over ons cookiebeleid kunt u contact opnemen via rudiaerden19@gmail.com. Voor meer informatie over uw rechten, raadpleeg ons privacybeleid.' },
    ],
  },
  fr: {
    title: 'Politique de cookies',
    updated: 'Dernière mise à jour: mars 2026',
    sections: [
      { heading: '1. Que sont les cookies?', body: 'Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site. Ils nous aident à faire fonctionner correctement le site et à améliorer votre expérience.' },
      { heading: '2. Quels cookies utilisons-nous?', body: 'Nous utilisons:\n• Cookies fonctionnels: nécessaires au bon fonctionnement du site (ex. préférence de langue, consentement aux cookies).\n• Cookies analytiques: via Vercel Analytics pour mesurer le trafic de façon anonyme. Aucune donnée personnelle n\'est partagée avec des tiers.' },
      { heading: '3. Combien de temps les cookies sont-ils actifs?', body: 'Les cookies fonctionnels restent actifs jusqu\'à leur suppression ou la fin de votre session. Les cookies analytiques sont conservés maximum 12 mois.' },
      { heading: '4. Gérer ou refuser les cookies', body: 'Vous pouvez refuser les cookies via la bannière de cookies ou via les paramètres de votre navigateur. Notez que la désactivation peut affecter le fonctionnement du site.' },
      { heading: '5. Plus d\'informations', body: 'Pour toute question, contactez-nous à rudiaerden19@gmail.com. Pour vos droits, consultez notre politique de confidentialité.' },
    ],
  },
  de: {
    title: 'Cookie-Richtlinie',
    updated: 'Zuletzt aktualisiert: März 2026',
    sections: [
      { heading: '1. Was sind Cookies?', body: 'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns, die Website korrekt zu betreiben und Ihre Erfahrung zu verbessern.' },
      { heading: '2. Welche Cookies verwenden wir?', body: 'Wir verwenden:\n• Funktionale Cookies: notwendig für die korrekte Funktion der Website (z.B. Spracheinstellung, Cookie-Zustimmung).\n• Analytische Cookies: über Vercel Analytics zur anonymen Messung des Website-Traffics. Es werden keine persönlichen Daten an Dritte weitergegeben.' },
      { heading: '3. Wie lange sind Cookies aktiv?', body: 'Funktionale Cookies bleiben aktiv, bis Sie sie löschen oder Ihre Browser-Sitzung beenden. Analytische Cookies werden maximal 12 Monate aufbewahrt.' },
      { heading: '4. Cookies verwalten oder ablehnen', body: 'Sie können Cookies über das Cookie-Banner oder die Einstellungen Ihres Browsers ablehnen. Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität beeinträchtigen kann.' },
      { heading: '5. Weitere Informationen', body: 'Bei Fragen kontaktieren Sie uns unter rudiaerden19@gmail.com. Für Ihre Rechte lesen Sie unsere Datenschutzerklärung.' },
    ],
  },
  en: {
    title: 'Cookie Policy',
    updated: 'Last updated: March 2026',
    sections: [
      { heading: '1. What are cookies?', body: 'Cookies are small text files stored on your device when you visit our website. They help us keep the website functioning correctly and improve your experience.' },
      { heading: '2. Which cookies do we use?', body: 'We use:\n• Functional cookies: necessary for the website to work correctly (e.g. language preference, cookie consent).\n• Analytical cookies: via Vercel Analytics to measure website traffic anonymously. No personal data is shared with third parties.' },
      { heading: '3. How long are cookies active?', body: 'Functional cookies remain active until you delete them or end your browser session. Analytical cookies are kept for a maximum of 12 months.' },
      { heading: '4. Managing or declining cookies', body: 'You can decline cookies via the cookie banner on our website, or via your browser settings. Please note that disabling cookies may affect the functionality of the website.' },
      { heading: '5. More information', body: 'For questions about our cookie policy, contact us at rudiaerden19@gmail.com. For more information about your rights, please consult our privacy policy.' },
    ],
  },
}

export default function CookiesPage() {
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
                <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
