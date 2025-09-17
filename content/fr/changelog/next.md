---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability Platform I14Y, IOP, Changelog, Releases, Versions, Software Development]
draft: false
---
La prochaine version d’I14Y est prévue pour le début de soirée du 24 septembre 2025. Elle comprend les ajustements et améliorations listés ci‑dessous. Les organisations partenaires d’I14Y disposant des accès appropriés peuvent tester immédiatement le logiciel mis à jour sur l’[environnement de pré‑publication d’I14Y](https://input.i14y-a.admin.ch). Veuillez contacter le Service d’interopérabilité si vous n’avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de publication peut être reportée à très court terme en cas de problèmes. Il est possible que certaines fonctions soient retirées de la version et activées seulement ultérieurement. Pour toute question ou tout problème concernant cette version, veuillez contacter le Service d’interopérabilité ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- Une description technique détaillée de la structure des données peut être enregistrée pour chaque description de jeu de données sur I14Y. Les structures enregistrées peuvent désormais être téléchargées depuis le site public dans plusieurs formats (TTL, RDF, JSON-LD).
- L’ensemble des métadonnées d’un jeu de données peut désormais être exporté depuis le site public via un nouveau bouton.
- Les adresses web insérées dans les descriptions sont automatiquement affichées comme liens cliquables.
- Lors de la récupération d’informations via l’API, l’intégralité des résultats est désormais renvoyée si aucun nombre d’éléments par page (pageSize) n’est spécifié.
- Le pied de page du site contient désormais un lien direct vers la boîte à outils I14Y proposant des outils utiles pour l’import des métadonnées.
- L’index de recherche est désormais construit indépendamment du démarrage de l’application. La plateforme devient ainsi disponible plus rapidement après un redémarrage et la recherche est plus stable.
- De nouveaux points de terminaison internes de monitoring (health checks) permettent de détecter plus rapidement les problèmes techniques.
- Divers bogues ont été corrigés.
