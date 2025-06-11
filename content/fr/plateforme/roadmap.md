---
title: Roadmap
slug: roadmap
translationKey: roadmap
weight: 40
type: docs
keywords: [I14Y, plateforme d'interopérabilité I14Y, architecture système, technique, base de données, banque de données]
---

La plateforme d'interopérabilité I14Y a été développée sur mandat de la Confédération par le service d'interopérabilité, en collaboration avec l'Office fédéral de l'informatique et de la télécommunication. Ses fonctions font l'objet d'améliorations continues. 

Au cours des mois à venir, le service d'interopérabilité se concentrera en priorité sur les fonctionnalités suivantes, l'ordre des priorités pouvant changer en fonction des besoins. Pour obtenir des informations détaillées sur le développement de la plateforme ou faire des suggestions concernant certaines fonctionnalités, nous vous invitons à vous mettre en relation avec le service d'interopérabilité.

{{<alert title="Votre avis nous intéresse!" color="success">}}
Vous avez une proposition d'amélioration ou souhaitez signaler une erreur sur la plateforme d'interopérabilité I14Y? N'hésitez-pas à nous en faire part par [e-mail](mailto:i14y@bfs.admin.ch). D'autres canaux seront proposés prochainement pour ces retours. 

{{</alert>}}

{{< mermaid width="650px" >}}
timeline
    title Roadmap Plateforme d'interopérabilité I14Y
    
    section 2025
        PI 25 (27.03.2025 - 04.06.2025)
        : Migration de toutes les données dans une base de données centrale. Cela accélère la recherche globale.
        : Introduction d'une table des matières pour la navigation sur les pages de détail.
        : Les concepts existants peuvent être mis à jour via l'API.
        : Un nouveau point d'accès permet de récupérer des listes filtrées de concepts.
        : Sur les pages d'aperçu, il sera indiqué dans quelle mesure les données sont librement accessibles.
        : Les structures complexes de jeux de données peuvent être téléversées et affichées aux formats RDF/TTL.
        : Les jeux de données peuvent être téléchargés et téléversés via l'interface web.
        : Les métadonnées des organisations sont enrichies d'informations supplémentaires et affichées.
        : Introduction d'une recherche dans les entrées des listes de codes.
        : Amélioration de la recherche.
        
        PI 26 - 27 (05.06.2025 - 09.12.2025)
        : La plateforme est migrée vers le cloud public.
        : Les structures complexes de jeux de données peuvent être saisies et modifiées via l'interface web.
        : Introduction d'URIs/permaliens pour tous les objets.
        : Nouveaux points d'accès pour les services de données et services publics sur l'API partenaire.
        : ⭐ Introduction de fonctionnalités de journalisation (piste d'audit)
        : ⭐ Enregistrement des modifications apportées aux objets (piste d'audit)
        : Introduction de tables de mappage pour documenter les différences entre les concepts.
        : ⭐ Possibilité de s'abonner aux notifications de modifications des métadonnées.
        : Mise à disposition d'une boîte à outils avec d'autres options d'importation et d'exportation.
        : ⭐ Analyses de tableau de bord supplémentaires
  
    section 2026
        PIs 28 - 31 (10.12.2025 - 31.12.2026)
        : Intégration d'un aperçu des données.
        : Intégration automatique de l'administration fédérale.
        : ⭐ Création d'une possibilité de documenter les flux de données (Data Lineage)
        : Extension des possibilités de connexion aux outils.
        : Publication du code source (Open Source).
        : Fin de la phase de projet.
{{< /mermaid >}}

*⭐ Les entrées marquées d'un astérisque sont des propositions du projet DVS BS+.*

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