# 📊 GUIDE D'INSTALLATION - COMPTEUR SYNCHRONISÉ CLOUD

## 🎯 Objectif
Créer un compteur de visites qui fonctionne sur **TOUS les appareils** (PC, iPhone, iPad, Android, etc.) et qui additionne automatiquement toutes les visites, peu importe le navigateur ou l'appareil utilisé.

---

## 📋 PRÉREQUIS
- Un compte Google (Gmail)
- 10 minutes de configuration

---

## 🚀 ÉTAPE 1 : Créer la Google Sheet

1. Allez sur https://sheets.google.com
2. Créez une nouvelle feuille de calcul
3. Nommez-la : **"Compteur Visites Assistant IA"**
4. Laissez cette page ouverte

---

## ⚙️ ÉTAPE 2 : Configurer Google Apps Script

1. Dans votre Google Sheet, cliquez sur **Extensions** > **Apps Script**
2. Une nouvelle page s'ouvre avec un éditeur de code
3. **SUPPRIMEZ** tout le code existant
4. **COPIEZ-COLLEZ** le contenu du fichier `google-apps-script.gs`
5. Cliquez sur **💾 Enregistrer** (icône disquette)
6. Nommez le projet : **"Compteur API"**

---

## 🌐 ÉTAPE 3 : Déployer l'API

1. Dans Apps Script, cliquez sur **Déployer** (bouton bleu en haut à droite)
2. Sélectionnez **Nouveau déploiement**
3. Cliquez sur l'icône ⚙️ à côté de "Sélectionner un type"
4. Choisissez **Application Web**

### Configuration du déploiement :
- **Description** : `API Compteur v1`
- **Exécuter en tant que** : `Moi (votre@email.com)`
- **Qui a accès** : `Tout le monde`

5. Cliquez sur **Déployer**
6. **IMPORTANT** : Cliquez sur **Autoriser l'accès**
7. Sélectionnez votre compte Google
8. Cliquez sur **Paramètres avancés** (en bas)
9. Cliquez sur **Accéder à [nom du projet] (dangereux)**
10. Cliquez sur **Autoriser**

---

## 📝 ÉTAPE 4 : Récupérer l'URL de l'API

1. Après le déploiement, vous verrez une fenêtre avec **URL de l'application Web**
2. **COPIEZ** cette URL complète (elle ressemble à ceci) :
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
3. **GARDEZ CETTE URL** - vous en aurez besoin à l'étape suivante !

---

## 🔧 ÉTAPE 5 : Configurer le fichier HTML

1. Ouvrez le fichier **`assistant-cloud.html`** dans un éditeur de texte
2. Trouvez cette ligne (vers la ligne 272) :
   ```javascript
   const CLOUD_API_URL = 'VOTRE_URL_GOOGLE_APPS_SCRIPT_ICI';
   ```
3. **REMPLACEZ** `VOTRE_URL_GOOGLE_APPS_SCRIPT_ICI` par l'URL copiée à l'étape 4
4. Exemple :
   ```javascript
   const CLOUD_API_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
5. **ENREGISTREZ** le fichier

---

## ✅ ÉTAPE 6 : Tester

1. Ouvrez `assistant-cloud.html` dans votre navigateur
2. Vous devriez voir :
   - Le compteur afficher un nombre
   - Le statut "✅ Synchronisé"
3. Ouvrez la même page sur un **autre appareil** (téléphone, tablette)
4. Le compteur devrait augmenter et afficher le **même nombre total** !

---

## 📊 ÉTAPE 7 : Consulter les statistiques

### Dans Google Sheets :
1. Retournez à votre Google Sheet
2. Vous verrez maintenant **2 onglets** :
   - **Compteur** : Affiche le total, première et dernière visite
   - **Historique** : Liste détaillée de chaque visite

### Dans la page web :
1. Cliquez sur le bouton **"📊 Statistiques"** en haut à gauche
2. Vous verrez :
   - Total global (tous appareils)
   - Visites depuis cet appareil
   - Première et dernière visite

---

## 🔄 MISE À JOUR DU SCRIPT

Si vous modifiez le code Apps Script :

1. Allez dans Apps Script
2. Modifiez le code
3. Cliquez sur **💾 Enregistrer**
4. Cliquez sur **Déployer** > **Gérer les déploiements**
5. Cliquez sur ✏️ (modifier) à côté de votre déploiement
6. Changez **Version** en **Nouvelle version**
7. Cliquez sur **Déployer**

**L'URL ne change pas**, pas besoin de modifier le fichier HTML !

---

## 🛠️ DÉPANNAGE

### Le compteur affiche "Mode local" ou "Mode hors ligne"
- ✅ Vérifiez que vous avez bien copié l'URL dans le HTML
- ✅ Vérifiez que l'URL se termine par `/exec`
- ✅ Vérifiez que le déploiement est bien "Tout le monde"

### Erreur d'autorisation
- ✅ Retournez dans Apps Script > Déployer > Gérer les déploiements
- ✅ Vérifiez "Qui a accès" = "Tout le monde"
- ✅ Cliquez sur "Autoriser l'accès" à nouveau

### Le compteur ne s'incrémente pas
- ✅ Ouvrez la console du navigateur (F12)
- ✅ Regardez les erreurs
- ✅ Vérifiez dans Google Sheets que les données arrivent

### Plusieurs compteurs avec des valeurs différentes
- ✅ Normal si vous testez en local ! Chaque ouverture est une nouvelle visite
- ✅ Le compteur synchronise toutes les visites de tous les appareils

---

## 📈 AVANTAGES DE CETTE SOLUTION

✅ **Gratuit** : Google Apps Script est gratuit jusqu'à 20 000 requêtes/jour
✅ **Simple** : Pas besoin de serveur ou de base de données
✅ **Synchronisé** : Fonctionne sur tous les appareils
✅ **Sécurisé** : Géré par Google
✅ **Statistiques** : Historique complet dans Google Sheets
✅ **Exportable** : Téléchargez les stats en CSV depuis Google Sheets

---

## 📞 BESOIN D'AIDE ?

Si vous rencontrez des problèmes :
1. Vérifiez que toutes les étapes ont été suivies
2. Consultez la console du navigateur (F12) pour les erreurs
3. Vérifiez les logs dans Apps Script (Exécution > Afficher les journaux)

---

## 🔐 SÉCURITÉ

- L'API est publique mais n'enregistre que des données anonymes
- Aucune information personnelle n'est stockée
- Seuls vous avez accès à la Google Sheet

---

## 🎉 C'EST TERMINÉ !

Votre compteur est maintenant synchronisé sur tous les appareils !
Chaque visite, peu importe l'appareil ou le navigateur, sera comptabilisée dans le total global.
