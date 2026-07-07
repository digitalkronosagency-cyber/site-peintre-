# Site vitrine — Ent Roullier Cédric Peintre Décorateur

Site vitrine à page unique pour un peintre en bâtiment basé à Mauges-sur-Loire
(49), construit avec Next.js (App Router), TypeScript et Tailwind CSS.

## Stack technique

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** avec palette et typographie sur mesure (pas de thème par défaut)
- **Resend** pour l'envoi des emails du formulaire de contact
- **Vercel Blob** pour le stockage des photos de la section Réalisations, gérées depuis un espace admin (`/admin`)
- Schema.org `HomeAndConstructionBusiness` + `FAQPage` (JSON-LD) pour le SEO local
- Zéro dépendance JS lourde, pages statiques (`○`) sauf les API routes et l'espace admin

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
| `ADMIN_PASSWORD` | Mot de passe de l'espace admin (`/admin`) |
| `ADMIN_SESSION_SECRET` | Secret de signature du cookie de session admin (générer avec `openssl rand -hex 32`) |
| `BLOB_READ_WRITE_TOKEN` | Fourni automatiquement par Vercel une fois le Blob Store créé (voir ci-dessous) |

Sans `RESEND_API_KEY`/`CONTACT_EMAIL`, le formulaire de contact affiche une
erreur claire côté utilisateur plutôt que d'échouer silencieusement. Sans
`ADMIN_PASSWORD`/`ADMIN_SESSION_SECRET`, l'espace admin refuse toute
connexion. Sans `BLOB_READ_WRITE_TOKEN`, l'upload de photos échoue proprement
et la section Réalisations affiche ses emplacements provisoires.

## Déploiement sur Vercel

1. Pousser ce dépôt sur GitHub (déjà fait si vous lisez ce README depuis le repo).
2. Importer le projet dans Vercel.
3. Dans l'onglet **Storage** du projet Vercel, créer un **Blob Store** et le
   connecter au projet : la variable `BLOB_READ_WRITE_TOKEN` est alors
   ajoutée automatiquement.
4. Renseigner les autres variables d'environnement ci-dessus dans les
   réglages du projet Vercel.
5. Déployer — aucune configuration supplémentaire n'est nécessaire (`next.config.js` est minimal).

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

## Espace admin (gestion des photos)

La section **Réalisations** peut être alimentée directement depuis le site,
sans redéploiement, via `/admin` :

1. Aller sur `https://<votre-domaine>/admin` (redirige vers `/admin/login`
   si non connecté) — un lien discret « Espace admin » est aussi présent en
   bas de page (footer).
2. Se connecter avec le mot de passe défini dans `ADMIN_PASSWORD`.
3. Ajouter une photo (JPEG/PNG/WebP, 8 Mo max) avec une description : cette
   description sert de texte alternatif (`alt`) affiché aux moteurs de
   recherche et aux lecteurs d'écran — la rédiger de façon descriptive en
   mentionnant le métier et la ville (ex. « Peinture intérieure d'un salon,
   Mauges-sur-Loire »).
4. Supprimer une photo via le bouton « Supprimer » sous sa vignette.

Les photos sont stockées sur Vercel Blob et apparaissent sur le site en
quelques secondes (revalidation immédiate après chaque ajout/suppression).
Tant qu'aucune photo n'a été ajoutée, la section Réalisations affiche des
emplacements colorés provisoires (`components/PaintedPlaceholder.tsx`).

Cet espace admin ne gère que les photos de la section Réalisations ; la
photo du Hero reste un emplacement provisoire à remplacer manuellement dans
`components/Hero.tsx` si besoin.

## Structure du projet

```
app/
  layout.tsx              # Polices, metadata SEO, JSON-LD LocalBusiness
  page.tsx                # Assemblage des sections (tunnel de conversion)
  api/contact/route.ts    # Envoi d'email via Resend
  api/admin/              # Login, logout, upload/suppression de photos (protégés)
  admin/                  # Pages de l'espace admin (login + dashboard)
  mentions-legales/       # Page mentions légales
  sitemap.ts, robots.ts, icon.tsx
components/               # Une section = un composant
lib/data.ts               # Source unique des données métier (NAP, avis, services, FAQ...)
lib/admin-auth.ts         # Vérification du mot de passe + signature du cookie de session
lib/blob-photos.ts        # Lecture/écriture des photos sur Vercel Blob
middleware.ts             # Protège /admin et /api/admin/photos (redirige vers /admin/login)
```

Toutes les informations d'entreprise (nom, adresse, téléphone, horaires,
avis, services) sont centralisées dans `lib/data.ts` pour garantir la
cohérence NAP (Name, Address, Phone) avec la fiche Google Business Profile.

**Sécurité** : l'espace admin utilise un mot de passe unique (pas de gestion
multi-utilisateurs) adapté à un usage par un seul artisan. Choisir un mot de
passe long et ne jamais le partager publiquement.
