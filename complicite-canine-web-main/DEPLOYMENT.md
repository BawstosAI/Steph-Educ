# 🚀 Guide de Déploiement sur GitHub Pages

## Étape 1 : Créer un repository GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur **"New"** ou **"+"** > **"New repository"**
3. Nommez votre repository (exemple: `complicite-canine-website`)
4. **Cochez "Public"** (obligatoire pour GitHub Pages gratuit)
5. **NE PAS** initialiser avec README, .gitignore ou LICENSE
6. Cliquez **"Create repository"**

## Étape 2 : Configurer votre projet

**⚠️ IMPORTANT : Modifiez ces 2 fichiers avec votre nom d'utilisateur et repository**

### A. Dans `package.json`, ligne 11 :
```json
"homepage": "https://VOTRE_USERNAME.github.io/VOTRE_REPOSITORY_NAME",
```

### B. Dans `vite.config.ts`, ligne 8 :
```typescript
base: mode === 'production' ? '/VOTRE_REPOSITORY_NAME/' : '/',
```

**Exemple avec username "bastien" et repository "complicite-canine-website" :**
- `"homepage": "https://bastien.github.io/complicite-canine-website",`
- `base: mode === 'production' ? '/complicite-canine-website/' : '/',`

## Étape 3 : Pousser le code vers GitHub

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
# Initialiser git (si pas encore fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: site complicité canine"

# Connecter au repository GitHub (remplacez USERNAME et REPOSITORY)
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git

# Pousser le code
git push -u origin main
```

## Étape 4 : Activer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **"Settings"** (onglet en haut)
3. Descendez jusqu'à **"Pages"** dans la sidebar gauche
4. Dans **"Source"**, sélectionnez **"Deploy from a branch"**
5. Choisissez **"gh-pages"** comme branche
6. Cliquez **"Save"**

## Étape 5 : Déployer votre site

Dans votre terminal, exécutez :

```bash
# Construire et déployer en une commande
npm run deploy
```

Cette commande va :
- Construire votre site (`npm run build`)
- Créer/mettre à jour la branche `gh-pages`
- Pousser le site construit vers GitHub

## Étape 6 : Accéder à votre site

Votre site sera disponible à l'adresse :
**https://VOTRE_USERNAME.github.io/VOTRE_REPOSITORY_NAME**

⏱️ **Note :** Le premier déploiement peut prendre 5-10 minutes.

## 🔄 Mises à jour ultérieures

Pour mettre à jour votre site :

```bash
# 1. Faire vos modifications dans le code
# 2. Commiter les changements
git add .
git commit -m "Description de vos changements"
git push origin main

# 3. Redéployer
npm run deploy
```

## 🆘 Résolution de problèmes

### Problème : Site ne se charge pas / erreur 404
- Vérifiez que le `homepage` et `base` correspondent exactement au nom de votre repository
- Assurez-vous que GitHub Pages est configuré sur la branche `gh-pages`

### Problème : Erreur de build
```bash
# Nettoyer et reconstruire
rm -rf dist node_modules
npm install
npm run build
npm run deploy
```

### Problème : Images ne s'affichent pas
- Les images dans `/public/` doivent être référencées sans `/public/`
- Exemple : `/lovable-uploads/image.jpg` (pas `/public/lovable-uploads/image.jpg`)

## 🎉 Félicitations !

Votre site **Complicité Canine** est maintenant en ligne et accessible au monde entier !

🔗 **URL finale :** https://VOTRE_USERNAME.github.io/VOTRE_REPOSITORY_NAME 