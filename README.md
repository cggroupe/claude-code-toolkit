# Claude Code Toolkit

Formation interne pour démarrer avec Claude Code sur des cas d'usage marketing,
vidéo et prospection. Niveau zéro absolu, métaphores business, recettes prêtes
à coller dans Claude Code.

## Structure

Plateforme statique HTML/CSS/JS — pas de build, pas de framework. Servable sur
n'importe quel serveur web (Vercel, Netlify, nginx, GitHub Pages).

```
claude-code-toolkit/
├── index.html              Accueil + parcours recommandé
├── demarrer.html           Onboarding 0 (VS Code → Anthropic → 1er prompt)
├── bases.html              Les 8 commandes vitales
├── mcp.html                MCP toolkit (Stitch, PiAPI, fal.ai, Apify, DataForSEO, Playwright)
├── skills.html             Catalogue de skills marketing/vidéo/BTP
├── plugins.html            Plugins community + comment créer le sien
├── karpathy.html           Pattern Karpathy — wiki vivant + RAG complémentaire
├── projets.html            Méthodologie nouveau projet
├── video.html              Production vidéo (Hyperframes / Remotion / Veo3 / Kling)
├── publication.html        Publication (PostFast, Make.com, n8n)
├── landing.html            Landing pages (Stitch + Vercel)
├── recettes.html           3 recettes complètes (landing 10min, vidéo TikTok, prospection)
├── sos.html                SOS pannes — erreurs fréquentes
├── assets/
│   ├── style.css           Design system dark mode
│   ├── app.js              Sidebar inject + copy buttons + nav highlight
│   └── sidebar.html        Sidebar partial (injecté dynamiquement)
└── snippets/               Snippets téléchargeables (commandes, skills, mcp, recipes)
```

## Lancer en local

```bash
# Option 1 : Python
python3 -m http.server 8907 --directory /var/www/claude-code-toolkit

# Option 2 : Node
npx serve /var/www/claude-code-toolkit -p 8907
```

Ouvrir http://localhost:8907

## Déployer

### Vercel (recommandé)

```bash
cd claude-code-toolkit
npm install -g vercel
vercel
```

### nginx (sur VPS)

```nginx
server {
    listen 8907;
    server_name _;
    root /var/www/claude-code-toolkit;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### GitHub Pages

Settings → Pages → Source: deploy from branch `main`, folder `/`.

## Contenu pédagogique

### Pour qui ?

Marketeurs / fondateurs / ops qui n'ont jamais ouvert un terminal et veulent
utiliser Claude Code pour leurs tâches quotidiennes (vidéo, landing, prospection).

### Pré-requis lecteur

- Aucun. Tout est expliqué dès l'installation de VS Code.

### Format de session

Live 2h30 + plateforme en support post-session.

## Mises à jour

Cette plateforme est conçue pour évoluer. Pour ajouter une section :

1. Créer la page HTML en copiant la structure d'une page existante
2. Ajouter le lien dans `assets/sidebar.html`
3. Commit + push

## Licence

Usage interne. Tous les liens externes pointent vers les ressources publiques
officielles (Anthropic, Google, fal.ai, Apify, etc.).
