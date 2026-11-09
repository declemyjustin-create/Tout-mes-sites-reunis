const toolTitle = document.body.dataset.toolTitle;

document.title = `${toolTitle.charAt(0).toLocaleUpperCase("fr")}${toolTitle.slice(1)} — L’Atelier du geste`;
document.body.innerHTML = `
    <header class="topbar">
        <a class="brand" href="../../index.html#accueil" aria-label="L’Atelier du geste, accueil">
            <span class="brand-icon" aria-hidden="true">A<span>.</span></span>
            <span>L’ATELIER DU GESTE<small>APPRENDRE · COMPRENDRE · SE PROTÉGER</small></span>
        </a>
        <a class="back-link back-button" href="../../../index.html"><span aria-hidden="true">←</span> Parcourir les autres projets</a>
    </header>
    <main>
        <section class="page-recovery" id="page-recovery" aria-labelledby="page-recovery-title" role="status">
            <p class="lesson-eyebrow">FICHE OUTIL · ${document.body.dataset.toolNumber}</p>
            <h1 id="page-recovery-title">La fiche ne s’affiche pas</h1>
            <p id="page-recovery-message">Le parcours interactif n’a pas pu se charger. Réessaie ou retourne à la liste pour ouvrir une autre fiche.</p>
            <div class="page-recovery-actions">
                <button class="primary-button" id="page-recovery-retry" type="button">Réessayer <span aria-hidden="true">↻</span></button>
                <a class="text-button" href="../../index.html#outils">Voir toutes les fiches <span aria-hidden="true">→</span></a>
            </div>
        </section>
        <section class="explorer" id="explorer" aria-labelledby="explorer-title" hidden>
            <div class="explorer-top">
                <div>
                    <p class="eyebrow"><span class="eyebrow-dot"></span> TON PARCOURS · ${document.body.dataset.toolNumber}</p>
                    <h1 id="explorer-title">Explore <em id="tool-title">${toolTitle}</em></h1>
                    <p class="explorer-intro">Choisis une partie de l’illustration, puis sélectionne ce que tu veux apprendre.</p>
                </div>
            </div>
            <div class="explorer-layout">
                <section class="machine-card machine-figure-card" aria-labelledby="machine-image-title">
                    <div class="machine-card-top"><span id="machine-image-title">OUTIL À EXPLORER</span><button class="zoom-reset" type="button" data-reset-zoom="machine" hidden>Voir tout l’outil</button><span><span class="live-dot"></span> POINTS À EXPLORER</span></div>
                    <div class="machine-image" id="machine-image">
                        <div class="machine-art" id="machine-art">
                            <img id="machine-photo" src="" alt="">
                        </div>
                        <svg class="callout-lines" id="machine-callout-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"></svg>
                        <div id="machine-points"></div>
                    </div>
                    <div class="machine-card-bottom"><span><span class="legend-dot"></span> Sélectionne un point sur l’outil</span><span id="photo-credit">PHOTO FOURNIE</span></div>
                </section>
                <section class="learning-card" aria-live="polite">
                    <div class="selected-part"><span class="part-number" id="part-number">01</span><div><span class="part-kicker" id="part-kicker">PARTIE SÉLECTIONNÉE</span><h2 id="part-title">Le moteur</h2></div></div>
                    <p class="part-summary" id="part-summary"></p>
                    <div class="topic-tabs" role="group" aria-label="Choisir un parcours d’apprentissage sur l’outil">
                        <button class="topic-tab is-active" type="button" data-topic="pieces" aria-pressed="true"><span aria-hidden="true">◈</span> Pièces</button>
                        <button class="topic-tab" type="button" data-topic="fonctionnement" aria-pressed="false"><span aria-hidden="true">↗</span> Fonction</button>
                        <button class="topic-tab" type="button" data-topic="dangers" aria-pressed="false"><span aria-hidden="true">!</span> Dangers</button>
                    </div>
                    <div class="lesson-content">
                        <p class="lesson-eyebrow" id="lesson-eyebrow">NOM DES PIÈCES</p>
                        <h3 id="lesson-title"></h3>
                        <p id="lesson-text"></p>
                        <ul class="lesson-list" id="lesson-list"></ul>
                    </div>
                    <div class="safety-note"><span class="safety-icon" aria-hidden="true">!</span><p><strong>À retenir</strong><br>Ce guide complète la notice du fabricant, mais ne la remplace pas. Pour utiliser un outil, demande l’accompagnement d’une personne formée.</p></div>
                </section>
                <section class="machine-card epi-figure-card" id="epi-figure-card" aria-labelledby="epi-image-title">
                    <div class="machine-card-top"><span id="epi-image-title">ÉQUIPEMENTS DE PROTECTION</span><button class="zoom-reset" type="button" data-reset-zoom="epi" hidden>Voir tout</button><span><span class="live-dot"></span> POINTS À EXPLORER</span></div>
                    <div class="machine-image epi-machine-image" id="epi-machine-image">
                        <div class="machine-art" id="epi-machine-art">
                            <img id="epi-machine-photo" src="" alt="">
                        </div>
                        <svg class="callout-lines" id="epi-callout-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"></svg>
                        <div id="epi-machine-points"></div>
                    </div>
                    <div class="machine-card-bottom"><span><span class="legend-dot"></span> Sélectionne un point sur les EPI</span><span>ILLUSTRATION INDICATIVE</span></div>
                </section>
                <section class="learning-card epi-learning-card" id="epi-learning-card" aria-live="polite" aria-labelledby="epi-lesson-heading">
                    <div class="selected-part"><span class="part-number" id="epi-part-number">01</span><div><span class="part-kicker">PROTECTION SÉLECTIONNÉE</span><h2 id="epi-part-title">Protection des yeux</h2></div></div>
                    <p class="part-summary" id="epi-part-summary"></p>
                    <div class="lesson-content">
                        <p class="lesson-eyebrow" id="epi-lesson-eyebrow">ÉQUIPEMENT DE PROTECTION</p>
                        <h3 id="epi-lesson-heading"></h3>
                        <p id="epi-lesson-text"></p>
                        <ul class="lesson-list" id="epi-lesson-list"></ul>
                    </div>
                </section>
            </div>
            <section class="usage-panel" aria-labelledby="usage-title">
                <p class="lesson-eyebrow">GUIDE PRATIQUE</p>
                <h3 id="usage-title">Quand l’utiliser et comment ?</h3>
                <p class="usage-intro" id="usage-intro"></p>
                <div class="usage-details" id="usage-details"></div>
                <div class="usage-diagrams" id="usage-diagrams" hidden aria-label="Comparaison des têtes de débroussailleuse">
                    <figure>
                        <svg viewBox="0 0 180 100" role="img" aria-labelledby="trimmer-line-title">
                            <title id="trimmer-line-title">Tête à fil coupant de l’herbe tendre</title>
                            <path d="M12 82h156M24 82l4-22 5 22m9 0 5-33 5 33m13 0 2-23 5 23m78 0 4-31 5 31m10 0 2-22 5 22" fill="none" stroke="#718c73" stroke-width="4" stroke-linecap="round"/>
                            <path d="M68 29l13 42m31-42-13 42" stroke="#315d49" stroke-width="4" stroke-linecap="round"/>
                            <rect x="76" y="58" width="28" height="16" rx="6" fill="#e27a4e" stroke="#35443b" stroke-width="3"/>
                            <path d="M80 70l-9 10m21-7v12m10-15 9 10" fill="none" stroke="#315d49" stroke-width="2"/>
                        </svg>
                        <figcaption><strong>Fil</strong> · herbe tendre, bordures et finitions</figcaption>
                    </figure>
                    <figure>
                        <svg viewBox="0 0 180 100" role="img" aria-labelledby="trimmer-blade-title">
                            <title id="trimmer-blade-title">Lame adaptée aux végétaux plus denses si le fabricant l’autorise</title>
                            <path d="M12 82h156M28 82l8-47 8 47m12 0 7-35 7 35m54 0 8-46 8 46m10 0 7-34 7 34" fill="none" stroke="#718c73" stroke-width="5" stroke-linecap="round"/>
                            <path d="M68 29l13 42m31-42-13 42" stroke="#315d49" stroke-width="4" stroke-linecap="round"/>
                            <rect x="76" y="58" width="28" height="16" rx="6" fill="#e27a4e" stroke="#35443b" stroke-width="3"/>
                            <circle cx="90" cy="66" r="20" fill="none" stroke="#35443b" stroke-width="4"/>
                            <path d="M90 45v42m-21-21h42" stroke="#35443b" stroke-width="3"/>
                        </svg>
                        <figcaption><strong>Lame compatible</strong> · végétation plus dense, si la notice l’autorise</figcaption>
                    </figure>
                </div>
            </section>
            <section class="measure-panel" aria-labelledby="measure-title">
                <p class="lesson-eyebrow">REPÈRES À MESURER</p>
                <h3 id="measure-title">Vérifier les dimensions et capacités</h3>
                <p class="usage-intro" id="measure-intro"></p>
                <ul class="measure-list" id="measure-list"></ul>
            </section>
            <section class="maintenance-panel" aria-labelledby="maintenance-title">
                <p class="lesson-eyebrow">ENTRETIEN ET MAINTENANCE</p>
                <h3 id="maintenance-title">Garder l’outil en bon état</h3>
                <p class="usage-intro" id="maintenance-intro"></p>
                <div class="maintenance-grid">
                    <section class="usage-detail"><h4>Après chaque utilisation</h4><ul id="maintenance-after"></ul></section>
                    <section class="usage-detail"><h4>Contrôles périodiques</h4><ul id="maintenance-periodic"></ul></section>
                    <section class="usage-detail"><h4>Atelier et réparations</h4><ul id="maintenance-service"></ul></section>
                </div>
                <p class="maintenance-note">Note les heures de service et les pièces remplacées. Les périodicités, réglages, lubrifiants et tolérances sont ceux de la notice du modèle. Toute intervention sur un organe de sécurité est réservée à une personne qualifiée.</p>
            </section>
        </section>
        <section class="tool-profile-page" id="tool-profile-page" aria-labelledby="tool-page-title" hidden>
            <a class="tool-profile-backlink" href="../../index.html#outils">Retour aux outils <span aria-hidden="true">←</span></a>
            <p class="eyebrow"><span class="eyebrow-dot"></span> FICHE OUTIL · ${document.body.dataset.toolNumber}</p>
            <h1 id="tool-page-title">${toolTitle}</h1>
            <p class="tool-profile-summary" id="tool-profile-summary"></p>
            <div class="tool-profile-grid">
                <section class="machine-card tool-profile-figure" aria-labelledby="tool-profile-machine-image-title">
                    <div class="machine-card-top"><span id="tool-profile-machine-image-title">IMAGE DE L’OUTIL</span><span id="tool-profile-tool-image-status">IMAGE À FOURNIR</span></div>
                    <img class="tool-profile-photo" id="tool-profile-tool-image" hidden>
                    <div class="tool-profile-image-placeholder" id="tool-profile-tool-image-placeholder" role="img" aria-label="Emplacement réservé à l’image de l’outil"></div>
                    <div class="machine-card-bottom" id="tool-profile-tool-image-caption">Illustration à ajouter</div>
                </section>
                <section class="learning-card tool-profile-section">
                    <p class="lesson-eyebrow">COMPRENDRE L’OUTIL</p>
                    <h2>À quoi sert-il ?</h2>
                    <p id="tool-profile-purpose"></p>
                    <h3>Comment fonctionne-t-il ?</h3>
                    <p id="tool-profile-operation"></p>
                    <h3>Éléments à reconnaître</h3>
                    <ul id="tool-profile-parts"></ul>
                    <h3>Risques et précautions</h3>
                    <ul id="tool-profile-precautions"></ul>
                </section>
                <section class="machine-card tool-profile-figure" aria-labelledby="tool-profile-epi-image-title">
                    <div class="machine-card-top"><span id="tool-profile-epi-image-title">IMAGE DES EPI</span><span id="tool-profile-epi-image-status">REPÈRES À AJOUTER</span></div>
                    <img class="tool-profile-photo" id="tool-profile-epi-image" hidden>
                    <div class="tool-profile-image-placeholder tool-profile-epi-placeholder" role="img" aria-label="Emplacement réservé à l’illustration des équipements de protection"></div>
                    <div class="machine-card-bottom" id="tool-profile-epi-image-caption">Illustration des protections à ajouter</div>
                </section>
                <section class="learning-card tool-profile-section">
                    <p class="lesson-eyebrow">ÉQUIPEMENTS DE PROTECTION</p>
                    <h2>Quelles protections prévoir ?</h2>
                    <p id="tool-profile-epi-intro"></p>
                    <ul id="tool-profile-epi"></ul>
                </section>
            </div>
            <section class="usage-panel" aria-labelledby="tool-profile-usage-title">
                <p class="lesson-eyebrow">GUIDE PRATIQUE</p>
                <h2 id="tool-profile-usage-title">Quand l’utiliser et comment ?</h2>
                <p class="usage-intro" id="tool-profile-usage-intro"></p>
                <div class="tool-profile-usage-grid">
                    <section class="usage-detail">
                        <h3>Avant de commencer</h3>
                        <ul id="tool-profile-before"></ul>
                    </section>
                    <section class="usage-detail">
                        <h3>Pendant et après</h3>
                        <ul id="tool-profile-during"></ul>
                    </section>
                    <section class="usage-detail">
                        <h3>À ne pas faire</h3>
                        <ul id="tool-profile-avoid"></ul>
                    </section>
                </div>
            </section>
            <section class="measure-panel" aria-labelledby="tool-profile-measure-title">
                <p class="lesson-eyebrow">REPÈRES À MESURER</p>
                <h2 id="tool-profile-measure-title">Vérifier les dimensions et capacités</h2>
                <p class="usage-intro" id="tool-profile-measure-intro"></p>
                <ul class="measure-list" id="tool-profile-measure-list"></ul>
            </section>
            <section class="maintenance-panel" aria-labelledby="tool-profile-maintenance-title">
                <p class="lesson-eyebrow">ENTRETIEN ET MAINTENANCE</p>
                <h2 id="tool-profile-maintenance-title">Garder l’outil en bon état</h2>
                <p class="usage-intro" id="tool-profile-maintenance-intro"></p>
                <div class="maintenance-grid">
                    <section class="usage-detail"><h3>Après chaque utilisation</h3><ul id="tool-profile-maintenance-after"></ul></section>
                    <section class="usage-detail"><h3>Contrôles périodiques</h3><ul id="tool-profile-maintenance-periodic"></ul></section>
                    <section class="usage-detail"><h3>Atelier et réparations</h3><ul id="tool-profile-maintenance-service"></ul></section>
                </div>
            </section>
            <p class="tool-profile-note"><strong>Repères professionnels :</strong> note les heures de service, les dates de contrôle et les pièces remplacées. Les périodicités, jeux, couples de serrage, lubrifiants et tolérances sont ceux de la notice du modèle, jamais des valeurs génériques. Toute intervention sur un organe de sécurité ou sous pression est réservée à une personne qualifiée.</p>
        </section>
    </main>
    <footer class="footer"><a class="footer-brand" href="../../index.html#accueil">L’Atelier du geste<span>.</span></a><p>Créé par Justin Declemy · Comprendre l’outil, c’est déjà prendre soin de soi.</p><p class="bug-report">Un bug à signaler ? <a href="mailto:peurdeypro@gmail.com">Écris-moi par e-mail</a> ou viens m’en parler en personne (IRL).</p><a href="../../index.html#outils">Tous les outils ↑</a></footer>
`;

const recoveryPanel = document.querySelector("#page-recovery");
const recoveryMessage = document.querySelector("#page-recovery-message");

document.querySelector("#page-recovery-retry").addEventListener("click", () => {
    window.location.reload();
});

function showPageRecovery(message) {
    recoveryPanel.hidden = false;
    recoveryMessage.textContent = message;
}

window.addEventListener("error", (event) => {
    if (event.target === window || event.target instanceof HTMLScriptElement) {
        showPageRecovery("Une erreur a empêché le chargement de cette fiche. Réessaie ou retourne à la liste des outils.");
    }
}, true);

window.addEventListener("unhandledrejection", () => {
    showPageRecovery("Une erreur a interrompu le chargement de cette fiche. Réessaie ou retourne à la liste des outils.");
});
