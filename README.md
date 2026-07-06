# Site vitrine — Ent Roullier Cédric Peintre Décorateur

Site vitrine à page unique pour un peintre en bâtiment basé à Mauges-sur-Loire
(49), construit avec Next.js (App Router), TypeScript et Tailwind CSS.

## Stack technique

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** avec palette et typographie sur mesure (pas de thème par défaut)
- **Resend** pour l'envoi des emails du formulaire de contact
- Schema.org `HomeAndConstructionBusiness` + `FAQPage` (JSON-LD) pour le SEO local
- Zéro dépendance JS lourde, pages statiques (`○`) sauf l'API de contact

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000.

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner :

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé API [Resend](https://resend.com) pour l'envoi d'emails |
| `CONTACT_EMAIL` | Adresse qui reçoit les demandes de devis |
| `CONTACT_FROM_EMAIL` | Adresse d'expédition (domaine vérifié sur Resend en production) |

Sans ces variables, le formulaire affiche une erreur claire côté utilisateur
plutôt que d'échouer silencieusement.

## Déploiement sur Vercel

1. Pousser ce dépôt sur GitHub (déjà fait si vous lisez ce README depuis le repo).
2. Importer le projet dans Vercel.
3. Renseigner les variables d'environnement ci-dessus dans les réglages du projet Vercel.
4. Déployer — aucune configuration supplémentaire n'est nécessaire (`next.config.js` est minimal).

## À compléter avant mise en ligne

Ces éléments n'étaient pas disponibles au moment de la génération du site et
doivent être confirmés par l'entreprise :

- **Photos réelles des chantiers** : voir la section dédiée ci-dessous.
- **Adresse email professionnelle** : `lib/data.ts` utilise un email
  d'exemple (`contact@roullier-peintre.fr`) à remplacer par l'adresse réelle.
- **Numéro SIRET** : à ajouter dans `app/mentions-legales/page.tsx`
  (actuellement indiqué comme `[à compléter par l'entreprise]`).
- **Zones limitrophes** : la liste des villes (`serviceAreas` dans
  `lib/data.ts`) reprend celles indiquées comme probables dans le brief —
  à valider avec le client.
- **Labels / certifications** (RGE, Qualibat...) : aucun trouvé sur la fiche
  Google actuelle. Si l'entreprise en possède, les ajouter dans la section
  confiance (`components/TrustSection.tsx`).
- **Nom de domaine réel** : `siteUrl` dans `app/layout.tsx`,
  `app/sitemap.ts` et `app/robots.ts` utilise `https://roullier-peintre.fr`
  à titre d'exemple — à remplacer par le nom de domaine définitif.

## Ajouter les photos réelles

En l'absence d'accès aux photos de la fiche Google Business Profile, les
sections **Hero** et **Réalisations** utilisent des emplacements texturés
(`components/PaintedPlaceholder.tsx`) à la place de vraies photos, en attendant
que le client fournisse ses fichiers.

Pour les remplacer :

1. Déposer les photos dans `public/images/` au format `.webp` (compressées).
2. Dans `components/Hero.tsx` et `components/Portfolio.tsx`, remplacer les
   `<PaintedPlaceholder ... />` par des composants `next/image` avec :
   - un `alt` descriptif reprenant le métier et la ville
     (ex. `"Peinture intérieure d'un salon, Mauges-sur-Loire"`),
   - la photo correspondante.
3. Ajouter l'URL d'une photo représentative dans le JSON-LD (`image`) de
   `app/layout.tsx` pour renforcer le référencement local.

## Structure du projet

```
app/
  layout.tsx          # Polices, metadata SEO, JSON-LD LocalBusiness
  page.tsx            # Assemblage des sections (tunnel de conversion)
  api/contact/route.ts # Envoi d'email via Resend
  mentions-legales/   # Page mentions légales
  sitemap.ts, robots.ts, icon.tsx
components/           # Une section = un composant
lib/data.ts           # Source unique des données métier (NAP, avis, services, FAQ...)
```

Toutes les informations d'entreprise (nom, adresse, téléphone, horaires,
avis, services) sont centralisées dans `lib/data.ts` pour garantir la
cohérence NAP (Name, Address, Phone) avec la fiche Google Business Profile.
