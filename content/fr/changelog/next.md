---
title: Prochaine version
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Plateforme d’interopérabilité I14Y, IOP, Journal des modifications, Publications, Versions, Développement logiciel]
draft: false
---

La prochaine version d’I14Y est prévue en début de soirée du 28 janvier 2026. Elle comprend les adaptations et améliorations listées ci-dessous. Les organisations partenaires d’I14Y disposant des autorisations nécessaires peuvent tester immédiatement le logiciel sur l’[environnement de pré‑publication d’I14Y](https://input.i14y-a.admin.ch). Veuillez contacter le Service d’interopérabilité si vous n’avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de publication peut être reportée à très court terme en cas de problèmes. Il est possible que certaines fonctions soient retirées de la version et activées seulement ultérieurement. Pour toute question ou tout problème concernant cette version, veuillez contacter le Service d’interopérabilité ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- **Permaliens pour les concepts :** un identifiant international de ressource (IRI) s'affiche désormais sur les pages détaillées des concepts publiés. Cet identifiant stable et unique, également appelé permalien, utilise la section Linked Data de la Confédération. Le permalien se compose de l'identifiant interne et de la version du concept : `https://register.ld.admin.ch/i14y/concept/{concept-identifier}/version/{version}`. Un IRI n'est généré qu'une fois qu'un concept est publié ; les concepts internes ne disposent pas d'un tel permalien.
- **Extension de l'exportation RDF :** les descriptions des ensembles de données sont également disponibles au format RDF via l'interface électronique (API). Cela permet la lecture automatisée du contenu d'un catalogue (ce que l'on appelle le _harvesting_). L'exportation RDF a désormais été complétée par une information supplémentaire sur le type de distribution.
– **Information supplémentaire dans la vue graphique :** la structure d'un enregistrement est représentée graphiquement sur I14Y. Cette représentation affiche désormais également les unités de mesure des attributs, dans la mesure où les informations correspondantes ont été enregistrées.
- **Filtre amélioré :** les options de sélection dans les filtres sont mieux organisées. Certaines sont classées selon des critères techniques (par exemple, le filtre de statut), d'autres par ordre alphabétique (par exemple, le filtre par situation de vie).
- **Corrections d'erreurs :** plusieurs erreurs ont été corrigées. Entre autres, les grandes listes de codes peuvent à nouveau être téléchargées plus rapidement.