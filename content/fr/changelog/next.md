---
title: Prochaine version
translationKey: next-release
slug: prochaine-version
weight: 10
type: docs
keywords: [I14Y, Plateforme d'interopérabilité I14Y, IOP, Changelog, Releases, Versions, Développement logiciel]
draft: false
---

La prochaine version d'I14Y est prévue pour le début de soirée du 9 juillet 2026. Elle comprend les adaptations et extensions décrites ci-dessous. Les organisations partenaires d'I14Y disposant de l'accès approprié peuvent tester immédiatement la version mise à jour sur l'[environnement de recette d'I14Y](https://input.i14y-a.admin.ch). Veuillez contacter l'Unité d'interopérabilité si vous n'avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de mise en production peut être repoussée à court terme en cas de problème. Il est possible que certaines fonctionnalités soient retirées de cette version et activées ultérieurement. Pour toute question ou tout problème lié à cette version, veuillez contacter le Centre de compétences Gestion des données ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Logo d'organisation :** Depuis la version précédente, il est possible d'enregistrer un logo ou une photo pour chaque organisation. Ces images sont désormais affichées sur la page « Organisations ».

**Vue tabulaire des structures de données :** Les structures de données peuvent désormais aussi être affichées sous forme de tableau, en alternative au diagramme UML. Dans certains cas, la vue tabulaire est plus appropriée pour obtenir rapidement un aperçu de la structure d'un jeu de données.

**Navigation améliorée :** Un nouveau bouton « Retour » est désormais disponible au-dessus de la vue détaillée d'une entrée. Il permet de revenir directement à la liste des résultats de recherche filtrés. Jusqu'à présent, il fallait utiliser le bouton « Retour » du navigateur.

**Davantage d'informations dans les listes récapitulatives :** La liste des entrées contient désormais des puces indiquant les thèmes ainsi que les formats des distributions associées.

**Extension de l'export RDF :** L'export RDF, qui est notamment utilisé pour le moissonnage d'un catalogue de données, inclut désormais l'attribut `coverage` dans la partie relative aux distributions.

**Adaptation de l'API :** Dans l'interface électronique (API), le champ `identifier` était jusqu'ici utilisé dans le domaine des concepts et des prestations administratives et contenait une chaîne de caractères. Ce champ a maintenant été entièrement remplacé dans cette version par `identifiers`, qui contient une liste de chaînes de caractères. Les intégrations existantes pour lire ou écrire des concepts ou des prestations administratives doivent impérativement être adaptées. Veuillez lire à ce sujet le [billet d'actualité](/handbook/de/news/#breaking-change-auf-der-i14y-api) correspondant.

**Corrections de bugs :** Des résultats erronés dans la zone « Mes données » de l'espace interne de la plateforme ont été corrigés. Un problème de mise en page sur la page des entrées de codelist a été corrigé, et plusieurs fautes de frappe dans l'interface utilisateur ont été corrigées.

**Remarque :** La publication open source du code de la plateforme I14Y a, contrairement à l'annonce précédente, été reportée à une date ultérieure, car une dépendance restante n'est pas compatible avec la licence MIT.