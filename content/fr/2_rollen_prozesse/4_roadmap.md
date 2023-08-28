---
title: Roadmap
slug: roadmap
weight: 40
type: docs
keywords: [I14Y, plateforme d'interopérabilité I14Y, architecture système, technique, base de données, banque de données]
---

La plateforme d'interopérabilité I14Y a été développée sur mandat de la Confédération par le service d'interopérabilité, en collaboration avec l'Office fédéral de l'informatique et de la télécommunication. Ses fonctions font l'objet d'améliorations continues. 

Au cours des mois à venir, le service d'interopérabilité se concentrera en priorité sur les fonctionnalités suivantes, l'ordre des priorités pouvant changer en fonction des besoins. Pour obtenir des informations détaillées sur le développement de la plateforme ou faire des suggestions concernant certaines fonctionnalités, nous vous invitons à vous mettre en relation avec le service d'interopérabilité.

{{<alert title="Votre avis nous intéresse!" color="success">}}
Vous avez une proposition d'amélioration ou souhaitez signaler une erreur sur la plateforme d'interopérabilité I14Y? N'hésitez-pas à nous en faire part par [e-mail](mailto:i14y@bfs.admin.ch). D'autres canaux seront proposés prochainement pour ces retours. 

{{</alert>}}

## Interfaces électroniques (API)
La plateforme d'interopérabilité I14Y propose d'ores et déjà des interfaces électroniques (API) permettant de rechercher, de saisir et de traiter les métadonnées sur la plateforme. Ces API n'étant pas encore totalement finalisées, il n'y a guère eu d'informations à leur sujet. Nombre d'entre elles sont par ailleurs accessibles uniquement depuis le réseau de la Confédération. Si vous devez déjà utiliser ces interfaces, veuillez contacter le [service d'interopérabilité](mailto:i14y@bfs.admin.ch).  

Des API stables devraient être mises à disposition au cours des prochains mois. Elles seront accessibles sous [api.i14y.admin.ch](https://api.i14y.admin.ch), avec la documentation correspondante. L'offre sera étoffée au fur et à mesure. 

Ces interfaces permettront d'accéder d'une part aux métadonnées publiques, d'autre part aux métadonnées internes des différentes organisations, le tout sans aucune intervention manuelle. Pour ce faire, une passerelle API sera intégrée au système. 

### Nouveaux champs
Il est prévu d'intégrer de nouveaux champs dans le catalogue pour décrire plus précisément les jeux de données et les API. Ils serviront notamment à garantir l'interopérabilité avec d'autres portails de données. Certains champs seront disponibles uniquement en interne, tandis que d'autres viendront compléter l'offre accessible publiquement. 

Dans un deuxième temps, les organisations pourront créer leurs propres champs, et ainsi décrire encore plus précisément leurs jeux de données et leurs interfaces, pour leurs besoins internes, mais aussi en vue de la connexion avec des applications spécialisées.

### Informations sur la qualité
L'IOP I14Y collecte des appréciations sur la qualité des jeux de données. À l'avenir, ces informations devraient pouvoir être recueillies de façon automatisée via une interface électronique. 

La qualité devrait également être analysée pour les éléments de données, ce qui permettra d'évaluer leur degré de remplissage. Ces informations seront consultables via la même API. 

### Code source ouvert
Le code de programmation de la plateforme d'interopérabilité I14Y doit être publié sous une [licence libre](https://www.gnu.org/licenses), conformément aux dispositions de la loi fédérale
sur l'utilisation de moyens électroniques pour l'exécution des tâches des autorités (LMETA). En vertu de l'article 9 de la loi, les autorités fédérales doivent dans la mesure du possible mettre leur code source gracieusement à disposition. 

{{<card header="Base légale" title="__Art. 9 Logiciels à code source ouvert__" footer="Loi fédérale sur l'utilisation de moyens électroniques pour l'exécution des tâches des autorités [(LMETA)](https://www.fedlex.admin.ch/eli/fga/2023/787/fr#art_9)">}}

Les autorités fédérales soumises à la présente loi publient le code source des logiciels qu'elles développent ou font développer pour l'exécution de leurs tâches, sous réserve que les droits de tiers ou des raisons importantes en matière de sécurité excluent ou limitent cette possibilité. Elles autorisent toute personne à utiliser, à développer et à partager ces logiciels sans avoir à payer de redevances de licence.

{{</card>}}

L'IOP I14Y publie ses codes source et ses scripts sous le nom i14y-ch sur la [plateforme Github](https://github.com/i14y-ch). Le présent manuel et le prototype d'une API développée lors du GovTech Hackathon 2023 y sont déjà accessibles. Des exemples de scripts pour la recherche de données y seront également publiés. Les premiers modules de l'IOP I14Ydevraient être disponibles au 4e trimestre 2023. Des informations sur les possibilités d'utilisation et les développements futurs seront intégrées en temps utile dans ce manuel.