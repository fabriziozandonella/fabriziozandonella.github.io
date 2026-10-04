<!-- Google Analytics (caricato ma disabilitato di default) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  // Impostazione di default: TUTTI i consensi negati (GDPR compliant)
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
  });

  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>

<!-- CSS del Cookie Banner -->
<style>
  #cookie-banner {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    max-width: 500px;
    background-color: #1e293b;
    color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    z-index: 9999;
    display: none; /* Nascosto di default, gestito da JS */
  }
  #cookie-banner p {
    margin: 0 0 15px 0;
  }
  #cookie-banner a {
    color: #38bdf8;
    text-decoration: underline;
  }
  .cookie-buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
  .cookie-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    font-size: 13px;
  }
  .btn-accept {
    background-color: #22c55e;
    color: #ffffff;
  }
  .btn-deny {
    background-color: #475569;
    color: #ffffff;
  }
</style>

<!-- HTML Cookie Banner -->
<div id="cookie-banner">
  <p>
    Questo sito utilizza Google Analytics per analizzare il traffico in forma anonima. 
    Puoi scegliere se accettare o rifiutare i cookie di tracciamento. 
    Per saperne di più, consulta la nostra <a href="/privacy-policy.html">Privacy Policy</a>.
  </p>
  <div class="cookie-buttons">
    <button id="cookie-deny" class="cookie-btn btn-deny">Rifiuta</button>
    <button id="cookie-accept" class="cookie-btn btn-accept">Accetta</button>
  </div>
</div>

<!-- JavaScript per la gestione del consenso -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");
    const denyBtn = document.getElementById("cookie-deny");

    // Verifica se l'utente ha già espresso una preferenza
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
      // Mostra il banner se non c'è ancora una scelta salvata
      banner.style.display = "block";
    } else if (consent === "granted") {
      // Se aveva già accettato, abilita Analytics
      enableAnalytics();
    }

    // Click su ACCETTA
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookie_consent", "granted");
      enableAnalytics();
      banner.style.display = "none";
    });

    // Click su RIFIUTA
    denyBtn.addEventListener("click", function () {
      localStorage.setItem("cookie_consent", "denied");
      banner.style.display = "none";
    });

    function enableAnalytics() {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  });
</script>

