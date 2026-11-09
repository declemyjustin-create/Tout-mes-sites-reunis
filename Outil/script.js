const brandLinks = document.querySelectorAll(".brand, .footer-brand");

for (const brandLink of brandLinks) {
    brandLink.addEventListener("click", (event) => {
        const targetId = brandLink.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

const partContent = {
    moteur: {
        number: "01",
        title: "Le moteur",
        summary: "C’est la source d’énergie de la débroussailleuse.",
        pieces: {
            eyebrow: "NOM DES PIÈCES",
            title: "Ce qu’on trouve autour du moteur",
            text: "Le moteur entraîne l’outil de coupe. Les modèles thermiques et électriques n’ont pas les mêmes commandes ni le même entretien.",
            list: ["Bloc moteur", "Poignée de commande", "Interrupteur d’arrêt", "Réservoir, sur un modèle thermique"]
        },
        fonctionnement: {
            eyebrow: "FONCTIONNEMENT",
            title: "Il entraîne la coupe",
            text: "L’énergie produite par le moteur est transmise le long de l’outil jusqu’à la tête de coupe. Les commandes varient selon le modèle.",
            list: ["Identifier le type de motorisation", "Repérer l’arrêt d’urgence", "Lire la notice du modèle"]
        },
        dangers: {
            eyebrow: "DANGERS À CONNAÎTRE",
            title: "Chaleur, bruit et fumées",
            text: "Un moteur peut être très chaud et bruyant. Un modèle thermique émet aussi des gaz d’échappement.",
            list: ["Ne pas toucher les parties chaudes", "Travailler à l’extérieur", "Laisser refroidir avant le rangement", "Garder carburant et flamme éloignés"]
        },
        epi: {
            eyebrow: "ÉQUIPEMENTS DE PROTECTION",
            title: "Se protéger avant de commencer",
            text: "Choisis des équipements adaptés à la machine, au terrain et aux consignes de la notice.",
            list: ["Lunettes ou visière de protection", "Protection auditive", "Gants adaptés", "Chaussures de sécurité antidérapantes", "Pantalon résistant"]
        }
    },
    guidon: {
        number: "02",
        title: "Le guidon",
        summary: "Il permet de tenir et de guider l’outil à deux mains.",
        pieces: {
            eyebrow: "NOM DES PIÈCES",
            title: "Les poignées de guidage",
            text: "Le guidon comporte deux poignées. Sur certains modèles, les commandes se trouvent sur la poignée droite.",
            list: ["Poignée gauche", "Poignée de commande", "Gâchette, selon le modèle", "Fixation réglable"]
        },
        fonctionnement: {
            eyebrow: "FONCTIONNEMENT",
            title: "Garder le contrôle",
            text: "Le guidon aide à orienter la débroussailleuse et à répartir l’effort. Le réglage se fait selon la notice et le harnais.",
            list: ["Tenir les deux poignées", "Vérifier le serrage", "Ne pas bloquer une commande"]
        },
        dangers: {
            eyebrow: "DANGERS À CONNAÎTRE",
            title: "Perte de maîtrise",
            text: "Un guidon mal réglé ou une prise à une seule main peut rendre l’outil difficile à contrôler.",
            list: ["Vérifier le guidon avant usage", "Ne pas utiliser si une poignée bouge", "Arrêter si l’on perd l’équilibre"]
        },
        epi: {
            eyebrow: "ÉQUIPEMENTS DE PROTECTION",
            title: "Une prise sûre et protégée",
            text: "Des gants adaptés améliorent la prise et protègent les mains. Ils ne remplacent jamais une bonne maîtrise de l’outil.",
            list: ["Gants adaptés à la tâche", "Chaussures de sécurité", "Pantalon résistant", "Protection des yeux et de l’ouïe"]
        }
    },
    tube: {
        number: "03",
        title: "Le tube",
        summary: "Il relie le moteur à la tête de coupe.",
        pieces: {
            eyebrow: "NOM DES PIÈCES",
            title: "Le tube de transmission",
            text: "À l’intérieur du tube, un mécanisme transmet le mouvement du moteur à la tête de coupe.",
            list: ["Tube de transmission", "Arbre d’entraînement interne", "Collier de fixation", "Point d’attache du harnais"]
        },
        fonctionnement: {
            eyebrow: "FONCTIONNEMENT",
            title: "Transmettre le mouvement",
            text: "Le tube maintient l’ensemble et transmet la rotation vers l’accessoire de coupe.",
            list: ["Suivre la notice d’entretien", "Vérifier l’état du tube", "Garder l’outil bien équilibré"]
        },
        dangers: {
            eyebrow: "DANGERS À CONNAÎTRE",
            title: "Chocs et vibrations",
            text: "Un tube abîmé ou un accessoire déséquilibré peut provoquer des vibrations anormales et une perte de contrôle.",
            list: ["Ne pas utiliser un tube endommagé", "Arrêter si l’outil vibre anormalement", "Éviter le contact avec les lignes électriques"]
        },
        epi: {
            eyebrow: "ÉQUIPEMENTS DE PROTECTION",
            title: "Protéger tout le corps",
            text: "L’outil se porte et se guide selon les consignes du fabricant ; les protections doivent correspondre à la tâche.",
            list: ["Chaussures de sécurité", "Pantalon résistant", "Gants adaptés", "Lunettes ou visière", "Protection auditive"]
        }
    },
    tete: {
        number: "04",
        title: "La tête de coupe",
        summary: "C’est la partie qui coupe l’herbe ou la végétation.",
        pieces: {
            eyebrow: "NOM DES PIÈCES",
            title: "L’accessoire de coupe",
            text: "Selon le modèle, la tête accueille du fil ou un autre accessoire explicitement prévu par le fabricant.",
            list: ["Tête à fil", "Fil de coupe", "Carter de protection", "Renvoi d’angle, selon le modèle"]
        },
        fonctionnement: {
            eyebrow: "FONCTIONNEMENT",
            title: "La coupe se fait en rotation",
            text: "L’accessoire tourne pour couper la végétation. La tête et ses accessoires doivent être compatibles avec la machine.",
            list: ["Utiliser uniquement l’accessoire autorisé", "Vérifier le montage dans la notice", "Ne jamais intervenir quand la tête tourne"]
        },
        dangers: {
            eyebrow: "DANGERS À CONNAÎTRE",
            title: "Projections et coupures",
            text: "La tête peut projeter des pierres ou des débris. L’accessoire en rotation peut causer des blessures graves.",
            list: ["Garder les personnes à distance", "Ne jamais retirer le carter", "Arrêter le moteur avant toute intervention", "Inspecter la zone de travail"]
        },
        epi: {
            eyebrow: "ÉQUIPEMENTS DE PROTECTION",
            title: "Visage, oreilles, jambes et pieds",
            text: "La coupe peut projeter des débris dans plusieurs directions. Consulte les protections exigées par la notice.",
            list: ["Visière ou lunettes de protection", "Protection auditive", "Pantalon résistant", "Chaussures de sécurité", "Gants adaptés"]
        }
    }
};

const epiFigure = {
    image: "debroussailleuse-epi.svg",
    alt: "Mannequin avec différents équipements de protection ; illustration indicative, les équipements nécessaires dépendent de l’outil",
    hotspots: {
        tete: { x: "78%", y: "14.2%" },
        yeux: { x: "25%", y: "27%" },
        gants: { x: "25%", y: "54%" },
        pantalon: { x: "78%", y: "71.1%" },
        chaussures: { x: "25%", y: "91%" }
    },
    targets: {
        tete: { x: "54%", y: "12.9%" },
        yeux: { x: "45.9%", y: "24.6%" },
        gants: { x: "38.75%", y: "55.7%" },
        pantalon: { x: "54.25%", y: "71.1%" },
        chaussures: { x: "46%", y: "91%" }
    }
};

const toolProfiles = {
    "nettoyeur-haute-pression": {
        summary: "Le nettoyeur haute pression projette de l’eau sous pression pour décoller les salissures sur des surfaces compatibles.",
        purpose: "Il peut servir au nettoyage de certains sols extérieurs, murs, équipements ou véhicules. Le résultat dépend de la pression, du débit, de la buse et de la résistance du support.",
        operation: "Un moteur entraîne une pompe qui met l’eau en pression. L’eau passe ensuite dans un flexible et une lance ; la buse forme le jet. Les accessoires et les réglages disponibles dépendent du modèle.",
        parts: ["Moteur et pompe : alimentent et mettent l’eau en pression.", "Flexible, poignée et lance : conduisent l’eau jusqu’au point de nettoyage.", "Buse ou accessoire : modifie la forme du jet selon les possibilités du modèle.", "Arrivée d’eau et raccords : alimentent la machine."],
        precautions: ["Ne dirige jamais le jet vers une personne ou un animal : il peut provoquer une blessure grave.", "Vérifie que le support et l’accessoire supportent le nettoyage prévu.", "Respecte les consignes électriques, d’alimentation en eau et de pression de la notice.", "Arrête et débranche la machine avant un changement d’accessoire ou un contrôle."]
    },
    "aspirateur-eau-et-poussiere": {
        image: "aspirateur-eau-et-poussiere.png",
        imageAlt: "Aspirateur eau et poussière orange avec cuve métallique, flexible et tube d’aspiration.",
        summary: "L’aspirateur eau et poussière collecte des saletés sèches ou des liquides lorsque l’appareil est conçu pour cet usage.",
        purpose: "Il est utilisé pour le nettoyage d’un atelier, d’un chantier ou d’un local. Les matières aspirables dépendent du filtre, de la cuve et des limites indiquées par le fabricant.",
        operation: "Le moteur crée une aspiration qui entraîne les débris dans un flexible jusqu’à une cuve. Un filtre retient les poussières ; pour les liquides, la configuration doit être adaptée au modèle.",
        parts: ["Bloc moteur : crée le flux d’air d’aspiration.", "Cuve : recueille les poussières ou les liquides autorisés.", "Flexible, tube et embouts : acheminent les saletés.", "Filtre et flotteur éventuel : participent à la filtration et, selon l’appareil, à la protection contre le remplissage excessif."],
        precautions: ["Vérifie le mode et le filtre requis avant de passer de poussières à liquides.", "N’aspire pas de cendres chaudes, de liquides inflammables ni de poussières dangereuses sauf autorisation explicite du fabricant.", "Débranche l’appareil avant de vider la cuve ou de toucher au filtre.", "Surveille l’état du câble, de la cuve et des accessoires."]
    },
    "broyeur-de-vegetaux": {
        image: "broyeur-de-vegetaux.png",
        imageAlt: "Broyeur de végétaux orange avec goulotte d’alimentation et mécanisme de coupe.",
        summary: "Le broyeur de végétaux réduit certains déchets de taille en fragments, dans les limites prévues pour la machine.",
        purpose: "Il peut aider à traiter des branches et des résidus végétaux issus de l’entretien du jardin. Le diamètre, le type de bois et l’humidité acceptés varient selon le système de coupe et la notice.",
        operation: "Les végétaux sont introduits dans une goulotte et rencontrent un mécanisme de coupe ou de broyage entraîné par un moteur. Les fragments sont évacués vers une zone de sortie ou un bac selon le modèle.",
        parts: ["Moteur et mécanisme de coupe : assurent le broyage.", "Goulotte d’alimentation : guide les végétaux vers le mécanisme.", "Sortie d’éjection ou bac : reçoit les fragments.", "Commandes et dispositifs de sécurité : permettent de contrôler et d’arrêter la machine."],
        precautions: ["Respecte les essences, dimensions et matières autorisées par la notice.", "Garde les mains et les vêtements éloignés de la goulotte et de l’éjection.", "N’introduis pas les végétaux à la main au-delà des indications du fabricant.", "Avant de dégager un bourrage, arrête la machine et attends l’immobilisation complète du mécanisme."]
    },
    "_souffleur-main-guide": {
        title: "le souffleur à main.",
        name: "Le souffleur à main",
        image: "souffleur-main.png",
        alt: "Souffleur-aspirateur à main orange et blanc avec long tube noir, poignée de commande et sac de collecte noir",
        hotspots: {
            moteur: { x: "69%", y: "46%" },
            tube: { x: "24%", y: "72%" },
            poignee: { x: "70%", y: "16%" },
            commande: { x: "64%", y: "20%" }
        },
        callouts: {
            moteur: { x: "88%", y: "28%" },
            tube: { x: "8%", y: "86%" },
            poignee: { x: "82%", y: "10%" },
            commande: { x: "54%", y: "10%" }
        },
        epiView: {
            ...epiFigure,
            image: "souffleur-epi.svg",
            alt: "Tenue pour souffleur à main avec lunettes de protection, protection auditive, gants, pantalon long et chaussures fermées",
            parts: {
                tete: {
                    number: "01",
                    title: "Protection auditive",
                    summary: "Le bruit du moteur et du ventilateur varie selon le modèle et la vitesse utilisée.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger l’ouïe",
                        text: "Porte une protection auditive adaptée au niveau sonore indiqué dans la notice du modèle.",
                        list: ["Choisir une protection adaptée", "Vérifier son ajustement", "Suivre la notice du fabricant"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Lunettes de protection",
                    summary: "Le souffle peut projeter poussière, débris et feuilles légères.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les yeux",
                        text: "Porte une protection oculaire adaptée au travail et aux consignes de sécurité du fabricant.",
                        list: ["Choisir des lunettes bien ajustées", "Les garder en place pendant le soufflage", "Éloigner les personnes de la zone"]
                    }
                },
                gants: {
                    number: "03",
                    title: "Gants adaptés",
                    summary: "Des gants bien ajustés améliorent la prise et limitent les irritations sur la poignée.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Garder une prise sûre",
                        text: "Choisis des gants adaptés à la durée du travail et aux commandes de l’appareil.",
                        list: ["Vérifier qu’ils ne gênent pas la commande", "Les remplacer s’ils sont abîmés", "Arrêter avant toute intervention sur la machine"]
                    }
                },
                pantalon: {
                    number: "04",
                    title: "Vêtements couvrants",
                    summary: "Une tenue ajustée protège du vent, de la poussière et des débris légers.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Adapter la tenue au terrain",
                        text: "Porte des vêtements couvrants et ajustés, sans éléments flottants ni cordons susceptibles de se coincer.",
                        list: ["Éviter les vêtements flottants", "Choisir une tenue adaptée à la météo", "Contrôler l’état avant le travail"]
                    }
                },
                chaussures: {
                    number: "05",
                    title: "Chaussures fermées",
                    summary: "Des chaussures robustes et antidérapantes aident à garder l’équilibre sur un sol extérieur.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Garder les pieds protégés",
                        text: "Choisis des chaussures fermées adaptées au terrain et à la durée du travail.",
                        list: ["Vérifier l’adhérence des semelles", "Lacer correctement", "Éviter les sols instables"]
                    }
                }
            }
        },
        usage: {
            title: "Souffler feuilles et débris légers",
            intro: "Le souffleur à main sert à regrouper des feuilles, de la paille ou des débris légers sur un terrain extérieur. Il convient à la collecte, pas au déplacement de matériaux lourds.",
            sections: [
                { title: "À utiliser pour", items: ["Feuilles sèches sur une cour, une allée ou une pelouse.", "Petits débris légers quand le souffle ne disperse pas la matière."] },
                { title: "À éviter", items: ["Graviers, poussières fines, objets lourds, personnes, animaux et routes.", "Tout soufflage par vent fort qui peut disperser les déchets ailleurs."] },
                { title: "Comment procéder", items: ["Vérifier la zone, éloigner les personnes et retirer les objets fragiles.", "Orienter le flux vers une zone de collecte et arrêter si quelqu’un s’approche."] }
            ]
        },
        parts: {
            moteur: {
                number: "01",
                title: "Le moteur",
                summary: "Le moteur entraîne le ventilateur qui produit le flux d’air.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le bloc moteur",
                    text: "Le moteur est porté à la main et entraîne un ventilateur qui aspire l’air puis le rejette dans le tube.",
                    list: ["Bloc moteur", "Ventilateur", "Carter d’air", "Commande d’arrêt"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Produire le flux d’air",
                    text: "Le moteur met en rotation le ventilateur. L’air est ensuite dirigé vers l’embout pour déplacer les débris légers.",
                    list: ["Repérer le système d’alimentation", "Vérifier les entrées d’air", "Laisser refroidir avant l’entretien"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Bruit et projections",
                    text: "Le moteur et le ventilateur peuvent générer un bruit fort et projeter de la poussière ou des débris légers.",
                    list: ["Porter une protection auditive", "Éloigner les personnes", "Ne jamais souffler vers la route"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Se protéger avant le soufflage",
                    text: "Le bruit et les particules justifient une protection adaptée selon le modèle et le lieu de travail.",
                    list: ["Protection auditive", "Lunettes de protection", "Chaussures fermées", "Vêtements couvrants"]
                }
            },
            tube: {
                number: "02",
                title: "Le tube de soufflage",
                summary: "Il conduit le flux d’air jusqu’à l’embout pour décaler les feuilles et les débris.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le tube et l’embout",
                    text: "Le tube dirige le flux d’air généré par le ventilateur. Sa longueur et son embout influencent la portée et la direction du souffle.",
                    list: ["Tube de soufflage", "Embout de sortie", "Raccords et colliers", "Zone d’écoulement"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Diriger le flux",
                    text: "Le tube sert à orienter le flux d’air vers la zone de collecte. Il faut éviter les obstacles ou les personnes dans la trajectoire.",
                    list: ["Vérifier la fixation du tube", "Garder l’embout libre", "Ne pas bloquer le passage d’air"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Projection de débris",
                    text: "Le tube peut envoyer feuilles, poussière ou petits objets vers des zones de passage ou vers des personnes.",
                    list: ["Éloigner les passants", "Diriger l’air vers une zone dégagée", "Éviter les graviers et objets lourds"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Protéger les yeux et l’ouïe",
                    text: "Le flux peut soulever des poussières et des feuilles qui perturbent la vue ou le bruit.",
                    list: ["Protection auditive", "Lunettes de protection", "Chaussures fermées", "Vêtements couvrants"]
                }
            },
            poignee: {
                number: "03",
                title: "La poignée",
                summary: "Elle permet de tenir le souffleur et de commander le débit d’air.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La prise en main",
                    text: "La poignée assure la tenue de l’appareil et contient, selon le modèle, la commande de vitesse et d’arrêt.",
                    list: ["Poignée", "Gâchette ou interrupteur", "Commande d’arrêt", "Fixation de la poignée"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Maintenir le contrôle",
                    text: "La poignée permet de stabiliser le souffleur et de garder le tube dans la direction souhaitée.",
                    list: ["Tenir l’outil fermement", "Vérifier la commande", "Ne pas intervenir avec les mains près de la sortie d’air"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Perte de maîtrise",
                    text: "Une prise instable ou une commande endommagée peut faire perdre le contrôle du jet d’air.",
                    list: ["Vérifier les fixations", "Garder une prise ferme", "Arrêter si la commande est défectueuse"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Toujours garder une prise sûre",
                    text: "Les gants et la tenue doivent rester confortables sans gêner l’utilisation des commandes.",
                    list: ["Gants adaptés", "Chaussures fermées", "Protection auditive", "Lunettes"]
                }
            },
            commande: {
                number: "04",
                title: "La commande de débit",
                summary: "Elle permet de piloter la puissance du souffle selon la zone à nettoyer.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Régulation et arrêt",
                    text: "Selon le modèle, la commande réduit le débit ou coupe rapidement le moteur pour une utilisation plus précise.",
                    list: ["Commande de vitesse", "Interrupteur d’arrêt", "Démarrage", "Protection du moteur"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Adapter le souffle",
                    text: "Le débit doit correspondre au type de déchets et à l’espace de travail. Un réglage trop fort disperse souvent les débris.",
                    list: ["Réduire le débit si nécessaire", "Mettre en pause si la zone change", "Suivre la notice du modèle"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Flux trop fort",
                    text: "Un souffle excessif peut soulever des poussières et projeter des débris vers des zones inadaptées.",
                    list: ["Éviter les débris lourds", "Régler le débit selon la zone", "Éloigner les passants"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Une bonne tenue et des protections adaptées",
                    text: "La stabilité de la prise et les protections individuelles permettent de garder le contrôle du flux d’air.",
                    list: ["Protection auditive", "Lunettes", "Chaussures fermées", "Vêtements couvrants"]
                }
            }
        }
    },
    "groupe-electrogene": {
        summary: "Le groupe électrogène produit de l’électricité à partir d’un moteur, pour alimenter des appareils compatibles dans la limite de sa puissance.",
        purpose: "Il peut fournir une alimentation temporaire sur un chantier ou dans un lieu sans réseau adapté. La puissance disponible, les prises et le type de courant dépendent du modèle.",
        operation: "Un moteur entraîne un alternateur qui produit l’électricité. Les appareils se branchent sur les sorties prévues, en tenant compte de la puissance nominale et des consignes du fabricant.",
        parts: ["Moteur : fournit l’énergie mécanique.", "Alternateur : produit le courant électrique.", "Panneau de commande, prises et protections : permettent le raccordement et le contrôle.", "Réservoir et châssis : présents selon le type d’alimentation et la conception."],
        precautions: ["Utilise un groupe à moteur thermique uniquement à l’extérieur, loin des ouvertures : les gaz d’échappement peuvent tuer.", "Protège l’appareil de la pluie et respecte les consignes de mise à la terre et de raccordement.", "Ne dépasse pas la puissance disponible et ne raccorde pas une installation domestique sans dispositif prévu et intervenant qualifié.", "Laisse refroidir l’appareil avant le ravitaillement et suis la notice."]
    },
    pulverisateur: {
        image: "pulverisateur.png",
        imageAlt: "Pulvérisateur à dos blanc et orange avec réservoir, harnais et lance.",
        summary: "Le pulvérisateur répartit un liquide en fines gouttelettes ; le type de produit et l’application doivent être compatibles avec l’appareil.",
        purpose: "Selon le modèle, il sert à appliquer de l’eau ou un produit autorisé pour un usage précis. Un pulvérisateur ne rend pas un produit approprié à une culture ou à un traitement qui ne figure pas sur son étiquette.",
        operation: "Un réservoir contient le liquide et une pompe crée la pression nécessaire à la pulvérisation. Une lance et une buse dirigent le jet ; le système peut être manuel, électrique ou motorisé.",
        parts: ["Réservoir et bouchon : contiennent le liquide.", "Pompe et commandes : mettent le liquide en circulation ou en pression.", "Flexible et lance : conduisent le liquide.", "Buse : forme la pulvérisation selon les accessoires compatibles."],
        precautions: ["Lis l’étiquette du produit et respecte exactement les usages, dosages et protections qu’elle indique.", "Évite l’inhalation, le contact avec la peau et la dérive vers les personnes, animaux, cultures ou points d’eau.", "Ne mange pas, ne bois pas et ne transvase pas le produit dans un récipient alimentaire.", "Nettoie et stocke l’appareil selon les consignes du produit et du fabricant."]
    },
    "fendeur-de-buches": {
        image: "fendeur-de-buches.png",
        imageAlt: "Fendeur de bûches orange sur roues avec moteur, vérin et coin de fendage.",
        summary: "Le fendeur de bûches exerce une force pour séparer des morceaux de bois, dans les limites de dimensions prévues par le fabricant.",
        purpose: "Il facilite la préparation de bûches pour le stockage ou le chauffage. Les modèles peuvent être horizontaux ou verticaux et utiliser des systèmes différents.",
        operation: "Un poussoir ou un coin exerce une pression sur le bois contre un coin de fendage. La force peut être fournie par un système hydraulique ou par une autre conception propre au modèle.",
        parts: ["Zone d’appui : reçoit la bûche.", "Coin de fendage et poussoir : créent l’effort de séparation.", "Commandes : pilotent le cycle selon le modèle.", "Bâti et protections : soutiennent la machine et limitent l’accès aux zones dangereuses."],
        precautions: ["Place la machine de façon stable et respecte la position de travail prévue par sa notice.", "Garde les mains hors de la zone entre le bois, le poussoir et le coin.", "Ne dépasse pas les dimensions ou types de bois autorisés et ne modifie pas les protections.", "Arrête la machine avant de retirer un morceau coincé ou d’intervenir sur la zone de fendage."]
    },
    "decoupeuse-a-disque-thermique": {
        summary: "La découpeuse à disque thermique est une machine portative motorisée destinée à la coupe de matériaux compatibles avec son disque.",
        purpose: "Elle peut être employée sur des matériaux de chantier selon le disque homologué, la machine et les conditions du chantier. Un disque inadapté peut se rompre ou endommager l’outil.",
        operation: "Un moteur thermique entraîne un disque de coupe protégé par un carter. Les caractéristiques du disque, son diamètre et sa vitesse maximale doivent correspondre à la machine et au matériau.",
        parts: ["Moteur et commandes : entraînent et contrôlent la machine.", "Disque : réalise la coupe ; son type dépend du matériau et de l’usage.", "Carter : protège de la zone du disque et des projections.", "Poignées et dispositif d’arrêt : aident à tenir et arrêter l’appareil."],
        precautions: ["Vérifie la compatibilité, l’état et la vitesse maximale du disque avec la notice.", "Repère les réseaux et stabilise la pièce ou la zone avant tout travail.", "Éloigne les personnes des projections et maîtrise les poussières selon les consignes du chantier.", "Ne retire pas le carter et ne force pas latéralement sur le disque."]
    },
    "decoupeuse-a-disque-sur-chariot": {
        summary: "La découpeuse à disque sur chariot associe une machine de coupe à un support roulant pour guider la découpe.",
        purpose: "Elle peut réaliser des coupes au sol ou sur une surface préparée, lorsque le chariot, le disque et la machine sont prévus pour le matériau concerné. Les configurations varient.",
        operation: "Le disque entraîné par le moteur coupe le matériau tandis que le chariot soutient l’ensemble et guide son déplacement. Certains modèles disposent d’accessoires ou d’une alimentation en eau : vérifier la notice.",
        parts: ["Machine et disque : constituent l’organe de coupe.", "Carter : couvre une partie du disque et limite les projections.", "Chariot, roues et poignées : soutiennent et guident l’ensemble.", "Réglages et commandes : dépendent de la version et permettent d’adapter la configuration."],
        precautions: ["Vérifie que le disque, la machine et le chariot sont compatibles entre eux et avec le matériau.", "Installe l’ensemble sur une surface stable et balise la zone de coupe.", "Garde les mains éloignées du disque et ne neutralise aucun carter.", "Respecte les consignes du fabricant concernant les poussières, l’eau éventuelle et le déplacement du chariot."]
    },
    "marteau-piqueur-brise-beton": {
        image: "marteau-piqueur-brise-beton.png",
        imageAlt: "Marteau-piqueur électrique orange et noir avec burin pointu, poignée avant et poignée arrière.",
        epiImage: "souffleur-epi.svg",
        epiImageAlt: "Illustration indicative de lunettes, protection auditive, gants, vêtements de travail et chaussures. Les protections respiratoires et les EPI requis dépendent du matériau, du chantier et de la notice.",
        summary: "Le marteau-piqueur, ou brise-béton, transmet des frappes répétées à un outil emmanché pour casser ou buriner un matériau adapté.",
        purpose: "Il sert notamment à des travaux de démolition ou de dépose. Le type de burin et les matériaux admissibles dépendent de la machine.",
        operation: "Un mécanisme électrique, pneumatique ou thermique produit des percussions transmises au burin. Les poignées permettent de tenir l’appareil et peuvent contribuer à réduire les vibrations selon le modèle.",
        parts: ["Corps moteur et mécanisme de frappe : produisent les percussions.", "Porte-outil et burin : transmettent l’effort au matériau.", "Poignées : servent au maintien et au guidage.", "Commandes et câble, flexible ou alimentation : varient selon la technologie."],
        precautions: ["Vérifie la présence de canalisations ou de réseaux dans la zone avant de casser un sol ou un mur.", "Choisis un burin compatible et inspecte-le avant utilisation.", "Prévois les risques de bruit, vibrations, poussières et projections selon le chantier et la notice.", "Arrête et débranche ou isole l’alimentation avant de changer le burin."]
    },
    "souffleur-main": {
        summary: "Le souffleur à main dirige un flux d’air pour déplacer des feuilles et des débris légers sur une zone extérieure.",
        purpose: "Il aide à regrouper les feuilles ou à dégager certains espaces. Il ne convient pas à tous les déchets ni à toutes les surfaces ; le souffle peut soulever poussières et petits objets.",
        operation: "Un moteur entraîne une turbine qui aspire l’air et le rejette dans un tube. La poignée et la commande permettent de tenir l’appareil et de régler le flux selon le modèle.",
        parts: ["Moteur et turbine : produisent le flux d’air.", "Tube de soufflage : dirige l’air vers la zone de travail.", "Poignée et commande : servent au maintien et au contrôle.", "Batterie, câble ou moteur thermique : source d’énergie selon le modèle."],
        precautions: ["Éloigne les personnes, animaux et objets fragiles de la zone où les débris sont déplacés.", "Évite de souffler vers les routes, les fenêtres, les personnes ou les matières poussiéreuses.", "Utilise la protection auditive et les autres équipements recommandés dans la notice.", "Arrête l’appareil avant de vérifier ou retirer un débris bloqué."]
    },
    "aspirateur-de-feuilles-a-dos": {
        summary: "L’aspirateur de feuilles à dos aspire des feuilles dans un sac porté par l’utilisateur ; certains modèles les réduisent aussi en fragments.",
        purpose: "Il sert à ramasser des feuilles et débris végétaux légers sur des espaces extérieurs. Les matières acceptées et la présence d’un système de broyage dépendent du modèle.",
        operation: "Un moteur crée une aspiration dans un tube. Les feuilles sont acheminées vers un sac ; sur certaines versions, une turbine ou un mécanisme les fragmente avant leur collecte.",
        parts: ["Moteur et système d’aspiration : déplacent l’air et les feuilles.", "Tube d’aspiration : conduit les débris vers l’appareil.", "Sac de collecte : reçoit les feuilles.", "Harnais et commandes : soutiennent et contrôlent la machine lorsqu’ils sont présents."],
        precautions: ["N’aspire pas de pierres, verre, déchets chauds ou matières dangereuses ; respecte les limites du fabricant.", "Vérifie le sac, les attaches et les protections avant le démarrage.", "Arrête complètement la machine avant de vider le sac ou de dégager un blocage.", "Évite les longues périodes d’exposition au bruit et porte les protections indiquées dans la notice."]
    },
    "taille-haie-perche": {
        image: "taille-haie-sur-perche.png",
        imageAlt: "Taille-haie thermique orange et blanc monté sur une longue perche, avec une lame de coupe à son extrémité.",
        epiImage: "taille-haie-epi.svg",
        epiImageAlt: "Illustration indicative des protections pour taille-haie : lunettes, protection auditive, gants, pantalon long et chaussures robustes.",
        summary: "Le taille-haie sur perche porte son organe de coupe au bout d’un long manche pour atteindre certaines parties des haies depuis le sol.",
        purpose: "Il facilite la taille de végétaux accessibles en hauteur sans porter directement la lame à hauteur du corps. Sa portée et les types de branches admis varient selon le modèle.",
        operation: "Un moteur entraîne une lame alternative située sur une tête de coupe. La perche transmet le mouvement et les poignées permettent de tenir et diriger l’outil.",
        parts: ["Tête de coupe et lames : coupent les végétaux compatibles.", "Carter ou protège-lame : couvre certaines zones de coupe.", "Perche et poignées : relient la tête aux commandes.", "Moteur et transmission : peuvent être intégrés à la tête ou à une autre partie selon le modèle."],
        precautions: ["Maintiens une distance de sécurité avec la lame et les personnes présentes.", "Repère les câbles aériens et n’approche pas l’outil des lignes électriques.", "Ne travaille pas depuis une position instable et ne te penche pas excessivement pour gagner de la portée.", "Arrête l’appareil avant de dégager une branche coincée ou de déplacer la tête."]
    },
    "perche-elagueuse": {
        image: "perche-elagueuse.png",
        imageAlt: "Perche élagueuse thermique orange et blanc, équipée d’un guide-chaîne et d’une chaîne de coupe à son extrémité.",
        epiImage: "tronconneuse-epi.svg",
        epiImageAlt: "Illustration indicative de protections pour scie à chaîne : casque avec visière et protection auditive, gants, pantalon anticoupure et chaussures adaptées. Vérifier les exigences de la notice.",
        summary: "La perche élagueuse est une scie à chaîne montée au bout d’un manche, conçue pour couper certaines branches depuis le sol.",
        purpose: "Elle permet d’atteindre des branches accessibles dans les limites de portée et de diamètre prévues. Elle ne remplace pas une intervention spécialisée pour un arbre dangereux ou une branche difficile à maîtriser.",
        operation: "Un moteur entraîne une chaîne qui circule autour d’un guide-chaîne. La tête est reliée à l’utilisateur par une perche ; la lubrification et les commandes dépendent du modèle.",
        parts: ["Guide-chaîne et chaîne : forment l’organe de coupe.", "Carter de pignon et tendeur : maintiennent et règlent la chaîne selon le modèle.", "Perche et poignées : éloignent la tête de coupe et permettent de tenir l’outil.", "Moteur, commandes et réservoirs éventuels : varient selon l’énergie utilisée."],
        precautions: ["Évalue la zone de chute des branches et éloigne toute personne avant le travail.", "N’utilise pas l’outil près de lignes électriques ou dans une situation où la branche pourrait tomber sur quelqu’un.", "Porte les protections adaptées à une scie à chaîne et respecte les limites de la notice.", "Pour une branche instable, de grande taille ou située près d’un obstacle, fais appel à une personne qualifiée."]
    },
    "tariere-thermique": {
        summary: "La tarière thermique entraîne une mèche rotative pour réaliser des trous dans le sol.",
        purpose: "Elle peut servir à préparer des trous pour des plantations ou certains aménagements, selon le diamètre, la profondeur et le terrain prévus pour la machine.",
        operation: "Un moteur thermique entraîne une transmission et une mèche hélicoïdale. Les poignées servent à tenir l’appareil ; leur conception peut varier selon qu’il est prévu pour un ou plusieurs utilisateurs.",
        parts: ["Moteur et commandes : fournissent et contrôlent l’énergie.", "Transmission : entraîne la mèche.", "Mèche : pénètre dans le sol et remonte la terre.", "Poignées et dispositifs de commande : permettent le maintien et l’arrêt."],
        precautions: ["Repère les canalisations et câbles enterrés avant de percer.", "Vérifie le terrain et respecte les dimensions de mèche admises.", "Garde les mains, les vêtements et les pieds éloignés de la mèche en rotation.", "Arrête le moteur avant de retirer une obstruction ou de manipuler la mèche."]
    },
    "rouleau-gazon": {
        summary: "Le rouleau à gazon est un outil roulant qui applique une pression sur le sol ou le gazon.",
        purpose: "Il peut aider à mettre en contact des semences avec la terre ou à régulariser une surface, selon le travail et le type de terrain. Un passage trop lourd ou répété peut tasser le sol.",
        operation: "Un tambour roule sur le terrain et exerce une pression. Certains modèles peuvent être lestés avec de l’eau ou un autre remplissage prévu par le fabricant ; d’autres ont une masse fixe.",
        parts: ["Tambour : roule sur le sol et répartit la pression.", "Axe et châssis : soutiennent le tambour.", "Poignée ou attelage : servent à déplacer le rouleau.", "Bouchon de remplissage éventuel : présent seulement sur les modèles lestables."],
        precautions: ["Vérifie que le terrain et l’état du gazon conviennent au roulage.", "Évite de tasser excessivement un sol humide ou déjà compacté.", "Respecte la capacité de remplissage et la masse maximale indiquées par le fabricant.", "Garde les pieds éloignés du tambour et des points de pincement."]
    },
    motobineuse: {
        summary: "La motobineuse utilise des fraises rotatives pour ameublir et travailler la surface d’une parcelle.",
        purpose: "Elle peut préparer un sol pour certaines plantations ou l’entretien d’un potager. La profondeur, le type de terrain et les accessoires acceptés dépendent du modèle.",
        operation: "Un moteur entraîne des fraises qui fragmentent et déplacent la terre. Les roues, le guidon et les commandes aident à guider l’appareil ; leur disposition varie.",
        parts: ["Moteur et transmission : entraînent les fraises.", "Fraises : travaillent le sol et doivent rester protégées par les carters prévus.", "Guidon et commandes : servent au guidage et au contrôle.", "Roues ou accessoires : facilitent le déplacement selon la configuration."],
        precautions: ["Repère les câbles et conduites enterrés et retire les obstacles visibles de la parcelle.", "Garde les pieds et les mains loin des fraises, même lorsque la machine semble ralentir.", "Travaille uniquement sur un terrain et avec des accessoires admis par la notice.", "Arrête le moteur avant de dégager des racines ou des débris enroulés."]
    }
};

const toolProfileDetails = {
    "nettoyeur-haute-pression": {
        epiIntro: "Les protections dépendent de la pression, du produit utilisé et des projections possibles.",
        epi: ["Lunettes ou écran facial contre les projections.", "Chaussures antidérapantes et vêtements couvrants adaptés à l’eau.", "Protection auditive si la notice ou le niveau sonore l’exige.", "Gants compatibles avec le produit de nettoyage éventuel."],
        usageIntro: "Choisis une buse et une pression compatibles avec la surface. Commence sur une petite zone discrète et augmente seulement si le support le permet.",
        before: ["Lire la notice, vérifier les raccords et alimenter l’appareil avec l’eau prescrite.", "Éloigner les personnes et protéger les prises, objets fragiles et surfaces sensibles."],
        during: ["Tenir la lance à deux mains si prévu et garder une distance adaptée du support.", "Couper l’alimentation et dépressuriser selon la notice avant de changer d’accessoire."],
        avoid: ["Ne jamais diriger le jet vers une personne, un animal ou soi-même.", "Ne pas utiliser près d’une installation électrique sous tension ni sur un support non compatible."]
    },
    "aspirateur-eau-et-poussiere": {
        epiIntro: "Adapte les protections aux poussières, liquides et matières réellement aspirés.",
        epi: ["Lunettes contre les poussières et projections lors de la vidange.", "Protection respiratoire adaptée si des poussières sont présentes, conformément à l’évaluation du risque.", "Gants adaptés aux débris et chaussures fermées.", "Protection auditive si le bruit du modèle le nécessite."],
        usageIntro: "Configure l’appareil pour aspirer du sec ou du liquide selon sa notice : filtre, sac et accessoires ne sont pas toujours les mêmes.",
        before: ["Vérifier que la matière est autorisée et choisir le filtre ou le sac correspondant.", "Inspecter la cuve, le flexible et le câble ; dégager la zone de passage."],
        during: ["Surveiller le niveau de remplissage et l’échauffement ou la perte d’aspiration.", "Débrancher avant de vider la cuve, nettoyer le filtre ou dégager un bouchon."],
        avoid: ["Ne pas aspirer de cendres chaudes, substances inflammables ou poussières dangereuses sans autorisation explicite.", "Ne pas passer du sec au liquide sans reconfigurer l’appareil comme indiqué."]
    },
    "broyeur-de-vegetaux": {
        epiIntro: "Le broyage expose au bruit, aux projections et aux débris coupants.",
        epi: ["Lunettes de protection ou visière contre les projections.", "Protection auditive adaptée au niveau sonore.", "Gants ajustés et chaussures robustes ; les gants ne doivent jamais approcher la goulotte.", "Vêtements près du corps, sans cordons flottants."],
        usageIntro: "Le broyeur sert aux végétaux acceptés par son mécanisme. Les essences, dimensions et méthodes d’alimentation dépendent du modèle.",
        before: ["Installer le broyeur sur un sol stable et contrôler les protections et l’arrêt.", "Trier les branches et éloigner les personnes de la goulotte et de l’éjection."],
        during: ["Introduire les végétaux selon la méthode prescrite sans pousser avec les mains.", "Attendre l’arrêt complet et isoler l’alimentation avant de dégager un bourrage."],
        avoid: ["Ne pas broyer des matières étrangères ou des branches au-delà des limites de la notice.", "Ne jamais ouvrir un carter ou approcher une main du mécanisme en mouvement."]
    },
    "groupe-electrogene": {
        epiIntro: "Choisis les protections selon le bruit, la manutention, l’environnement et le raccordement électrique.",
        epi: ["Protection auditive adaptée au niveau sonore.", "Gants de manutention et chaussures de sécurité pour déplacer ou installer l’appareil.", "Protection des yeux si des opérations de contrôle ou de raccordement l’exigent.", "Équipements électriques adaptés au travail, définis par une personne compétente."],
        usageIntro: "Un groupe électrogène alimente des appareils compatibles dans la limite de sa puissance. Son implantation et son raccordement sont essentiels.",
        before: ["Le placer dehors, à l’air libre et loin des fenêtres, portes et prises d’air.", "Vérifier la puissance nécessaire, les câbles, les prises et les instructions de mise à la terre."],
        during: ["Garder l’appareil sec, stable et ventilé ; surveiller les témoins et la charge.", "Arrêter puis laisser refroidir avant tout ravitaillement ou entretien."],
        avoid: ["Ne jamais le faire fonctionner dans une maison, un garage, un abri fermé ou près d’une ouverture : le monoxyde de carbone est mortel.", "Ne pas raccorder directement à une installation du bâtiment sans dispositif adapté et professionnel qualifié."]
    },
    pulverisateur: {
        epiIntro: "Les EPI sont définis par l’étiquette du produit et sa fiche de données de sécurité, pas seulement par le pulvérisateur.",
        epi: ["Gants résistants au produit indiqué sur l’étiquette.", "Lunettes ou écran facial contre les éclaboussures.", "Vêtement ou combinaison de protection et chaussures adaptés au produit.", "Protection respiratoire uniquement si l’étiquette ou l’évaluation du risque la prescrit, avec le filtre approprié."],
        usageIntro: "Le pulvérisateur ne doit servir qu’à un liquide et à un usage autorisés par son fabricant et, pour les produits de traitement, par leur étiquette.",
        before: ["Lire l’étiquette et la fiche de sécurité ; respecter dose, usage, météo et équipements prescrits.", "Préparer le mélange dans le récipient et dans les conditions prévus, sans dépasser la capacité."],
        during: ["Éviter le vent et la dérive vers les personnes, animaux, cultures voisines et points d’eau.", "Après usage, dépressuriser, nettoyer et stocker selon les consignes du produit et de l’appareil."],
        avoid: ["Ne jamais mélanger des produits sans autorisation ni réutiliser un contenant alimentaire.", "Ne pas manger, boire ou fumer pendant la préparation et l’application."]
    },
    "fendeur-de-buches": {
        epiIntro: "Le fendage expose aux pincements, aux éclats de bois et au bruit.",
        epi: ["Lunettes de protection contre les éclats.", "Protection auditive si la notice ou le bruit le demande.", "Chaussures de sécurité adaptées à la manutention des bûches.", "Gants de manutention pour déplacer le bois, en les gardant loin des pièces mobiles pendant le cycle."],
        usageIntro: "Le fendeur traite uniquement des bûches compatibles avec la capacité et la position de travail prévues pour le modèle.",
        before: ["Installer l’appareil stable et contrôler commandes, protections et zone de fendage.", "Choisir des bûches de dimensions admises et les positionner selon la notice."],
        during: ["Garder les mains hors de la zone entre le poussoir, le coin et la bûche.", "Arrêter la machine et attendre le retour complet du poussoir avant de retirer le bois."],
        avoid: ["Ne pas maintenir la bûche à la main pendant le cycle ni neutraliser les commandes de sécurité.", "Ne pas dégager une bûche coincée tant que l’énergie n’est pas coupée et le mouvement arrêté."]
    },
    "decoupeuse-a-disque-thermique": {
        epiIntro: "La coupe peut projeter des fragments et générer un bruit, des poussières et des gaz d’échappement.",
        epi: ["Lunettes avec écran facial adapté aux projections.", "Protection auditive appropriée.", "Chaussures de sécurité, gants adaptés et vêtements ajustés.", "Protection respiratoire définie selon le matériau et le chantier ; elle ne remplace pas la réduction des poussières à la source."],
        usageIntro: "Le disque doit être conçu pour le matériau, le diamètre et la vitesse de la machine. Une découpeuse thermique s’utilise en extérieur.",
        before: ["Identifier le matériau, les réseaux et la trajectoire ; stabiliser la pièce et baliser la zone.", "Vérifier le disque, son sens, son état, sa compatibilité et le carter."],
        during: ["Tenir la machine selon la notice et laisser le disque couper sans le coincer ni le forcer latéralement.", "Maîtriser les poussières par les moyens prévus et garder les personnes à distance."],
        avoid: ["Ne pas utiliser un disque fissuré, inadapté ou dont la vitesse nominale est insuffisante.", "Ne pas travailler en intérieur avec un moteur thermique ni retirer le carter."]
    },
    "decoupeuse-a-disque-sur-chariot": {
        epiIntro: "La coupe au sol expose aux projections, au bruit, aux poussières et aux risques de déplacement du chariot.",
        epi: ["Lunettes et écran facial adaptés aux projections.", "Protection auditive selon le niveau sonore.", "Chaussures de sécurité et vêtements ajustés.", "Protection respiratoire et maîtrise des poussières selon le matériau et les règles du chantier."],
        usageIntro: "Le chariot guide la découpe ; il ne rend pas compatible un disque ou un matériau qui ne l’est pas. Les réglages dépendent du système utilisé.",
        before: ["Vérifier la stabilité, le guidage, le disque, le carter et les dispositifs de commande.", "Repérer les réseaux et obstacles, caler la pièce et délimiter le passage du chariot."],
        during: ["Déplacer le chariot de manière régulière selon les consignes du fabricant.", "Garder mains et pieds hors du disque et de la trajectoire des roues."],
        avoid: ["Ne pas forcer ni déplacer la machine avec le disque engagé si la notice ne le prévoit pas.", "Ne pas arroser ou utiliser une alimentation en eau sans que la machine et le disque soient prévus pour cela."]
    },
    "marteau-piqueur-brise-beton": {
        epiIntro: "Le burinage peut générer des projections, du bruit, des poussières et des vibrations.",
        epi: ["Lunettes fermées ou écran facial contre les éclats.", "Protection auditive adaptée.", "Chaussures de sécurité et gants adaptés à la prise de l’outil.", "Protection respiratoire et méthode de réduction des poussières définies selon le matériau."],
        usageIntro: "Le marteau-piqueur sert à buriner ou casser un matériau compatible avec l’outil et le burin monté.",
        before: ["Repérer les réseaux et vérifier la nature de la structure avant de commencer.", "Choisir un burin compatible et inspecter câble, flexible ou alimentation selon le modèle."],
        during: ["Tenir l’outil avec les poignées prévues et adopter une position stable.", "Faire des pauses adaptées aux vibrations et surveiller les signes de fatigue."],
        avoid: ["Ne jamais diriger le burin vers une personne ni travailler sans carter ou poignée exigés.", "Ne pas changer le burin avant arrêt et mise hors énergie de la machine."]
    },
    "souffleur-main": {
        epiIntro: "Le flux d’air peut soulever poussières, débris et petits objets, et le moteur peut être bruyant.",
        epi: ["Lunettes de protection contre les poussières et débris.", "Protection auditive si le niveau sonore l’exige.", "Chaussures fermées et vêtements ajustés.", "Protection respiratoire si l’évaluation du risque révèle des poussières nocives."],
        usageIntro: "Le souffleur déplace les feuilles et débris légers ; il est plus efficace pour les regrouper que pour les disperser.",
        before: ["Vérifier la zone, éloigner les personnes et retirer les objets pouvant être projetés.", "Choisir une vitesse adaptée et vérifier que le tube est correctement fixé."],
        during: ["Diriger le flux vers un tas ou une zone de collecte, en gardant une distance avec les surfaces fragiles.", "Réduire le régime près des graviers, poussières et végétaux délicats."],
        avoid: ["Ne pas souffler vers les personnes, animaux, voies de circulation ou fenêtres.", "Ne pas utiliser pour déplacer des matières dangereuses, braises ou poussières nocives."]
    },
    "aspirateur-de-feuilles-a-dos": {
        epiIntro: "L’aspiration et le broyage éventuel entraînent du bruit, des poussières et des projections au sac.",
        epi: ["Lunettes contre les débris et poussières.", "Protection auditive adaptée au modèle.", "Gants et chaussures robustes pour le travail et la vidange.", "Protection respiratoire si des poussières gênantes ou nocives sont présentes."],
        usageIntro: "L’appareil collecte des feuilles et débris végétaux légers compatibles. Le broyage n’existe que sur les modèles qui en sont équipés.",
        before: ["Contrôler le sac, les fixations, le tube et les protections du mécanisme.", "Retirer les gros objets et vérifier que les matières présentes peuvent être aspirées."],
        during: ["Garder le tube éloigné du sol si nécessaire et surveiller le remplissage du sac.", "Arrêter et isoler l’appareil avant de vider le sac ou de dégager un blocage."],
        avoid: ["Ne pas aspirer verre, pierres, cendres chaudes, liquides ou déchets dangereux.", "Ne jamais approcher la main de l’entrée d’aspiration ou d’un broyeur en mouvement."]
    },
    "taille-haie-perche": {
        epiIntro: "La coupe en hauteur ajoute aux coupures le risque de chute de branches et de contact avec des lignes électriques.",
        epi: ["Lunettes de protection contre les feuilles et débris.", "Protection auditive selon le modèle.", "Gants adaptés à la prise et chaussures antidérapantes.", "Casque de protection si le risque de chute de branches le justifie."],
        usageIntro: "Le taille-haie sur perche sert aux haies accessibles depuis le sol, dans la portée et les limites de coupe de la notice.",
        before: ["Délimiter la zone et repérer branches mortes, obstacles et lignes électriques.", "Régler la tête à l’arrêt et vérifier la stabilité du sol et le bon état de la lame."],
        during: ["Garder une distance de sécurité et déplacer l’outil sans passer la lame au-dessus de personnes.", "Faire des pauses : la perche éloignée du corps augmente l’effort sur les bras et le dos."],
        avoid: ["Ne pas utiliser depuis une échelle ou une position instable.", "Ne pas approcher la lame de conducteurs électriques ni couper des branches hors capacité."]
    },
    "perche-elagueuse": {
        epiIntro: "La chaîne en hauteur expose aux coupures, au bruit, aux projections et à la chute de branches.",
        epi: ["Casque de protection contre les branches pouvant tomber.", "Lunettes et visière adaptées aux projections.", "Protection auditive et gants adaptés à la scie à chaîne.", "Pantalon et chaussures de protection conçus pour le risque identifié et conformes à la notice."],
        usageIntro: "La perche élagueuse permet de couper certaines branches depuis le sol, dans les limites de la machine et avec une zone de chute maîtrisée.",
        before: ["Définir la zone de chute, éloigner les personnes et vérifier l’absence de ligne électrique.", "Contrôler la chaîne, son guide, sa tension et la lubrification selon la notice."],
        during: ["Maintenir la tête de coupe à distance du corps et rester hors de la trajectoire de la branche.", "Travailler depuis le sol sur une position stable, sans couper au-dessus de personnes."],
        avoid: ["Ne pas couper une branche sous tension ou mal maîtrisée sans formation adaptée.", "Ne pas utiliser près de lignes électriques ni depuis une échelle."]
    },
    "tariere-thermique": {
        epiIntro: "La tarière peut accrocher brusquement dans le sol et expose au bruit, aux projections et aux vibrations.",
        epi: ["Lunettes contre la terre et les petits débris.", "Protection auditive adaptée au moteur.", "Gants de maintien et chaussures de sécurité à semelles stables.", "Vêtements près du corps, sans éléments susceptibles de s’enrouler."],
        usageIntro: "La tarière réalise des trous dans un sol dégagé, pour des travaux compatibles avec son diamètre et sa profondeur de forage.",
        before: ["Repérer précisément les canalisations et câbles enterrés avant tout forage.", "Vérifier la mèche, les poignées, l’arrêt moteur et la stabilité de la zone."],
        during: ["Tenir les poignées fermement et rester prêt à relâcher la commande en cas de blocage.", "Retirer la terre et repositionner l’outil uniquement à l’arrêt."],
        avoid: ["Ne pas forer sans connaître la présence possible de réseaux enterrés.", "Ne pas essayer de retenir de force une mèche qui se bloque ou accroche."]
    },
    "rouleau-gazon": {
        epiIntro: "Cet outil ne comporte pas de moteur, mais son poids et ses points de pincement demandent de la prudence.",
        epi: ["Chaussures fermées, antidérapantes et adaptées au poids du rouleau.", "Gants de manutention pour déplacer ou remplir le tambour.", "Vêtements ajustés pour éviter tout accrochage dans l’axe ou l’attelage."],
        usageIntro: "Le rouleau peut aider à mettre des semences en contact avec la terre ou à égaliser légèrement une surface si le sol s’y prête.",
        before: ["Vérifier que le sol n’est ni détrempé ni déjà trop compacté.", "Contrôler l’axe, la poignée et la charge ; remplir uniquement si le modèle le permet."],
        during: ["Guider le rouleau à vitesse régulière et éviter les pentes ou dévers non maîtrisés.", "Le nettoyer et le vider après usage si le fabricant le recommande."],
        avoid: ["Ne pas lester au-delà de la capacité indiquée ni rouler sur un sol fragile ou très humide.", "Ne pas mettre les mains ou les pieds près du tambour et des points de pincement."]
    },
    motobineuse: {
        epiIntro: "Les fraises projettent de la terre et peuvent happer des débris ; le moteur peut produire du bruit et des gaz.",
        epi: ["Lunettes contre la terre et les projections.", "Protection auditive adaptée au modèle.", "Chaussures de sécurité antidérapantes ; pantalon couvrant et gants adaptés.", "Avec un moteur thermique, travailler dehors et tenir compte des fumées."],
        usageIntro: "La motobineuse travaille la couche superficielle d’un sol préparé, selon les fraises et la profondeur prévues par sa notice.",
        before: ["Repérer les réseaux enterrés, retirer les pierres et dégager les personnes de la zone.", "Contrôler les fraises, les carters, les commandes et le réglage de profondeur."],
        during: ["Guider l’appareil sans placer les pieds près des fraises et garder une prise ferme.", "Arrêter le moteur avant de retirer racines, herbes ou débris enroulés."],
        avoid: ["Ne pas utiliser sur un terrain encombré, trop pentu ou avec un accessoire non autorisé.", "Ne jamais nettoyer les fraises lorsqu’elles peuvent encore tourner."]
    }
};

const toolGuides = {
    debroussailleuse: {
        title: "la débroussailleuse.",
        name: "La débroussailleuse",
        image: "debroussailleuse.png",
        alt: "Débroussailleuse orange : le moteur est à droite, le guidon au centre et la tête de coupe à gauche",
        hotspots: {
            moteur: { x: "85%", y: "46%" },
            guidon: { x: "68%", y: "39%" },
            tube: { x: "48%", y: "55%" },
            tete: { x: "19%", y: "77%" }
        },
        callouts: {
            moteur: { x: "94%", y: "18%" },
            guidon: { x: "63%", y: "15%" },
            tube: { x: "49%", y: "88%" },
            tete: { x: "7%", y: "84%" }
        },
        epiView: {
            ...epiFigure,
            image: "debroussailleuse-epi.svg",
            alt: "Tenue de débroussaillage avec casque, visière, protections auditives, gants, pantalon couvrant et chaussures de sécurité",
            parts: {
                tete: {
                    number: "01",
                    title: "Casque et protections auditives",
                    summary: "Le casque protège la tête ; les coquilles antibruit réduisent l’exposition au bruit.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger la tête et l’ouïe",
                        text: "Choisis un casque et une protection auditive compatibles avec la débroussailleuse et adaptés au niveau sonore indiqué par sa notice.",
                        list: ["Vérifier l’état et l’ajustement du casque", "Bien positionner les coquilles sur les oreilles", "Remplacer les équipements endommagés ou périmés"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Visière et protection des yeux",
                    summary: "La visière protège le visage des projections ; une protection oculaire peut aussi être nécessaire.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger le visage et les yeux",
                        text: "Une visière grillagée ou transparente ne remplace pas toujours des lunettes. Vérifie les consignes du fabricant et les risques liés à l’accessoire de coupe.",
                        list: ["Utiliser la visière prévue pour la machine", "Ajouter des lunettes si la notice le demande", "Abaisser la visière avant le travail"]
                    }
                },
                gants: {
                    number: "03",
                    title: "Gants adaptés",
                    summary: "Des gants adaptés protègent les mains et favorisent une bonne prise des poignées.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Choisir des gants adaptés",
                        text: "Utilise des gants en bon état, adaptés à la tâche et à la prise de l’outil. Ils ne doivent pas gêner le contrôle des commandes.",
                        list: ["Vérifier qu’ils sont bien ajustés", "Remplacer les gants abîmés", "Ne pas approcher les mains de l’accessoire de coupe"]
                    }
                },
                pantalon: {
                    number: "04",
                    title: "Pantalon couvrant",
                    summary: "Un pantalon de travail résistant couvre les jambes contre les projections.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Couvrir les jambes",
                        text: "Porte un pantalon résistant adapté au débroussaillage. Il ne s’agit pas automatiquement d’un pantalon anticoupure pour tronçonneuse : suis la notice de la débroussailleuse.",
                        list: ["Choisir une tenue adaptée à l’outil", "Éviter les vêtements flottants", "Contrôler l’état du pantalon avant usage"]
                    }
                },
                chaussures: {
                    number: "05",
                    title: "Chaussures de sécurité",
                    summary: "Des chaussures robustes et antidérapantes aident à protéger les pieds et à garder l’équilibre.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les pieds",
                        text: "Choisis des chaussures de sécurité adaptées au terrain et à la débroussailleuse, avec une semelle offrant une bonne adhérence.",
                        list: ["Lacer et ajuster les chaussures", "Vérifier l’adhérence des semelles", "Adapter le modèle aux consignes du fabricant"]
                    }
                }
            }
        },
        usage: {
            title: "Fil ou lame : choisir selon la végétation",
            intro: "Il existe plusieurs têtes de coupe. Le bon choix dépend de la végétation, de la machine et de la notice ; ces repères ne remplacent pas les consignes du fabricant.",
            sections: [
                {
                    title: "Tête à fil",
                    items: [
                        "Pour l’herbe verte, tendre et peu résistante ; sur certaines machines, elle peut couper une herbe haute d’environ 60 cm, si la notice le permet.",
                        "Pratique pour les bordures, les finitions et les endroits que la tondeuse atteint mal.",
                        "Le fil n’est pas destiné au bambou, aux tiges ligneuses ou aux végétaux très résistants."
                    ]
                },
                {
                    title: "Lame compatible",
                    items: [
                        "Pour une végétation plus dense ou résistante uniquement si la débroussailleuse est conçue pour cette lame.",
                        "La lame, le carter et les protections doivent être explicitement autorisés ensemble par la notice.",
                        "Le bambou ne justifie pas à lui seul le choix d’une lame : vérifier les limites du fabricant."
                    ]
                },
                {
                    title: "Avant de commencer",
                    items: [
                        "Vérifier l’accessoire monté, le carter adapté et l’état de la zone ; éloigner les personnes et les animaux.",
                        "Porter les EPI correspondant à la tête montée et à la notice. Pour une lame, demander l’encadrement d’une personne formée."
                    ]
                }
            ],
            diagrams: true
        },
        parts: partContent
    },
    souffleur: {
        title: "le souffleur à dos.",
        name: "Le souffleur à dos",
        image: "souffleur-a-dos.svg",
        imageLabel: "SCHÉMA INDICATIF",
        alt: "Illustration schématique d’un souffleur à dos avec bloc moteur, harnais, poignée de commande et tube de soufflage",
        hotspots: {
            moteur: { x: "83%", y: "44%" },
            tube: { x: "22%", y: "70%" },
            poignee: { x: "49%", y: "45%" },
            harnais: { x: "78%", y: "23%" }
        },
        callouts: {
            moteur: { x: "94%", y: "16%" },
            tube: { x: "7%", y: "86%" },
            poignee: { x: "46%", y: "14%" },
            harnais: { x: "92%", y: "76%" }
        },
        epiView: {
            ...epiFigure,
            image: "souffleur-epi.svg",
            alt: "Tenue pour souffleur avec lunettes de protection, protection auditive, gants, pantalon long et chaussures fermées, sans casque",
            parts: {
                tete: {
                    number: "01",
                    title: "Protection auditive",
                    summary: "Le souffleur thermique peut être très bruyant.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger l’ouïe et la tête",
                        text: "Choisis une protection auditive adaptée au niveau sonore indiqué dans la notice. Le casque représenté est indicatif et n’est pas requis pour tous les souffleurs.",
                        list: ["Porter un serre-tête ou des bouchons adaptés", "Vérifier leur ajustement", "Suivre les consignes du fabricant"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Lunettes de protection",
                    summary: "Le souffle peut projeter de la poussière et de petits débris.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les yeux des projections",
                        text: "Porte une protection oculaire adaptée au travail et aux consignes de la notice.",
                        list: ["Choisir des lunettes bien ajustées", "Les garder en place pendant le soufflage", "Éloigner les personnes de la zone"]
                    }
                },
                gants: {
                    number: "03",
                    title: "Gants adaptés",
                    summary: "Des gants adaptés à la tâche peuvent protéger les mains et améliorer la prise.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Garder une prise sûre",
                        text: "Choisis des gants adaptés aux commandes et à la durée du travail.",
                        list: ["Vérifier qu’ils ne gênent pas les commandes", "Remplacer les gants abîmés", "Arrêter la machine avant toute intervention"]
                    }
                },
                pantalon: {
                    number: "04",
                    title: "Vêtements couvrants",
                    summary: "Une tenue ajustée protège de la poussière et convient au travail extérieur.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Adapter la tenue au terrain",
                        text: "Porte des vêtements couvrants et ajustés, adaptés à la météo et au travail effectué.",
                        list: ["Éviter les vêtements flottants", "Adapter les couches à la température", "Suivre les recommandations du fabricant"]
                    }
                },
                chaussures: {
                    number: "05",
                    title: "Chaussures fermées",
                    summary: "Des chaussures robustes et antidérapantes aident à garder l’équilibre.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Garder les pieds protégés",
                        text: "Choisis des chaussures fermées adaptées au terrain et à la durée du travail.",
                        list: ["Vérifier l’adhérence des semelles", "Lacer les chaussures", "Éviter les sols instables"]
                    }
                }
            }
        },
        usage: {
            title: "Souffler feuilles et débris légers",
            intro: "Le souffleur sert à regrouper des feuilles et des débris légers sur des surfaces extérieures, en dirigeant le flux loin des personnes.",
            sections: [
                { title: "À utiliser pour", items: ["Feuilles sèches sur une cour, une allée ou une pelouse.", "Petits débris légers, si leur déplacement est autorisé et sans risque."] },
                { title: "À éviter", items: ["Graviers, objets lourds, poussières fines, personnes, animaux, véhicules et routes.", "Le soufflage par vent fort ou près d’une zone où les projections peuvent blesser."] },
                { title: "Comment procéder", items: ["Lire la notice, porter les protections recommandées et vérifier la zone.", "Orienter le souffle vers un endroit dégagé et arrêter si quelqu’un s’approche."] }
            ]
        },
        parts: {
            moteur: {
                number: "01",
                title: "Le moteur",
                summary: "Il entraîne le ventilateur qui produit le souffle d’air.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le bloc moteur",
                    text: "Le moteur est porté sur le dos et entraîne un ventilateur à l’intérieur du carter.",
                    list: ["Bloc moteur", "Carter du ventilateur", "Réservoir, selon le modèle", "Filtre à air"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Produire le flux d’air",
                    text: "Le ventilateur met l’air en mouvement, puis le tube le dirige vers la zone de travail.",
                    list: ["Lire la notice du modèle", "Repérer la commande d’arrêt", "Garder les entrées d’air dégagées"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Bruit, chaleur et gaz",
                    text: "Un moteur thermique est bruyant et chaud, et produit des gaz d’échappement.",
                    list: ["Utiliser à l’extérieur", "Éloigner carburant et flamme", "Laisser refroidir avant rangement"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Se protéger du bruit et des projections",
                    text: "Choisis des protections adaptées à la tâche et aux consignes de la notice.",
                    list: ["Protection auditive", "Lunettes ou visière", "Chaussures adaptées", "Gants selon la tâche"]
                }
            },
            tube: {
                number: "02",
                title: "Le tube de soufflage",
                summary: "Il dirige le flux d’air vers les feuilles ou les débris.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le tube et son embout",
                    text: "Le tube conduit l’air depuis le ventilateur jusqu’à son embout de sortie.",
                    list: ["Tube de soufflage", "Embout de sortie", "Raccords du tube", "Colliers de fixation"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Diriger le flux d’air",
                    text: "L’air sort par l’embout. Le tube permet de diriger le flux sans approcher les mains du ventilateur.",
                    list: ["Vérifier l’assemblage", "Ne pas obstruer l’embout", "Suivre les instructions du fabricant"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Débris et poussières projetés",
                    text: "Le souffle peut déplacer des graviers, des feuilles ou de la poussière vers une personne ou une route.",
                    list: ["Éloigner les personnes", "Ne pas diriger le souffle vers quelqu’un", "Éviter de soulever de la poussière"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Protéger les yeux et les oreilles",
                    text: "Les projections et le niveau sonore dépendent du lieu et du travail réalisé.",
                    list: ["Protection auditive", "Lunettes de protection", "Chaussures fermées", "Tenue adaptée au terrain"]
                }
            },
            poignee: {
                number: "03",
                title: "La poignée de commande",
                summary: "Elle permet de tenir le tube et de commander le souffleur.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Les commandes au bout du tube",
                    text: "La poignée regroupe la prise en main et, selon le modèle, les commandes de régime et d’arrêt.",
                    list: ["Poignée", "Gâchette de commande", "Interrupteur d’arrêt", "Fixation sur le tube"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Tenir et orienter le tube",
                    text: "La poignée aide à tenir le tube et à en orienter l’embout. Les commandes changent selon le modèle.",
                    list: ["Repérer l’arrêt avant usage", "Vérifier les commandes", "Consulter la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Perdre le contrôle du tube",
                    text: "Une poignée desserrée ou une prise instable rend l’orientation du tube moins sûre.",
                    list: ["Vérifier la fixation", "Garder une prise ferme", "Arrêter si une commande est endommagée"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Garder une bonne prise",
                    text: "Des gants adaptés peuvent améliorer la prise. Choisis-les selon la notice et la tâche.",
                    list: ["Gants adaptés", "Protection auditive", "Lunettes ou visière", "Chaussures fermées"]
                }
            },
            harnais: {
                number: "04",
                title: "Le harnais",
                summary: "Il aide à porter le souffleur sur le dos.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Les bretelles et le dossier",
                    text: "Le harnais maintient le souffleur sur le dos et répartit son poids.",
                    list: ["Bretelles réglables", "Dossier rembourré", "Sangles de maintien", "Support du carter"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Répartir le poids",
                    text: "Un harnais ajusté stabilise l’appareil sur le dos. Suis les instructions du fabricant pour le réglage.",
                    list: ["Ajuster les deux bretelles", "Vérifier les attaches", "Demander de l’aide si nécessaire"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Fatigue et perte d’équilibre",
                    text: "Un appareil mal ajusté ou trop lourd peut fatiguer le dos et gêner les déplacements.",
                    list: ["Vérifier l’ajustement avant de commencer", "Garder une posture stable", "Faire une pause en cas de fatigue"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Adapter la tenue au terrain",
                    text: "Le harnais fait partie de l’équipement de la machine ; il ne remplace pas les protections individuelles.",
                    list: ["Protection auditive", "Lunettes de protection", "Chaussures antidérapantes", "Tenue adaptée à la météo"]
                }
            }
        }
    },
    "groupe-electrogene": {
        title: "le groupe électrogène.",
        name: "Le groupe électrogène",
        image: "groupe-electrogene.png",
        alt: "Groupe électrogène orange sur châssis avec moteur, prises de courant et cadre métallique",
        hotspots: {
            moteur: { x: "38%", y: "52%" },
            alternateur: { x: "64%", y: "60%" },
            tableau: { x: "69%", y: "32%" },
            reservoir: { x: "53%", y: "71%" }
        },
        callouts: {
            moteur: { x: "43%", y: "20%" },
            alternateur: { x: "70%", y: "82%" },
            tableau: { x: "76%", y: "12%" },
            reservoir: { x: "42%", y: "88%" }
        },
        epiView: {
            ...epiFigure,
            image: "debroussailleuse-epi.svg",
            alt: "Tenue de sécurité pour l’utilisation d’un groupe électrogène avec protection auditive, lunettes, gants et chaussures de sécurité",
            parts: {
                tete: {
                    number: "01",
                    title: "Protection auditive",
                    summary: "Le moteur thermique du groupe peut être très bruyant pendant le fonctionnement.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger l’ouïe",
                        text: "Choisis des protections auditives adaptées au niveau sonore indiqué dans la notice du groupe électrogène.",
                        list: ["Porter une protection auditive conforme au bruit", "Vérifier son ajustement avant le démarrage", "Suivre les consignes du fabricant"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Lunettes ou visière",
                    summary: "Le démarrage, le contrôle ou le raccordement peuvent provoquer des projections ou des éclats.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les yeux",
                        text: "Porte une protection oculaire adaptée au travail et aux opérations de contrôle ou de raccordement effectuées.",
                        list: ["Choisir des lunettes ou une visière adaptées", "Les garder en place pendant les vérifications", "Éloigner les personnes de la zone de travail"]
                    }
                },
                gants: {
                    number: "03",
                    title: "Gants de manutention",
                    summary: "Des gants adaptés aident à manipuler le groupe ou ses câbles en sécurité.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les mains",
                        text: "Les gants doivent permettre une bonne prise sans gêner les gestes de contrôle ou les branchements.",
                        list: ["Vérifier l’état des gants avant usage", "Les utiliser pour la manutention et le branchement", "Ne pas les porter si le travail nécessite une prise précise et sûre sans gêne"]
                    }
                },
                pantalon: {
                    number: "04",
                    title: "Vêtements couvrants",
                    summary: "Une tenue de travail adaptée couvre et protège contre les poussières et les projections de l’environnement.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Adapter la tenue au chantier",
                        text: "Choisis des vêtements couvrants et ajustés, sans cordons flottants ni objets qui peuvent accrocher les éléments de la machine.",
                        list: ["Éviter les vêtements flottants", "Choisir une tenue adaptée à l’environnement", "Vérifier l’état avant le travail"]
                    }
                },
                chaussures: {
                    number: "05",
                    title: "Chaussures de sécurité",
                    summary: "Des chaussures robustes réduisent les risques de glissade, de choc et de blessure pendant la manutention.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les pieds",
                        text: "Utilise des chaussures de travail qui offrent une bonne adhérence sur le sol et une bonne protection en cas de chute de matériel.",
                        list: ["Vérifier l’adhérence des semelles", "Lacer correctement les chaussures", "Adapter le modèle aux conditions de travail"]
                    }
                }
            }
        },
        usage: {
            title: "Brancher les appareils dans les limites du groupe",
            intro: "Un groupe électrogène sert à alimenter du matériel compatible dans les limites de sa puissance. Le bon emplacement, le bon câblage et les précautions de sécurité font la différence.",
            sections: [
                {
                    title: "À utiliser pour",
                    items: [
                        "Alimenter des appareils extérieurs ou des machines de chantier compatibles avec la puissance du groupe.",
                        "Créer une source temporaire d’électricité sur un site où la prise réseau n’est pas disponible."
                    ]
                },
                {
                    title: "À éviter",
                    items: [
                        "Le faire fonctionner dans un local fermé ou à proximité d’une ouverture d’habitation : les gaz d’échappement sont mortels.",
                        "Brancher plusieurs appareils sans vérifier leur puissance et le câblage prévu par la notice."
                    ]
                },
                {
                    title: "Comment procéder",
                    items: [
                        "Installer le groupe à l’extérieur, ventilé et stable, selon les consignes du fabricant.",
                        "Vérifier la puissance, la mise à la terre, les prises et les câbles avant de mettre les charges sous tension."
                    ]
                }
            ]
        },
        parts: {
            moteur: {
                number: "01",
                title: "Le moteur",
                summary: "Le moteur transforme le carburant en énergie mécanique pour entraîner l’alternateur.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le bloc moteur",
                    text: "Le moteur est la source de puissance du groupe. Sa puissance et son type de carburant doivent correspondre aux usages prévus.",
                    list: ["Bloc moteur", "Système de refroidissement", "Entrées d’air", "Filtre et carburant"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Produire le mouvement",
                    text: "Le moteur tourne et entraîne l’alternateur. Le débit, le refroidissement et la ventilation doivent rester conformes à la notice.",
                    list: ["Vérifier le niveau de carburant", "Contrôler les ouvertures de ventilation", "Laisser refroidir avant l’entretien"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Bruit, chaleur et gaz d’échappement",
                    text: "Un groupe thermique émet du bruit, de la chaleur et des gaz très dangereux. Il ne doit pas fonctionner dans un local fermé.",
                    list: ["Utiliser à l’extérieur", "Éloigner personnes et ouvertures", "Laisser refroidir avant ravitaillement"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Prévenir les risques du moteur",
                    text: "Le bruit et la chaleur imposent des protections adaptées et une bonne ventilation du site.",
                    list: ["Protection auditive", "Chaussures de sécurité", "Tenue couvrante", "Vérification de la zone de travail"]
                }
            },
            alternateur: {
                number: "02",
                title: "L’alternateur",
                summary: "L’alternateur transforme le mouvement du moteur en courant électrique utilisable sur les prises.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le générateur électrique",
                    text: "L’alternateur est la partie qui produit le courant. Il est relié au moteur et aux protections de la machine.",
                    list: ["Alternateur", "Capots de protection", "Branchements électriques", "Mise à la terre selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Produire le courant",
                    text: "Le moteur entraîne l’alternateur qui délivre le courant selon les prises et les protections prévues par la machine.",
                    list: ["Vérifier la puissance disponible", "Contrôler les prises et câbles", "Ne pas dépasser les charges autorisées"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Surcharge et court-circuit",
                    text: "Un branchement inadapté ou une surcharge peut provoquer de la chaleur, un défaut de protection et même un incendie.",
                    list: ["Ne pas dépasser la puissance", "Vérifier les câbles", "Arrêter le groupe avant un contrôle"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Préparer le branchement en sécurité",
                    text: "Le branchement doit être conforme aux caractéristiques du groupe et de l’outil alimenté.",
                    list: ["Protection oculaire", "Gants de manutention", "Chaussures de sécurité", "Niveau de vigilance selon la notice"]
                }
            },
            tableau: {
                number: "03",
                title: "Le tableau de commande",
                summary: "Le tableau indique l’état du groupe et permet de contrôler les sorties et certaines protections.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le panneau de commande",
                    text: "Le tableau regroupe les indications, les commandes et parfois les protections électriques du groupe.",
                    list: ["Prises de sortie", "Indicateurs de tension et fréquence", "Commandes d’arrêt", "Protégés électriques"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Contrôler la production",
                    text: "Il permet de vérifier la bonne marche du groupe et la disponibilité des sorties avant de brancher du matériel.",
                    list: ["Repérer les indicateurs", "Ajuster avant de brancher", "Suivre la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Faux repères et mauvais branchement",
                    text: "Un mauvais réglage ou une erreur de branchement peut envoyer un équipement inadapté sur un point de sortie anormal.",
                    list: ["Lire la notice avant tout branchement", "Ne pas utiliser des prises détériorées", "Débrancher avant l’entretien"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Préparer les manœuvres et les contrôles",
                    text: "Les commandes et les prises doivent être contrôlées avec une posture sûre et des protections adaptées.",
                    list: ["Protection oculaire", "Gants de manutention", "Chaussures de sécurité", "Tenue adaptée au chantier"]
                }
            },
            reservoir: {
                number: "04",
                title: "Le réservoir",
                summary: "Le réservoir contient le carburant utilisé par le moteur pour générer le courant.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le stockage du carburant",
                    text: "Le réservoir doit être conforme au modèle et correctement fermé. L’ajout de carburant se fait hors fonctionnement et après refroidissement.",
                    list: ["Réservoir", "Bouchon de remplissage", "Piste de carburant", "Vérification de fuite"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Alimenter le moteur",
                    text: "Le carburant est acheminé au moteur. Son niveau et son état doivent rester conformes à la notice du groupe.",
                    list: ["Vérifier le niveau avant le travail", "Remplir hors tension", "Respecter le type de carburant indiqué"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Carburant, incendie et intoxication",
                    text: "Le carburant est inflammable. Un mauvais remplissage ou un stockage impropre peut provoquer un incendie ou une intoxication.",
                    list: ["Ne pas remplir sur un moteur chaud", "Garder le carburant loin des flammes", "Ne pas travailler près d’une source de chaleur"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Prendre les précautions nécessaires au ravitaillement",
                    text: "Le ravitaillement doit se faire à l’extérieur, avec des vêtements adaptés et en respectant les consignes de sécurité.",
                    list: ["Gants compatibles pour le carburant", "Chaussures de sécurité", "Tenue couvrante", "Zone de travail dégagée"]
                }
            }
        }
    },
    "taille-haie": {
        title: "le taille-haie thermique.",
        name: "Le taille-haie thermique",
        image: "taille-haie.png",
        alt: "Taille-haie thermique orange : moteur à droite, poignées autour du moteur et longue lame dentée vers la gauche",
        hotspots: {
            moteur: { x: "78%", y: "42%" },
            "poignee-avant": { x: "64%", y: "49%" },
            "poignee-arriere": { x: "91%", y: "42%" },
            lames: { x: "32%", y: "62%" }
        },
        callouts: {
            moteur: { x: "93%", y: "17%" },
            "poignee-avant": { x: "68%", y: "81%" },
            "poignee-arriere": { x: "94%", y: "81%" },
            lames: { x: "6%", y: "73%" }
        },
        epiView: {
            ...epiFigure,
            image: "taille-haie-epi.svg",
            alt: "Tenue pour taille-haie avec lunettes, protections auditives, gants et chaussures robustes, sans casque",
            parts: {
                tete: {
                    number: "01",
                    title: "Protection auditive",
                    summary: "Le moteur thermique peut exposer à un niveau sonore important.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger l’ouïe",
                        text: "Vérifie dans la notice si une protection auditive est requise et choisis-la selon le niveau sonore du taille-haie.",
                        list: ["Porter une protection adaptée", "Vérifier son ajustement", "Faire des pauses dans un lieu calme"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Lunettes ou visière",
                    summary: "La taille peut projeter des brindilles et de petits débris.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger le visage et les yeux",
                        text: "Choisis la protection oculaire indiquée par la notice et adaptée aux projections possibles.",
                        list: ["Porter des lunettes ou une visière compatible", "Vérifier qu’elles sont en bon état", "Garder les personnes à distance"]
                    }
                },
                gants: {
                    number: "03",
                    title: "Gants adaptés",
                    summary: "Des gants adaptés protègent les mains pendant la prise des poignées.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les mains",
                        text: "Choisis des gants adaptés au taille-haie et à la tâche, sans gêner la prise des commandes.",
                        list: ["Vérifier leur état avant le travail", "Garder les mains sur les poignées", "Ne jamais approcher les mains des lames"]
                    }
                },
                pantalon: {
                    number: "04",
                    title: "Vêtements couvrants",
                    summary: "Une tenue ajustée limite les risques d’accrochage et protège des projections.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Choisir une tenue adaptée",
                        text: "Porte des vêtements ajustés et couvrants, adaptés au terrain et aux consignes du fabricant.",
                        list: ["Éviter les vêtements flottants", "Ne pas porter d’accessoires qui pendent", "Contrôler la tenue avant usage"]
                    }
                },
                chaussures: {
                    number: "05",
                    title: "Chaussures robustes",
                    summary: "Des chaussures fermées et antidérapantes contribuent à une position stable.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Assurer une bonne stabilité",
                        text: "Choisis des chaussures adaptées au terrain et aux recommandations de la notice.",
                        list: ["Vérifier l’adhérence", "Lacer les chaussures", "Ne pas travailler sur un appui instable"]
                    }
                }
            }
        },
        usage: {
            title: "Tailler une haie accessible",
            intro: "Le taille-haie est destiné aux haies et branches dont le diamètre reste dans les limites indiquées par le fabricant.",
            sections: [
                { title: "À utiliser pour", items: ["Entretenir des haies et des rameaux compatibles avec l’écartement et la capacité des lames.", "Travailler depuis un appui stable, avec une bonne visibilité de la zone."] },
                { title: "À éviter", items: ["Branches trop épaisses, fils, grillages, végétaux cachés dans la haie et proximité de lignes électriques.", "Échelle ou position instable ; ne pas lever un taille-haie ordinaire au-dessus de soi."] },
                { title: "Comment procéder", items: ["Inspecter la haie, repérer les obstacles et consulter la notice.", "Garder les deux mains sur les poignées ; arrêter la machine avant de dégager un blocage ou de se déplacer."] }
            ]
        },
        parts: {
            moteur: {
                number: "01",
                title: "Le moteur",
                summary: "Il entraîne le mécanisme qui fait bouger les lames.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le bloc moteur",
                    text: "Le moteur thermique entraîne les lames par un mécanisme de transmission.",
                    list: ["Bloc moteur", "Carter", "Interrupteur d’arrêt", "Réservoir de carburant"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Entraîner les lames",
                    text: "Le moteur transmet son mouvement aux lames. Les commandes et le démarrage dépendent de la machine.",
                    list: ["Lire la notice", "Repérer l’arrêt", "Vérifier que les commandes fonctionnent"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Bruit, chaleur et gaz d’échappement",
                    text: "Le moteur thermique est bruyant, chauffe pendant l’utilisation et produit des gaz d’échappement.",
                    list: ["Utiliser à l’extérieur", "Ne pas toucher les parties chaudes", "Laisser refroidir avant le rangement"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Protéger yeux, oreilles et pieds",
                    text: "La notice du fabricant précise les équipements de protection adaptés à ce taille-haie thermique.",
                    list: ["Lunettes ou visière", "Protection auditive", "Gants adaptés", "Chaussures antidérapantes"]
                }
            },
            "poignee-avant": {
                number: "02",
                title: "La poignée avant",
                summary: "Elle aide à tenir et à guider le taille-haie à deux mains.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La poignée de maintien",
                    text: "La poignée avant est située près du protège-main et peut intégrer une commande de sécurité.",
                    list: ["Poignée avant", "Protège-main", "Commande de sécurité, selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Guider l’outil à deux mains",
                    text: "Les poignées permettent de tenir l’appareil à deux mains et de le guider selon les instructions du fabricant.",
                    list: ["Tenir les poignées prévues", "Vérifier les commandes", "Suivre la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Garder les mains loin des lames",
                    text: "La lame est tranchante et peut démarrer lorsque les commandes sont actionnées.",
                    list: ["Ne pas approcher les mains de la lame", "Ne jamais neutraliser une sécurité", "Arrêter avant de déplacer l’outil"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Des gants adaptés",
                    text: "Les protections sont à choisir selon la notice, la haie et les conditions du travail.",
                    list: ["Gants adaptés", "Lunettes ou visière", "Chaussures fermées", "Protection auditive selon le modèle"]
                }
            },
            "poignee-arriere": {
                number: "03",
                title: "La poignée arrière",
                summary: "Elle permet de saisir l’outil et d’accéder aux commandes.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La poignée et ses commandes",
                    text: "La poignée arrière accueille la prise principale et les commandes de marche et d’arrêt.",
                    list: ["Poignée arrière", "Gâchette de commande", "Interrupteur d’arrêt", "Commande de sécurité"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Tenir l’outil et le commander",
                    text: "La prise à deux mains et les commandes de sécurité aident à garder le contrôle du taille-haie.",
                    list: ["Repérer les commandes", "Garder les deux mains sur les poignées", "Respecter la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Démarrage involontaire",
                    text: "Une commande actionnée par erreur peut mettre les lames en mouvement.",
                    list: ["Ne pas transporter l’outil en marche", "Arrêter avant tout déplacement", "Arrêter le moteur avant l’entretien"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Une prise stable",
                    text: "Des gants et des chaussures adaptés favorisent une prise sûre et un bon équilibre.",
                    list: ["Gants adaptés", "Chaussures antidérapantes", "Protection des yeux", "Vêtements ajustés"]
                }
            },
            lames: {
                number: "04",
                title: "Les lames",
                summary: "Les lames dentées coupent les branches de la haie.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La barre de coupe",
                    text: "La barre est composée de lames dentées mobiles. Certaines machines disposent aussi d’un protège-lame.",
                    list: ["Barre de coupe", "Dents de coupe", "Protège-lame", "Butée de protection, selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Des lames qui se déplacent",
                    text: "Les lames se déplacent les unes par rapport aux autres pour couper. Elles restent dangereuses même après l’arrêt.",
                    list: ["Utiliser selon la notice", "Ne jamais toucher les dents", "Mettre le protège-lame pour le rangement"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Coupures et projections",
                    text: "Les lames peuvent causer de graves coupures et projeter de petits débris.",
                    list: ["Garder toute personne à distance", "Ne pas couper près de fils ou objets cachés", "Arrêter avant de dégager un blocage"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Protéger le visage et les mains",
                    text: "Choisis les protections indiquées dans la notice pour les travaux de taille.",
                    list: ["Lunettes ou visière", "Gants adaptés", "Chaussures antidérapantes", "Protection auditive selon le modèle"]
                }
            }
        }
    },
    tronconneuse: {
        title: "la tronçonneuse.",
        name: "La tronçonneuse",
        image: "tronconneuse.png",
        alt: "Tronçonneuse orange et blanche : guide-chaîne vers la gauche, moteur et poignées vers la droite",
        hotspots: {
            moteur: { x: "76%", y: "51%" },
            "poignee-avant": { x: "65%", y: "31%" },
            "poignee-arriere": { x: "90%", y: "51%" },
            "guide-chaine": { x: "26%", y: "54%" }
        },
        callouts: {
            moteur: { x: "92%", y: "82%" },
            "poignee-avant": { x: "62%", y: "12%" },
            "poignee-arriere": { x: "94%", y: "65%" },
            "guide-chaine": { x: "7%", y: "48%" }
        },
        epiView: {
            ...epiFigure,
            image: "tronconneuse-epi.svg",
            alt: "Ensemble forestier pour tronçonneuse avec casque, visière, protections auditives, gants, pantalon anticoupure et chaussures de protection",
            parts: {
                tete: {
                    number: "01",
                    title: "Casque forestier complet",
                    summary: "L’ensemble associe casque, visière et protections auditives.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Porter un casque forestier complet",
                        text: "L’ensemble de tête pour le travail à la tronçonneuse comprend un casque, une visière et des coquilles antibruit compatibles entre elles et avec la machine.",
                        list: ["Vérifier l’assemblage et la compatibilité", "Abaisser la visière et placer les coquilles sur les oreilles", "Contrôler l’état de chaque élément"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Visière intégrée au casque",
                    summary: "La visière du casque forestier protège le visage des projections.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Utiliser la visière de l’ensemble",
                        text: "La visière fait partie du casque forestier représenté. Utilise un ensemble complet, en bon état et compatible ; suis la notice pour toute protection oculaire complémentaire.",
                        list: ["Vérifier la fixation de la visière au casque", "La garder abaissée pendant le travail", "Remplacer les pièces endommagées"]
                    }
                },
                gants: {
                    number: "03",
                    title: "Gants pour tronçonneuse",
                    summary: "Les gants doivent être adaptés à la tronçonneuse et à la tâche.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Choisir les bons gants",
                        text: "Utilise des gants de protection adaptés au travail à la tronçonneuse, conformément à la notice et aux consignes de formation.",
                        list: ["Vérifier l’état et l’ajustement", "Garder les deux mains sur les poignées", "Ne jamais toucher la chaîne"]
                    }
                },
                pantalon: {
                    number: "04",
                    title: "Vêtements anticoupure",
                    summary: "Un pantalon de protection conçu pour la tronçonneuse est indispensable selon la tâche.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Porter un pantalon anticoupure adapté",
                        text: "Choisis un pantalon de protection anticoupure adapté à la tronçonneuse et au travail prévu. Une tenue ordinaire ne le remplace pas.",
                        list: ["Vérifier le type de protection requis", "Contrôler l’état du pantalon", "Suivre la notice et la formation"]
                    }
                },
                chaussures: {
                    number: "05",
                    title: "Chaussures de protection",
                    summary: "Les chaussures doivent être adaptées au travail avec une tronçonneuse.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les pieds",
                        text: "Porte des chaussures de protection spécifiquement adaptées à la tronçonneuse et au terrain.",
                        list: ["Vérifier le niveau de protection requis", "Lacer et ajuster les chaussures", "Les remplacer si elles sont endommagées"]
                    }
                }
            }
        },
        usage: {
            title: "Couper du bois avec une tronçonneuse",
            intro: "La tronçonneuse est réservée à des travaux de coupe du bois pour lesquels l’utilisateur est formé et équipé. Cet aperçu ne remplace jamais une formation pratique.",
            sections: [
                { title: "À utiliser pour", items: ["Coupe de bois dans les conditions prévues par la notice, avec une machine adaptée et un appui stable.", "Faire appel à une personne qualifiée pour choisir la méthode et évaluer le bois."] },
                { title: "À éviter absolument", items: ["Utilisation sans formation, seul lorsqu’un encadrement est requis, sur une échelle ou au-dessus des épaules.", "Bois sous tension, arbres à abattre sans compétence, lignes électriques et toute zone où le rebond ou la chute ne peut être maîtrisé."] },
                { title: "Avant l’utilisation", items: ["Vérifier la machine, ses dispositifs de sécurité et les EPI anticoupure adaptés.", "Si le bois est instable, coincé ou sous tension, ne pas intervenir : demander à une personne qualifiée."] }
            ]
        },
        parts: {
            moteur: {
                number: "01",
                title: "Le moteur",
                summary: "Il entraîne la chaîne autour du guide-chaîne.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le bloc moteur",
                    text: "Le moteur transmet le mouvement à la chaîne. Les commandes et la motorisation varient selon le modèle.",
                    list: ["Carter moteur", "Commande d’arrêt", "Réservoir ou batterie", "Carter de chaîne"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Entraîner la chaîne",
                    text: "Le moteur entraîne la chaîne autour du guide-chaîne. La notice du fabricant décrit les vérifications propres à la machine.",
                    list: ["Identifier le modèle", "Lire la notice avant toute utilisation", "Repérer les commandes sans démarrer la machine"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Un outil particulièrement dangereux",
                    text: "Une tronçonneuse peut causer des blessures très graves. Le moteur peut aussi être chaud, bruyant et produire des gaz.",
                    list: ["Ne pas apprendre à l’utiliser seul", "Ne pas toucher aux parties chaudes", "Utiliser uniquement avec une formation et un encadrement adaptés"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Des protections spécifiques",
                    text: "Les EPI doivent être adaptés au modèle et à la tâche. Suis la notice et les consignes d’une personne qualifiée.",
                    list: ["Casque avec protection du visage et de l’ouïe", "Pantalon de protection anticoupure adapté", "Gants adaptés", "Chaussures de sécurité adaptées à la tronçonneuse"]
                }
            },
            "poignee-avant": {
                number: "02",
                title: "La poignée avant",
                summary: "Elle sert à maintenir la machine à deux mains et porte le protège-main.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La poignée et le protège-main",
                    text: "La poignée avant entoure la machine. Le protège-main se trouve près de la zone de frein de chaîne.",
                    list: ["Poignée avant", "Protège-main", "Commande de frein de chaîne", "Points de fixation"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Une prise à deux mains",
                    text: "Les poignées sont conçues pour tenir la machine à deux mains. L’apprentissage des gestes doit se faire avec une personne formée.",
                    list: ["Repérer les commandes à l’arrêt", "Consulter la notice du fabricant", "Demander un encadrement qualifié"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Contact avec la chaîne",
                    text: "La chaîne reste une source de blessures graves. Une mauvaise prise peut faire perdre le contrôle de l’outil.",
                    list: ["Ne jamais neutraliser un dispositif de sécurité", "Ne pas utiliser si la poignée est endommagée", "Ne pas manipuler la machine sans formation"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Protéger les mains et le haut du corps",
                    text: "Les protections exigées varient selon la machine et le travail envisagé.",
                    list: ["Gants adaptés à la tronçonneuse", "Veste ou tenue de protection adaptée", "Casque et protection du visage", "Protection auditive"]
                }
            },
            "poignee-arriere": {
                number: "03",
                title: "La poignée arrière",
                summary: "Elle regroupe la poignée de maintien et des commandes de la machine.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La poignée de commande",
                    text: "Les commandes d’accélération et d’arrêt se trouvent généralement près de la poignée arrière.",
                    list: ["Poignée arrière", "Gâchette d’accélération", "Commande d’arrêt", "Sécurité de gâchette"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Identifier les commandes",
                    text: "La disposition des commandes dépend du modèle. Repère-les uniquement machine arrêtée et avec la notice.",
                    list: ["Lire les consignes du fabricant", "Vérifier l’état des poignées", "Confier l’apprentissage des gestes à une personne qualifiée"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Démarrage ou accélération involontaire",
                    text: "Une commande défectueuse ou actionnée par erreur peut mettre la chaîne en mouvement.",
                    list: ["Ne pas utiliser une commande abîmée", "Ne pas transporter la machine en fonctionnement", "Ne jamais travailler seul lorsqu’un encadrement est requis"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Une tenue complète et adaptée",
                    text: "Les équipements de protection ne remplacent ni la formation ni les consignes du fabricant.",
                    list: ["Vêtements de protection anticoupure adaptés", "Gants appropriés", "Chaussures de protection", "Casque, visière et protection auditive"]
                }
            },
            "guide-chaine": {
                number: "04",
                title: "Le guide-chaîne et la chaîne",
                summary: "La chaîne circule autour du guide-chaîne pour effectuer la coupe.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le guide-chaîne et ses maillons",
                    text: "Le guide-chaîne soutient la chaîne, dont les maillons coupants circulent autour de lui.",
                    list: ["Guide-chaîne", "Chaîne coupante", "Maillons", "Protège-guide pour le rangement"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Une chaîne en mouvement",
                    text: "La chaîne se déplace à grande vitesse. Son entretien et son montage sont réservés aux consignes de la notice et à une personne formée.",
                    list: ["Ne jamais toucher la chaîne", "Ne pas modifier les réglages sans formation", "Garder le protège-guide pour le rangement"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Coupure et rebond",
                    text: "La chaîne peut causer des blessures mortelles. Le contact avec le nez du guide-chaîne peut provoquer un rebond soudain.",
                    list: ["Ne pas utiliser sans formation", "Ne jamais approcher les mains de la chaîne", "Ne pas manipuler la chaîne quand la machine peut démarrer", "Garder les personnes à distance"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Protections certifiées pour la tâche",
                    text: "La protection anticoupure et le reste des EPI doivent être spécifiquement choisis pour le travail prévu.",
                    list: ["Pantalon anticoupure adapté", "Chaussures de sécurité adaptées", "Casque avec visière", "Protection auditive et gants"]
                }
            }
        }
    },
    tondeuse: {
        title: "la tondeuse.",
        name: "La tondeuse",
        image: "tondeuse.png",
        alt: "Tondeuse à gazon orange et blanche : moteur au-dessus du carter, guidon à l’arrière et bac de ramassage",
        hotspots: {
            moteur: { x: "49%", y: "57%" },
            guidon: { x: "70%", y: "22%" },
            carter: { x: "49%", y: "78%" },
            bac: { x: "73%", y: "55%" }
        },
        callouts: {
            moteur: { x: "22%", y: "69%" },
            guidon: { x: "88%", y: "12%" },
            carter: { x: "35%", y: "91%" },
            bac: { x: "89%", y: "54%" }
        },
        epiView: {
            ...epiFigure,
            image: "tondeuse-epi.svg",
            alt: "Tenue adaptée à la tonte avec un casque antibruit, sans casque de chantier, visière ni lunettes ; pantalon long et chaussures fermées",
            hotspots: {
                tete: { x: "78%", y: "14.2%" },
                gants: { x: "25%", y: "54%" },
                pantalon: { x: "78%", y: "71.1%" },
                chaussures: { x: "25%", y: "91%" }
            },
            targets: {
                tete: { x: "54%", y: "22%" },
                gants: { x: "38.75%", y: "55.7%" },
                pantalon: { x: "54.25%", y: "71.1%" },
                chaussures: { x: "46%", y: "91%" }
            },
            parts: {
                tete: {
                    number: "01",
                    title: "Casque antibruit",
                    summary: "Une protection auditive adaptée peut être nécessaire selon le bruit de la tondeuse.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger l’ouïe",
                        text: "La protection représentée est un casque antibruit, pas un casque de chantier. Porte-le si le niveau sonore de la machine ou sa notice le recommande ; la visière n’est pas montrée.",
                        list: ["Vérifier le niveau sonore dans la notice", "Porter une protection auditive si elle est recommandée", "Choisir un modèle bien ajusté"]
                    }
                },
                gants: {
                    number: "02",
                    title: "Gants de travail",
                    summary: "Des gants peuvent protéger les mains lors des manipulations machine arrêtée.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les mains",
                        text: "Les gants ne sont pas systématiquement nécessaires pour tondre. Utilise-les pour les manipulations prévues lorsque la machine est complètement arrêtée, jamais près d’une lame en mouvement.",
                        list: ["Arrêter la tondeuse avant toute manipulation", "Ne jamais approcher les mains du carter", "Suivre la notice pour l’entretien"]
                    }
                },
                pantalon: {
                    number: "03",
                    title: "Pantalon long de travail",
                    summary: "Un pantalon long et ajusté protège des projections pendant la tonte.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Un pantalon long, pas anticoupure",
                        text: "Un pantalon long et ajusté peut protéger des projections. Un pantalon anticoupure conçu pour la tronçonneuse n’est pas un EPI habituel pour une tonte ordinaire.",
                        list: ["Éviter les vêtements flottants", "Choisir une tenue adaptée à la météo", "Suivre la notice de la tondeuse"]
                    }
                },
                chaussures: {
                    number: "04",
                    title: "Chaussures fermées et robustes",
                    summary: "Des chaussures stables et fermées protègent les pieds pendant la tonte.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les pieds",
                        text: "Porte des chaussures robustes, fermées et adaptées au terrain. Ne tonds pas en sandales ou pieds nus.",
                        list: ["Vérifier l’adhérence des semelles", "Lacer les chaussures", "Garder les pieds loin du carter de coupe"]
                    }
                }
            }
        },
        usage: {
            title: "Tondre une pelouse",
            intro: "La tondeuse sert à entretenir une pelouse sur un terrain compatible avec le modèle ; elle ne remplace pas une débroussailleuse pour les broussailles.",
            sections: [
                { title: "À utiliser pour", items: ["Herbe de pelouse à une hauteur que la tondeuse peut couper sans forcer.", "Terrain dégagé, stable et dans les limites de pente de la notice."] },
                { title: "À éviter", items: ["Broussailles, herbe très haute ou végétaux ligneux : choisir un outil adapté.", "Herbe mouillée ou sol glissant, objets cachés, forte pente et présence de personnes ou d’animaux dans la zone."] },
                { title: "Comment procéder", items: ["Retirer les objets de la pelouse et vérifier les protections avant le démarrage.", "Garder pieds et mains loin du carter ; arrêter le moteur avant de vider le bac ou de dégager un blocage."] }
            ]
        },
        parts: {
            moteur: {
                number: "01",
                title: "Le moteur",
                summary: "Il entraîne la lame de coupe et, selon le modèle, les roues.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La motorisation",
                    text: "La tondeuse de la photo possède un moteur thermique. D’autres modèles fonctionnent sur batterie ou sur secteur.",
                    list: ["Bloc moteur", "Commande d’arrêt", "Réservoir, sur ce modèle", "Batterie ou câble, selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Entraîner la coupe",
                    text: "Le moteur entraîne la lame sous le carter. Les commandes et la procédure de démarrage dépendent du modèle.",
                    list: ["Consulter la notice", "Repérer l’arrêt", "Garder les commandes accessibles"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Bruit, chaleur et démarrage",
                    text: "Le moteur thermique peut être chaud et bruyant. La lame peut tourner lorsque le moteur fonctionne.",
                    list: ["Ne pas toucher aux parties chaudes", "Éloigner carburant et flamme", "Arrêter avant tout contrôle", "Ne pas laisser la machine en marche sans surveillance"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Protéger les yeux et les pieds",
                    text: "Choisis les protections selon le modèle, le terrain et les indications du fabricant.",
                    list: ["Lunettes de protection", "Chaussures fermées et antidérapantes", "Protection auditive selon le modèle", "Tenue adaptée au terrain"]
                }
            },
            guidon: {
                number: "02",
                title: "Le guidon",
                summary: "Il permet de tenir et de guider la tondeuse derrière soi.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La poignée et les commandes",
                    text: "Le guidon relie les poignées de l’utilisateur au châssis. Les commandes varient selon la tondeuse.",
                    list: ["Poignées", "Levier de commande", "Commande d’arrêt", "Fixations du guidon"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Guider la tondeuse",
                    text: "Le guidon permet de pousser et de diriger la machine en marchant derrière elle.",
                    list: ["Tenir les poignées prévues", "Garder une allure contrôlée", "Suivre les instructions du fabricant"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Perte de contrôle",
                    text: "Une pente, un sol glissant ou un guidon mal fixé peut rendre la tondeuse difficile à maîtriser.",
                    list: ["Vérifier le guidon avant usage", "Ne pas tondre sur un terrain instable", "Arrêter si une commande est abîmée"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Garder une bonne stabilité",
                    text: "Les vêtements et les chaussures doivent convenir aux déplacements et aux risques de projection.",
                    list: ["Chaussures fermées antidérapantes", "Lunettes de protection", "Vêtements ajustés", "Protection auditive selon le modèle"]
                }
            },
            carter: {
                number: "03",
                title: "Le carter de coupe",
                summary: "Il couvre la lame et entoure la zone de coupe.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le carter et la lame",
                    text: "Le carter recouvre la lame rotative et dirige l’herbe coupée vers la sortie prévue.",
                    list: ["Carter de coupe", "Lame sous le carter", "Déflecteur", "Réglage de hauteur, selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Couper sous le carter",
                    text: "La lame tourne sous le carter pendant la tonte. La lame et le carter ne doivent jamais être manipulés en fonctionnement.",
                    list: ["Ne jamais retirer le carter", "Ne pas tondre sans les dispositifs prévus", "Consulter la notice pour l’entretien"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Lame et projections",
                    text: "La lame peut causer de graves blessures et projeter des pierres ou des débris.",
                    list: ["Garder mains et pieds loin du carter", "Éloigner les personnes", "Arrêter le moteur avant de dégager un blocage", "Ne jamais soulever la tondeuse en marche"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Se protéger des projections",
                    text: "La tonte peut projeter des objets et exposer au bruit.",
                    list: ["Lunettes de protection", "Chaussures fermées et robustes", "Protection auditive selon le modèle", "Tenue adaptée"]
                }
            },
            bac: {
                number: "04",
                title: "Le bac de ramassage",
                summary: "Il recueille l’herbe coupée à l’arrière de la tondeuse.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le bac et son déflecteur",
                    text: "Le bac se fixe à l’arrière de la tondeuse, derrière la sortie d’herbe.",
                    list: ["Bac de ramassage", "Poignée du bac", "Attaches", "Déflecteur de sortie"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Récupérer l’herbe coupée",
                    text: "Le bac recueille l’herbe projetée vers la sortie. Son retrait ou sa remise en place dépend des consignes du fabricant.",
                    list: ["Arrêter la machine avant manipulation", "Vérifier que le bac est correctement fixé", "Respecter la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Ne jamais accéder à la sortie en marche",
                    text: "La sortie d’herbe est proche de la lame. Un bac mal fixé peut aussi exposer à des projections.",
                    list: ["Arrêter le moteur avant de retirer le bac", "Ne pas introduire la main dans la sortie", "Ne pas utiliser si une protection manque"]
                },
                epi: {
                    eyebrow: "ÉQUIPEMENTS DE PROTECTION",
                    title: "Des protections pour la tonte",
                    text: "Choisis les EPI selon la tondeuse, la hauteur de l’herbe et les consignes du fabricant.",
                    list: ["Lunettes de protection", "Chaussures robustes", "Protection auditive si nécessaire", "Gants pour manipuler le bac arrêté"]
                }
            }
        }
    },
    "tondeuse-autoportee": {
        title: "la tondeuse autoportée.",
        name: "La tondeuse autoportée",
        image: "tondeuse-autoportee.png",
        alt: "Tondeuse autoportée orange avec moteur à l’avant, volant, siège, plateau de coupe sous le châssis, roues et bac de ramassage arrière",
        hotspots: {
            moteur: { x: "29%", y: "36%" },
            volant: { x: "46%", y: "22%" },
            siege: { x: "60%", y: "26%" },
            coupe: { x: "57%", y: "77%" },
            roues: { x: "75%", y: "67%" },
            bac: { x: "86%", y: "45%" }
        },
        callouts: {
            moteur: { x: "8%", y: "18%" },
            volant: { x: "8%", y: "48%" },
            siege: { x: "92%", y: "13%" },
            coupe: { x: "8%", y: "83%" },
            roues: { x: "92%", y: "73%" },
            bac: { x: "92%", y: "43%" }
        },
        epiView: {
            ...epiFigure,
            image: "souffleur-epi.svg",
            alt: "Équipements indicatifs pour tondre avec une tondeuse autoportée : protection des yeux, protection auditive selon le niveau sonore, gants pour les vérifications à l’arrêt, pantalon couvrant et chaussures robustes",
            parts: {
                tete: {
                    number: "01",
                    title: "Protection auditive",
                    summary: "Le moteur et les lames peuvent produire un bruit important.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger l’ouïe",
                        text: "Choisis une protection auditive selon le niveau sonore de la machine, la durée de tonte et les consignes du fabricant.",
                        list: ["Consulter la notice", "Porter une protection adaptée au niveau sonore", "Vérifier l’ajustement avant de démarrer"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Protection des yeux",
                    summary: "Des lunettes adaptées protègent des projections de débris.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les yeux",
                        text: "Les lames peuvent projeter des pierres ou des débris autour de la tondeuse.",
                        list: ["Porter des lunettes adaptées aux projections", "Vérifier qu’elles sont propres et en bon état", "Éloigner les personnes et animaux de la zone"]
                    }
                },
                gants: {
                    number: "03",
                    title: "Gants pour les contrôles",
                    summary: "Les gants servent aux manipulations et contrôles lorsque la machine est arrêtée.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les mains à l’arrêt",
                        text: "Les gants ne protègent pas d’une lame en mouvement. Arrête le moteur, retire la clé et isole la machine selon la notice avant tout contrôle.",
                        list: ["Ne jamais approcher les mains du plateau en marche", "Attendre l’arrêt complet des lames", "Suivre les instructions du fabricant"]
                    }
                },
                pantalon: {
                    number: "04",
                    title: "Pantalon couvrant",
                    summary: "Une tenue ajustée protège des projections sans gêner la conduite.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Adapter sa tenue",
                        text: "Porte un pantalon long et des vêtements ajustés qui ne risquent pas de se prendre dans les commandes ou les pièces mobiles.",
                        list: ["Éviter les vêtements flottants", "Adapter la tenue à la météo", "Respecter les recommandations de la notice"]
                    }
                },
                chaussures: {
                    number: "05",
                    title: "Chaussures robustes",
                    summary: "Des chaussures fermées aident à garder le contrôle des pédales et à protéger les pieds.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les pieds",
                        text: "Porte des chaussures fermées, robustes et antidérapantes pour monter, descendre et conduire la machine en sécurité.",
                        list: ["Vérifier l’adhérence des semelles", "Garder les pieds sur les repose-pieds prévus", "Ne pas tondre en sandales ou pieds nus"]
                    }
                }
            }
        },
        usage: {
            title: "Tondre une grande pelouse",
            intro: "La tondeuse autoportée est conçue pour tondre de grandes surfaces compatibles avec le modèle. La pente, la largeur de coupe, la hauteur d’herbe et les conditions du terrain doivent respecter strictement la notice.",
            sections: [
                {
                    title: "Avant de commencer",
                    items: [
                        "Lire la notice, vérifier les commandes, les freins, les pneus, le plateau de coupe et les dispositifs de sécurité.",
                        "Inspecter et dégager la pelouse ; repérer les personnes, animaux, obstacles, trous et pentes.",
                        "Régler le siège et porter les protections adaptées, notamment lunettes, protection auditive selon le niveau sonore et chaussures fermées."
                    ]
                },
                {
                    title: "Pendant la tonte",
                    items: [
                        "S’asseoir sur le siège pour démarrer et tondre ; garder les mains et les pieds aux commandes prévues.",
                        "Conduire à vitesse maîtrisée et suivre les limites de pente et les consignes spécifiques de la notice.",
                        "Arrêter les lames et le moteur avant de descendre, vider le bac ou vérifier un blocage."
                    ]
                },
                {
                    title: "À ne pas faire",
                    items: [
                        "Ne pas transporter de passager si la machine n’est pas conçue pour cela.",
                        "Ne jamais tondre en marche arrière sauf si la machine le permet explicitement et que la zone est parfaitement contrôlée.",
                        "Ne pas utiliser sur une pente, un terrain instable ou une herbe trop haute au-delà des limites du fabricant."
                    ]
                }
            ]
        },
        parts: {
            moteur: {
                number: "01",
                title: "Le moteur",
                summary: "Il entraîne le plateau de coupe et les roues motrices.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La motorisation à l’avant",
                    text: "Le capot avant abrite la motorisation de cette tondeuse autoportée. Le type et les commandes varient selon le modèle.",
                    list: ["Moteur", "Capot", "Réservoir, selon la version", "Commandes de démarrage et d’arrêt"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Entraîner la machine",
                    text: "Le moteur fournit l’énergie aux organes de coupe et de déplacement selon la transmission et les commandes du modèle.",
                    list: ["Démarrer depuis le siège selon la notice", "Repérer les commandes d’arrêt", "Respecter les contrôles d’entretien"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Chaleur, bruit et gaz",
                    text: "Le moteur peut chauffer et être bruyant ; un moteur thermique émet des gaz d’échappement.",
                    list: ["Ne pas toucher les parties chaudes", "Ne pas faire fonctionner dans un local fermé", "Laisser refroidir avant ravitaillement", "Porter une protection auditive si nécessaire"]
                }
            },
            volant: {
                number: "02",
                title: "Le volant et les commandes",
                summary: "Ils permettent de diriger et de commander la tondeuse.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La conduite",
                    text: "Le volant dirige les roues. Les pédales et leviers commandent l’avancement, le freinage ou les lames selon le modèle.",
                    list: ["Volant", "Pédales", "Levier de frein ou de stationnement", "Commande de coupe"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Diriger et maîtriser",
                    text: "Les commandes permettent de guider la machine et de contrôler sa vitesse. Leur usage dépend du modèle.",
                    list: ["Repérer les commandes avant de démarrer", "Conduire à vitesse modérée", "Suivre la séquence de démarrage de la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Perte de contrôle",
                    text: "Une pente, un virage brusque ou une commande mal maîtrisée peut entraîner une perte de stabilité ou une collision.",
                    list: ["Respecter les limites de pente", "Éviter les manœuvres brusques", "Garder la zone de conduite dégagée"]
                }
            },
            siege: {
                number: "03",
                title: "Le siège",
                summary: "Il accueille le conducteur et peut intégrer un dispositif de sécurité.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le poste de conduite",
                    text: "Le siège est placé au-dessus du châssis. Certains modèles détectent la présence du conducteur pour autoriser le fonctionnement.",
                    list: ["Siège réglable", "Capteur de présence, selon le modèle", "Réglage de position", "Ceinture, si prévue par le fabricant"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Conduire depuis le siège",
                    text: "Le conducteur doit être assis pour utiliser la machine. Les sécurités associées au siège doivent rester actives.",
                    list: ["Régler le siège avant le démarrage", "Rester assis pendant la tonte", "Utiliser la ceinture uniquement si la notice la prévoit"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Chute ou démarrage inattendu",
                    text: "Quitter le siège alors que les lames ou la transmission fonctionnent peut provoquer un accident.",
                    list: ["Arrêter les lames avant de descendre", "Serrer le frein de stationnement", "Ne jamais neutraliser le capteur de siège"]
                }
            },
            coupe: {
                number: "04",
                title: "Le plateau de coupe",
                summary: "Il abrite les lames qui coupent l’herbe.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le carter de coupe",
                    text: "Le plateau se trouve sous la machine et protège la zone des lames. Sa largeur et son réglage varient selon le modèle.",
                    list: ["Carter du plateau", "Lames sous le carter", "Réglage de hauteur", "Goulotte d’éjection"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Couper l’herbe",
                    text: "Les lames tournent sous le plateau lorsque la commande de coupe est activée.",
                    list: ["Régler la hauteur selon la notice", "Vérifier la zone avant d’engager les lames", "Désengager les lames avant toute descente"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Lames et projections",
                    text: "Les lames peuvent causer de graves blessures et projeter pierres ou débris.",
                    list: ["Garder mains et pieds loin du plateau", "Ne jamais retirer le carter", "Arrêter et isoler avant un contrôle", "Éloigner les tiers"]
                }
            },
            roues: {
                number: "05",
                title: "Les roues",
                summary: "Elles supportent la machine et assurent son déplacement.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Roues et pneus",
                    text: "Les roues transmettent le déplacement au sol. Leur adhérence et leur pression contribuent à la stabilité.",
                    list: ["Pneus avant", "Roues motrices arrière", "Jantes", "Valve et pression indiquée"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Se déplacer sur le terrain",
                    text: "Les roues assurent le déplacement et la direction, selon la transmission et les commandes de la machine.",
                    list: ["Vérifier les pneus avant usage", "Adapter la conduite au terrain", "Respecter les limites de pente"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Glissade et renversement",
                    text: "Une perte d’adhérence ou un dévers peut déstabiliser la tondeuse autoportée.",
                    list: ["Ne pas tondre sur terrain glissant", "Éviter les dévers non autorisés", "Ne pas effectuer de virage brusque"]
                }
            },
            bac: {
                number: "06",
                title: "Le bac de ramassage",
                summary: "Il recueille l’herbe coupée à l’arrière de la machine.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le collecteur arrière",
                    text: "Le bac collecte l’herbe éjectée par le plateau. Sa capacité et son système de vidage dépendent de la version.",
                    list: ["Bac de ramassage", "Trappe ou déflecteur", "Poignée ou commande de vidage", "Capteur de bac, selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Collecter et vider",
                    text: "L’herbe est acheminée du plateau vers le bac. La procédure de vidage peut se faire depuis le siège sur certains modèles.",
                    list: ["Vérifier la fixation du bac", "Suivre la procédure de vidage du fabricant", "Désengager les lames avant d’intervenir"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Accès à l’éjection",
                    text: "La goulotte est proche des lames et peut être obstruée par de l’herbe.",
                    list: ["Ne jamais introduire la main dans la goulotte", "Arrêter et isoler avant de dégager un bourrage", "Ne pas utiliser sans bac ou déflecteur prévu"]
                }
            }
        }
    },
    "nettoyeur-haute-pression": {
        title: "le nettoyeur haute pression.",
        name: "Le nettoyeur haute pression",
        image: "nettoyeur-haute-pression.png",
        alt: "Nettoyeur haute pression sur roues avec moteur et pompe, flexible enroulé, pistolet, lance et réservoir de détergent",
        hotspots: {
            pistolet: { x: "42%", y: "17%" },
            flexible: { x: "58%", y: "26%" },
            pompe: { x: "55%", y: "46%" },
            lance: { x: "36%", y: "62%" },
            chassis: { x: "66%", y: "80%" },
            arrivee: { x: "47%", y: "83%" }
        },
        callouts: {
            pistolet: { x: "8%", y: "12%" },
            flexible: { x: "92%", y: "12%" },
            pompe: { x: "92%", y: "45%" },
            lance: { x: "8%", y: "70%" },
            chassis: { x: "92%", y: "84%" },
            arrivee: { x: "8%", y: "91%" }
        },
        epiView: {
            image: "nettoyeur-haute-pression-epi.svg",
            alt: "Illustration indicative des équipements de protection : lunettes, protection auditive, gants, vêtements couvrants et chaussures fermées ; à adapter à la notice du nettoyeur",
            hotspots: {
                tete: { x: "8%", y: "13%" },
                yeux: { x: "92%", y: "25%" },
                mains: { x: "8%", y: "54%" },
                tenue: { x: "92%", y: "58%" },
                chaussures: { x: "8%", y: "90%" }
            },
            targets: {
                tete: { x: "54%", y: "22%" },
                yeux: { x: "50%", y: "24%" },
                mains: { x: "38.75%", y: "55.7%" },
                tenue: { x: "50%", y: "43%" },
                chaussures: { x: "46%", y: "91%" }
            },
            parts: {
                tete: {
                    number: "01",
                    title: "Protection auditive",
                    summary: "Une protection auditive est à prévoir si le niveau sonore ou la notice le recommande.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger l’ouïe si nécessaire",
                        text: "Le bruit dépend du modèle et du lieu d’utilisation. Vérifie le niveau sonore et les consignes du fabricant avant de choisir une protection auditive.",
                        list: ["Consulter la notice", "Choisir une protection adaptée au niveau sonore", "S’assurer qu’elle reste bien ajustée"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Lunettes de protection",
                    summary: "Elles protègent les yeux des éclaboussures et des débris décollés par le jet.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les yeux",
                        text: "Le nettoyage haute pression peut projeter de l’eau, des salissures et de petits débris vers le visage.",
                        list: ["Porter des lunettes adaptées aux projections", "Vérifier qu’elles sont en bon état", "Garder les personnes à distance de la zone"]
                    }
                },
                mains: {
                    number: "03",
                    title: "Gants adaptés",
                    summary: "Les gants peuvent protéger des éclaboussures et des produits compatibles utilisés.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Choisir des gants compatibles",
                        text: "Choisis des gants adaptés à l’eau et, si nécessaire, au produit de nettoyage. Ils ne protègent pas d’un jet haute pression : ne dirige jamais la lance vers les mains.",
                        list: ["Vérifier la compatibilité avec le produit", "Remplacer les gants abîmés", "Ne jamais approcher les mains de la buse"]
                    }
                },
                tenue: {
                    number: "04",
                    title: "Vêtements couvrants",
                    summary: "Une tenue adaptée protège des éclaboussures et des salissures.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Adapter sa tenue",
                        text: "Porte des vêtements couvrants adaptés à l’eau et au produit éventuellement utilisé, sans éléments flottants qui pourraient gêner le travail.",
                        list: ["Adapter les vêtements à la météo et à la tâche", "Suivre l’étiquette du produit si utilisé", "Remplacer les vêtements détrempés si nécessaire"]
                    }
                },
                chaussures: {
                    number: "05",
                    title: "Chaussures antidérapantes",
                    summary: "Elles aident à conserver l’équilibre sur un sol mouillé.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Éviter les glissades",
                        text: "L’eau et les salissures rendent le sol glissant. Choisis des chaussures fermées avec une semelle adaptée au terrain.",
                        list: ["Porter des chaussures fermées", "Vérifier l’adhérence des semelles", "Garder la zone de passage dégagée"]
                    }
                }
            }
        },
        usage: {
            title: "Nettoyer avec un jet adapté",
            intro: "Le nettoyeur projette de l’eau sous pression pour décoller les salissures sur des surfaces compatibles. La pression, le débit, la buse et la résistance du support déterminent le résultat : une pression plus élevée n’est pas toujours adaptée.",
            sections: [
                {
                    title: "Avant de commencer",
                    items: [
                        "Lire la notice, vérifier le flexible et les raccords, puis alimenter l’appareil avec l’eau prescrite.",
                        "Éloigner les personnes et protéger les prises, objets fragiles et surfaces sensibles.",
                        "Porter des lunettes contre les projections, des chaussures antidérapantes et des vêtements couvrants ; ajouter une protection auditive si la notice l’exige et des gants compatibles avec le produit de nettoyage éventuel."
                    ]
                },
                {
                    title: "Pendant le nettoyage",
                    items: [
                        "Tester sur une petite zone discrète et régler buse, pression et distance selon le support et la notice.",
                        "Tenir le pistolet et la lance comme indiqué par le fabricant ; garder les personnes à l’écart de la zone.",
                        "Couper l’alimentation et relâcher la pression selon la notice avant de changer un accessoire."
                    ]
                },
                {
                    title: "À ne pas faire",
                    items: [
                        "Ne jamais diriger le jet vers une personne, un animal ou soi-même : il peut provoquer une blessure grave.",
                        "Ne pas utiliser près d’une installation électrique sous tension ni sur un support non compatible.",
                        "Ne pas faire tourner la pompe à sec et ne pas improviser une réparation du flexible haute pression."
                    ]
                }
            ]
        },
        parts: {
            pistolet: {
                number: "01",
                title: "Le pistolet",
                summary: "Il permet de commander le jet d’eau depuis la poignée.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La poignée et sa commande",
                    text: "Le pistolet est relié au flexible et à la lance. Sa gâchette commande l’arrivée d’eau selon le modèle.",
                    list: ["Poignée", "Gâchette", "Verrouillage éventuel", "Raccord de lance"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Commander l’eau",
                    text: "La commande déclenche ou arrête le jet selon la conception de la machine. Repère son fonctionnement et son verrouillage dans la notice.",
                    list: ["Tenir fermement la poignée", "Repérer la commande d’arrêt", "Suivre la procédure de mise en pression"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Un jet qui peut blesser",
                    text: "Un jet haute pression peut pénétrer la peau et causer une blessure grave, même si la plaie paraît petite.",
                    list: ["Ne jamais viser une personne ou un animal", "Ne pas approcher la main de la buse", "Consulter rapidement un professionnel de santé après une injection d’eau"]
                }
            },
            flexible: {
                number: "02",
                title: "Le flexible",
                summary: "Il conduit l’eau sous pression entre la machine et le pistolet.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le tuyau et ses raccords",
                    text: "Le flexible haute pression relie la sortie de la pompe au pistolet. Il doit être compatible avec l’appareil.",
                    list: ["Flexible haute pression", "Raccord côté machine", "Raccord côté pistolet", "Enrouleur, sur ce modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Acheminer l’eau",
                    text: "Le flexible achemine l’eau pressurisée sans fuite lorsque les raccords sont correctement montés et en bon état.",
                    list: ["Dérouler et disposer le tuyau sans le plier", "Vérifier les raccords avant le démarrage", "Respecter les limites de pression de la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Fuite ou rupture sous pression",
                    text: "Un flexible usé ou endommagé peut fuir ou se rompre sous la pression.",
                    list: ["Ne pas toucher une fuite sous pression", "Retirer du service un flexible coupé ou boursouflé", "Dépressuriser avant de débrancher"]
                }
            },
            pompe: {
                number: "03",
                title: "Le moteur et la pompe",
                summary: "Ils fournissent l’énergie et mettent l’eau en pression.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le bloc moteur-pompe",
                    text: "Sur la photo, un moteur électrique entraîne la pompe. D’autres modèles peuvent avoir une motorisation différente.",
                    list: ["Moteur", "Pompe", "Sélecteur de fonctionnement", "Réservoir de détergent, selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Mettre l’eau en pression",
                    text: "Le moteur entraîne la pompe, qui pressurise l’eau avant son passage dans le flexible et la lance.",
                    list: ["Raccorder l’eau comme indiqué", "Purger l’air selon la notice", "Ne jamais faire fonctionner la pompe à sec"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Eau, électricité et pièces chaudes",
                    text: "Le modèle photographié est électrique : l’eau et l’électricité imposent de respecter strictement les consignes du fabricant.",
                    list: ["Inspecter le câble et la prise avant usage", "Garder les raccordements électriques au sec", "Débrancher avant tout contrôle ou changement d’accessoire"]
                }
            },
            lance: {
                number: "04",
                title: "La lance et la buse",
                summary: "Elles dirigent le jet et en déterminent la forme selon l’accessoire.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le tube de projection",
                    text: "La lance prolonge le pistolet. La buse ou l’accessoire monté détermine le jet, selon les possibilités du nettoyeur.",
                    list: ["Lance", "Buse", "Accessoire compatible", "Raccord de fixation"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Adapter le jet au support",
                    text: "La forme du jet, la distance et la pression influencent le nettoyage et le risque d’endommager la surface.",
                    list: ["Choisir uniquement une buse autorisée", "Commencer à distance sur une zone discrète", "Respecter les réglages de la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Projections et détérioration",
                    text: "Le jet peut projeter des débris, abîmer un revêtement ou endommager des joints et des matériaux fragiles.",
                    list: ["Porter une protection oculaire", "Éloigner les personnes de la zone", "Ne jamais déboucher la buse sous pression"]
                }
            },
            chassis: {
                number: "05",
                title: "Le châssis et les roues",
                summary: "Ils soutiennent la machine et facilitent son déplacement.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le support de l’appareil",
                    text: "Le châssis porte le moteur-pompe et les accessoires. Les roues et la poignée servent au déplacement.",
                    list: ["Châssis", "Roues", "Poignée de transport", "Pieds d’appui"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Déplacer et stabiliser",
                    text: "Les roues facilitent le déplacement sur un sol adapté ; la machine doit rester stable pendant son utilisation.",
                    list: ["Déplacer l’appareil par sa poignée", "Le poser sur une surface stable", "Ranger le flexible sans le tendre ni l’écraser"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Glissade et basculement",
                    text: "L’eau peut rendre le sol glissant et un appareil mal placé peut basculer ou tirer sur le flexible.",
                    list: ["Garder une zone de passage dégagée", "Éviter les surfaces instables", "Ne pas tirer l’appareil par le câble ou le flexible"]
                }
            },
            arrivee: {
                number: "06",
                title: "L’arrivée d’eau",
                summary: "Elle alimente la pompe en eau par un raccord adapté.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le raccord d’alimentation",
                    text: "L’eau arrive à la machine par un raccord et un filtre éventuel. La pression et le débit d’alimentation doivent respecter la notice.",
                    list: ["Raccord d’arrivée d’eau", "Filtre d’entrée, selon le modèle", "Tuyau d’alimentation", "Joints de raccord"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Alimenter la pompe",
                    text: "Une alimentation en eau conforme permet à la pompe de fonctionner dans les conditions prévues par le fabricant.",
                    list: ["Vérifier le débit et la pression d’arrivée", "Contrôler le raccordement et les joints", "Purger selon la procédure de la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Fuite et fonctionnement à sec",
                    text: "Une alimentation insuffisante ou une fuite peut endommager l’appareil et rendre la zone glissante.",
                    list: ["Ne pas faire fonctionner la pompe sans eau", "Arrêter l’appareil si un raccord fuit", "Fermer l’eau et relâcher la pression avant de débrancher"]
                }
            }
        }
    },
    motobineuse: {
        title: "la motobineuse.",
        name: "La motobineuse",
        image: "motobineuse.png",
        alt: "Motobineuse thermique orange : le moteur est à gauche, le guidon et les commandes en hauteur à droite, les fraises rotatives au premier plan sous le carter",
        hotspots: {
            moteur: { x: "31%", y: "35%" },
            guidon: { x: "76%", y: "22%" },
            transmission: { x: "57%", y: "54%" },
            carter: { x: "48%", y: "65%" },
            fraises: { x: "42%", y: "82%" },
            roues: { x: "61%", y: "76%" }
        },
        callouts: {
            moteur: { x: "8%", y: "29%" },
            guidon: { x: "92%", y: "13%" },
            transmission: { x: "92%", y: "48%" },
            carter: { x: "8%", y: "62%" },
            fraises: { x: "8%", y: "81%" },
            roues: { x: "92%", y: "83%" }
        },
        epiView: {
            image: "souffleur-epi.svg",
            alt: "Illustration indicative des protections pour travailler le sol : lunettes, protection auditive, gants, pantalon couvrant et chaussures antidérapantes ; à adapter à la notice",
            hotspots: {
                tete: { x: "8%", y: "13%" },
                yeux: { x: "92%", y: "25%" },
                mains: { x: "8%", y: "54%" },
                jambes: { x: "92%", y: "58%" },
                pieds: { x: "8%", y: "90%" }
            },
            targets: {
                tete: { x: "54%", y: "22%" },
                yeux: { x: "50%", y: "24%" },
                mains: { x: "38.75%", y: "55.7%" },
                jambes: { x: "50%", y: "64%" },
                pieds: { x: "46%", y: "91%" }
            },
            parts: {
                tete: {
                    number: "01",
                    title: "Protection auditive",
                    summary: "Le moteur peut être bruyant ; la protection dépend du niveau sonore et de la notice.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger l’ouïe",
                        text: "Porte une protection auditive adaptée au bruit émis par la machine, selon la notice et l’évaluation du chantier.",
                        list: ["Consulter le niveau sonore indiqué", "Choisir une protection adaptée", "Vérifier son ajustement et son état"]
                    }
                },
                yeux: {
                    number: "02",
                    title: "Lunettes de protection",
                    summary: "Elles protègent des projections de terre et de petits débris.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les yeux",
                        text: "Les fraises peuvent projeter de la terre, des cailloux et des fragments végétaux.",
                        list: ["Porter des lunettes adaptées aux projections", "Vérifier qu’elles sont propres et en bon état", "Éloigner les personnes de la zone de travail"]
                    }
                },
                mains: {
                    number: "03",
                    title: "Gants adaptés",
                    summary: "Ils protègent les mains pendant la conduite et les manipulations machine arrêtée.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Garder une prise sûre",
                        text: "Choisis des gants adaptés à la tâche et qui permettent de tenir fermement le guidon et d’utiliser les commandes.",
                        list: ["Vérifier qu’ils sont ajustés", "Remplacer les gants usés", "Ne jamais approcher les mains des fraises"]
                    }
                },
                jambes: {
                    number: "04",
                    title: "Pantalon couvrant",
                    summary: "Une tenue résistante et ajustée aide à protéger des projections.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les jambes",
                        text: "Porte un pantalon couvrant adapté au terrain et évite les vêtements flottants qui pourraient s’accrocher.",
                        list: ["Choisir une tenue adaptée à la tâche", "Éviter les vêtements amples", "Suivre les indications du fabricant"]
                    }
                },
                pieds: {
                    number: "05",
                    title: "Chaussures de sécurité",
                    summary: "Des chaussures robustes et antidérapantes aident à protéger les pieds et à garder l’équilibre.",
                    epi: {
                        eyebrow: "ÉQUIPEMENT DE PROTECTION",
                        title: "Protéger les pieds",
                        text: "La motobineuse peut avancer ou rebondir et les fraises présentent un risque grave. Des chaussures fermées, robustes et antidérapantes sont nécessaires.",
                        list: ["Porter des chaussures de sécurité adaptées", "Vérifier l’adhérence des semelles", "Garder les pieds loin des fraises"]
                    }
                }
            }
        },
        usage: {
            title: "Préparer un sol avec la motobineuse",
            intro: "La motobineuse ameublit la surface d’une parcelle grâce à des fraises rotatives. La largeur, la profondeur et le type de terrain doivent rester dans les limites prévues par le fabricant.",
            sections: [
                {
                    title: "Avant de commencer",
                    items: [
                        "Repérer les câbles et conduites enterrés, retirer les pierres et dégager les personnes de la zone.",
                        "Vérifier les fraises, les carters, les commandes, les fixations et le réglage de profondeur.",
                        "Porter lunettes, protection auditive adaptée, gants, pantalon couvrant et chaussures de sécurité."
                    ]
                },
                {
                    title: "Pendant le travail",
                    items: [
                        "Tenir le guidon à deux mains et guider l’appareil sans placer les pieds près des fraises.",
                        "Rester attentif aux obstacles, aux racines et aux variations de terrain ; garder les tiers à distance.",
                        "Arrêter le moteur et attendre l’immobilisation complète avant d’enlever des débris."
                    ]
                },
                {
                    title: "À ne pas faire",
                    items: [
                        "Ne pas travailler sur un terrain encombré, trop pentu ou avec un accessoire non autorisé.",
                        "Ne pas toucher ni nettoyer les fraises lorsqu’elles tournent ou avant d’avoir isolé la machine.",
                        "Ne pas utiliser l’appareil dans un local fermé si son moteur thermique produit des gaz d’échappement."
                    ]
                }
            ]
        },
        parts: {
            moteur: {
                number: "01",
                title: "Le moteur",
                summary: "Il fournit l’énergie qui entraîne la transmission et les fraises.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "La motorisation",
                    text: "La motobineuse de la photo possède un moteur thermique. Les commandes et les composants varient selon le modèle.",
                    list: ["Bloc moteur", "Réservoir de carburant", "Filtre à air", "Commande d’arrêt"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Fournir l’énergie",
                    text: "Le moteur entraîne la transmission qui met les fraises en rotation. Les procédures de démarrage et d’arrêt doivent suivre la notice.",
                    list: ["Repérer les commandes", "Vérifier le niveau et l’entretien selon la notice", "Arrêter avant tout contrôle"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Chaleur, bruit et gaz",
                    text: "Un moteur thermique chauffe, fait du bruit et émet des gaz d’échappement.",
                    list: ["Travailler à l’extérieur", "Laisser refroidir avant le rangement", "Éloigner carburant et flamme", "Porter une protection auditive adaptée"]
                }
            },
            guidon: {
                number: "02",
                title: "Le guidon et les commandes",
                summary: "Ils permettent de tenir, diriger et contrôler la motobineuse.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Les poignées de conduite",
                    text: "Le guidon relie les poignées à la machine. Les leviers et commandes peuvent varier suivant les versions.",
                    list: ["Poignées", "Levier d’embrayage des fraises", "Commande d’accélérateur, selon le modèle", "Commande d’arrêt"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Guider et contrôler",
                    text: "Le guidon sert à diriger l’appareil et à actionner les commandes prévues par le fabricant.",
                    list: ["Tenir les poignées à deux mains", "Repérer l’arrêt avant de démarrer", "Régler le guidon selon la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Perte de maîtrise",
                    text: "Une machine mal contrôlée peut avancer, dévier ou se relever au contact d’un obstacle.",
                    list: ["Garder une prise ferme", "Ne pas neutraliser les commandes de sécurité", "Arrêter si une commande est endommagée"]
                }
            },
            transmission: {
                number: "03",
                title: "La transmission",
                summary: "Elle transmet le mouvement du moteur aux fraises.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le carter de transmission",
                    text: "La transmission relie le moteur à l’axe des fraises. Son architecture et son entretien dépendent du modèle.",
                    list: ["Carter de transmission", "Arbre ou engrenages internes", "Embrayage", "Points de graissage indiqués dans la notice"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Transmettre la rotation",
                    text: "Le mouvement du moteur est transmis aux fraises lorsque la commande correspondante est activée.",
                    list: ["Actionner uniquement la commande prévue", "Respecter les réglages fabricant", "Contrôler le fonctionnement avant le travail"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Organes mobiles et chaleur",
                    text: "Une transmission peut contenir des pièces mobiles ou chaudes et ne doit pas être ouverte en fonctionnement.",
                    list: ["Garder les vêtements éloignés des pièces mobiles", "Arrêter et isoler avant entretien", "Faire réparer tout bruit anormal ou fuite"]
                }
            },
            carter: {
                number: "04",
                title: "Le carter de protection",
                summary: "Il couvre la zone des fraises et limite les projections.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Le capot au-dessus des fraises",
                    text: "Le carter recouvre une partie de la zone de travail. Sa forme et ses extensions varient selon la motobineuse.",
                    list: ["Carter de fraises", "Extensions latérales, si prévues", "Fixations", "Bavette ou protection arrière, selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Limiter les projections",
                    text: "Le carter aide à contenir la terre et les débris déplacés par les fraises.",
                    list: ["Vérifier qu’il est fixé", "Utiliser les protections prévues", "Respecter la configuration de la notice"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Projections et accès aux fraises",
                    text: "Un carter absent ou endommagé expose aux projections et à la zone de rotation.",
                    list: ["Ne pas retirer le carter", "Éloigner toute personne de la zone", "Arrêter si une protection manque"]
                }
            },
            fraises: {
                number: "05",
                title: "Les fraises",
                summary: "Leurs lames rotatives ameublissent et déplacent la terre.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "L’outil de travail du sol",
                    text: "Les fraises sont montées sur un axe et tournent dans le sol. Leur nombre et leur disposition dépendent du modèle.",
                    list: ["Lames de fraisage", "Axe porte-fraises", "Goupilles et fixations", "Éléments d’écartement, selon le modèle"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Ameublir la terre",
                    text: "En tournant, les fraises pénètrent dans la couche superficielle et fragmentent la terre selon le réglage choisi.",
                    list: ["Travailler à la profondeur autorisée", "Adapter le passage à l’état du sol", "Vérifier la compatibilité des fraises"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Coupures et entraînement",
                    text: "Les fraises peuvent causer de graves blessures, happer des vêtements ou projeter des pierres et des débris.",
                    list: ["Ne jamais approcher mains ou pieds", "Arrêter et isoler avant de dégager un blocage", "Ne pas nettoyer les fraises à la main"]
                }
            },
            roues: {
                number: "06",
                title: "La roue et la béquille",
                summary: "Elles aident au déplacement, au transport ou au réglage de la machine.",
                pieces: {
                    eyebrow: "NOM DES PIÈCES",
                    title: "Les appuis et accessoires",
                    text: "Cette motobineuse possède une roue latérale et un élément arrière de réglage. Leur usage dépend de la configuration du fabricant.",
                    list: ["Roue de transport", "Axe et fixation", "Béquille ou éperon de terrage", "Réglage de hauteur"]
                },
                fonctionnement: {
                    eyebrow: "FONCTIONNEMENT",
                    title: "Déplacer et régler",
                    text: "La roue facilite le déplacement quand les fraises ne travaillent pas. L’éperon ou la béquille peut aider à contrôler la progression du modèle.",
                    list: ["Configurer les appuis selon la notice", "Stabiliser la machine à l’arrêt", "Retirer ou relever la roue pour travailler si prescrit"]
                },
                dangers: {
                    eyebrow: "DANGERS À CONNAÎTRE",
                    title: "Basculement et pincement",
                    text: "Un appui mal fixé ou un terrain instable peut faire basculer la machine ou coincer les doigts.",
                    list: ["Vérifier les axes et fixations", "Garder les mains hors des points de pincement", "Ne pas déplacer l’appareil fraises en rotation"]
                }
            }
        }
    }
};

function createProfileInteractiveGuide(toolId, config) {
    const profile = toolProfiles[toolId];
    const details = toolProfileDetails[toolId];
    const parts = Object.fromEntries(config.parts.map((part, index) => [
        part.id,
        {
            number: String(index + 1).padStart(2, "0"),
            title: part.title,
            summary: part.summary,
            pieces: {
                eyebrow: "NOM DES PIÈCES",
                title: part.title,
                text: part.pieces.text,
                list: part.pieces.list
            },
            fonctionnement: {
                eyebrow: "FONCTIONNEMENT",
                title: part.fonctionnement.title,
                text: part.fonctionnement.text,
                list: part.fonctionnement.list
            },
            dangers: {
                eyebrow: "DANGERS À CONNAÎTRE",
                title: part.dangers.title,
                text: part.dangers.text,
                list: part.dangers.list
            }
        }
    ]));
    const epiPoints = {
        tete: { hotspot: { x: "78%", y: "14.2%" }, target: { x: "54%", y: "12.9%" } },
        yeux: { hotspot: { x: "25%", y: "27%" }, target: { x: "45.9%", y: "24.6%" } },
        gants: { hotspot: { x: "25%", y: "54%" }, target: { x: "38.75%", y: "55.7%" } },
        pantalon: { hotspot: { x: "78%", y: "71.1%" }, target: { x: "54.25%", y: "71.1%" } },
        chaussures: { hotspot: { x: "25%", y: "91%" }, target: { x: "46%", y: "91%" } }
    };
    const epiParts = Object.fromEntries(config.epi.map((item, index) => [
        item.id,
        {
            number: String(index + 1).padStart(2, "0"),
            title: item.title,
            summary: item.summary,
            epi: {
                eyebrow: "ÉQUIPEMENT DE PROTECTION",
                title: item.title,
                text: item.text,
                list: item.list
            }
        }
    ]));

    return {
        title: config.title,
        name: config.name,
        image: profile.image,
        alt: profile.imageAlt,
        hotspots: Object.fromEntries(config.parts.map((part) => [part.id, part.target])),
        callouts: Object.fromEntries(config.parts.map((part) => [part.id, part.callout])),
        epiView: {
            image: "souffleur-epi.svg",
            alt: config.epiAlt,
            hotspots: Object.fromEntries(config.epi.map((item) => [item.id, epiPoints[item.id].hotspot])),
            targets: Object.fromEntries(config.epi.map((item) => [item.id, epiPoints[item.id].target])),
            parts: epiParts
        },
        usage: {
            title: config.usageTitle,
            intro: details.usageIntro,
            sections: [
                { title: "Avant de commencer", items: details.before },
                { title: "Pendant et après", items: details.during },
                { title: "À éviter", items: details.avoid }
            ],
            diagrams: false
        },
        parts
    };
}

Object.assign(toolGuides, {
    "souffleur-main": toolProfiles["_souffleur-main-guide"],
    "aspirateur-eau-et-poussiere": createProfileInteractiveGuide("aspirateur-eau-et-poussiere", {
        title: "l’aspirateur eau et poussière.",
        name: "L’aspirateur eau et poussière",
        usageTitle: "Aspirer des matières compatibles avec l’appareil",
        epiAlt: "Illustration indicative des protections générales. La protection respiratoire, les gants et les autres EPI dépendent des matières aspirées et de l’évaluation du risque.",
        parts: [
            {
                id: "moteur", title: "Le bloc moteur", target: { x: "57%", y: "40%" }, callout: { x: "88%", y: "16%" },
                summary: "Le bloc moteur crée le flux d’air qui permet l’aspiration.",
                pieces: { text: "Le bloc supérieur abrite le moteur, les commandes et la sortie d’air.", list: ["Carter moteur", "Interrupteur marche/arrêt", "Entrée ou sortie d’air", "Câble d’alimentation, selon le modèle"] },
                fonctionnement: { title: "Créer l’aspiration", text: "Le moteur entraîne une turbine qui met l’air en mouvement dans le flexible et la cuve.", list: ["Vérifier l’état du câble", "Dégager les grilles d’aération", "Arrêter si le moteur chauffe ou si l’aspiration chute"] },
                dangers: { title: "Électricité et surchauffe", text: "Un câble abîmé, une ventilation obstruée ou un usage non prévu avec un liquide peut présenter un risque.", list: ["Garder les raccords électriques au sec", "Débrancher avant d’ouvrir ou nettoyer", "Suivre les limites du fabricant"] }
            },
            {
                id: "cuve", title: "La cuve et le filtre", target: { x: "61%", y: "64%" }, callout: { x: "90%", y: "76%" },
                summary: "La cuve collecte les matières ; le filtre retient les poussières selon la configuration.",
                pieces: { text: "La cuve métallique de la photo recueille les déchets aspirés. Le filtre et le flotteur varient selon le modèle.", list: ["Cuve de collecte", "Tête avec moteur", "Filtre ou sac compatible", "Flotteur éventuel pour les liquides"] },
                fonctionnement: { title: "Collecter et filtrer", text: "L’air chargé de débris entre dans la cuve ; le filtre retient les poussières et l’air ressort par le bloc moteur.", list: ["Choisir le filtre adapté au sec ou au liquide", "Respecter le niveau de remplissage", "Vider et nettoyer selon la notice"] },
                dangers: { title: "Poussières et matières interdites", text: "Une cuve ou un filtre inadapté peut relâcher des poussières ou endommager l’appareil.", list: ["Ne pas aspirer de cendres chaudes ou de liquides inflammables", "Ne pas aspirer de poussières dangereuses sans équipement adapté", "Débrancher avant la vidange"] }
            },
            {
                id: "flexible", title: "Le flexible", target: { x: "43%", y: "54%" }, callout: { x: "10%", y: "35%" },
                summary: "Le flexible conduit les débris depuis l’embout jusqu’à la cuve.",
                pieces: { text: "Le flexible relie l’outil d’aspiration à l’entrée de la cuve ; ses raccords doivent être compatibles.", list: ["Flexible annelé", "Raccord d’entrée", "Joints", "Poignée ou tube, selon le modèle"] },
                fonctionnement: { title: "Acheminer les débris", text: "Le flux d’air entraîne les matières à travers le flexible jusqu’au collecteur.", list: ["Vérifier que le flexible est bien emboîté", "Utiliser un embout adapté à la surface", "Dégager un bouchon appareil débranché"] },
                dangers: { title: "Bouchon et détérioration", text: "Un flexible percé ou bouché diminue l’aspiration et peut projeter des débris au dégagement.", list: ["Ne pas introduire la main dans le flexible", "Arrêter et débrancher avant contrôle", "Remplacer un flexible fendu"] }
            },
            {
                id: "embout", title: "Le tube et l’embout", target: { x: "28%", y: "88%" }, callout: { x: "11%", y: "83%" },
                summary: "Le tube et l’embout guident l’aspiration sur la zone à nettoyer.",
                pieces: { text: "L’embout visible est conçu pour aspirer une surface au sol ; les accessoires dépendent du modèle.", list: ["Tube d’aspiration", "Embout de sol", "Brosses ou suceurs compatibles", "Raccord de flexible"] },
                fonctionnement: { title: "Adapter le contact au sol", text: "L’embout dirige le flux vers la poussière ou le liquide autorisé, sans dépasser les capacités de l’appareil.", list: ["Choisir un embout compatible", "Surveiller l’état de la brosse", "Éviter d’aspirer des objets trop volumineux"] },
                dangers: { title: "Risque de chute ou de choc", text: "Le flexible et le câble peuvent gêner le déplacement autour de la zone de nettoyage.", list: ["Garder le passage dégagé", "Ne pas tirer l’appareil par son câble", "Éviter les surfaces glissantes après aspiration d’un liquide"] }
            }
        ],
        epi: [
            { id: "tete", title: "Protection auditive si nécessaire", summary: "Le niveau de bruit varie selon le modèle et la durée d’utilisation.", text: "L’illustration montre un serre-tête antibruit à titre indicatif. Porte une protection auditive si la notice ou l’évaluation du bruit le recommande.", list: ["Consulter les informations sonores de l’appareil", "Vérifier l’ajustement des coquilles", "Faire des pauses selon les consignes"] },
            { id: "yeux", title: "Lunettes de protection", summary: "Les poussières et les éclaboussures peuvent atteindre les yeux.", text: "Choisis une protection oculaire adaptée à la matière aspirée et aux opérations de vidange.", list: ["Porter des lunettes lors de la vidange si nécessaire", "Les garder propres et bien ajustées", "Ne pas utiliser un écran fissuré"] },
            { id: "gants", title: "Gants adaptés aux matières", summary: "Les déchets et les liquides peuvent irriter ou blesser les mains.", text: "Choisis des gants compatibles avec le produit ou les déchets manipulés. Ils ne remplacent pas l’isolement électrique de l’appareil.", list: ["Débrancher avant de vider la cuve", "Choisir les gants selon la matière", "Se laver les mains après intervention"] },
            { id: "pantalon", title: "Tenue de travail", summary: "Une tenue couvrante limite le contact avec la poussière et les salissures.", text: "Le type de vêtement dépend des poussières ou liquides. Pour les poussières dangereuses, suis l’évaluation du risque et les consignes spécifiques.", list: ["Éviter les vêtements flottants", "Nettoyer sans disperser les poussières", "Changer les vêtements contaminés"] },
            { id: "chaussures", title: "Chaussures fermées", summary: "Des semelles adaptées aident à éviter glissades et blessures.", text: "Porte des chaussures fermées avec une adhérence adaptée au sol, surtout si l’aspiration concerne des liquides.", list: ["Vérifier l’état des semelles", "Garder le sol dégagé", "Sécher rapidement les zones mouillées"] }
        ]
    }),
    "broyeur-de-vegetaux": createProfileInteractiveGuide("broyeur-de-vegetaux", {
        title: "le broyeur de végétaux.",
        name: "Le broyeur de végétaux",
        usageTitle: "Broyer uniquement les végétaux autorisés",
        epiAlt: "Illustration indicative des protections pour travailler avec un broyeur. Les EPI exacts dépendent de la notice, du bruit et des projections possibles.",
        parts: [
            {
                id: "moteur", title: "Le moteur", target: { x: "39%", y: "45%" }, callout: { x: "12%", y: "20%" },
                summary: "Le moteur entraîne le mécanisme de coupe du broyeur.",
                pieces: { text: "Le moteur thermique visible se trouve sous la trémie, sur le côté gauche de la machine.", list: ["Bloc moteur", "Filtre à air et commandes selon le modèle", "Échappement", "Châssis et supports"] },
                fonctionnement: { title: "Entraîner le broyage", text: "Le moteur fournit l’énergie au système de coupe ; la configuration exacte dépend du broyeur.", list: ["Lire la notice avant démarrage", "Repérer l’arrêt et les commandes", "Laisser refroidir avant ravitaillement"] },
                dangers: { title: "Bruit, chaleur et gaz", text: "Un moteur thermique produit du bruit, des surfaces chaudes et des gaz d’échappement.", list: ["Utiliser à l’extérieur", "Éloigner carburant et flamme", "Ne pas toucher l’échappement chaud"] }
            },
            {
                id: "tremie", title: "La trémie d’alimentation", target: { x: "55%", y: "20%" }, callout: { x: "78%", y: "12%" },
                summary: "La trémie guide les végétaux vers le mécanisme de broyage.",
                pieces: { text: "La grande ouverture supérieure reçoit les branches et déchets végétaux admis par la notice.", list: ["Ouverture de chargement", "Parois de guidage", "Zone d’alimentation", "Protection de l’accès au mécanisme"] },
                fonctionnement: { title: "Guider les végétaux", text: "Les branches sont amenées dans la trémie selon la méthode prescrite ; elles ne sont jamais poussées à la main dans la zone de coupe.", list: ["Trier les branches avant chargement", "Respecter le diamètre maximal", "Utiliser uniquement les accessoires de poussée autorisés"] },
                dangers: { title: "Accès au mécanisme", text: "Le mécanisme de coupe peut happer ou blesser gravement une main ou un vêtement.", list: ["Ne jamais introduire les mains", "Éloigner les vêtements flottants", "Arrêter et isoler avant toute intervention"] }
            },
            {
                id: "coupe", title: "Le carter de coupe", target: { x: "61%", y: "54%" }, callout: { x: "88%", y: "50%" },
                summary: "Le carter protège le mécanisme qui réduit les végétaux en fragments.",
                pieces: { text: "Le mécanisme est enfermé dans le carter central ; l’image ne permet pas de distinguer ses pièces internes.", list: ["Carter de coupe", "Lames ou système de broyage selon le modèle", "Fixations et protections", "Commandes de sécurité"] },
                fonctionnement: { title: "Réduire les végétaux", text: "Les branches rencontrent le système de coupe et sont transformées en fragments.", list: ["Respecter le type de bois accepté", "Alimenter progressivement selon la notice", "Attendre l’arrêt complet après coupure"] },
                dangers: { title: "Coupure et bourrage", text: "Les pièces internes peuvent rester en mouvement après l’arrêt et les fragments peuvent être projetés.", list: ["Ne pas ouvrir le carter en marche", "Isoler l’énergie avant de dégager un bourrage", "Ne pas utiliser si une protection manque"] }
            },
            {
                id: "ejection", title: "La goulotte d’éjection", target: { x: "72%", y: "43%" }, callout: { x: "91%", y: "82%" },
                summary: "La goulotte dirige les fragments hors du mécanisme.",
                pieces: { text: "La sortie latérale évacue les fragments ; son orientation et son équipement dépendent du modèle.", list: ["Goulotte de sortie", "Déflecteur éventuel", "Zone de réception", "Bac ou contenant compatible"] },
                fonctionnement: { title: "Évacuer les fragments", text: "Les végétaux broyés sortent par la goulotte et doivent être recueillis sans obstruer l’éjection.", list: ["Orienter vers une zone dégagée", "Maintenir les personnes à distance", "Surveiller le remplissage du bac"] },
                dangers: { title: "Projections", text: "Des fragments peuvent être éjectés et blesser une personne située dans l’axe de sortie.", list: ["Ne jamais regarder dans la goulotte", "Ne pas stationner dans l’axe", "Arrêter si la sortie se bouche"] }
            }
        ],
        epi: [
            { id: "tete", title: "Protection auditive", summary: "Le moteur et le broyage peuvent produire un niveau sonore élevé.", text: "Porte une protection auditive adaptée au bruit réel et aux consignes de la notice.", list: ["Vérifier le niveau sonore indiqué", "Ajuster correctement les protections", "Les garder pendant le broyage"] },
            { id: "yeux", title: "Lunettes ou visière", summary: "Des éclats et des fragments peuvent être projetés.", text: "Choisis une protection des yeux et du visage adaptée aux projections du broyeur.", list: ["Porter les protections recommandées", "Vérifier qu’elles ne sont ni fissurées ni opaques", "Garder les personnes hors de la zone"] },
            { id: "gants", title: "Gants ajustés", summary: "Les gants protègent lors de la manutention, mais ne doivent jamais approcher la trémie.", text: "Utilise des gants adaptés au bois pour manipuler les branches à l’arrêt. Ne pousse jamais les végétaux avec les mains.", list: ["Garder les mains à l’extérieur de la trémie", "Éviter les manchettes ou éléments flottants", "Arrêter avant de dégager une branche coincée"] },
            { id: "pantalon", title: "Vêtements ajustés", summary: "Une tenue ajustée limite les risques d’accrochage et protège des salissures.", text: "Porte des vêtements couvrants, ajustés et adaptés au travail extérieur.", list: ["Rentrer les cordons", "Éviter les vêtements flottants", "Remplacer les vêtements déchirés"] },
            { id: "chaussures", title: "Chaussures robustes", summary: "Les branches et les fragments peuvent tomber au sol autour de la machine.", text: "Choisis des chaussures fermées et robustes, avec une semelle adhérente au terrain.", list: ["Dégager le sol autour du broyeur", "Vérifier l’adhérence", "Ne pas s’approcher de la sortie d’éjection"] }
        ]
    }),
    pulverisateur: createProfileInteractiveGuide("pulverisateur", {
        title: "le pulvérisateur.",
        name: "Le pulvérisateur",
        usageTitle: "Pulvériser uniquement un liquide autorisé",
        epiAlt: "Illustration indicative de protections de travail. Pour un produit de traitement, les EPI requis sont ceux de l’étiquette et de la fiche de données de sécurité.",
        parts: [
            {
                id: "lance", title: "La lance et la buse", target: { x: "29%", y: "51%" }, callout: { x: "9%", y: "25%" },
                summary: "La lance dirige le liquide et la buse forme le jet de pulvérisation.",
                pieces: { text: "La lance métallique et sa poignée de commande sont reliées au réservoir par un flexible.", list: ["Lance", "Poignée et gâchette", "Buse compatible", "Flexible d’alimentation"] },
                fonctionnement: { title: "Diriger le jet", text: "La gâchette commande la pulvérisation et la buse détermine la forme du jet prévue pour l’usage.", list: ["Vérifier la buse et les joints", "Garder le jet dirigé vers la zone autorisée", "Dépressuriser avant démontage"] },
                dangers: { title: "Projection et dérive", text: "Le produit peut atteindre la peau, les yeux, les personnes ou les zones non visées.", list: ["Ne jamais diriger vers une personne ou un animal", "Éviter le vent et la dérive", "Suivre les consignes de l’étiquette"] }
            },
            {
                id: "reservoir", title: "Le réservoir", target: { x: "66%", y: "42%" }, callout: { x: "90%", y: "31%" },
                summary: "Le réservoir contient le liquide autorisé pour le pulvérisateur.",
                pieces: { text: "La cuve dorsale reçoit le liquide ; sa capacité utile et ses repères sont propres au modèle.", list: ["Cuve", "Bouchon de remplissage", "Repères de niveau", "Joints d’étanchéité"] },
                fonctionnement: { title: "Contenir le liquide", text: "Le réservoir alimente la pompe. Le produit doit être compatible avec les matériaux et l’usage autorisé.", list: ["Lire l’étiquette et la notice", "Respecter le niveau de remplissage", "Ne jamais utiliser un contenant alimentaire"] },
                dangers: { title: "Fuite et contamination", text: "Une cuve fissurée ou un bouchon mal fermé peut entraîner une fuite ou contaminer l’utilisateur.", list: ["Contrôler la cuve avant remplissage", "Ne pas transporter une cuve qui fuit", "Nettoyer selon la procédure autorisée"] }
            },
            {
                id: "pompe", title: "La pompe et les commandes", target: { x: "62%", y: "75%" }, callout: { x: "83%", y: "88%" },
                summary: "La pompe met le liquide en circulation ou en pression selon le modèle.",
                pieces: { text: "Le bloc inférieur orange abrite le moteur et la pompe de ce modèle motorisé.", list: ["Moteur", "Pompe", "Commandes", "Raccords et soupape selon l’appareil"] },
                fonctionnement: { title: "Alimenter la pulvérisation", text: "La pompe fournit le débit et la pression requis ; les réglages sont ceux prévus par le fabricant.", list: ["Repérer l’arrêt moteur", "Vérifier les raccords", "Ne pas modifier les réglages de pression"] },
                dangers: { title: "Pression et moteur", text: "Un flexible endommagé, une fuite sous pression ou un moteur chaud peut blesser.", list: ["Arrêter et dépressuriser avant entretien", "Ne pas chercher une fuite avec la main", "Laisser refroidir avant intervention"] }
            },
            {
                id: "harnais", title: "Le harnais", target: { x: "81%", y: "17%" }, callout: { x: "91%", y: "12%" },
                summary: "Le harnais maintient la cuve sur le dos et répartit son poids.",
                pieces: { text: "Les bretelles et sangles doivent être intactes et réglées selon le fabricant.", list: ["Bretelles réglables", "Sangles de maintien", "Attaches", "Dosseret de la cuve"] },
                fonctionnement: { title: "Porter l’appareil de façon stable", text: "Un réglage adapté réduit les mouvements de la cuve pendant le déplacement.", list: ["Ajuster avant le remplissage si prescrit", "Contrôler les attaches", "Demander de l’aide si la charge est trop lourde"] },
                dangers: { title: "Fatigue et contact avec le produit", text: "Un harnais abîmé ou une cuve mal fixée peut déséquilibrer l’utilisateur ou provoquer une fuite sur le dos.", list: ["Ne pas porter un appareil qui fuit", "Faire des pauses", "Enlever l’équipement contaminé selon l’étiquette"] }
            }
        ],
        epi: [
            { id: "tete", title: "Protection respiratoire si prescrite", summary: "La protection respiratoire dépend du produit et de son étiquette.", text: "L’illustration est générique et ne représente pas un masque adapté aux produits chimiques. N’en utilise un que si l’étiquette ou l’évaluation du risque le prescrit, avec le filtre approprié.", list: ["Lire l’étiquette et la fiche de données de sécurité", "Vérifier le type de filtre demandé", "Respecter les limites et le remplacement du filtre"] },
            { id: "yeux", title: "Lunettes ou écran facial", summary: "Les éclaboussures peuvent atteindre les yeux et le visage.", text: "Choisis la protection oculaire indiquée pour le produit manipulé et la préparation effectuée.", list: ["Porter une protection adaptée aux éclaboussures", "Vérifier l’ajustement", "Rincer immédiatement en cas de contact selon l’étiquette"] },
            { id: "gants", title: "Gants résistants au produit", summary: "Tous les matériaux de gants ne résistent pas aux mêmes produits.", text: "La résistance des gants doit correspondre aux indications de l’étiquette et de la fiche de données de sécurité.", list: ["Vérifier le matériau recommandé", "Contrôler l’absence de déchirure", "Retirer et nettoyer sans toucher la peau contaminée"] },
            { id: "pantalon", title: "Vêtement de protection", summary: "Un vêtement couvrant ou une combinaison peut être requis par l’étiquette.", text: "Ne te fie pas à l’illustration seule : le niveau de protection des vêtements dépend du produit et de l’exposition.", list: ["Porter la combinaison prescrite", "Fermer les poignets et les ouvertures si requis", "Laver ou éliminer le vêtement selon les consignes"] },
            { id: "chaussures", title: "Chaussures adaptées", summary: "Les chaussures doivent protéger contre le produit et le terrain.", text: "Choisis les chaussures ou bottes compatibles avec le produit et l’application, comme indiqué sur l’étiquette.", list: ["Éviter les chaussures ouvertes", "Nettoyer les bottes après usage", "Ne pas contaminer les locaux avec les chaussures"] }
        ]
    }),
    "fendeur-de-buches": createProfileInteractiveGuide("fendeur-de-buches", {
        title: "le fendeur de bûches.",
        name: "Le fendeur de bûches",
        usageTitle: "Fendre des bûches dans les limites du fabricant",
        epiAlt: "Illustration indicative des protections pour le fendage. Les EPI et les méthodes de travail dépendent de la notice et de l’évaluation du risque.",
        parts: [
            {
                id: "moteur", title: "Le moteur", target: { x: "25%", y: "47%" }, callout: { x: "9%", y: "23%" },
                summary: "Le moteur fournit l’énergie nécessaire au système de fendage.",
                pieces: { text: "Le moteur thermique et ses commandes sont fixés sur le châssis, à gauche de la machine.", list: ["Bloc moteur", "Démarreur et commandes selon le modèle", "Échappement", "Bâti et roues"] },
                fonctionnement: { title: "Fournir l’énergie", text: "Le moteur entraîne le système qui actionne le poussoir ou le coin, selon la conception du fendeur.", list: ["Repérer la commande d’arrêt", "Utiliser à l’extérieur si moteur thermique", "Laisser refroidir avant ravitaillement"] },
                dangers: { title: "Gaz, bruit et chaleur", text: "Le moteur thermique présente des risques de brûlure, de bruit et d’intoxication par les gaz d’échappement.", list: ["Ne jamais utiliser en local fermé", "Éloigner les matières inflammables", "Ne pas toucher les parties chaudes"] }
            },
            {
                id: "verin", title: "Le vérin et le système hydraulique", target: { x: "43%", y: "29%" }, callout: { x: "49%", y: "11%" },
                summary: "Le vérin transforme la pression hydraulique en mouvement de poussée.",
                pieces: { text: "Le cylindre et les flexibles transmettent l’effort au poussoir ; le circuit est sous pression.", list: ["Vérin hydraulique", "Tige de vérin", "Flexibles et raccords", "Commande selon le modèle"] },
                fonctionnement: { title: "Déplacer le poussoir", text: "Le circuit hydraulique actionne le mouvement de fendage conformément à la commande du fabricant.", list: ["Vérifier visuellement les fuites", "Ne pas modifier les réglages", "Garder les mains hors des organes mobiles"] },
                dangers: { title: "Injection sous pression", text: "Une fuite hydraulique peut injecter du fluide sous la peau ; les organes mobiles créent des zones d’écrasement.", list: ["Ne jamais rechercher une fuite avec la main", "Arrêter et isoler avant inspection", "Confier le circuit à un réparateur qualifié"] }
            },
            {
                id: "banc", title: "Le banc de fendage", target: { x: "70%", y: "43%" }, callout: { x: "91%", y: "23%" },
                summary: "Le banc soutient la bûche pendant le cycle de fendage.",
                pieces: { text: "La poutre orange et les supports maintiennent la zone de travail et guident le mouvement.", list: ["Poutre de fendage", "Supports de bûche", "Guidage du poussoir", "Béquille ou pied stabilisateur"] },
                fonctionnement: { title: "Maintenir la bûche", text: "La bûche doit être posée et positionnée selon la notice avant d’actionner le cycle.", list: ["Installer le fendeur sur un sol stable", "Respecter les dimensions admises", "Vérifier le dégagement autour de la machine"] },
                dangers: { title: "Écrasement et basculement", text: "Une bûche mal positionnée ou une machine instable peut provoquer un coincement ou un basculement.", list: ["Ne pas maintenir la bûche pendant le cycle", "Garder les mains hors des zones de pincement", "Ne pas dépasser les limites du fabricant"] }
            },
            {
                id: "coin", title: "Le coin et le poussoir", target: { x: "85%", y: "38%" }, callout: { x: "93%", y: "65%" },
                summary: "Le coin et le poussoir exercent l’effort qui sépare la bûche.",
                pieces: { text: "Les éléments mobiles se font face sur la poutre ; leur disposition varie selon les fendeurs.", list: ["Coin de fendage", "Poussoir mobile", "Zone de contact avec le bois", "Commandes de cycle"] },
                fonctionnement: { title: "Séparer le bois", text: "Le cycle presse la bûche contre le coin. L’utilisateur doit suivre la position et la commande prévues par la notice.", list: ["Actionner seulement les commandes prévues", "Attendre le retour complet du poussoir", "Retirer le bois une fois le mouvement arrêté"] },
                dangers: { title: "Écrasement et éclats", text: "La force de fendage peut écraser les doigts et projeter des éclats de bois.", list: ["Ne jamais placer les mains entre le poussoir et le coin", "Porter les protections indiquées", "Ne pas neutraliser les commandes de sécurité"] }
            }
        ],
        epi: [
            { id: "tete", title: "Protection auditive si nécessaire", summary: "Le bruit dépend du moteur et de la durée d’exposition.", text: "Utilise une protection auditive adaptée lorsque la notice ou l’évaluation du bruit le demande.", list: ["Consulter le niveau sonore", "Vérifier l’ajustement", "Porter les protections durant le cycle"] },
            { id: "yeux", title: "Lunettes de protection", summary: "Le fendage peut projeter des éclats de bois.", text: "Porte des lunettes adaptées aux projections et garde les autres personnes à distance.", list: ["Vérifier l’état des lunettes", "Les garder en place pendant le fendage", "Ne pas se placer dans l’axe des éclats"] },
            { id: "gants", title: "Gants pour manipuler le bois", summary: "Les gants peuvent protéger lors de la manutention, hors des zones mobiles.", text: "Utilise des gants adaptés pour déplacer les bûches, mais garde toujours les mains loin du poussoir, du coin et des points de pincement.", list: ["Ne pas tenir la bûche pendant le cycle", "Retirer les mains avant d’actionner la commande", "Arrêter la machine avant de dégager un coincement"] },
            { id: "pantalon", title: "Vêtements ajustés", summary: "Une tenue ajustée limite le risque d’accrochage.", text: "Porte des vêtements de travail couvrants et ajustés, sans cordon pendant près des pièces mobiles.", list: ["Éviter les vêtements flottants", "Remplacer les vêtements déchirés", "Garder la zone de travail dégagée"] },
            { id: "chaussures", title: "Chaussures de sécurité", summary: "Les bûches sont lourdes et peuvent tomber sur les pieds.", text: "Porte des chaussures de sécurité adaptées à la manutention du bois et au terrain.", list: ["Vérifier l’adhérence des semelles", "Garder les pieds hors de la zone de fendage", "Déplacer les bûches sans précipitation"] }
        ]
    })
});

const toolMaintenanceGuides = {
    debroussailleuse: {
        intro: "Avant tout nettoyage ou contrôle, arrêter le moteur, attendre l’immobilisation de la tête et laisser refroidir l’outil. Pour une machine électrique ou à batterie, isoler la source d’énergie comme l’indique la notice.",
        after: ["Retirer l’herbe et les débris autour de la tête, du carter et des entrées d’air avec une brosse, sans approcher les mains de l’accessoire.", "Contrôler le fil ou la lame, le serrage visible, le carter, le harnais et les poignées ; remplacer tout élément fissuré ou déformé.", "Sur un modèle thermique, enlever les résidus autour du moteur sans mouiller les composants électriques ni le silencieux chaud."],
        periodic: ["Remplacer le fil et inspecter la tête selon la notice ; une lame se remplace ou s’affûte uniquement selon la procédure du fabricant et doit rester équilibrée.", "Contrôler filtre à air, bougie, fixation du guidon, arbre de transmission et renvoi d’angle ; lubrifier uniquement aux points prévus.", "Noter les heures d’utilisation et suivre les périodicités propres au modèle pour filtre, bougie, graisse et carburant."],
        service: ["Confier à un réparateur le contrôle d’une vibration anormale, d’un renvoi d’angle bruyant, d’une fuite ou d’un défaut d’arrêt.", "Ne jamais redresser une lame fissurée ni modifier le carter, le régime moteur ou les réglages de sécurité."]
    },
    souffleur: {
        intro: "Arrêter l’appareil, attendre l’arrêt du ventilateur et isoler la machine selon sa notice avant tout entretien. Pour un moteur thermique, le laisser refroidir complètement.",
        after: ["Enlever les feuilles des grilles d’admission, du carter et du tube avec une brosse douce ; vérifier qu’aucun débris n’obstrue le ventilateur.", "Inspecter tube, colliers, poignée, commandes, harnais et sangles ; nettoyer puis sécher avant rangement.", "Vider le carburant ou préparer le remisage saisonnier uniquement selon les instructions du fabricant."],
        periodic: ["Nettoyer ou remplacer le filtre à air selon son type et le calendrier de la notice ; ne pas faire fonctionner l’appareil sans filtre.", "Sur moteur thermique, faire contrôler bougie, refroidissement, durites et fixation du silencieux aux intervalles prescrits.", "Examiner l’usure des commandes, du câble et des attaches ; consigner les heures de service si le modèle le prévoit."],
        service: ["Faire diagnostiquer toute perte de puissance persistante, vibration, bruit de ventilateur ou fuite de carburant.", "Ne pas démonter le volant, le ventilateur ni le carburateur sans compétence et procédure du fabricant."]
    },
    "taille-haie": {
        intro: "Couper le moteur, retirer la clé ou la batterie, ou débrancher l’appareil avant de toucher aux lames. Attendre l’arrêt complet et protéger le tranchant.",
        after: ["Brosser les débris et la résine des lames ; appliquer uniquement le produit de nettoyage conseillé puis sécher.", "Vérifier l’état des dents, du protège-lame, des poignées, du verrouillage et des commandes sans toucher le tranchant à mains nues.", "Ranger l’outil avec son fourreau, au sec et hors d’accès des enfants."],
        periodic: ["Lubrifier les lames avec le produit prescrit ; faire affûter ou remplacer un jeu de lames endommagé selon la procédure du fabricant.", "Sur moteur thermique, entretenir filtre à air, bougie, refroidissement et carburant selon le calendrier de la notice.", "Contrôler visserie, transmission, dispositif anti-vibration et arrêt de lame avant les périodes de travail intensif."],
        service: ["Faire réparer une lame tordue, un embrayage défectueux, une fuite ou un arrêt de lame qui fonctionne mal.", "Ne pas régler le ralenti, ouvrir le carter de transmission ou affûter les lames sans les compétences et l’outillage requis."]
    },
    tronconneuse: {
        intro: "Arrêter le moteur et attendre l’immobilisation complète de la chaîne. Pour les vérifications de coupe, appliquer les consignes de formation et de la notice, avec des gants adaptés.",
        after: ["Nettoyer les copeaux autour du guide, du frein de chaîne et des ouïes ; dégager la rainure du guide uniquement chaîne arrêtée et machine isolée.", "Contrôler tension, lubrification, maillons, guide-chaîne, frein, attrape-chaîne et commandes ; ne pas utiliser une chaîne endommagée.", "Vider ou protéger l’huile et le carburant pour le remisage conformément à la notice ; poser le protège-guide."],
        periodic: ["Affûter la chaîne avec les angles, le diamètre de lime et la jauge prescrits pour cette chaîne ; alterner les chaînes uniquement si elles correspondent au guide et au pignon.", "Inspecter l’usure du guide et du pignon d’entraînement, nettoyer le filtre et contrôler la bougie selon les intervalles du fabricant.", "Consigner les heures de fonctionnement et faire contrôler régulièrement le frein, l’embrayage et le circuit de lubrification."],
        service: ["Confier à un réparateur toute anomalie de frein de chaîne, graissage, embrayage, chaîne qui se détend anormalement ou fuite.", "Ne pas modifier le frein, le limiteur de profondeur, le régime moteur ou les organes de sécurité ; entretien réservé à une personne formée."]
    },
    tondeuse: {
        intro: "Arrêter le moteur et attendre l’immobilisation de la lame. Débrancher la bougie, retirer la clé ou la batterie selon le modèle ; suivre la méthode de bascule indiquée par le fabricant.",
        after: ["Retirer l’herbe du carter et du bac avec une brosse ou un outil adapté, jamais avec les mains près de la lame.", "Vider le bac, nettoyer les entrées d’air et vérifier roues, guidon, câble de commande et carter.", "Ranger au sec ; pour un modèle thermique, laisser refroidir avant ravitaillement ou rangement."],
        periodic: ["Faire contrôler l’affûtage et l’équilibrage de la lame ; remplacer une lame fissurée ou déformée, sans la redresser.", "Contrôler huile moteur, filtre à air, bougie et circuit de carburant aux échéances de la notice.", "Vérifier le serrage, les roues, la hauteur de coupe et l’efficacité de la commande d’arrêt avant chaque saison."],
        service: ["Confier les vibrations, un défaut d’arrêt, une fuite, un câble endommagé ou un défaut d’entraînement à un réparateur.", "Ne jamais faire tourner le moteur sans carter ni intervenir sous le plateau sans isolement de l’énergie."]
    },
    "tondeuse-autoportee": {
        intro: "Désengager les lames, serrer le frein de stationnement, couper le moteur, retirer la clé et attendre l’arrêt complet avant toute inspection. Suivre la procédure du fabricant pour isoler l’allumage ou la batterie.",
        after: ["Retirer l’herbe accumulée autour du plateau et de la goulotte avec un outil adapté, jamais les mains près des lames.", "Vérifier visuellement les lames, le carter, le bac, les pneus, les commandes et les dispositifs de sécurité.", "Laisser refroidir le moteur avant le rangement et garder la machine propre et sèche."],
        periodic: ["Contrôler l’état, la fixation et l’équilibrage des lames selon la notice ; remplacer toute lame fissurée ou déformée.", "Suivre le calendrier du moteur pour l’huile, le filtre, les bougies et le carburant ; contrôler courroies et transmission selon le modèle.", "Vérifier freins, pneus, direction, siège et sécurités de présence avant la saison et aux intervalles du fabricant."],
        service: ["Confier les défauts de freinage, de direction, de coupe, de transmission ou de sécurité à un réparateur qualifié.", "Ne jamais neutraliser le capteur du siège, intervenir sous le plateau sans isolement, ni soulever la machine avec un dispositif non prévu."]
    },
    "nettoyeur-haute-pression": {
        intro: "Arrêter l’appareil, couper l’alimentation en eau et relâcher la pression dans le flexible comme l’indique la notice avant de démonter un accessoire.",
        after: ["Rincer les accessoires compatibles, nettoyer la buse sans l’agrandir et vidanger l’eau résiduelle selon la procédure du fabricant.", "Vérifier flexible, raccords, câble, pistolet et lance ; retirer du service tout flexible boursouflé, coupé ou qui fuit.", "Protéger la pompe du gel selon la méthode prescrite ; ne pas faire tourner la pompe à sec."],
        periodic: ["Nettoyer le filtre d’arrivée d’eau et contrôler les raccords et joints aux intervalles de la notice.", "Inspecter la buse et les accessoires pour l’usure ; un jet qui change peut signaler une buse obstruée ou détériorée.", "Sur un modèle thermique, entretenir huile, filtre, bougie et carburant selon les échéances du moteur."],
        service: ["Faire vérifier une pompe qui fuit, cogne, perd durablement sa pression ou se met souvent en sécurité.", "Ne jamais réparer un flexible haute pression avec un raccord improvisé ni ouvrir une pompe sous pression."]
    },
    "aspirateur-eau-et-poussiere": {
        intro: "Débrancher l’appareil avant d’ouvrir la cuve, de retirer un filtre ou de nettoyer un accessoire ; porter les protections prévues si des poussières sont présentes.",
        after: ["Vider la cuve avant qu’elle ne dépasse le niveau prévu, puis la nettoyer et la sécher après aspiration de liquide.", "Nettoyer ou remplacer le filtre selon la matière aspirée et la notice ; ne pas remettre un filtre lavable encore humide.", "Contrôler flexible, joints, roulettes, câble et flotteur éventuel ; ranger les accessoires au sec."],
        periodic: ["Examiner filtres, sacs, flotteur, joints du couvercle et système de fermeture ; utiliser exclusivement les références compatibles.", "Contrôler que le flexible et les embouts ne sont ni bouchés ni fissurés et que la cuve ne présente pas de fuite.", "Suivre le calendrier de contrôle électrique et de remplacement des consommables du fabricant."],
        service: ["Faire réparer un câble, une prise, un moteur qui chauffe ou une perte d’aspiration persistant après nettoyage.", "Ne pas démonter la turbine ni aspirer une matière dangereuse pour laquelle le modèle n’est pas certifié."]
    },
    "broyeur-de-vegetaux": {
        intro: "Arrêter et isoler toutes les sources d’énergie, puis attendre l’arrêt complet du rotor. Les lames peuvent rester dangereuses même machine débranchée.",
        after: ["Retirer les résidus accessibles avec l’outil fourni ou une brosse, jamais à la main dans la goulotte.", "Contrôler couteaux, contre-lame, boulons accessibles, goulotte et bac ; rechercher fissures, jeu ou usure inhabituelle.", "Nettoyer les grilles de refroidissement et ranger la machine au sec."],
        periodic: ["Remplacer ou retourner couteaux et contre-lame uniquement selon la procédure et le couple de serrage du fabricant.", "Inspecter courroies, rotor, fixations, arrêt d’urgence et verrouillage de goulotte si présents.", "Pour un moteur thermique, entretenir filtre à air, huile, bougie et carburant selon le manuel moteur."],
        service: ["Faire équilibrer ou remplacer le rotor en atelier si vibration ou bruit anormal apparaît.", "Ne pas souder, meuler ou modifier un couteau ni neutraliser un verrouillage."]
    },
    "groupe-electrogene": {
        intro: "Arrêter les charges, couper le groupe et le laisser refroidir dehors avant nettoyage ou ravitaillement. Ne jamais effectuer ces opérations dans un local fermé.",
        after: ["Nettoyer la poussière autour des grilles de ventilation sans obstruer les ouvertures.", "Inspecter câble, prises, capots, silentblocs et châssis ; maintenir l’appareil propre et sec.", "Contrôler visuellement les fuites après refroidissement et ranger le carburant selon sa réglementation et la notice."],
        periodic: ["Suivre le plan d’entretien moteur pour huile, filtre, bougie et circuit de carburant, en tenant compte des heures de fonctionnement.", "Vérifier les protections électriques, connexions, mise à la terre si requise et état des câbles.", "Faire tourner ou stocker le groupe selon les recommandations du fabricant et consigner heures et opérations."],
        service: ["Faire contrôler l’alternateur, les protections électriques et toute prise ou câble endommagé par une personne qualifiée.", "Ne jamais ouvrir l’alternateur ni raccorder le groupe au réseau d’un bâtiment par une installation improvisée."]
    },
    pulverisateur: {
        intro: "Suivre en priorité l’étiquette du produit et la notice du pulvérisateur. Dépressuriser avant ouverture et porter les EPI indiqués pour le produit manipulé.",
        after: ["Rincer et nettoyer cuve, lance et buses selon les consignes du produit ; recueillir les eaux de rinçage de la manière autorisée.", "Rincer les buses sans souffler dedans avec la bouche et remplacer les joints gonflés, craquelés ou fuyards.", "Laisser sécher et stocker l’appareil dépressurisé, propre et identifié, séparé des denrées et des enfants."],
        periodic: ["Contrôler filtre, crépine, joints, flexible, soupape, manomètre et sangles avant la saison et régulièrement en service.", "Vérifier l’étalonnage et le débit selon la procédure du fabricant avant une application nécessitant une dose précise.", "Protéger la pompe et les joints du gel ou du stockage prolongé selon les recommandations du fabricant."],
        service: ["Faire remplacer les pièces en contact avec le produit par des composants compatibles avec la substance utilisée.", "Ne pas réparer une cuve sous pression ni rejeter des restes de produits ou de rinçage dans les égouts."]
    },
    "fendeur-de-buches": {
        intro: "Arrêter et isoler l’alimentation avant nettoyage ou inspection. Sur un modèle hydraulique, une pression peut rester présente : appliquer la procédure de décharge de la notice.",
        after: ["Retirer les copeaux autour du coin et du poussoir ; garder les rails et surfaces de glissement propres.", "Vérifier visuellement flexibles, raccords, protections, commandes, pieds et structure ; rechercher fuite ou fissure.", "Ranger à l’abri de l’humidité et couvrir les parties métalliques selon les consignes du fabricant."],
        periodic: ["Lubrifier rails ou points de graissage uniquement aux endroits prescrits et avec le produit recommandé.", "Sur modèle hydraulique, vérifier le niveau et l’état du fluide et des flexibles selon la procédure du fabricant.", "Contrôler serrages, coin, poussoir et retour des commandes ; consigner les heures si un compteur est fourni."],
        service: ["Confier une fuite hydraulique, une fissure structurelle, un cycle irrégulier ou une commande défectueuse à un réparateur.", "Ne jamais rechercher une fuite hydraulique avec les doigts ni intervenir sur un circuit sous pression."]
    },
    "decoupeuse-a-disque-thermique": {
        intro: "Arrêter le moteur, attendre le refroidissement du disque et du silencieux, puis isoler l’allumage avant nettoyage ou inspection.",
        after: ["Enlever la poussière du carter et des entrées d’air avec la méthode préconisée ; ne pas diriger de jet d’eau vers le moteur.", "Inspecter le disque après refroidissement : fissure, déformation, date ou condition d’usage si applicable ; le retirer au moindre doute.", "Nettoyer les poignées et vérifier carter, axe, écrou et commandes d’arrêt."],
        periodic: ["Remplacer le disque dès qu’il est usé, endommagé ou hors spécification ; vérifier diamètre et vitesse admissibles.", "Entretenir filtre à air, bougie, refroidissement, courroie et embrayage selon la notice et le compteur d’heures.", "Faire vérifier les dispositifs anti-vibration et le serrage de l’axe avant les travaux intensifs."],
        service: ["Faire diagnostiquer une vibration, un disque qui se desserre, une perte de puissance ou un défaut d’arrêt.", "Ne jamais réparer, redresser ou réutiliser un disque fissuré ; ne pas modifier le carter."]
    },
    "decoupeuse-a-disque-sur-chariot": {
        intro: "Arrêter le moteur, isoler l’alimentation et attendre l’immobilisation et le refroidissement du disque avant de nettoyer ou déplacer l’ensemble.",
        after: ["Retirer boue et poussières du châssis, des roues, du guidage et des réglages sans noyer les roulements ou le moteur.", "Vérifier disque, carter, fixation, poignées, roues et éléments de réglage ; retirer un disque endommagé.", "En cas de coupe à eau, vidanger et rincer les conduites selon la notice avant stockage."],
        periodic: ["Contrôler le parallélisme, le verrouillage de profondeur et l’alignement du chariot selon les instructions du fabricant.", "Inspecter roulements, axes, courroies, fixations et système d’arrosage éventuel.", "Entretenir le moteur et vérifier les dispositifs de protection selon les heures de service et la notice."],
        service: ["Confier un défaut d’alignement, un jeu dans le chariot, une fuite ou un défaut de protection à un atelier compétent.", "Ne pas redresser un châssis déformé ni utiliser un disque dont la vitesse nominale ne convient pas."]
    },
    "marteau-piqueur-brise-beton": {
        intro: "Arrêter et isoler l’alimentation avant de retirer le burin ou de nettoyer le porte-outil ; attendre le refroidissement des pièces chaudes.",
        after: ["Retirer poussières et débris du porte-outil et des ouïes avec une brosse douce.", "Inspecter burin, retenue, poignées, câble ou flexible et carter ; remplacer un burin fissuré ou déformé.", "Ranger l’outil sec, avec le burin protégé et les accessoires séparés."],
        periodic: ["Lubrifier le porte-outil ou le mécanisme uniquement avec la graisse spécifiée et à la fréquence de la notice.", "Contrôler câble, prise, flexible, raccords, charbons éventuels et système anti-vibration selon le modèle.", "Consigner les heures de frappe pour planifier les contrôles prescrits par le fabricant."],
        service: ["Confier une baisse de frappe, un bruit interne, un échauffement anormal ou un câble détérioré à un réparateur.", "Ne pas ouvrir le mécanisme de percussion ni modifier le burin ou la retenue."]
    },
    "souffleur-main": {
        intro: "Arrêter l’appareil et isoler batterie, secteur ou moteur selon la notice. Attendre l’arrêt du ventilateur avant d’approcher les grilles.",
        after: ["Retirer feuilles et poussières de la grille d’admission, du carter et du tube sans introduire d’objet dans le ventilateur.", "Inspecter fixation du tube, poignée, interrupteur, câble ou batterie et nettoyer l’extérieur à sec.", "Stocker la batterie selon sa notice, séparée de l’appareil si le fabricant le demande."],
        periodic: ["Nettoyer filtre à air et bougie sur modèle thermique selon les échéances du fabricant.", "Vérifier l’état de la batterie, du chargeur, du câble et des contacts ; remplacer une pièce gonflée ou endommagée.", "Contrôler régulièrement que le ventilateur n’est ni obstrué ni fissuré."],
        service: ["Faire réparer un ventilateur déséquilibré, une commande intermittente ou un moteur qui chauffe.", "Ne pas ouvrir le carter du ventilateur ni nettoyer l’appareil avec un jet haute pression."]
    },
    "aspirateur-de-feuilles-a-dos": {
        intro: "Arrêter et isoler la machine avant d’ouvrir le sac, de retirer un bouchon ou d’inspecter une turbine ou un broyeur.",
        after: ["Vider le sac dans la zone prévue, le brosser et le laisser sécher complètement avant rangement.", "Nettoyer tube, entrée d’air et grilles ; contrôler coutures, fermetures, sangles et attaches.", "Inspecter couteau ou turbine de broyage seulement selon l’accès et la procédure prévus par la notice."],
        periodic: ["Contrôler l’usure du sac, des joints, du tube et du mécanisme de broyage ; remplacer les pièces non étanches.", "Entretenir filtre, bougie et refroidissement du moteur thermique selon les échéances fabricant.", "Vérifier le harnais et ses points de fixation pour éviter une rupture en portage."],
        service: ["Faire contrôler toute vibration, bruit de broyage anormal, perte d’aspiration ou fuite de carburant.", "Ne pas affûter ni démonter un couteau ou une turbine sans procédure, outil et compétence adaptés."]
    },
    "taille-haie-perche": {
        intro: "Arrêter et isoler l’alimentation avant de toucher la lame ou de régler la tête ; immobiliser l’outil au sol.",
        after: ["Retirer feuilles et sève des lames avec une brosse et le nettoyant recommandé, puis sécher et lubrifier selon la notice.", "Inspecter dents, protège-lame, tête orientable, verrouillage, perche, poignées et courroie éventuelle.", "Poser le fourreau et ranger l’appareil sans appuyer la lame contre un mur ou le sol."],
        periodic: ["Contrôler l’affûtage et le jeu des lames ; faire régler ou remplacer le jeu conformément au fabricant.", "Vérifier les fixations de la tête, l’arbre de transmission et le graissage du renvoi d’angle si prévu.", "Sur version thermique, entretenir filtre, bougie, refroidissement et carburant selon le manuel moteur."],
        service: ["Confier une tête qui se desserre, une transmission bruyante, une lame tordue ou une commande défectueuse à un atelier.", "Ne pas régler une tête ou une transmission en hauteur ni travailler sur une lame alimentée."]
    },
    "perche-elagueuse": {
        intro: "Arrêter et isoler l’appareil avant tout entretien de chaîne ; attendre l’arrêt complet et porter des gants adaptés aux arêtes coupantes.",
        after: ["Nettoyer les copeaux autour du guide, du carter de chaîne et de la tête ; vérifier la tension seulement selon la notice.", "Contrôler chaîne, guide, écrou, protège-guide, perche et fixations ; nettoyer l’orifice d’huile accessible.", "Compléter ou protéger le lubrifiant de chaîne et ranger avec le guide couvert selon les consignes."],
        periodic: ["Affûter la chaîne avec les spécifications correspondant exactement au modèle et contrôler l’usure du guide et du pignon.", "Vérifier le débit de lubrification, la tension de la perche, les connexions électriques ou les éléments du moteur thermique.", "Planifier l’entretien moteur, batterie ou transmission selon les heures d’usage et le calendrier fabricant."],
        service: ["Faire contrôler une chaîne qui n’est plus lubrifiée, un frein ou une fixation défectueuse, ou une tête qui vibre.", "Ne pas modifier la longueur de chaîne, le guide, le protège-main ou les dispositifs anti-rebond."]
    },
    "tariere-thermique": {
        intro: "Arrêter le moteur et laisser refroidir. Déconnecter l’allumage selon la notice avant de retirer une mèche ou de toucher à la transmission.",
        after: ["Retirer la terre de la mèche et du carter avec une brosse, puis sécher les surfaces métalliques avant rangement.", "Inspecter la mèche, l’axe, la goupille, les poignées et les commandes ; remplacer toute pièce fissurée.", "Nettoyer les grilles de refroidissement et ranger la mèche protégée et immobilisée."],
        periodic: ["Entretenir filtre à air, bougie, carburant et refroidissement selon les heures prescrites pour le moteur.", "Vérifier les fixations, les dispositifs anti-vibration et le niveau de lubrification de transmission si l’accès est prévu.", "Contrôler l’usure et la fixation des couteaux ou pointes de la mèche uniquement suivant la notice."],
        service: ["Faire contrôler un embrayage qui entraîne la mèche au ralenti, une transmission bruyante ou un arrêt moteur défaillant.", "Ne pas démonter l’embrayage ni utiliser une mèche non homologuée pour le diamètre de l’appareil."]
    },
    "rouleau-gazon": {
        intro: "Immobiliser le rouleau sur une surface plane avant nettoyage, vidange ou entretien ; garder mains et pieds hors des points de pincement.",
        after: ["Enlever terre, herbe et humidité du tambour et du châssis pour limiter corrosion et dépôts.", "Vérifier poignée, attelage, axes, bouchon et bouchon de vidange éventuel.", "Vider le tambour si le modèle et la notice le recommandent pour le stockage ou le gel."],
        periodic: ["Inspecter l’axe et les roulements ; lubrifier uniquement les graisseurs indiqués par le fabricant.", "Contrôler les soudures, fixations, roues et dispositif de remplissage avant la saison.", "Vérifier l’étanchéité du tambour et remplacer un bouchon ou joint détérioré."],
        service: ["Faire réparer un tambour déformé, une soudure fissurée ou un axe qui prend du jeu.", "Ne pas dépasser la masse maximale ni remplir un modèle qui n’est pas conçu pour être lesté."]
    },
    motobineuse: {
        intro: "Arrêter et isoler le moteur avant d’approcher les fraises ; attendre leur immobilisation et laisser refroidir le moteur.",
        after: ["Retirer terre et racines des fraises avec un outil adapté, jamais les mains ; nettoyer aussi les carters et les roues.", "Inspecter les fraises, goupilles, protections, commandes et câbles ; remplacer les pièces fissurées ou manquantes.", "Nettoyer les grilles moteur et ranger l’appareil à l’abri, fraises protégées."],
        periodic: ["Contrôler serrage et usure des fraises, des axes, des roues et des fixations selon la notice.", "Entretenir huile, filtre à air, bougie, courroie et transmission selon le modèle et les heures de service.", "Vérifier les commandes d’embrayage et d’arrêt avant chaque période de travail."],
        service: ["Faire contrôler une transmission qui patine, des fraises déséquilibrées, une fuite ou une commande qui ne revient pas.", "Ne pas ajouter de fraises, modifier les carters ou intervenir sous la machine sans isolement et méthode prescrite."]
    }
};

const toolMeasureGuides = {
    debroussailleuse: {
        intro: "Avant de choisir le fil ou la lame, mesure ou estime la hauteur et la résistance de la végétation, puis compare avec la notice. Le repère d’environ 60 cm pour une herbe tendre n’est valable que si le fabricant l’autorise pour ce modèle.",
        checks: ["Hauteur et densité de l’herbe ; herbe verte tendre ou tiges ligneuses.", "Type et diamètre de l’accessoire autorisé, diamètre du fil et régime prescrits.", "Largeur de la zone à traiter et périmètre d’exclusion indiqué par la notice."]
    },
    souffleur: {
        intro: "Dimensionne le travail selon la surface et les débris, puis vérifie la capacité d’air publiée pour le modèle ; la vitesse seule ne suffit pas à comparer deux souffleurs.",
        checks: ["Surface à nettoyer en m² et distance jusqu’à la zone de collecte.", "Débit d’air en m³/h ou vitesse en m/s selon les données de la notice.", "Taille des débris, pente et conditions de vent ; renonce si le souffle disperse les poussières."]
    },
    "taille-haie": {
        intro: "Mesure le diamètre des rameaux et la hauteur de la haie avant de choisir la machine. Compare-les à la capacité de coupe et à la portée prévues par le fabricant.",
        checks: ["Diamètre des rameaux à couper, comparé au diamètre maximal indiqué par la notice.", "Hauteur et longueur de haie, en tenant compte de la portée sans échelle ni posture instable.", "Longueur de lame et poids de la machine pour vérifier que l’outil convient à la tâche."]
    },
    tronconneuse: {
        intro: "La longueur du guide n’est pas à elle seule une mesure de sécurité. Le diamètre, la stabilité et la tension du bois déterminent la méthode ; seuls des utilisateurs formés interviennent.",
        checks: ["Diamètre et état du bois, présence de tension, branches retenues ou risque de chute.", "Longueur et type de guide/chaîne prescrits pour le modèle ; ne pas en déduire qu’une coupe est réalisable.", "Tension de chaîne selon la méthode exacte de la notice, moteur arrêté et chaîne froide."]
    },
    tondeuse: {
        intro: "La hauteur de coupe, la pente maximale et la surface admissible sont des données de modèle. Mesure la pelouse et compare-les à la notice avant de tondre.",
        checks: ["Hauteur de l’herbe et positions de hauteur de coupe disponibles, souvent exprimées en mm.", "Pente du terrain comparée à la limite du fabricant ; vérifier aussi les zones humides et dévers.", "Surface à tondre, largeur de coupe et capacité du bac ou autonomie pour planifier les passages."]
    },
    "tondeuse-autoportee": {
        intro: "Vérifie les capacités et limites spécifiques au modèle avant de choisir la tondeuse autoportée ; une pente acceptable varie selon la machine et les conditions du sol.",
        checks: ["Largeur du plateau et hauteur de coupe disponibles, selon la notice.", "Pente maximale et consignes de conduite spécifiques au terrain ; ne pas supposer qu’un dévers est autorisé.", "Surface à tondre, capacité du bac et autonomie pour planifier les passages sans fatigue ni précipitation."]
    },
    "nettoyeur-haute-pression": {
        intro: "Les valeurs de pression et de débit doivent être compatibles à la fois avec la machine et le support ; une pression plus élevée n’est pas toujours adaptée.",
        checks: ["Pression de service en bar et débit en L/h, en distinguant les valeurs nominales et maximales.", "Surface à nettoyer en m² et sensibilité du support ; tester d’abord une petite zone discrète.", "Buse, distance de travail et température d’eau maximales spécifiées par la notice."]
    },
    "aspirateur-eau-et-poussiere": {
        intro: "Compare la matière à aspirer aux capacités réelles du filtre et de la cuve ; les classes de poussières et usages liquides sont spécifiques au modèle.",
        checks: ["Volume de cuve en litres et niveau maximal de remplissage.", "Type de filtre, classe de poussière et présence éventuelle d’un sac compatible.", "Liquide ou poussière, volume estimé et accessoires autorisés pour cet usage."]
    },
    "broyeur-de-vegetaux": {
        intro: "Mesure le diamètre des branches et compare-le à la capacité maximale publiée pour le type de bois concerné ; une valeur maximale ne garantit pas un débit constant.",
        checks: ["Diamètre des branches en mm, type de bois et état sec ou frais.", "Ouverture de la goulotte, système de coupe et diamètre maximal figurant dans la notice.", "Volume de déchets et capacité du bac ou du contenant, pour éviter son débordement."]
    },
    "groupe-electrogene": {
        intro: "Additionne les puissances des appareils et identifie leur courant de démarrage. Choisis selon la puissance continue du groupe, sans te baser uniquement sur la puissance maximale annoncée.",
        checks: ["Puissance nominale continue en W ou kW et puissance de démarrage des appareils.", "Tension en V, fréquence en Hz, phases et type de prise nécessaires.", "Charge totale simultanée et calibre des câbles/protections, validés selon la notice ou par une personne qualifiée."]
    },
    pulverisateur: {
        intro: "Pour un traitement, la quantité se calcule selon l’étiquette du produit, la surface autorisée et le débit mesuré. Ne déduis jamais une dose de la seule capacité du réservoir.",
        checks: ["Surface à traiter en m² ou ha et dose exacte indiquée sur l’étiquette.", "Volume de bouillie requis et capacité utile du réservoir, sans dépasser le repère de remplissage.", "Débit de la buse en L/min et vitesse de marche lors d’un étalonnage réalisé selon la procédure autorisée."]
    },
    "fendeur-de-buches": {
        intro: "Mesure les bûches avant de les charger. La longueur, le diamètre et le type de bois doivent respecter les limites de la machine.",
        checks: ["Longueur de bûche en cm comparée à la course et à la longueur utile du fendeur.", "Diamètre en cm et essence/état du bois, comparés à la capacité de fendage déclarée.", "Masse de la machine, stabilité du sol et dégagement nécessaire pour manipuler les bûches."]
    },
    "decoupeuse-a-disque-thermique": {
        intro: "Le disque et la vitesse de la machine sont choisis selon le matériau et les marquages du fabricant. La profondeur de coupe réelle dépend du diamètre et de la géométrie.",
        checks: ["Diamètre du disque en mm, alésage et vitesse maximale en tr/min ou m/s.", "Matériau et profondeur de coupe nécessaire, comparés aux capacités du disque et de la machine.", "Épaisseur de la pièce et trajectoire, avec espace libre pour la machine et les projections."]
    },
    "decoupeuse-a-disque-sur-chariot": {
        intro: "Avant le chantier, mesure la profondeur, la longueur et le tracé de coupe ; vérifie les limites du disque et de la machine montés sur le chariot.",
        checks: ["Profondeur de coupe requise en mm et profondeur maximale de la configuration.", "Diamètre, alésage et vitesse nominale du disque, compatibles avec la machine.", "Longueur/largeur du tracé, stabilité du support et dégagement nécessaire au déplacement du chariot."]
    },
    "marteau-piqueur-brise-beton": {
        intro: "Le choix se fait selon le matériau, l’épaisseur à retirer, l’énergie de frappe et le poids de l’appareil ; ces valeurs ne remplacent pas l’inspection de la structure.",
        checks: ["Épaisseur et nature du matériau à casser ; vérifier réseaux et structure avant intervention.", "Énergie de frappe en joules et fréquence de frappe en coups/min indiquées pour le modèle.", "Poids de l’outil, durée de travail et diamètre/compatibilité du porte-outil et du burin."]
    },
    "souffleur-main": {
        intro: "Choisis le souffle selon la surface et la nature des débris. Vérifie les performances déclarées et évite de soulever des poussières ou objets qui ne peuvent pas être maîtrisés.",
        checks: ["Surface en m² et distance de déplacement des feuilles.", "Débit en m³/h et vitesse d’air en m/s selon les valeurs spécifiées par le fabricant.", "Taille des débris, présence de graviers et vent ; établir une zone d’exclusion adaptée."]
    },
    "aspirateur-de-feuilles-a-dos": {
        intro: "Évalue le volume de feuilles et compare-le au sac et au débit d’aspiration. Les capacités annoncées dépendent des feuilles et ne correspondent pas toujours au volume réel collecté.",
        checks: ["Surface et volume estimé des feuilles, selon leur humidité et leur densité.", "Capacité du sac en litres et débit d’aspiration indiqué pour l’appareil.", "Diamètre des débris et mode broyage/aspiration autorisé ; exclure les matières étrangères."]
    },
    "taille-haie-perche": {
        intro: "Mesure les rameaux, la hauteur et la largeur de la haie depuis le sol. La portée annoncée n’autorise pas à travailler depuis une échelle ou sous des lignes.",
        checks: ["Diamètre des rameaux comparé à la capacité de coupe en mm de la notice.", "Hauteur de haie et portée de coupe, en gardant une posture stable et maîtrisée.", "Longueur de lame, longueur totale et masse de l’outil pour anticiper fatigue et maniabilité."]
    },
    "perche-elagueuse": {
        intro: "Mesure le diamètre des branches et évalue leur stabilité, leur portée et leur zone de chute. Une branche sous tension ou hors portée nécessite une personne qualifiée.",
        checks: ["Diamètre de la branche et capacité de coupe du modèle ; rester dans les limites de la notice.", "Portée utile depuis le sol et distance aux lignes électriques, sans s’approcher des distances réglementaires minimales.", "Longueur de guide, tension de chaîne et zone de chute ; ces mesures ne remplacent pas une formation."]
    },
    "tariere-thermique": {
        intro: "Définis le diamètre et la profondeur du trou puis vérifie la compatibilité de la mèche. Fais localiser les réseaux enterrés avant le forage.",
        checks: ["Diamètre de la mèche en mm et diamètre du trou demandé.", "Profondeur requise et rallonges autorisées par le fabricant.", "Nombre de trous, nature du sol et présence possible de réseaux ; ne pas forer tant que leur emplacement n’est pas connu."]
    },
    "rouleau-gazon": {
        intro: "Le poids appliqué dépend du rouleau et de son lest. Mesure la largeur à couvrir et vérifie la masse ainsi que l’état du sol pour éviter le tassement.",
        checks: ["Largeur du tambour et surface de passage en m².", "Masse à vide et masse lestée maximale en kg, selon la plaque ou la notice.", "Humidité et portance du sol ; suspendre le roulage si le sol se déforme ou colle."]
    },
    motobineuse: {
        intro: "Mesure la largeur et la profondeur de travail nécessaires, puis compare-les aux fraises et réglages permis. Une profondeur plus importante n’est pas toujours adaptée au sol.",
        checks: ["Largeur de travail en cm selon le montage des fraises.", "Profondeur réglée en cm et profondeur maximale admise par la notice.", "Surface, pente et état du sol ; repérer les réseaux enterrés et retirer les obstacles avant de démarrer."]
    }
};

const explorer = document.querySelector("#explorer");
const explorerTitle = document.querySelector("#tool-title");
const partTitle = document.querySelector("#part-title");
const partNumber = document.querySelector("#part-number");
const partKicker = document.querySelector("#part-kicker");
const partSummary = document.querySelector("#part-summary");
const lessonEyebrow = document.querySelector("#lesson-eyebrow");
const lessonTitle = document.querySelector("#lesson-title");
const lessonText = document.querySelector("#lesson-text");
const lessonList = document.querySelector("#lesson-list");
const explorerIntro = document.querySelector(".explorer-intro");
const machineImage = document.querySelector("#machine-image");
const machineArt = document.querySelector("#machine-art");
const machinePhoto = document.querySelector("#machine-photo");
const machinePoints = document.querySelector("#machine-points");
const machineCalloutLines = document.querySelector("#machine-callout-lines");
const epiMachineArt = document.querySelector("#epi-machine-art");
const epiMachineImage = document.querySelector("#epi-machine-image");
const epiMachinePhoto = document.querySelector("#epi-machine-photo");
const epiMachinePoints = document.querySelector("#epi-machine-points");
const epiCalloutLines = document.querySelector("#epi-callout-lines");
const epiFigureCard = document.querySelector("#epi-figure-card");
const epiLearningCard = document.querySelector("#epi-learning-card");
const epiPartNumber = document.querySelector("#epi-part-number");
const epiPartTitle = document.querySelector("#epi-part-title");
const epiPartSummary = document.querySelector("#epi-part-summary");
const epiLessonEyebrow = document.querySelector("#epi-lesson-eyebrow");
const epiLessonTitle = document.querySelector("#epi-lesson-heading");
const epiLessonText = document.querySelector("#epi-lesson-text");
const epiLessonList = document.querySelector("#epi-lesson-list");
const zoomResetButtons = [...document.querySelectorAll("[data-reset-zoom]")];
const photoCredit = document.querySelector("#photo-credit");
const usageDetails = document.querySelector("#usage-details");
const usageDiagrams = document.querySelector("#usage-diagrams");
const usageIntro = document.querySelector("#usage-intro");
const topicTabs = [...document.querySelectorAll(".topic-tab")];
const toolCards = [...document.querySelectorAll(".tool-card")];
const toolSearch = document.querySelector("#tool-search");
const toolCount = document.querySelector("#tool-count");
const emptyTools = document.querySelector("#empty-tools");
const featuredLabel = document.querySelector("#featured-label");
const featuredPhoto = document.querySelector("#featured-photo");
const featuredCaption = document.querySelector("#featured-caption");
const ccfActivity = document.querySelector("#ccf-activity");
const hotspotZoomScale = 1.45;
let activeTool = document.body.dataset.tool || "debroussailleuse";
let activePart = "moteur";
let activeEpiPart = "";
let activeTopic = "pieces";
let selectedMachineArt = machineArt;
let selectedMachinePoints = machinePoints;

const ccfSteps = [
    {
        situation: "Tu arrives sur le site. Le chemin voisin est fréquenté et la zone de travail n’a pas encore été inspectée.",
        question: "Que fais-tu avant de sortir les machines ?",
        choices: [
            "Je commence par le passage le plus éloigné pour gagner du temps.",
            "Je repère les limites, les obstacles, le public, l’état du terrain et les risques, puis je balise la zone et organise le chantier.",
            "Je choisis la machine la plus puissante et je verrai les détails en travaillant."
        ],
        answer: 1,
        explanation: "La reconnaissance du site précède le choix du matériel. Repère notamment les personnes, les obstacles cachés, les accès, les réseaux éventuels et l’état du sol. Éloigne ou protège le public et définis une organisation adaptée aux consignes du chantier."
    },
    {
        situation: "La demande comprend une pelouse, de l’herbe verte haute d’environ 60 cm, des repousses ligneuses et une haie.",
        question: "Quelle préparation du matériel est la plus cohérente ?",
        choices: [
            "Prévoir une machine adaptée à chaque tâche : tondeuse pour la pelouse, débroussailleuse équipée selon la végétation et la notice pour l’herbe, outil de coupe adapté pour la haie et les repousses.",
            "Faire tout le chantier avec la tondeuse, quelle que soit la végétation.",
            "Monter le même disque sur toutes les machines pour éviter les changements."
        ],
        answer: 0,
        explanation: "On choisit l’outil et son accessoire en fonction du végétal, du terrain et des limites fixées par le fabricant. Une hauteur d’herbe ne suffit pas à elle seule pour valider un accessoire : vérifie la notice et l’état réel de la végétation."
    },
    {
        situation: "Tu évalues la zone d’herbe verte, souple et non ligneuse, mesurée à environ 60 cm.",
        question: "Quelle décision prends-tu pour une débroussailleuse à fil ?",
        choices: [
            "Je peux retenir le fil si la notice du modèle autorise ce type de végétation et cette hauteur ; sinon je choisis une solution autorisée.",
            "Le fil convient toujours jusqu’à 60 cm, sur toutes les machines.",
            "Je monte immédiatement une lame, sans vérifier le modèle ni les consignes."
        ],
        answer: 0,
        explanation: "Le fil peut convenir à de l’herbe tendre et non sèche autour de cette hauteur, mais uniquement si la notice du modèle le permet. Ce repère n’est pas une limite universelle : la densité, l’humidité, le diamètre du fil et la puissance influencent le travail."
    },
    {
        situation: "Dans les repousses, tu découvres des tiges ligneuses et tu ne sais pas si l’accessoire prévu est compatible.",
        question: "Comment réagis-tu ?",
        choices: [
            "Je force avec l’accessoire déjà monté, en avançant plus lentement.",
            "Je m’arrête et je vérifie l’accessoire autorisé, la machine, la végétation et les compétences requises avant de poursuivre ; en cas de doute, je demande conseil.",
            "Je retire le protecteur pour mieux voir la coupe."
        ],
        answer: 1,
        explanation: "Un accessoire inadapté ou un protecteur retiré augmente le risque de projection et de perte de contrôle. Ne modifie pas la machine hors des configurations prévues. Fais valider le choix par l’enseignant ou le responsable si nécessaire."
    },
    {
        situation: "Le matériel est prêt. Tu dois choisir les protections pour les différentes tâches.",
        question: "Quel est le bon principe pour les EPI ?",
        choices: [
            "Porter les mêmes EPI pour toutes les machines, sans consulter les notices.",
            "Choisir les EPI selon la tâche et les risques évalués, puis vérifier les exigences de la notice et les consignes de l’établissement.",
            "Retirer les protections auditives si le travail ne dure que quelques minutes."
        ],
        answer: 1,
        explanation: "Les EPI dépendent de la machine, de l’accessoire et de l’exposition : bruit, projections, coupures, poussières ou circulation. Vérifie leur compatibilité, leur état et les consignes applicables ; les EPI ne remplacent ni le balisage ni les protections de la machine."
    },
    {
        situation: "Pendant le travail, une débroussailleuse se met à vibrer anormalement.",
        question: "Quelle est ta réaction ?",
        choices: [
            "Je termine la bande en cours en tenant la machine plus fermement.",
            "J’arrête immédiatement, sécurise la machine selon sa notice, attends l’arrêt complet et signale le défaut avant tout contrôle ou reprise.",
            "Je demande à un collègue de tenir la machine pendant que je regarde l’accessoire."
        ],
        answer: 1,
        explanation: "Une vibration inhabituelle peut signaler un accessoire endommagé, mal monté ou un autre défaut. N’approche pas les mains d’un organe en mouvement. La machine ne reprend pas avant le contrôle prévu par la notice et la validation d’une personne compétente."
    },
    {
        situation: "Le chantier est terminé. Tu dois laisser le matériel prêt pour le prochain utilisateur.",
        question: "Que fais-tu pour clôturer l’intervention ?",
        choices: [
            "Je nettoie et contrôle l’outil après l’avoir arrêté et sécurisé, signale tout défaut, puis transmets les mesures et les difficultés rencontrées.",
            "Je range rapidement la machine, même si des débris restent autour de la coupe.",
            "Je règle les pièces d’usure et les serrages sans notice pour gagner du temps."
        ],
        answer: 0,
        explanation: "Applique les opérations de nettoyage et de contrôle prévues par la notice, machine arrêtée et sécurisée. N’effectue pas de réglage improvisé. Rends compte du travail réalisé, des zones traitées, des anomalies, des consommables et de ce qui reste à faire."
    }
];

const ccfScenarios = [
    {
        title: "Remettre en état les abords d’un espace communal",
        brief: "Tu fais partie d’une équipe d’entretien. La demande concerne une pelouse, une zone d’herbe verte haute d’environ 60 cm, quelques repousses ligneuses et une haie. Le site est proche d’un chemin fréquenté. Tu dois préparer l’intervention, réagir aux imprévus et rendre compte du travail.",
        steps: ccfSteps
    },
    {
        title: "Tailler une haie le long d’un chemin fréquenté",
        brief: "Une haie doit être remise en forme près d’un chemin piéton. Certaines parties sont en hauteur et le sol est légèrement en pente. Tu dois organiser la protection des passants et choisir une méthode de travail adaptée.",
        steps: [
            {
                situation: "Des piétons peuvent arriver par les deux côtés du chemin pendant l’intervention.",
                question: "Que prévois-tu avant de démarrer le taille-haie ?",
                choices: ["Je commence rapidement et je demande aux passants de faire attention.", "Je balise et sécurise la zone, organise une déviation ou une surveillance selon les consignes, et ne taille pas tant que le public peut entrer dans la zone de danger.", "Je taille uniquement le côté opposé au chemin."],
                answer: 1,
                explanation: "La protection des tiers fait partie de la préparation. Délimite la zone selon l’évaluation des risques et les consignes du chantier ; interromps le travail si elle n’est plus maîtrisée."
            },
            {
                situation: "Le haut de la haie est trop éloigné pour être atteint confortablement avec l’outil tenu à bout de bras.",
                question: "Quelle est la meilleure décision ?",
                choices: ["Utiliser un taille-haie sur perche prévu pour cette tâche, si la notice et la formation l’autorisent, en gardant une posture et une zone de travail maîtrisées.", "Monter sur la première marche ou sur une branche pour gagner de la portée.", "Allonger l’outil avec une rallonge improvisée."],
                answer: 0,
                explanation: "Ne travaille pas en équilibre précaire et ne modifie pas la machine. Un outil sur perche doit être utilisé selon sa notice, avec une zone libre et une posture adaptée."
            },
            {
                situation: "Une branche épaisse bloque les lames du taille-haie.",
                question: "Que fais-tu ?",
                choices: ["Je tire sur la branche pendant que les lames tournent.", "Je coupe le moteur, sécurise l’outil conformément à sa notice et attends l’arrêt complet avant toute action ; si la branche dépasse les capacités prévues, je choisis une méthode autorisée ou demande de l’aide.", "Je donne des accélérations pour débloquer les lames."],
                answer: 1,
                explanation: "N’approche jamais les mains des lames en mouvement. Une branche trop grosse peut endommager l’outil ou provoquer un mouvement brusque : respecte les capacités indiquées par le fabricant."
            },
            {
                situation: "La taille est finie et des déchets sont tombés sur le chemin.",
                question: "Comment termines-tu correctement ?",
                choices: ["Je laisse le chemin dégagé par le vent.", "Je sécurise et nettoie la zone, contrôle l’outil et ses lames selon la notice, puis signale toute anomalie.", "Je nettoie les lames moteur tournant pour gagner du temps."],
                answer: 1,
                explanation: "Rends le chemin sûr avant de lever le balisage. Nettoie et contrôle l’outil uniquement à l’arrêt et selon la notice ; signale les défauts au responsable."
            }
        ]
    },
    {
        title: "Nettoyer les feuilles mortes dans une cour",
        brief: "Après une journée venteuse, des feuilles recouvrent une cour, les entrées et un passage piéton. Des personnes sont présentes à proximité et une partie du sol est humide. Tu dois choisir une méthode de ramassage et éviter les nuisances.",
        steps: [
            {
                situation: "La cour est fréquentée et les feuilles sont réparties entre un passage étroit et une grande zone ouverte.",
                question: "Comment organises-tu le ramassage ?",
                choices: ["Je souffle tout vers les portes et les personnes présentes.", "Je sécurise les passages, choisis entre ramassage manuel, souffleur ou aspirateur selon le lieu et l’outil, et dirige les feuilles vers un point de collecte sans gêner le public.", "Je souffle les feuilles dans la rue pour dégager plus vite."],
                answer: 1,
                explanation: "Le choix dépend de la surface, de l’accès et des personnes autour. Ne déplace pas les feuilles vers la circulation ou les autres usagers ; limite poussières et projections."
            },
            {
                situation: "Le souffleur à dos est bruyant et une personne travaille dans un local voisin.",
                question: "Que dois-tu vérifier ?",
                choices: ["Les consignes du site, les horaires et les nuisances, puis prévenir ou adapter l’organisation avant de démarrer.", "Rien : un souffleur peut être utilisé à toute heure.", "Je retire le silencieux pour finir plus vite."],
                answer: 0,
                explanation: "Prends en compte le bruit et les personnes à proximité. Respecte les règles locales et la notice ; ne modifie jamais un dispositif de réduction du bruit."
            },
            {
                situation: "Le vent pousse les feuilles et de la poussière vers une porte ouverte.",
                question: "Quelle réaction est adaptée ?",
                choices: ["Je continue en augmentant la puissance.", "J’arrête ou change l’organisation et le sens du travail pour éviter d’envoyer poussières et débris vers les personnes ou les locaux.", "Je souffle plus près de la porte pour tout faire sortir."],
                answer: 1,
                explanation: "Le sens du vent et les projections font partie des conditions de travail. Adapte la méthode et interromps si tu ne peux pas protéger les tiers."
            },
            {
                situation: "Le ramassage est fini, mais un passage humide reste glissant.",
                question: "Que fais-tu avant de rouvrir le passage ?",
                choices: ["Je signale le risque, nettoie ou balise jusqu’à ce que le passage soit sûr, puis contrôle et range le matériel selon sa notice.", "Je retire immédiatement les barrières pour libérer le passage.", "Je laisse les feuilles humides sur place."],
                answer: 0,
                explanation: "La fin de l’utilisation de la machine ne signifie pas que le chantier est sûr. Traite le risque de glissade et vérifie que les usagers peuvent circuler."
            }
        ]
    },
    {
        title: "Préparer un terrain avant une plantation",
        brief: "Une petite parcelle doit être préparée avant des plantations. Le sol est irrégulier, la zone n’a pas été travaillée depuis longtemps et le plan prévoit quelques trous de plantation. Tu disposes d’une motobineuse et d’une tarière, sous la responsabilité de ton enseignant.",
        steps: [
            {
                situation: "Tu ne connais pas l’emplacement exact des réseaux enterrés et le terrain contient des herbes hautes.",
                question: "Quelle vérification est prioritaire avant d’utiliser une motobineuse ou une tarière ?",
                choices: ["Vérifier le plan et les autorisations relatives aux réseaux, repérer et dégager la zone selon les consignes, puis inspecter les obstacles.", "Démarrer la tarière pour repérer les réseaux en sentant les vibrations.", "Travailler uniquement à faible vitesse sans autre vérification."],
                answer: 0,
                explanation: "Une machine de travail du sol peut rencontrer des réseaux ou des objets cachés. Ne fore pas tant que la zone n’est pas identifiée et autorisée. La prudence ou la vitesse réduite ne remplace pas le repérage."
            },
            {
                situation: "La terre est très humide et colle aux outils de travail du sol.",
                question: "Comment décides-tu si le chantier peut continuer ?",
                choices: ["Je force, car la motobineuse fera le travail.", "J’évalue les conditions, vérifie les limites de la notice et les consignes ; si le sol ou l’adhérence rendent le travail dangereux ou inefficace, je reporte et j’en informe le responsable.", "Je retire les protections pour éviter que la terre s’accumule."],
                answer: 1,
                explanation: "Un sol trop humide peut dégrader sa structure et rendre la machine difficile à maîtriser. Les conditions acceptables dépendent du sol, du modèle et du travail demandé."
            },
            {
                situation: "Une motobineuse s’approche d’une bordure et d’un massif à conserver.",
                question: "Comment limites-tu les dégâts ?",
                choices: ["Je passe au plus près à pleine vitesse.", "Je matérialise les zones à préserver, utilise la machine dans les conditions prévues et termine les bordures par une méthode adaptée si besoin.", "Je démonte un élément de protection pour mieux voir les fraises."],
                answer: 1,
                explanation: "La préparation des limites évite d’endommager les plantations et les aménagements. Maintiens les protections montées et suis les instructions de conduite."
            },
            {
                situation: "Une motobineuse cale et les fraises sont chargées de racines.",
                question: "Quelle conduite tiens-tu ?",
                choices: ["Je retire les racines à la main avec le moteur au ralenti.", "J’arrête et sécurise la machine selon la notice, attends l’immobilisation complète et applique uniquement la méthode de dégagement prévue.", "Je redémarre plusieurs fois en accélérant."],
                answer: 1,
                explanation: "Les fraises peuvent se remettre en mouvement ou retenir de l’énergie. Ne dégage rien tant que la machine n’est pas arrêtée et sécurisée selon les instructions du fabricant."
            }
        ]
    },
    {
        title: "Gérer des branches après un coup de vent",
        brief: "Après un coup de vent, plusieurs branches sont tombées dans un espace vert. Certaines sont au sol, d’autres sont coincées dans des branches encore en hauteur. Le public doit retrouver l’accès au site. Tu dois distinguer le travail possible de celui à confier à une personne qualifiée.",
        steps: [
            {
                situation: "Une branche est suspendue dans un arbre et sa stabilité est incertaine.",
                question: "Que fais-tu ?",
                choices: ["Je la tire avec une perche élagueuse depuis le dessous.", "Je condamne et balise la zone, éloigne les personnes et préviens le responsable pour faire intervenir une personne compétente.", "Je demande à un collègue de la pousser pendant que je coupe."],
                answer: 1,
                explanation: "Une branche sous tension ou suspendue peut tomber ou se déplacer brutalement. Ne travaille pas dessous et ne tente pas une coupe improvisée ; sécurise la zone et alerte."
            },
            {
                situation: "Des branches au sol doivent être débitées, mais tu n’as pas encore vérifié leur tension ni ta formation pour la tronçonneuse.",
                question: "Quelle décision prends-tu ?",
                choices: ["Je débute par la plus grosse, sans attendre.", "Je fais évaluer le bois et les risques, vérifie que la tâche et la machine relèvent de ma formation et de l’autorisation reçue, sinon je laisse le travail à une personne qualifiée.", "Je coupe en tenant la branche avec le pied."],
                answer: 1,
                explanation: "Le bois peut se déplacer ou pincer le guide-chaîne. L’usage d’une tronçonneuse exige une formation, une autorisation, des EPI et une méthode adaptés ; n’improvise pas."
            },
            {
                situation: "Une personne s’approche de la zone de coupe malgré le balisage.",
                question: "Que fais-tu ?",
                choices: ["Je poursuis en lui criant de faire attention.", "J’arrête le travail, sécurise l’outil et rétablis une zone d’exclusion efficace avant toute reprise.", "Je lui demande de tenir le bout de la branche."],
                answer: 1,
                explanation: "Aucune coupe ne doit continuer si le public entre dans la zone de danger. Arrête la machine et ne reprends qu’une fois la protection des tiers rétablie."
            },
            {
                situation: "L’outil de coupe présente un dommage visible après un choc.",
                question: "Comment clôtures-tu l’incident ?",
                choices: ["Je le range sans rien dire si le moteur fonctionne.", "Je le mets hors service selon la procédure, signale le dommage et ne le réutilise pas avant le contrôle autorisé.", "Je redresse la pièce à coups de marteau."],
                answer: 1,
                explanation: "Un accessoire endommagé ne doit pas être remis en service par une réparation improvisée. Informe le responsable et applique la procédure de contrôle."
            }
        ]
    },
    {
        title: "Nettoyer une cour avec un nettoyeur haute pression",
        brief: "Une cour pavée doit être nettoyée avant l’accueil du public. Une prise électrique et du matériel sont à proximité, le sol va devenir humide et des salissures pourraient partir vers un avaloir. Tu dois préparer une zone de travail sûre.",
        steps: [
            {
                situation: "L’aire comprend une prise, des câbles et des personnes qui circulent.",
                question: "Que contrôles-tu avant la mise en pression ?",
                choices: ["L’état et la compatibilité des branchements selon la notice, la mise à l’écart des personnes et la protection des équipements électriques.", "Uniquement la couleur de la buse.", "Je branche l’appareil avec les mains mouillées pour gagner du temps."],
                answer: 0,
                explanation: "L’eau sous pression et l’électricité créent des risques sérieux. Respecte la notice, garde les branchements dans les conditions prévues et ne travaille pas avec un équipement électrique endommagé ou exposé."
            },
            {
                situation: "Tu dois choisir où diriger les eaux sales.",
                question: "Quelle préparation est nécessaire ?",
                choices: ["Laisser les résidus partir dans le premier avaloir.", "Repérer l’écoulement, retenir ou récupérer les résidus selon les consignes environnementales et éviter toute pollution des réseaux ou du milieu.", "Diriger le jet vers le sol sans vérifier où l’eau s’écoule."],
                answer: 1,
                explanation: "Les eaux de nettoyage peuvent entraîner des polluants. Identifie les réseaux et applique les règles du site avant de commencer."
            },
            {
                situation: "Une tache résiste et tu envisages de rapprocher la lance.",
                question: "Quel comportement est le plus sûr ?",
                choices: ["Diriger le jet vers une personne pour lui montrer la puissance.", "Garder la lance dirigée vers une surface autorisée, suivre les distances et accessoires prévus par la notice et ne jamais viser une personne ou un équipement fragile.", "Bloquer la gâchette et poser la lance au sol sous pression."],
                answer: 1,
                explanation: "Un jet haute pression peut provoquer des blessures et endommager les surfaces. N’approche pas la lance au hasard et ne laisse jamais un appareil sous pression sans surveillance."
            },
            {
                situation: "La surface est propre mais le sol est mouillé et glissant.",
                question: "Quelle est la dernière étape avant de rendre la cour ?",
                choices: ["Enlever les panneaux immédiatement.", "Sécuriser le passage jusqu’à ce qu’il soit sûr, arrêter et dépressuriser l’appareil selon la notice, puis contrôler et ranger le matériel.", "Laisser les tuyaux en travers du passage."],
                answer: 1,
                explanation: "Le risque de glissade et les tuyaux doivent être traités avant la réouverture. Respecte la procédure d’arrêt et de dépressurisation du fabricant."
            }
        ]
    },
    {
        title: "Alimenter un chantier avec un groupe électrogène",
        brief: "Une petite intervention doit être réalisée sur une zone extérieure où aucune prise n’est disponible. Un groupe électrogène alimentera des outils, dont un appareil de découpe ou un marteau-piqueur. Le chantier est proche d’un bâtiment et d’un passage.",
        steps: [
            {
                situation: "Quelqu’un propose de placer le groupe dans un local ouvert sur la cour pour le protéger de la pluie.",
                question: "Quelle est ta réponse ?",
                choices: ["D’accord, une porte ouverte suffit pour évacuer les gaz.", "Non : le groupe thermique doit être installé à l’extérieur, dans un emplacement ventilé et conforme à la notice, loin des ouvertures et des personnes.", "Je le place dans le bâtiment et j’ouvre une fenêtre."],
                answer: 1,
                explanation: "Les gaz d’échappement peuvent provoquer une intoxication mortelle, même si une porte ou une fenêtre est ouverte. Respecte strictement l’emplacement indiqué par la notice."
            },
            {
                situation: "Le groupe est en place et un câble doit traverser une zone de passage.",
                question: "Comment prépares-tu le branchement ?",
                choices: ["Je protège ou détourne le passage du câble selon les règles du site, contrôle le matériel et vérifie les besoins électriques compatibles avec le groupe.", "Je laisse le câble libre au sol : chacun le verra.", "Je branche plusieurs appareils sans vérifier leur puissance."],
                answer: 0,
                explanation: "Évite trébuchements, détériorations et surcharge. Vérifie les caractéristiques du groupe et des appareils selon leurs notices et la procédure de l’établissement."
            },
            {
                situation: "Le groupe s’arrête pendant que l’outil branché est encore en marche.",
                question: "Que fais-tu ?",
                choices: ["Je relance immédiatement le groupe et débranche ensuite.", "Je fais arrêter et débrancher les appareils selon la procédure, puis recherche la cause avec le responsable et la notice avant tout redémarrage.", "Je verse du carburant sur le groupe chaud."],
                answer: 1,
                explanation: "Ne ravitaille jamais un moteur chaud ou en fonctionnement. Toute remise en route doit respecter la procédure du fabricant, après vérification de la cause de l’arrêt."
            },
            {
                situation: "Le chantier est terminé et le groupe doit être déplacé.",
                question: "Quelle séquence retiens-tu ?",
                choices: ["Arrêt, débranchement et refroidissement conformément à la notice, puis rangement et compte rendu des anomalies.", "Déplacement immédiat avec le moteur en marche.", "Débrancher en tirant sur les câbles."],
                answer: 0,
                explanation: "Arrête et laisse refroidir l’équipement selon les consignes avant déplacement ou rangement. Contrôle les câbles et signale tout défaut."
            }
        ]
    },
    {
        title: "Broyer les déchets de taille",
        brief: "Une équipe doit réduire le volume de branches après une taille. Un broyeur de végétaux est disponible. Les déchets mélangent des rameaux fins et quelques branches plus épaisses ; plusieurs personnes travaillent à proximité.",
        steps: [
            {
                situation: "Avant le démarrage, tu ne connais pas le diamètre maximal accepté par le broyeur.",
                question: "Que vérifies-tu ?",
                choices: ["La notice et les limites du modèle, l’état des protections, la zone de rejet et l’organisation pour tenir les personnes à distance.", "Je teste avec le plus gros morceau.", "Je retire la trémie pour voir les couteaux."],
                answer: 0,
                explanation: "Les limites de diamètre et les consignes de chargement varient selon le broyeur. Ne dépasse jamais la notice et ne retire pas les protections."
            },
            {
                situation: "Une branche est happée et le broyeur se bloque.",
                question: "Que fais-tu ?",
                choices: ["Je pousse la branche avec la main.", "J’arrête et sécurise la machine selon sa notice, attends l’arrêt complet et applique uniquement la procédure de débourrage prévue.", "Je tire sur la branche tandis que le rotor tourne."],
                answer: 1,
                explanation: "Le rotor peut continuer à tourner ou redémarrer. Ne mets jamais les mains dans la trémie. Suis la procédure de mise à l’arrêt et de dégagement du fabricant."
            },
            {
                situation: "Des copeaux et des morceaux sont projetés vers la zone de stockage.",
                question: "Comment ajustes-tu l’organisation ?",
                choices: ["Je rapproche un collègue pour retenir les copeaux.", "Je réoriente ou sécurise la zone de rejet selon la notice, éloigne les personnes et porte les protections prévues.", "Je bloque l’éjection avec une planche."],
                answer: 1,
                explanation: "La zone de rejet doit rester libre et protégée. Ne bouche jamais une sortie ni ne place quelqu’un pour retenir les projections."
            },
            {
                situation: "Le travail est fini et tu remarques un bruit inhabituel.",
                question: "Quelle suite donnes-tu ?",
                choices: ["Je le signale et mets l’appareil hors service selon la procédure jusqu’au contrôle autorisé.", "Je le prête à l’équipe suivante sans prévenir.", "Je démonte le rotor sans autorisation."],
                answer: 0,
                explanation: "Un bruit anormal peut révéler un défaut mécanique. N’effectue pas de réparation improvisée et informe le responsable avant toute réutilisation."
            }
        ]
    },
    {
        title: "Préparer du bois avec un fendeur de bûches",
        brief: "Du bois doit être fendu pour un espace de stockage. Le fendeur est installé sur une aire dédiée, mais le sol est légèrement irrégulier et les bûches n’ont pas toutes la même taille. Tu dois organiser le poste et éviter les gestes dangereux.",
        steps: [
            {
                situation: "Le fendeur n’est pas parfaitement stable sur le sol.",
                question: "Que fais-tu avant de l’utiliser ?",
                choices: ["Je le cale avec des chutes et commence doucement.", "Je le place sur une surface stable et conforme aux instructions, sécurise la zone et vérifie son état avant la mise en service.", "Je demande à quelqu’un de le tenir."],
                answer: 1,
                explanation: "Un équipement instable peut se déplacer sous l’effort. Installe-le comme le prévoit la notice et n’utilise pas de calage improvisé."
            },
            {
                situation: "Une bûche est fendue de travers et semble mal positionnée.",
                question: "Comment la positionnes-tu ?",
                choices: ["Je maintiens la bûche à la main pendant la poussée.", "Je suis la méthode de positionnement prévue, garde les mains hors de la zone de pression et n’actionne que si la bûche est stable.", "Je pousse la bûche avec un outil pendant le cycle."],
                answer: 1,
                explanation: "Les mains doivent rester à l’écart de la zone de fendage. N’utilise que les dispositifs et la séquence prévus par le fabricant."
            },
            {
                situation: "La bûche ne se fend pas et la machine force.",
                question: "Quelle est la bonne réaction ?",
                choices: ["Je maintiens la commande jusqu’à ce qu’elle cède.", "J’arrête selon la notice, ne dépasse pas les capacités du modèle et demande conseil pour la méthode adaptée.", "Je retire un carter pour réduire l’effort."],
                answer: 1,
                explanation: "Forcer peut endommager le matériel et provoquer une rupture ou un mouvement dangereux. Respecte les capacités et protections prévues."
            },
            {
                situation: "Après le travail, tu vois une fuite hydraulique ou un câble abîmé.",
                question: "Que fais-tu ?",
                choices: ["Je nettoie la fuite et continue jusqu’à la fin.", "Je mets la machine hors service selon la procédure, signale le défaut et ne tente pas de réparation sans habilitation.", "Je touche la fuite pour identifier le liquide."],
                answer: 1,
                explanation: "Une fuite sous pression peut être dangereuse et un câble endommagé présente un risque électrique. Ne touche pas et ne remets pas l’appareil en service avant contrôle."
            }
        ]
    },
    {
        title: "Découper et démolir une petite zone minérale",
        brief: "Un aménagement extérieur doit être modifié : un élément minéral est à découper, puis une partie à déposer. Des outils thermiques et un marteau-piqueur sont évoqués. Il faut vérifier les autorisations, les réseaux et les risques avant de choisir la méthode.",
        steps: [
            {
                situation: "Le plan ne confirme pas la présence ou l’absence de réseaux dans la zone à découper.",
                question: "Quelle est ta première décision ?",
                choices: ["Je commence peu profondément pour voir.", "Je suspends la découpe et fais vérifier les plans, les réseaux et les autorisations par le responsable avant toute intervention.", "Je demande à un collègue d’écouter si un câble est touché."],
                answer: 1,
                explanation: "Ne commence pas une découpe ou une démolition avant d’avoir identifié les réseaux et obtenu les autorisations nécessaires. Un essai ne permet pas de les repérer sans risque."
            },
            {
                situation: "La découpeuse thermique et le marteau-piqueur sont très bruyants et génèrent des poussières ou projections.",
                question: "Comment prépares-tu la protection du chantier ?",
                choices: ["J’évalue les risques, balise et éloigne les tiers, sélectionne les EPI et dispositifs de réduction des poussières prévus, puis vérifie la notice et les compétences requises.", "Je porte seulement des lunettes de soleil.", "Je demande aux autres de rester à côté pour surveiller."],
                answer: 0,
                explanation: "Bruit, poussières, projections et vibrations nécessitent une organisation et des protections adaptées à la tâche. Les équipements et méthodes doivent suivre les notices et les consignes professionnelles."
            },
            {
                situation: "Une découpeuse à disque est disponible, mais le disque monté ne correspond pas clairement au matériau.",
                question: "Que fais-tu ?",
                choices: ["Je l’utilise à faible vitesse.", "Je vérifie le disque autorisé pour le matériau, sa compatibilité, son état et le montage conformément à la notice ; en cas de doute, je ne démarre pas.", "Je retire le carter pour lire le disque."],
                answer: 1,
                explanation: "Un disque inadapté ou endommagé peut se rompre. Le carter doit rester en place et la compatibilité doit être confirmée avant l’utilisation."
            },
            {
                situation: "Pendant le travail, tu constates une poussière importante ou une gêne inhabituelle.",
                question: "Comment réagis-tu ?",
                choices: ["Je continue pour finir avant la pause.", "J’arrête et sécurise l’outil, m’éloigne de l’exposition et préviens le responsable afin d’adapter la méthode et les protections avant de reprendre.", "Je retire ma protection respiratoire pour mieux respirer."],
                answer: 1,
                explanation: "N’accepte pas une exposition mal maîtrisée. Arrête, alerte et ne reprends qu’après évaluation et mise en place de mesures adaptées."
            }
        ]
    }
];

function setupCcfActivity() {
    if (!ccfActivity) return;

    const scenarioSelect = ccfActivity.querySelector("#ccf-scenario-select");
    const projectTitle = ccfActivity.querySelector("#ccf-project-title");
    const projectBrief = ccfActivity.querySelector("#ccf-project-brief");
    const stepLabel = ccfActivity.querySelector("#ccf-step-label");
    const scoreLabel = ccfActivity.querySelector("#ccf-score-label");
    const progress = ccfActivity.querySelector("#ccf-progress");
    const situation = ccfActivity.querySelector("#ccf-situation");
    const question = ccfActivity.querySelector("#ccf-question");
    const choices = ccfActivity.querySelector("#ccf-choices");
    const feedback = ccfActivity.querySelector("#ccf-feedback");
    const checkButton = ccfActivity.querySelector("#ccf-check");
    const nextButton = ccfActivity.querySelector("#ccf-next");
    const restartButton = ccfActivity.querySelector("#ccf-restart");
    const results = ccfActivity.querySelector("#ccf-results");
    let scenario = ccfScenarios[0];
    let currentStep = 0;
    let selectedChoice = -1;
    let score = 0;
    const missedSteps = [];

    const updateScoreLabel = () => {
        scoreLabel.textContent = `${score} bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""}`;
    };

    ccfScenarios.forEach((item, index) => {
        const option = document.createElement("option");
        option.value = String(index);
        option.textContent = `${String(index + 1).padStart(2, "0")} · ${item.title}`;
        scenarioSelect.append(option);
    });

    const renderStep = () => {
        const step = scenario.steps[currentStep];
        selectedChoice = -1;
        stepLabel.textContent = `Étape ${currentStep + 1} sur ${scenario.steps.length}`;
        progress.max = scenario.steps.length;
        progress.value = currentStep;
        situation.textContent = step.situation;
        question.textContent = step.question;
        choices.replaceChildren();
        feedback.hidden = true;
        feedback.textContent = "";
        results.hidden = true;
        checkButton.hidden = false;
        checkButton.disabled = true;
        nextButton.hidden = true;
        nextButton.textContent = "Étape suivante →";
        restartButton.hidden = true;

        step.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.className = "ccf-choice";
            button.type = "button";
            button.textContent = choice;
            button.setAttribute("aria-pressed", "false");
            button.addEventListener("click", () => {
                selectedChoice = index;
                for (const option of choices.children) option.setAttribute("aria-pressed", String(option === button));
                checkButton.disabled = false;
            });
            choices.append(button);
        });
    };

    checkButton.addEventListener("click", () => {
        if (selectedChoice < 0) return;

        const step = scenario.steps[currentStep];
        const isCorrect = selectedChoice === step.answer;
        score += Number(isCorrect);
        if (!isCorrect) missedSteps.push(step.question);
        updateScoreLabel();
        feedback.className = `ccf-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
        feedback.textContent = `${isCorrect ? "Bonne décision." : "À revoir."} ${step.explanation}`;
        feedback.hidden = false;
        for (const option of choices.children) option.disabled = true;
        checkButton.hidden = true;
        if (currentStep + 1 === scenario.steps.length) {
            nextButton.textContent = "Voir mon bilan";
        }
        nextButton.hidden = false;
        nextButton.focus();
    });

    nextButton.addEventListener("click", () => {
        if (currentStep + 1 < scenario.steps.length) {
            currentStep += 1;
            renderStep();
            return;
        }

        progress.value = scenario.steps.length;
        stepLabel.textContent = "Mise en situation terminée";
        situation.hidden = true;
        question.hidden = true;
        choices.hidden = true;
        feedback.hidden = true;
        nextButton.hidden = true;
        results.replaceChildren();
        const heading = document.createElement("h3");
        heading.textContent = `Bilan : ${score} / ${scenario.steps.length}`;
        heading.tabIndex = -1;
        const summary = document.createElement("p");
        summary.textContent = score === scenario.steps.length
            ? "Très bon raisonnement : tu as pris en compte la préparation, les risques, l’adaptation du matériel et le compte rendu."
            : score >= Math.ceil(scenario.steps.length * .7)
                ? "Bon travail. Reprends les étapes signalées pour consolider tes choix et pense à justifier tes décisions à l’oral."
                : "Reprends les étapes signalées, puis refais le scénario. Pour chaque décision, explique le risque évité et vérifie les consignes de la notice.";
        results.append(heading, summary);
        if (missedSteps.length) {
            const reviewTitle = document.createElement("p");
            reviewTitle.className = "ccf-review-title";
            reviewTitle.textContent = "Points à retravailler";
            const reviewList = document.createElement("ul");
            for (const missedQuestion of missedSteps) {
                const item = document.createElement("li");
                item.textContent = missedQuestion;
                reviewList.append(item);
            }
            results.append(reviewTitle, reviewList);
        }
        results.hidden = false;
        restartButton.hidden = false;
        heading.focus();
    });

    restartButton.addEventListener("click", () => {
        currentStep = 0;
        score = 0;
        missedSteps.length = 0;
        updateScoreLabel();
        situation.hidden = false;
        question.hidden = false;
        choices.hidden = false;
        renderStep();
        situation.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    scenarioSelect.addEventListener("change", () => {
        scenario = ccfScenarios[Number(scenarioSelect.value)];
        projectTitle.textContent = scenario.title;
        projectBrief.textContent = scenario.brief;
        currentStep = 0;
        score = 0;
        missedSteps.length = 0;
        updateScoreLabel();
        situation.hidden = false;
        question.hidden = false;
        choices.hidden = false;
        renderStep();
    });

    updateScoreLabel();
    renderStep();
}

function updateZoomReset(art = null) {
    for (const button of zoomResetButtons) {
        button.hidden = button.dataset.resetZoom !== (art === machineArt ? "machine" : art === epiMachineArt ? "epi" : "");
    }
}

function getCalloutLines(points) {
    return points === epiMachinePoints ? epiCalloutLines : machineCalloutLines;
}

function updateCalloutLines(art, lineLayer) {
    const isZoomed = art.classList.contains("is-zoomed");
    const originX = Number(art.dataset.zoomX) || 0;
    const originY = Number(art.dataset.zoomY) || 0;
    const scale = isZoomed ? hotspotZoomScale : 1;
    for (const line of lineLayer.querySelectorAll(".callout-line")) {
        const targetX = isZoomed ? 50 + (Number(line.dataset.targetX) - originX) * scale : Number(line.dataset.targetX);
        const targetY = isZoomed ? 50 + (Number(line.dataset.targetY) - originY) * scale : Number(line.dataset.targetY);
        line.setAttribute("d", `M ${line.dataset.calloutX} ${line.dataset.calloutY} L ${targetX} ${targetY}`);
        const targetDot = lineLayer.querySelector(`.callout-target[data-part="${line.dataset.part}"]`);
        targetDot?.setAttribute("cx", String(targetX));
        targetDot?.setAttribute("cy", String(targetY));
    }
}

function getDailyTool(date = new Date()) {
    const toolIds = Object.keys(toolGuides);
    const localDateNumber = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000;
    const dailyIndex = ((localDateNumber % toolIds.length) + toolIds.length) % toolIds.length;

    return { id: toolIds[dailyIndex], index: dailyIndex };
}

function renderDailyTool() {
    const dailyTool = getDailyTool();
    const guide = toolGuides[dailyTool.id];

    featuredLabel.textContent = `OUTIL DU JOUR · ${String(dailyTool.index + 1).padStart(2, "0")} / ${Object.keys(toolGuides).length}`;
    featuredPhoto.src = getToolAssetPath(guide.image);
    featuredPhoto.alt = guide.alt;
    featuredCaption.textContent = guide.name;
}

function normalizeSearchText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr");
}

function getToolAssetPath(filename) {
    return `${document.body.dataset.tool ? "../../" : ""}${filename}`;
}

function filterTools() {
    const query = normalizeSearchText(toolSearch.value.trim());
    let visibleCount = 0;

    for (const card of toolCards) {
        const searchableText = normalizeSearchText(`${card.dataset.search} ${card.textContent}`);
        const matches = searchableText.includes(query);
        card.hidden = !matches;
        visibleCount += Number(matches);
    }

    toolCount.textContent = `${visibleCount} outil${visibleCount === 1 ? "" : "s"}`;
    emptyTools.hidden = visibleCount !== 0;
}

function renderLesson() {
    const guide = toolGuides[activeTool];
    const part = guide.parts[activePart];
    const lesson = part[activeTopic];

    partKicker.textContent = "PARTIE SÉLECTIONNÉE";
    partTitle.textContent = part.title;
    partNumber.textContent = part.number;
    partSummary.textContent = part.summary;
    lessonEyebrow.textContent = lesson.eyebrow;
    lessonTitle.textContent = lesson.title;
    lessonText.textContent = lesson.text;
    explorerIntro.textContent = "Choisis une partie de l’illustration, puis sélectionne ce que tu veux apprendre.";
    lessonList.replaceChildren(...lesson.list.map((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        return listItem;
    }));
}

function renderEpiLesson() {
    const guide = toolGuides[activeTool];
    if (!guide.epiView) return;

    const part = guide.epiView.parts[activeEpiPart];
    const lesson = part.epi;
    epiPartNumber.textContent = part.number;
    epiPartTitle.textContent = part.title;
    epiPartSummary.textContent = part.summary;
    epiLessonEyebrow.textContent = lesson.eyebrow;
    epiLessonTitle.textContent = lesson.title;
    epiLessonText.textContent = lesson.text;
    epiLessonList.replaceChildren(...lesson.list.map((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        return listItem;
    }));
}

function renderUsage(guide) {
    const usage = guide.usage;
    usageIntro.textContent = usage.intro;
    usageDetails.replaceChildren(...usage.sections.map((section) => {
        const block = document.createElement("section");
        block.className = "usage-detail";
        const heading = document.createElement("h4");
        heading.textContent = section.title;
        const list = document.createElement("ul");
        list.replaceChildren(...section.items.map((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            return listItem;
        }));
        block.append(heading, list);
        return block;
    }));
    usageDiagrams.hidden = !usage.diagrams;
    renderMaintenance(toolMaintenanceGuides[activeTool], "maintenance");
    renderMeasurements(toolMeasureGuides[activeTool], "measure");
}

function renderMaintenance(maintenance, prefix) {
    if (!maintenance) {
        throw new Error(`Aucun guide de maintenance n’est défini pour « ${activeTool} ».`);
    }

    document.querySelector(`#${prefix}-intro`).textContent = maintenance.intro;
    for (const section of ["after", "periodic", "service"]) {
        document.querySelector(`#${prefix}-${section}`).replaceChildren(...maintenance[section].map((text) => {
            const item = document.createElement("li");
            item.textContent = text;
            return item;
        }));
    }
}

function renderMeasurements(measurements, prefix) {
    if (!measurements) {
        throw new Error(`Aucun repère de mesure n’est défini pour « ${activeTool} ».`);
    }

    document.querySelector(`#${prefix}-intro`).textContent = measurements.intro;
    document.querySelector(`#${prefix}-list`).replaceChildren(...measurements.checks.map((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        return item;
    }));
}

function renderToolProfile(profile, details) {
    const toolImage = document.querySelector("#tool-profile-tool-image");
    const toolImagePlaceholder = document.querySelector("#tool-profile-tool-image-placeholder");
    const toolImageCaption = document.querySelector("#tool-profile-tool-image-caption");
    const toolImageStatus = document.querySelector("#tool-profile-tool-image-status");
    const toolImageFigure = toolImage.closest(".tool-profile-figure");
    if (profile.image) {
        toolImage.src = getToolAssetPath(profile.image);
        toolImage.alt = profile.imageAlt;
        toolImage.hidden = false;
        toolImagePlaceholder.hidden = true;
        toolImageFigure.classList.add("has-tool-photo");
        toolImageStatus.textContent = "PHOTO FOURNIE";
        toolImageCaption.textContent = "Image fournie";
    } else {
        toolImage.removeAttribute("src");
        toolImage.alt = "";
        toolImage.hidden = true;
        toolImagePlaceholder.hidden = false;
        toolImageFigure.classList.remove("has-tool-photo");
        toolImageStatus.textContent = "IMAGE À FOURNIR";
        toolImageCaption.textContent = "Illustration à ajouter";
    }

    const epiImage = document.querySelector("#tool-profile-epi-image");
    const epiImagePlaceholder = document.querySelector(".tool-profile-epi-placeholder");
    const epiImageCaption = document.querySelector("#tool-profile-epi-image-caption");
    const epiImageStatus = document.querySelector("#tool-profile-epi-image-status");
    if (profile.epiImage) {
        epiImage.src = getToolAssetPath(profile.epiImage);
        epiImage.alt = profile.epiImageAlt;
        epiImage.hidden = false;
        epiImagePlaceholder.hidden = true;
        epiImageStatus.textContent = "ILLUSTRATION INDICATIVE";
        epiImageCaption.textContent = "Protections à adapter à la notice et aux conditions du chantier";
    } else {
        epiImage.removeAttribute("src");
        epiImage.alt = "";
        epiImage.hidden = true;
        epiImagePlaceholder.hidden = false;
        epiImageStatus.textContent = "REPÈRES À AJOUTER";
        epiImageCaption.textContent = "Illustration des protections à ajouter";
    }

    document.querySelector("#tool-profile-summary").textContent = profile.summary;
    document.querySelector("#tool-profile-purpose").textContent = profile.purpose;
    document.querySelector("#tool-profile-operation").textContent = profile.operation;
    document.querySelector("#tool-profile-parts").replaceChildren(...profile.parts.map((text) => {
        const item = document.createElement("li");
        const separator = text.indexOf(":");
        if (separator > 0) {
            const name = document.createElement("strong");
            name.textContent = text.slice(0, separator + 1);
            item.append(name, document.createTextNode(` ${text.slice(separator + 1).trim()}`));
        } else {
            item.textContent = text;
        }
        return item;
    }));
    document.querySelector("#tool-profile-precautions").replaceChildren(...profile.precautions.map((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        return item;
    }));
    document.querySelector("#tool-profile-epi-intro").textContent = details.epiIntro;
    document.querySelector("#tool-profile-epi").replaceChildren(...details.epi.map((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        return item;
    }));
    document.querySelector("#tool-profile-usage-intro").textContent = details.usageIntro;
    for (const [id, items] of Object.entries({
        before: details.before,
        during: details.during,
        avoid: details.avoid
    })) {
        document.querySelector(`#tool-profile-${id}`).replaceChildren(...items.map((text) => {
            const item = document.createElement("li");
            item.textContent = text;
            return item;
        }));
    }
    renderMeasurements(toolMeasureGuides[activeTool], "tool-profile-measure");
    renderMaintenance(toolMaintenanceGuides[activeTool], "tool-profile-maintenance");
}

function selectPart(hotspot, art = machineArt, points = machinePoints) {
    const lineLayer = getCalloutLines(points);
    if (hotspot.classList.contains("is-selected") && art.classList.contains("is-zoomed")) {
        art.classList.remove("is-zoomed");
        art.style.removeProperty("--zoom-x");
        art.style.removeProperty("--zoom-y");
        delete art.dataset.zoomX;
        delete art.dataset.zoomY;
        updateCalloutLines(art, lineLayer);
        updateZoomReset();
        hotspot.classList.remove("is-selected");
        hotspot.setAttribute("aria-pressed", "false");
        for (const line of lineLayer.querySelectorAll(".callout-line, .callout-target")) {
            line.classList.remove("is-active");
        }
        return;
    }

    if (selectedMachineArt !== art) {
        selectedMachineArt.classList.remove("is-zoomed");
        selectedMachineArt.style.removeProperty("--zoom-x");
        selectedMachineArt.style.removeProperty("--zoom-y");
        delete selectedMachineArt.dataset.zoomX;
        delete selectedMachineArt.dataset.zoomY;
        updateCalloutLines(selectedMachineArt, getCalloutLines(selectedMachinePoints));
        for (const button of selectedMachinePoints.querySelectorAll(".hotspot.is-selected")) {
            button.classList.remove("is-selected");
            button.setAttribute("aria-pressed", "false");
        }
        for (const line of getCalloutLines(selectedMachinePoints).querySelectorAll(".callout-line, .callout-target")) {
            line.classList.remove("is-active");
        }
    }

    if (points === epiMachinePoints) {
        activeEpiPart = hotspot.dataset.part;
        renderEpiLesson();
    } else {
        activePart = hotspot.dataset.part;
        activeTopic = "pieces";
        for (const tab of topicTabs) {
            const isActive = tab.dataset.topic === activeTopic;
            tab.classList.toggle("is-active", isActive);
            tab.setAttribute("aria-pressed", String(isActive));
        }
        renderLesson();
    }
    selectedMachineArt = art;
    selectedMachinePoints = points;
    const targetX = Number.parseFloat(hotspot.dataset.targetX);
    const targetY = Number.parseFloat(hotspot.dataset.targetY);
    art.dataset.zoomX = String(targetX);
    art.dataset.zoomY = String(targetY);
    const artBounds = art.getBoundingClientRect();
    art.style.setProperty("--zoom-x", `${artBounds.width * (50 - hotspotZoomScale * targetX) / 100}px`);
    art.style.setProperty("--zoom-y", `${artBounds.height * (50 - hotspotZoomScale * targetY) / 100}px`);
    art.classList.add("is-zoomed");
    updateCalloutLines(art, lineLayer);
    updateZoomReset(art);
    for (const button of points.querySelectorAll(".hotspot")) {
        const isSelected = button === hotspot;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    }
    const selectedPart = points === epiMachinePoints ? activeEpiPart : activePart;
    for (const line of lineLayer.querySelectorAll(".callout-line, .callout-target")) {
        const isSelected = line.dataset.part === selectedPart;
        line.classList.toggle("is-active", isSelected);
    }
}

function renderHotspots(points, art, parts, targets, callouts, lineLayer) {
    art.classList.remove("is-zoomed");
    art.style.removeProperty("--zoom-x");
    art.style.removeProperty("--zoom-y");
    delete art.dataset.zoomX;
    delete art.dataset.zoomY;
    lineLayer.replaceChildren();
    const svgNamespace = "http://www.w3.org/2000/svg";
    for (const [partId, target] of Object.entries(targets)) {
        const callout = callouts[partId];
        const path = document.createElementNS(svgNamespace, "path");
        path.classList.add("callout-line");
        path.dataset.part = partId;
        path.dataset.calloutX = String(parseFloat(callout.x));
        path.dataset.calloutY = String(parseFloat(callout.y));
        path.dataset.targetX = String(parseFloat(target.x));
        path.dataset.targetY = String(parseFloat(target.y));
        path.setAttribute("d", `M ${parseFloat(callout.x)} ${parseFloat(callout.y)} L ${parseFloat(target.x)} ${parseFloat(target.y)}`);
        lineLayer.append(path);

        const targetDot = document.createElementNS(svgNamespace, "circle");
        targetDot.classList.add("callout-target");
        targetDot.dataset.part = partId;
        targetDot.setAttribute("cx", String(parseFloat(target.x)));
        targetDot.setAttribute("cy", String(parseFloat(target.y)));
        targetDot.setAttribute("r", "1.3");
        lineLayer.append(targetDot);
    }
    points.replaceChildren(...Object.entries(parts).map(([partId, part], index) => {
        const hotspot = document.createElement("button");
        const position = callouts[partId];
        const target = targets[partId];
        hotspot.className = "hotspot";
        hotspot.type = "button";
        hotspot.dataset.part = partId;
        hotspot.style.setProperty("--x", position.x);
        hotspot.style.setProperty("--y", position.y);
        hotspot.dataset.targetX = target.x;
        hotspot.dataset.targetY = target.y;
        hotspot.setAttribute("aria-label", `Explorer ${part.title.toLocaleLowerCase("fr")}`);
        hotspot.setAttribute("aria-pressed", String(index === 0));
        if (index === 0) {
            hotspot.classList.add("is-selected");
            for (const line of lineLayer.querySelectorAll(`[data-part="${partId}"]`)) {
                line.classList.add("is-active");
            }
        }
        const number = document.createElement("span");
        number.textContent = part.number.slice(-1);
        hotspot.append(number);
        hotspot.addEventListener("click", () => selectPart(hotspot, art, points));
        return hotspot;
    }));
}

function renderIllustration(image, alt, photoLabel, parts, hotspots, callouts, lineLayer) {
    machinePhoto.src = getToolAssetPath(image);
    machinePhoto.alt = alt;
    photoCredit.textContent = photoLabel;
    selectedMachineArt = machineArt;
    selectedMachinePoints = machinePoints;
    updateZoomReset();
    renderHotspots(machinePoints, machineArt, parts, hotspots, callouts, lineLayer);
}

function renderTool(toolId) {
    activeTool = toolId;
    const guide = toolGuides[toolId];
    const parts = Object.entries(guide.parts);

    activePart = parts[0][0];
    activeEpiPart = guide.epiView ? Object.keys(guide.epiView.parts)[0] : "";
    activeTopic = "pieces";
    explorerTitle.textContent = guide.title;
    machineImage.hidden = false;
    epiMachineImage.hidden = !guide.epiView;
    epiFigureCard.hidden = !guide.epiView;
    epiLearningCard.hidden = !guide.epiView;
    renderIllustration(guide.image, guide.alt, guide.imageLabel || "PHOTO FOURNIE", guide.parts, guide.hotspots, guide.callouts || guide.hotspots, machineCalloutLines);
    if (guide.epiView) {
        epiMachinePhoto.src = getToolAssetPath(guide.epiView.image);
        epiMachinePhoto.alt = guide.epiView.alt;
        renderHotspots(epiMachinePoints, epiMachineArt, guide.epiView.parts, guide.epiView.targets, guide.epiView.hotspots, epiCalloutLines);
        renderEpiLesson();
    }
    renderUsage(guide);
    for (const tab of topicTabs) {
        const isActive = tab.dataset.topic === activeTopic;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-pressed", String(isActive));
    }
    renderLesson();
}

for (const card of toolCards) {
    if (!card.dataset.page) continue;

    if (card.tagName === "ARTICLE") {
        card.setAttribute("role", "link");
        card.tabIndex = 0;
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                window.location.href = card.dataset.page;
            }
        });
    }

    card.addEventListener("click", () => {
        window.location.href = card.dataset.page;
    });
}

if (toolSearch) {
    toolSearch.addEventListener("input", filterTools);
    document.addEventListener("keydown", (event) => {
        if (event.key === "/" && document.activeElement !== toolSearch) {
            event.preventDefault();
            toolSearch.focus();
        }
        if (event.key === "Escape" && document.activeElement === toolSearch) {
            toolSearch.value = "";
            filterTools();
            toolSearch.blur();
        }
    });
    filterTools();
}

if (explorer) {
    if (toolGuides[activeTool]) {
        explorer.hidden = false;
        document.querySelector("#tool-profile-page").hidden = true;
        renderTool(activeTool);

        zoomResetButtons.forEach((button) => button.addEventListener("click", () => {
            selectedMachineArt.classList.remove("is-zoomed");
            selectedMachineArt.style.removeProperty("--zoom-x");
            selectedMachineArt.style.removeProperty("--zoom-y");
            delete selectedMachineArt.dataset.zoomX;
            delete selectedMachineArt.dataset.zoomY;
            updateCalloutLines(selectedMachineArt, getCalloutLines(selectedMachinePoints));
            updateZoomReset();
            selectedMachinePoints.querySelector(".hotspot.is-selected")?.focus({ preventScroll: true });
        }));

        topicTabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                activeTopic = tab.dataset.topic;
                const previouslySelectedArt = selectedMachineArt;
                const previouslySelectedPoints = selectedMachinePoints;
                selectedMachineArt.classList.remove("is-zoomed");
                selectedMachineArt.style.removeProperty("--zoom-x");
                selectedMachineArt.style.removeProperty("--zoom-y");
                delete selectedMachineArt.dataset.zoomX;
                delete selectedMachineArt.dataset.zoomY;
                updateCalloutLines(previouslySelectedArt, getCalloutLines(previouslySelectedPoints));
                selectedMachineArt = machineArt;
                selectedMachinePoints = machinePoints;
                updateCalloutLines(machineArt, machineCalloutLines);
                updateZoomReset();
                for (const button of topicTabs) {
                    const isActive = button === tab;
                    button.classList.toggle("is-active", isActive);
                    button.setAttribute("aria-pressed", String(isActive));
                }
                renderLesson();
            });
        });
    } else {
        const profile = toolProfiles[activeTool];
        const details = toolProfileDetails[activeTool];
        if (!profile || !details) {
            throw new Error(`Aucune fiche descriptive n’est définie pour « ${activeTool} ».`);
        }
        explorer.remove();
        document.querySelector("#tool-profile-page").hidden = false;
        renderToolProfile(profile, details);
    }
}

if (featuredPhoto) renderDailyTool();
setupCcfActivity();

const activePageRecovery = document.querySelector("#page-recovery");
if (activePageRecovery) activePageRecovery.hidden = true;
