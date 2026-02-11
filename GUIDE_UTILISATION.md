# 📊 GUIDE D'UTILISATION - Compteur de Clics d'Écoute

## ✅ Ce qui a été fait

✅ **Supprimé** : Le compteur de visites qui s'affichait en haut à droite  
✅ **Ajouté** : Un système qui compte UNIQUEMENT quand quelqu'un clique pour écouter le message

---

## 🚀 INSTALLATION - 3 ÉTAPES SIMPLES

### Étape 1 : Personnaliser votre compteur

Dans le fichier `assistant_avec_compteur_clics.html`, **ligne 115**, remplacez :

```javascript
const COMPTEUR_ID = 'votre-nom-unique';
```

Par un nom unique, par exemple :
```javascript
const COMPTEUR_ID = 'assistant-ia-jis2026';
```

⚠️ **Important** : Choisissez un nom unique et ne le changez plus !

---

### Étape 2 : Mettre en ligne sur GitHub

1. Allez sur https://github.com
2. Créez un nouveau dépôt (repository)
3. Uploadez votre fichier `assistant_avec_compteur_clics.html`
4. Activez GitHub Pages dans les paramètres
5. Votre page sera accessible à : `https://votre-nom.github.io/nom-du-depot/assistant_avec_compteur_clics.html`

---

### Étape 3 : C'est prêt !

Chaque fois que quelqu'un clique pour écouter le message, un compteur s'incrémente automatiquement en ligne.

---

## 📊 COMMENT CONSULTER VOS STATISTIQUES

### Méthode 1 : Dans la console du navigateur (recommandée)

1. Ouvrez votre page
2. Appuyez sur **F12** (ou clic droit > Inspecter)
3. Allez dans l'onglet **Console**
4. Tapez : `voirStats()`
5. Appuyez sur **Entrée**

➡️ Une alerte s'affichera avec le nombre total d'écoutes !

### Méthode 2 : Via URL directe

Ouvrez cette URL dans votre navigateur (remplacez `votre-nom-unique`) :

```
https://api.countapi.xyz/get/votre-nom-unique/ecoutes
```

Exemple avec `assistant-ia-jis2026` :
```
https://api.countapi.xyz/get/assistant-ia-jis2026/ecoutes
```

➡️ Vous verrez : `{"value":42}` (42 = nombre d'écoutes)

### Méthode 3 : Utiliser la page de stats (voir ci-dessous)

Utilisez le fichier `voir_stats.html` fourni !

---

## 🎯 AVANTAGES DE CETTE SOLUTION

✅ **Gratuit** : Service CountAPI 100% gratuit  
✅ **Sans inscription** : Pas besoin de créer un compte  
✅ **Simple** : Juste un appel API en JavaScript  
✅ **Fiable** : Les données sont stockées en ligne  
✅ **Partagé** : Tous les visiteurs incrémentent le même compteur  
✅ **Précis** : Ne compte que les clics d'écoute, pas les visites

---

## 🔧 RÉINITIALISER LE COMPTEUR (si besoin)

Si vous voulez remettre à zéro :

```
https://api.countapi.xyz/set/votre-nom-unique/ecoutes?value=0
```

---

## ❓ QUESTIONS FRÉQUENTES

**Q : Combien de temps les données sont conservées ?**  
R : Indéfiniment, tant que le service CountAPI existe.

**Q : Y a-t-il une limite de comptage ?**  
R : Non, vous pouvez compter à l'infini.

**Q : Quelqu'un peut-il tricher et incrémenter le compteur ?**  
R : Techniquement oui, mais pour un usage d'exposition c'est largement suffisant.

**Q : Puis-je voir l'historique heure par heure ?**  
R : Non, CountAPI ne donne que le total. Pour un historique détaillé, il faudrait Google Analytics.

---

## 🎓 ALTERNATIVE : Google Analytics

Si vous voulez des statistiques plus détaillées (heure de la journée, appareil utilisé, etc.), utilisez Google Analytics :

1. Créez un compte sur https://analytics.google.com
2. Ajoutez le code de suivi dans votre HTML
3. Créez un "événement" personnalisé pour le clic d'écoute

Mais c'est plus complexe à mettre en place !

---

## 📝 RÉSUMÉ TECHNIQUE

- **Service utilisé** : CountAPI (https://countapi.xyz)
- **Endpoint** : `https://api.countapi.xyz/hit/{namespace}/{key}`
- **Fonctionnement** : Chaque appel incrémente automatiquement le compteur
- **Consultation** : `https://api.countapi.xyz/get/{namespace}/{key}`

---

Besoin d'aide ? N'hésitez pas à demander ! 😊
