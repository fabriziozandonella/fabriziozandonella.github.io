var klaroConfig = {
    // ID dell'elemento HTML in cui Klaro si inietterà (lascia così)
    elementID: 'klaro',

    // Se impostato su true, Klaro salverà i consensi anonimi sul server (a noi non serve)
    storageMethod: 'cookie',

    // Nome del cookie tecnico che salva le preferenze dell'utente
    cookieName: 'klaro-consent',

    // Durata del cookie di consenso in giorni
    cookieExpiresAfterDays: 365,

    // Mostra il banner non appena l'utente entra sul sito
    mustConsent: false,

    // Definisce i servizi che usi (nel tuo caso, Google Analytics)
    services: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purpose: 'analytics',
            description: 'Raccolta anonima di dati statistici sulle visite al sito.',
            cookies: [
                /^_ga/, // Espressione regolare per bloccare tutti i cookie che iniziano con _ga
                /^_gid/,
                /^_gat/
            ],
            required: false, // L'utente DEVE poterlo disattivare
            default: false,  // Di default è disattivato finché non cliccano "Accetta"
        }
    ],

    // Testi in Italiano per il Banner
    translations: {
        it: {
            consentModal: {
                title: 'Informazioni sui Cookie',
                description: 'Qui puoi vedere e scegliere quali servizi traccianti attivare su questo sito.',
            },
            consentNotice: {
                changeDescription: 'Ci sono state modifiche dall\'ultima visita, aggiorna le tue preferenze.',
                description: 'Utilizziamo Google Analytics per capire come migliorare il sito. Puoi scegliere se accettarlo o meno.',
                learnMore: 'Personalizza',
                acceptAll: 'Accetta Tutti',
                declineAll: 'Rifiuta Tutti',
            },
            purposes: {
                analytics: 'Statistiche e Monitoraggio',
            },
        },
    },
};