# Tout mes sites réunis

Portfolio personnel regroupant plusieurs projets web créatifs et pédagogiques dans un même espace.

## Présentation

Ce dépôt contient un site vitrine central qui sert de point d’entrée vers plusieurs univers :

- un projet d’anglais sur le réchauffement climatique ;
- une étude sur la plantation d’une haie à La Réunion ;
- un atelier interactif sur des outils de jardin ;
- un récit de fiction autour du thème des super-héros.

L’ensemble est conçu comme un portfolio statique, sans framework ni dépendance lourde. Les pages sont écrites en HTML, CSS et JavaScript, et sont facilement consultables via un simple serveur local.

## Structure du projet

```text
.
├── index.html                  # Page d’accueil principale du portfolio
├── style.css                   # Styles globaux du site
├── script.js                   # Logique front du portfolio
├── README.md                   # Documentation du projet
├── images/                     # Images partagées du portfolio
├── anglais-rechaufement-climatique/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── Travail-sur-la-haie/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── README.md
│   └── images/
├── Outil/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── page-shell.js
│   └── outils/
│       ├── aspirateur-de-feuilles-a-dos/
│       ├── aspirateur-eau-et-poussiere/
│       └── ...
└── travail-super-hero/
    ├── index.html
    ├── episode-3.html
    ├── episode-4.html
    ├── suite.html
    ├── indec.css
    └── README.md
```

## Fonctionnalités

- page d’accueil avec grille de projets ;
- recherche par mot-clé dans les projets ;
- filtres par catégorie (nature, outils, anglais, fiction) ;
- navigation vers plusieurs mini-sites indépendants ;
- design visuel moderne et responsive.

## Prérequis

Aucun framework ni installation complexe n’est nécessaire.

Il suffit d’avoir :

- un navigateur moderne ;
- Python 3 installé sur la machine.

## Lancer le site localement

Depuis la racine du projet :

```bash
cd /workspaces/Tout-mes-sites-reunis
python3 -m http.server 8001 --bind 0.0.0.0
python3 -m http.server 3000 --bind 0.0.0.0
cd /workspaces/Tout-mes-sites-reunis/Pronote && HOST=0.0.0.0 PORT=3000 npm start
```

Ensuite ouvrez dans le navigateur :

```text
http://localhost:8000/
```

## Projets présents

### 1. Climate change
Projet en anglais sur le réchauffement climatique et ses impacts.

### 2. Planter une haie
Étude paysagère et écologique sur les bénéfices d’une haie à La Réunion.

### 3. L’Atelier du geste
Parcours interactif autour d’outils de jardin et de sécurité d’usage.

### 4. Le Réunionator
Récit visuel et fictionnel inspiré de l’univers des super-héros et de Saint-Leu.

## Où retrouver le contenu des fiches outils

Les 22 pages individuelles se trouvent dans `Outil/outils/<nom-de-l-outil>/index.html`. Leurs textes et données sont regroupés dans `Outil/script.js` :

- `toolGuides` : pièces, explications, dangers et protections EPI des parcours interactifs ;
- `toolProfiles` et `toolProfileDetails` : usage, fonctionnement, précautions, EPI et conseils pratiques des fiches descriptives ;
- `toolMeasureGuides` : dimensions et capacités à vérifier ;
- `toolMaintenanceGuides` : contrôles, entretien et maintenance.

`Outil/page-shell.js` construit la mise en page des fiches, et `Outil/style.css` définit leur apparence.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript vanilla
- fichiers statiques uniquement

## Remarques

- Le projet est pensé comme un portfolio personnel et un espace de démonstration.
- La structure est modulaire : chaque projet peut être développé indépendamment.
- Il n’y a pas de build step ni de compilation à effectuer.

## Auteur

Justin Declemy

## Licence

Ce projet est destiné à un usage personnel et de démonstration. Vérifiez les conditions d’utilisation avant toute diffusion ou réutilisation externe.
