# 🐾 Mixipaw

Application mobile-first pour trouver tous les professionnels animaliers près de chez vous.

## Stack technique
- **React 18** + **Vite**
- **Tailwind CSS 3** (palette personnalisée)
- **React-Leaflet** (carte interactive OpenStreetMap)
- Design **mobile-first** (max 430px, optimisé tactile)

---

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173)

---

## Déploiement sur Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — Via GitHub
1. Pusher le code sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Framework : **Vite**
4. Build command : `npm run build`
5. Output dir : `dist`

---

## Déploiement sur Replit

1. Créer un nouveau Repl → **Import from GitHub** (ou uploader le zip)
2. Choisir **Node.js**
3. Dans le shell : `npm install && npm run dev`
4. Cliquer **Run** — le port 5173 s'ouvre automatiquement

---

## Structure du projet

```
mixipaw/
├── src/
│   ├── App.jsx                  # Shell principal, routing par onglets
│   ├── main.jsx                 # Point d'entrée React
│   ├── index.css                # Tailwind + styles globaux
│   ├── components/
│   │   ├── BottomNav.jsx        # Navigation bas d'écran
│   │   ├── ProCard.jsx          # Carte professionnel réutilisable
│   │   └── Toast.jsx            # Notifications éphémères
│   ├── screens/
│   │   ├── ExploreScreen.jsx    # Accueil + recherche + filtres
│   │   ├── CarteScreen.jsx      # Carte Leaflet interactive
│   │   ├── CarnetScreen.jsx     # Carnet de santé par animal
│   │   ├── RdvScreen.jsx        # Tunnel de prise de RDV (4 étapes)
│   │   ├── ArticlesScreen.jsx   # Mag' + lecture + publication
│   │   ├── ProDetailScreen.jsx  # Fiche détaillée d'un professionnel
│   │   └── ProfilScreen.jsx     # Profil utilisateur + label Mixipaw
│   └── data/
│       └── pros.js              # Données : pros, animaux, articles, santé
├── index.html
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── .replit
```

---

## Fonctionnalités implémentées

| Section | Fonctionnalités |
|---|---|
| **Explorer** | Recherche texte, 10 filtres catégories, aperçu carte, liste pros avec temps de trajet |
| **Carte** | Leaflet OpenStreetMap, pins colorés par métier, filtres voyage, popup avec RDV direct |
| **Carnet** | Multi-animaux, score santé, vaccins + alertes, antiparasitaires, timeline consultations, documents |
| **RDV** | Sélection pro → type consultation → calendrier → créneaux → confirmation SMS |
| **Articles** | Mag' filtrable, lecture article, like, partage, formulaire publication pro |
| **Profil** | Infos utilisateur, gestion animaux, label Mixipaw 4 étapes (SIRET, diplôme, SMS) |

---

## Personnalisation

### Ajouter un professionnel
Éditer `src/data/pros.js` → tableau `PROS` :
```js
{
  id: 11,
  name: 'Mon Cabinet',
  role: 'Vétérinaire',
  category: 'veto',          // voir CATEGORIES
  animals: ['chien', 'chat'],
  verified: false,
  rating: 4.8,
  distance: 0.5,
  travel: '4 min',
  lat: 48.856,               // coordonnées GPS réelles
  lng: 2.352,
  // ...
}
```

### Connecter une vraie API
Remplacer les imports depuis `data/pros.js` par des appels `fetch()` dans un hook `usePros()`.

### Activer les vraies notifications push
Intégrer **OneSignal** ou **Firebase Cloud Messaging** dans `RdvScreen.jsx`.

---

## Couleurs de la charte

| Nom | Hex |
|---|---|
| Vert sauge | `#7A9E87` |
| Bleu soin | `#4A7FA5` |
| Terracotta | `#C4724A` |
| Crème fond | `#FAF7F2` |

---

## Licence
Projet © Mixipaw — usage interne prototype
