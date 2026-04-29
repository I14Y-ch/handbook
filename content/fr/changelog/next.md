---
title: Prochaine version
translationKey: next-release
slug: prochaine-version
weight: 10
type: docs
keywords: [I14Y, Plateforme d'interopérabilité I14Y, IOP, Changelog, Releases, Versions, Développement logiciel]
draft: false
---

La prochaine version d'I14Y est prévue pour la soirée du 6 mai 2026. Elle comprend les adaptations et les extensions décrites ci‑dessous. Les organisations partenaires d'I14Y disposant d'un accès correspondant peuvent tester immédiatement le logiciel mis à jour sur l'[environnement de recette d'I14Y](https://input.i14y-a.admin.ch). Veuillez contacter l'Unité d'interopérabilité si vous n'avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de mise en production peut être repoussée à court terme en cas de problème. Il est également possible que certaines fonctionnalités soient retirées de cette version et activées ultérieurement. Pour toute question ou tout problème concernant cette version, veuillez vous adresser à l'Unité d'interopérabilité ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Modifier les structures dans l'interface utilisateur :** Les classes, attributs et associations d'une structure de données peuvent désormais être modifiés directement dans l'interface utilisateur. Toutes les propriétés affichées dans la barre latérale sont modifiables. Lors de la modification d'un attribut, il est également possible de rechercher un concept et d'établir un lien vers une version spécifique.

**Métadonnées système dans la Partner API :** Tous les objets contiennent désormais une section "system" dans les réponses JSON de la Partner API. Elle contient la date de création (`createdAt`), la date de la dernière modification (`modifiedAt`) ainsi que le type de création (`creationType`). Ce dernier indique si un objet a été créé manuellement via un jeton de navigateur (_Manual_) ou automatiquement via un jeton M2M (_Automated_).

**Plusieurs identifiants pour les concepts et les prestations administratives :** Les concepts et les prestations administratives peuvent désormais porter plusieurs identifiants. À cet effet, la propriété `identifiers` a été introduite sous forme de tableau. Afin de ne pas perturber les intégrations existantes, le champ `identifier` actuel continuera provisoirement à être renvoyé ; les deux champs apparaissent simultanément dans les réponses de l'API. Remarque : le champ `identifier` (au singulier) sera supprimé dans une future version. Les scripts qui utilisent ce champ lors de la création d'objets devront être adaptés à temps.

**Créer une nouvelle version d'une table de correspondance :** Il est désormais possible de créer une nouvelle version à partir d'une table de correspondance existante.

**Recherche dans le catalogue via la Partner API :** Le point de terminaison de recherche dans le catalogue est désormais également disponible via la Partner API. La recherche prend en charge différents paramètres tels que le terme recherché et la langue.

**Droits d'édition étendus pour les submitters :** Les submitters peuvent désormais modifier des objets ayant le statut d'enregistrement "Initial" ou "Candidat", même s'ils sont déjà publiés publiquement. La condition est qu'ils n'aient pas été verrouillés au préalable.

**Distributions sur la page de détail du jeu de données :** Les distributions appartenant à un jeu de données sont désormais affichées directement sur la page de description du jeu de données.

**Exportation de listes de codes sans annotations :** Les listes de codes peuvent désormais être exportées sans annotations si souhaité ; les formats pris en charge sont JSON et CSV.

**Mises à jour techniques ainsi que petites améliorations et corrections de bugs**