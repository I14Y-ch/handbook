---
title: Prochaine version
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Plateforme d’interopérabilité I14Y, IOP, Journal des modifications, Publications, Versions, Développement logiciel]
draft: true
---

La prochaine version d’I14Y est prévue en début de soirée du 7 janvier 2026. Elle comprend les adaptations et améliorations listées ci-dessous. Les organisations partenaires d’I14Y disposant des autorisations nécessaires peuvent tester immédiatement le logiciel sur l’[environnement de pré‑publication d’I14Y](https://input.i14y-a.admin.ch). Veuillez contacter le Service d’interopérabilité si vous n’avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de publication peut être reportée à très court terme en cas de problèmes. Il est possible que certaines fonctions soient retirées de la version et activées seulement ultérieurement. Pour toute question ou tout problème concernant cette version, veuillez contacter le Service d’interopérabilité ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- **Mots-clés liés à des concepts prédéfinis**: les mots-clés peuvent désormais être reliés à des désignations univoques provenant de listes de termes contrôlées. Techniquement, cela se fait via un champ de texte supplémentaire (`uri`). _Attention: la structure des données renvoyées par l’API publique et l’API partenaire s’en trouve modifiée._ Cette modification a été approuvée par le comité de pilotage.
- **Meilleure présentation des valeurs autorisées**: dans les structures SHACL de données, il est possible de définir les valeurs autorisées d’un champ. Dès que le champ correspondant est sélectionné dans la visualisation, les valeurs autorisées sont désormais aussi affichées dans la barre latérale. Il est ainsi plus facile de voir quelles valeurs sont admises pour chaque champ.
- **Recherche de catalogue améliorée**: la recherche dans le catalogue a été encore étendue. Elle ne fait plus de distinction entre majuscules et minuscules. Elle prend également en compte les champs supplémentaires personne de contact et suppléance de la personne de contact, point de contact ainsi que les identifiants des objets.
- **Améliorations internes et corrections de bugs**