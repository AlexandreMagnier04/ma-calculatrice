# Ma Calculatrice - Projet Qualité & Tests

Ce projet consiste en une application de calculatrice développée avec **React** et **Vite**, mettant l'accent sur la qualité logicielle, le versionnage progressif et les tests automatisés (Unitaires et E2E).

## Fonctionnalités

- **Opérations de base** : Sommes, soustractions et multiplications.
- **Gestion de l'historique** : Enregistrement automatique des calculs, consultation de la liste et suppression complète.
- **Interface Réactive** : Design moderne avec un pavé numérique complet et un écran d'affichage dynamique.

## Stack Technique

| Outil              | Usage                                                       |
| :----------------- | :---------------------------------------------------------- |
| **React + Vite**   | Framework frontend et outil de build ultra-rapide           |
| **Vitest**         | Framework de tests unitaires pour la logique métier         |
| **Playwright**     | Tests End-to-End pour valider le comportement en navigateur |
| **ESLint**         | Linter pour garantir la qualité et la cohérence du code     |
| **GitHub Actions** | Pipeline d'Intégration Continue (CI) automatisée            |

---

## Architecture du Projet

L'architecture a été pensée pour isoler la logique pure de l'interface utilisateur, facilitant ainsi les tests et le refactoring :

- `src/calculator.js` : Fonctions mathématiques pures (indépendantes de React).
- `src/history.js` : Logique de manipulation de l'historique.
- `src/tests/` : Suite de tests unitaires (Vitest).
- `e2e/` : Scénarios de tests automatisés (Playwright).
- `src/App.jsx` : Composant principal gérant l'interface et l'état.

---

## Méthodologie de Test (TDD)

Le développement a suivi rigoureusement la méthodologie **Test Driven Development** :

1.  **🔴 Rouge** : Écriture d'un test unitaire avant d'implémenter la fonctionnalité.
2.  **🟢 Vert** : Implémentation du code minimal pour valider le test.

---

## Commandes Disponibles

| Commande            | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm run dev`       | Lance le serveur de développement local      |
| `npm run lint`      | Exécute l'analyse statique du code (Qualité) |
| `npm run test:unit` | Lance les tests unitaires (Vitest)           |
| `npm run test:e2e`  | Lance les tests d'interface (Playwright)     |
| `npm run build`     | Construit l'application pour la production   |

---

## Intégration Continue (CI)

Le projet intègre un workflow GitHub Actions (`.github/workflows/ci.yml`) qui s'exécute à chaque `push`. La pipeline valide :

1. **L'installation** propre des dépendances.
2. **La qualité** du code via ESLint.
3. **La logique métier** via Vitest.
4. **L'expérience utilisateur** via Playwright (installation des navigateurs et exécution des tests E2E).

---

## Qualité du Code

Le projet respecte les standards modernes de développement :

- **Zéro erreur de linter** : Configuration ESLint stricte pour éviter les variables inutilisées et les erreurs de syntaxe.
- **Typage implicite** : Sécurisation des entrées utilisateur (`Number()` conversion) pour éviter les erreurs de calcul (`5 + 9 = 59`).
- **Versionnage propre** : Historique Git granulaire illustrant l'évolution pas à pas du projet.
