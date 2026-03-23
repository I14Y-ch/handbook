---
title: Prochaine version
translationKey: next-release
slug: prochaine-version
weight: 10
type: docs
keywords: [I14Y, Plateforme d'interopérabilité I14Y, IOP, Changelog, Releases, Versions, Développement logiciel]
draft: false
---

La prochaine version d'I14Y est prévue pour la soirée du 25 mars 2026. Elle comprend les adaptations et les extensions décrites ci‑dessous. Les organisations partenaires d'I14Y disposant d'un accès correspondant peuvent tester immédiatement le logiciel mis à jour sur l'[environnement de recette d'I14Y](https://input.i14y-a.admin.ch). Veuillez contacter l'Unité d'interopérabilité si vous n'avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de mise en production peut être repoussée à court terme en cas de problème. Il est également possible que certaines fonctionnalités soient retirées de cette version et activées ultérieurement. Pour toute question ou tout problème concernant cette version, veuillez vous adresser à l'Unité d'interopérabilité ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Tables de correspondance (Mapping):** Avec cette version, des tables de correspondance sont introduites sur la plateforme d'interopérabilité. Elles permettent de documenter les similitudes et les différences entre les valeurs de deux listes de codes. Les tables de correspondance sont des objets à part entière sur I14Y : elles sont trouvables via la recherche et les filtres, consultables aussi bien sur la plateforme publique que dans l'interface d'administration. Via l'interface d'administration ou l'API, elles peuvent également être créées et éditées ; une fonction d'import est également disponible.

**Liens «Conforme à» cliquables:** Pour chaque élément de données, il est possible de documenter s'il se base sur un concept fondamental. À cet effet, un lien est enregistré dans la structure SHACL dans le champ «Conforme à». Jusqu'à présent, ces IRIs n'étaient qu'affichés dans le panneau latéral ; ils sont désormais cliquables.

**Versions triées:** Pour les concepts versionnés, un tableau listant les versions disponibles du concept est affiché. Les entrées sont désormais présentées en ordre décroissant, ce qui simplifie la navigation dans l'historique du concept.

**Diverses corrections de bugs**