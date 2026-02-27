---
title: News
slug: nouvelles
translationKey: news
weight: 90
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, nouvelles, News]
---

{{<alert title="Tenez-vous informés!" color="success" >}}

Vous souhaitez être informés des nouvelles fonctions et des offres de la plateforme d’interopérabilité I14Y? Abonnez-vous aux NewsMails. Un courriel résumant les derniers développements de la plateforme vous sera envoyé trois ou quatre fois par an. Pour vous abonner, il vous suffit de vous rendre sur la page du [service d’abonnement de l’Office fédéral de la statistique](https://www.bfs.admin.ch/bfs/fr/home/services/contact/abonnement-newsmail.html) et de cocher l’option «I14Y Plateforme d’interopérabilité». 

{{</alert>}}

## Utiliser un langage commun, c’est simplifier les processus
*20.02.2026*

L’importance d’avoir un langage commun se sent d’autant plus lorsque celui-ci fait défaut. Fusionner des jeux de données provenant de différentes sources, c’est inévitablement se confronter au problème suivant: bien que ces jeux abordent les mêmes sujets, ils n’utilisent pas la même terminologie. Résultat: les systèmes n’arrivent pas à communiquer. La plateforme I14Y résout ce problème en proposant des outils et des moyens auxiliaires pour rendre les échanges plus efficaces.

Une nouvelle fonctionnalité vient encore renforcer ce langage commun: il est désormais possible d’utiliser directement des bases de données terminologiques contrôlées telles que [TERMDAT](https://www.termdat.bk.admin.ch/search), [GEMET](https://www.eionet.europa.eu/gemet/fr/about/) ou [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) pour saisir des mots-clés. Les renvois vers les objets correspondants peuvent être enregistrés pour tous les mots-clés – qu’il s’agisse de jeux de données, d’API, de concepts ou de prestations des autorités. Enfin, la collection terminologique TERMDAT en matière de gestion des données et des informations (DIM25) sert de référence commune: dans TERMDAT, sélectionnez «Recherche avancée» puis choisissez la collection «DIM25» dans le champ «Collections terminologiques».

## Génération automatique des structures RDF pour les jeux de données OGD
*20.02.2026*

{{< figure src="/handbook/img/news/newsmail-2026-1-thumb-rdf.png" alt="Graphique Génération automatique des structures RDF pour les jeux de données OGD" width="125px" class="float-left img-news-thumb" >}}

Dans le cadre de la publication des structures des jeux de données open data, nous avons mis en place un processus innovant permettant de générer automatiquement des structures RDF (SHACL) à partir des fichiers CSV et PXWeb disponibles dans les distributions accessibles. Cette automatisation nous permet de documenter ces jeux de données en conformité avec les standards du Web sémantique, garantissant ainsi une meilleure cohérence et une validation fiable. Plus de 900 jeux de données sont concernés.

Quels avantages pour nos partenaires?

- Gain de temps: plus besoin de créer manuellement des structures RDF/SHACL.
- Facilité d’intégration: simplifie la mise en place de services basés sur des données ouvertes; les jeux de données sont décrits d’une manière compréhensible par les machines.
- Favorise l’interconnexion: cette base nous permettra prochainement de relier les structures des différents jeux de données entre eux et de mettre en évidence ceux qui réutilisent des concepts similaires.

Cette étape importante ouvre la voie à des services plus fiables et interconnectés, tout en réduisant les efforts pour nos partenaires. Elle renforce considérablement les possibilités d’interopérabilité entre les jeux de données.

## Saisie des mots-clés améliorée sur I14Y grâce à des terminologies contrôlées
*20.02.2026*

{{< figure src="/handbook/img/news/newsmail-2026-1-thumb-terminologie.png" alt="Graphique Saisie des mots-clés améliorée sur I14Y grâce à des terminologies contrôlées" width="125px" class="float-left img-news-thumb" >}}

Les mots-clés jouent un rôle central pour trouver des jeux de données. Leur saisie a donc été étendue sur la plateforme I14Y: il est désormais possible de reprendre des mots-clés provenant de bases de données terminologiques. Sont notamment pris en charge TERMDAT, le thésaurus environnemental européen multilingue GEMET ainsi que la plateforme de données collaborative Wikidata. Le recours à des terminologies contrôlées favorise l’uniformité des termes. On améliore ainsi la qualité des métadonnées tout en facilitant la recherche dans différents systèmes. En outre, la nouvelle fonction répond aux exigences de la norme d’échange DCAT-AP CH.

Plusieurs variantes sont possibles, en fonction du mode de travail de chacun: lors de la saisie, on peut directement reprendre des mots-clés depuis la base de données terminologique choisie. Pour les processus automatisés, il est aussi possible d’implémenter les références terminologiques via l’[API I14Y](https://apiconsole.i14y.admin.ch). La [toolbox I14Y](https://toolbox.i14y.admin.ch) fournit en outre un générateur de mots-clés pour préparer et gérer des listes cohérentes et réutilisables.

Le manuel I14Y (actuellement disponible uniquement en allemand) fournit des instructions détaillées sur l’utilisation de cette nouvelle fonction: https://handbook.i14y.admin.ch/handbook/de/publikation/tipps/#schl%C3%BCsselw%C3%B6rter-und-kontrollierte-terminologie.

La saisie de mots-clés en texte libre reste possible s’il n’existe aucune terminologie appropriée.

## Feuille de route 2026: d’importants développements pour I14Y
*20.02.2026*

{{< figure src="/handbook/img/news/newsmail-2026-1-thumb-roadmap.png" alt="Graphique Feuille de route 2026: d’importants développements pour I14Y" width="125px" class="float-left img-news-thumb" >}}

De nombreuses nouveautés sont attendues pour 2026. Elles simplifieront l’utilisation de la plateforme I14Y tout en renforçant l’interopérabilité. Des tables de correspondance (mapping) permettront de gérer efficacement les correspondances entre les codes de différentes nomenclatures. Cela améliorera l’harmonisation des flux de travail et la comparabilité des données.

Un URI unique et standardisé sera attribué à chaque objet de données, ce qui améliorera la référenciation et la fiabilité. Il sera aussi possible d’éditer les structures dans l’interface utilisateur et d’associer leurs attributs à des concepts. Le passage prévu à l’open source – comme l’exige la LMETA – apportera davantage de flexibilité et de sécurité et facilitera aussi bien les intégrations propres qu’une éventuelle installation locale de la plateforme I14Y. Détails sur la [roadmap](https://handbook.i14y.admin.ch/handbook/fr/plateforme/roadmap/).

## Analyse des lacunes menée à bien pour metadata.swiss
*20.02.2026*

{{< figure src="/handbook/img/news/newsmail-2026-1-thumb-gap.png" alt="Graphique Analyse des lacunes menée à bien pour metadata.swiss" width="125px" class="float-left img-news-thumb" >}}

L’analyse des lacunes pour metadata.swiss a été menée à bien et transmise aux instances compétentes pour consultation. Elle montre comment les fonctions des plateformes opendata.swiss et I14Y – à savoir les données en libre accès et l’interopérabilité – peuvent être réunies de manière optimale sur une seule et même plateforme tant pour les métadonnées que pour les données de référence.

Nous recommandons le logiciel open source Piveau pour mettre en œuvre les fonctions descriptives du catalogue et reprendre les fonctions d’interopérabilité de la plateforme I14Y, y compris tous les outils existants. Un des principaux objectifs de développement est d’améliorer l’automatisation afin de réduire les travaux de saisie manuelle et de créer une plateforme commune et efficace pour les métadonnées et les données de référence.

## La plateforme d’interopérabilité I14Y entre dans une nouvelle phase!
*04.12.2025*

{{< figure src="/handbook/img/news/cloud.jpg" alt="Grafik Eine neue Phase für die Interoperabilitätsplattform I14Y" width="125px" class="float-left img-news-thumb" >}}

La plateforme I14Y, jusqu'alors hébergée par l'Office fédéral de l'informatique et de la télécommunication, a été migrée avec succès vers le cloud public – une étape majeure pour l'interopérabilité en Suisse. Cette évolution nous offre désormais une flexibilité accrue, essentielle pour accélérer les prochains développements — comme l’intégration d’un triple store ou de la toolbox. 
Parallèlement, l’ensemble de notre code source a été migré vers GitHub, posant les bases concrètes de notre engagement envers l’open source. Ces changements renforcent notre capacité à innover et à collaborer avec vous.

## metadata.swiss: aktueller Stand zur Plattformzusammenführung
*04.12.2025*

La fusion de la plateforme I14Y et d’opendata.swiss en une plateforme de métadonnées commune est en bonne voie. L’objectif reste une gestion des métadonnées simple, claire et durable, qui renforce la transparence et facilite l’accès aux données pour le grand public. 
L’analyse d’écarts lancée en septembre dans le cadre du projet metadata.swiss est sur le point de s’achever. La phase de concertation et de conception proprement dite de la nouvelle plateforme commune est donc lancée. Le calendrier des travaux de développement de la plateforme I14Y reste globalement inchangé, mais il sera adapté en fonction de l’avancement des travaux concernant metadata.swiss, de manière à éviter les développements ou les investissements non durables. Et tous les objets de données décrits sur la plateforme I14Y seront migrés vers la nouvelle solution, probablement en 2028. Vous vous demandez comment s’appellera la plateforme fusionnée? Rien n’est encore défini, mais I14Y sera probablement de l’histoire ancienne.

## Beta-ID: un jeu de données à tester
*04.12.2025*

{{< figure src="/handbook/img/news/beta-id.png" alt="Grafik Die Beta-ID als Datensatz zum Testen" width="125px" class="float-left img-news-thumb" >}}

Le 29 septembre, la Suisse a approuvé l’introduction de l’e-ID nationale. Introduite dans le cadre de la phase de test public (public beta), «Beta-ID» est une identité de test qui ne prévoit pas de vérification d’identité à proprement parler, mais contient les mêmes champs de données que la future e-ID. [Disponible sur la plateforme I14Y, le jeu de données en question](https://www.i14y.admin.ch/fr/catalog/datasets/urn:vct:ch.admin.bcs.betaid/description) montre comment documenter et intégrer de nouvelles applications à un stade initiale. Ce principe peut également s’appliquer à d’autres projets numériques: un bon exemple de transparence et d’action collaborative et proactive dans l’administration publique.

## Un dashboard visualise les données, la plateforme I14Y les rend compréhensibles et lisibles par machine
*04.12.2025*

{{< figure src="/handbook/img/news/bfe-datensaetze-i14y.png" alt="Grafik Ein Dashboard visualisiert Daten, I14Y macht sie nachvollziehbar und maschinenlesbar" width="125px" class="float-left img-news-thumb" >}}

Le tableau de bord (dashboard) de l’énergie de l’Office fédéral de l’énergie permet de visualiser en un coup d’œil les indicateurs clés relatifs à la production et à la consommation d’électricité en Suisse. Dix jeux de données du tableau de bord sont désormais décrits sur la plateforme I14Y, créant de la transparence sur les jeux de données qui se cachent derrière les visualisations. Toutes les personnes intéressées de la recherche, de l’industrie et d’autres domaines ont ainsi accès à ces jeux de donnée décrits de manière cohérente, disponibles à long terme de manière fiable et faciles à utiliser. Le tableau de bord et la plateforme se complètent donc parfaitement. 
[Catalogue de métadonnées](https://www.i14y.admin.ch/fr/catalog/datasets?publisher=CH_BFE)

[Dashboard de l'énergie Suisse](https://www.energiedashboard.admin.ch/dashboard)

## Rencontre des administrateurs locaux des données: une journée dédiée à la pratique
*04.12.2025*

Six exposés, trois ateliers et beaucoup d’échanges dans une atmosphère détendue: Le 21 octobre, une cinquantaine de spécialistes de l’administration publique se sont réunis à Neuchâtel pour la première rencontre (meet-up) des administrateurs locaux des données (Local Data Stewards, LDS). Organisé par l’équipe I14Y, l’événement a permis d’affiner le nouveau rôle des administrateurs locaux des données dans le contexte des bases légales de la LMETA et de l’ONum. 
Le travail pratique avec la plateforme I14Y était au centre de la rencontre: de quelle manière et avec quels outils peut-on décrire les jeux de données, les API et les prestations des autorités sur la plateforme? 
  
Dans les ateliers qui ont suivi, les participants ont discuté des questions de gouvernance, des aspects techniques et de la publication sur opendata.swiss et la plateforme I14Y. 
  
La prochaine rencontre est prévue pour l’automne 2026. Entretemps, les administrateurs locaux des données se réuniront régulièrement de manière informelle. Veuillez nous contacter [par courriel](mailto:i14y@bfs.admin.ch) si vous souhaitez y participer.

## Deux-en-un
*26.08.2025*

les plateformes de métadonnées I14Y et opendata.swiss vont fusionner dans le but de rendre la gestion des métadonnées en Suisse plus simple, plus claire et plus durable. Le conseil de direction de l’Office fédéral de la statistique a donné le coup d’envoi de cette opération au travers du projet metadata.swiss. Une équipe de projet composée de spécialistes de l’équipe Open Government Data et du service d’interopérabilité travaille depuis le 1er août à l’élaboration de variantes concrètes pour sa mise en œuvre. 

La future plateforme présente de nombreux avantages: elle permet une gouvernance uniforme des métadonnées en Suisse, regroupe les ressources techniques et organisationnelles et améliore la compatibilité avec les normes européennes. 

Nous en sommes convaincus: cette fusion est une étape importante vers un paysage suisse des données bien interconnecté. Actuellement, rien ne change concernant la feuille de route de l’I14Y – nous continuons résolument de développer la plateforme. Nous sommes conscients que cette fusion peut soulever des questions. N’hésitez donc pas à prendre contact avec nous!

## Moissonnage automatique sur la plateforme I14Y: un service pour nos partenaires
*26.08.2025*

{{< figure src="/handbook/img/news/automatisches-harvesting.png" alt="Grafik Moissonnage automatique" width="125px" class="float-left img-news-thumb" >}}

Pour que les utilisateurs et utilisatrices réutilisent les données, ils doivent être au courant de leur existence. C’est dans ce but que la plateforme I14Y a été développée. L’administration et les institutions proches des autorités décrivent leurs jeux de données sur cette plateforme, rendant ainsi ces informations accessibles au grand public. Afin de simplifier ce processus, I14Y a développé un module de moissonnage qui permet de transférer et de mettre à jour automatiquement les métadonnées à partir de catalogues de données existants. 

Le moissonnage se base sur le profil d’application DCAT-AP CH et utilise l’API partenaire de la plateforme I14Y pour enregistrer les jeux de données directement dans le catalogue privé ou public d’une organisation. La plateforme I14Y met à la disposition des organisations intéressées des [modèles de référence configurable sur GitHub](https://github.com/I14Y-ch/harvester_template), allant de l’authentification à l’automatisation avec GitHub Actions, en passant par le mappage.
 
Le moissonneur peut être configuré de manière à importer de nouveaux jeux de données et à mettre à jour ceux qui existent déjà à intervalles réguliers (toutes les nuits, p. ex.). Le moissonneur utilisé pour le référentiel de données de l’Office fédéral de la sécurité alimentaire et des affaires vétérinaires, en service depuis février 2025, en est un exemple. Il publie chaque jour des métadonnées mises à jour directement dans le catalogue public de la plateforme et répond aux exigences de qualité de la plateforme. Il a été transféré dans l’environnement de production en juillet 2025.
 
Les organisations intéressées peuvent configurer elles-mêmes le moissonneur à l’aide du modèle GitHub. C’est avec plaisir que nous vous aidons dans cette démarche, que ce soit par des conseils techniques ou par la mise en place d’un utilisateur technique pour l’authentification automatisée. N’hésitez pas à nous contacter par e-mail.
 
## Outils pratiques pour votre travail avec la plateforme I14Y
*26.08.2025*

{{< figure src="/handbook/img/news/praktische-tools.png" alt="Grafik Toolbox" width="125px" class="float-left img-news-thumb" >}}

La boîte à outils I14Y offre une aide pratique pour différentes tâches liées à la gestion des métadonnées. Un programme d’aide adapté facilite par exemple l’importation d’un inventaire de données existant au format tableau. Un nouvel outil de conversion est disponible pour la documentation de la structure des jeux de données. Il permet de créer en un tour de main des structures de données conformes à SHACL. La documentation des interfaces techniques existantes est également prise en charge: l’outil Swagger2I14Y aide à créer une entrée conforme à la plateforme I14Y. Et si vous souhaitez extraire certaines informations relatives à des données individuelles d’un jeu de données, l’importation est la méthode qu’il vous faut utiliser.
 
Vous trouverez ces outils et d’autres dans la nouvelle boîte à outils I14Y. Les outils facilitent de nombreuses étapes de travail – notamment grâce à des conversions automatiques, à des traductions et, dans certains cas, à l’utilisation de l’intelligence artificielle (dans le générateur ABC lié, par exemple). Il est possible d’utiliser ces outils directement dans le navigateur Web ou de les télécharger et de les exécuter localement, notamment si vous travaillez avec des données sensibles ou non disponibles en ligne.
 
Vous avez d’autres outils utiles en tête? Le service d’interopérabilité se réjouit de recevoir vos propositions et scripts. [Lien vers la boîte à outils I14Y](https://toolbox.i14y.admin.ch).

## L’OFEN publie son premier jeu de données sur la plateforme I14Y
*26.08.2025*

L’Office fédéral de l’énergie (OFEN) a décrit pour la première fois un jeu de données sur la plateforme. Il s’agit des [prix de marché de référence pour la prime de marché flottante]<8https://www.i14y.admin.ch/fr/catalog/datasets/BFE-DS-141/description) (selon l’art. 30aquinquies OEneR). Ces prix de référence sont d’une importance capitale pour le calcul de la prime de marché flottante, un instrument de promotion de l’État fédéral pour les installations photovoltaïques, biomasses, éoliennes et hydroélectriques.
L’OFEN utilise la plateforme I14Y comme catalogue de métadonnées à l’interne, un élément central de sa stratégie numérique. En publiant ses jeux de données publiques, l’OFEN améliore la disponibilité et la réutilisation des données énergétiques et simplifie l’échange de données dans le secteur de l’énergie. Il prépare actuellement de nombreux autres jeux de données.

## Représentation graphique des structures de données
*26.08.2025*

{{< figure src="/handbook/img/news/datenstruktur-graphisch-darstellen.png" alt="Grafik Représentation graphique des structures de données" width="125px" class="float-left img-news-thumb" >}}

Grâce à la dernière version, il est maintenant possible de représenter graphiquement les structures de données sur I14Y – une étape importante pour tous ceux qui souhaitent non seulement fournir des données, mais aussi les rendre durables. La zone de structure nouvellement conçue permet de représenter avec précision des structures de données complexes et imbriquées. Chaque attribut renvoie à un concept d’élément de données correspondant, s’il existe. Cela rend la réutilisation des données directement visible.

D’un point de vue technique, les tableaux simples utilisés jusqu’à présent sont remplacés par des structures plus claires: des classes, des attributs et des relations, stockés au format Linked Data (TTL). À l’avenir, le stockage s’effectuera dans un triplestore, ce qui permettra de modéliser et de visualiser les structures de données sous forme de graphiques. Il sera ainsi facile à l’avenir de reproduire des modèles XML, JSON ou relationnels de données.

La prochaine étape consistera à étendre en continu les fonctions d’édition, d’importation et d’exportation ainsi que de réutilisation des classes.

## Trouver rapidement le bon code dans des nomenclatures complexes
*18.07.2025*

Et si vous pouviez trouver une aiguille dans une botte de foin… en un clin d’œil ?
Ou, pour transposer cela à notre contexte: une information bien précise dans une nomenclature aussi dense que la CHOP ou la NOGA. Imaginez une recherche intelligente, rapide, précise et contextuelle qui vous mène directement au code ou à la description que vous recherchez. C’est exactement ce que nous avons développé: Une fonctionnalité de recherche ultra-performante, destinée aux experts, aux analystes et à tous ceux qui travaillent avec des classifications et des nomenclatures.

Découvrez-la par vous-même dans la courte vidéo 👇

{{< video src="/handbook/img/news/strukturelle-suche.mp4" width="800" >}}[<img src="/static/handbook/img/news/strukturelle-suche.png">](/static/handbook/img/news/strukturelle-suche.mp4)

## Nouvel accès M2M : synchronisation automatisée des métadonnées avec I14Y
*12.05.2025*

Jusqu’à présent, il fallait procéder manuellement pour saisir les métadonnées des jeux de données sur la plateforme I14Y, un processus fastidieux mobilisant des ressources et sujet aux erreurs. Désormais, les organisations peuvent importer et gérer les métadonnées de leurs jeux de données de manière entièrement automatisée. C’est une étape importante pour la plateforme I14Y et un grand pas vers une administration plus efficiente. Cette nouveauté ravira également les organisations qui gèrent déjà leurs catalogues de données et qui souhaitent les relier à la plateforme I14Y. La communication de machine à machine (M2M) requiert un jeton d’accès spécial. Celui-ci permet de saisir et de publier les métadonnées sur la plateforme I14Y via l’API, sans qu’il faille intervenir manuellement. Une possibilité qui s’avère également utile et très intéressante pour les organisations qui éditent et mettent régulièrement à jour des métadonnées sur la plateforme I14Y.
Il suffit de suivre les instructions de la fiche technique (référentiel du modèle), un exemple d’utilisation, pour réaliser facilement la connexion automatisée à la plateforme. Ces instructions permettent non seulement permettent non seulement d’importer des jeux de données, mais aussi d’en assurer la mise à jour à intervalles réguliers (chaque nuit, par exemple). Les informations saisies sont ainsi toujours à jour, sans qu’aucune intervention manuelle soit nécessaire. Il en résulte une charge de travail fortement réduite et une meilleure qualité des données.
 
Pour procéder à des importations ou exportations uniques via l’API, il suffit de suivre la procédure en utilisant le jeton d’accès, que l’on obtient en cliquant sur le symbole de la personne en haut à droite (bouton « Copie Access Token »), une fois la connexion établie.
 
Pour tout complément d’information au sujet de la communication de machine à machine, veuillez nous contacter par courriel à l’adresse i14y@bfs.admin.ch.

## Un tutoriel pour l’échange automatique de données
*12.05.2025*

Comment procéder dans Python pour accéder aux API publiques et partenaires de la plateforme I14Y? Un nouveau tutoriel interactif explique comment procéder pas à pas, et donne des exemples concrets pour tous les points de terminaison (endpoints) de l’API. Il montre comment consulter, importer ou actualiser des données de manière automatisée.
Pour consulter le tutoriel, il est possible de le télécharger localement depuis GitHub, ou de
le lancer dans le navigateur, à l’aide de JupyterLite, sans rien installer.

Vers la page GitHub explicative: [I14Y-ch/tutorials](https://github.com/I14Y-ch/tutorials)  

Vers le tutoriel: [JupyterLite](https://i14y-ch.github.io/tutorials/lab/index.html)

## Description de la structure des jeux de données sur la plateforme I14Y: nouveautés
*12.05.2025*

{{< figure src="/handbook/img/news/structure.png" alt="Grafik Struktur" width="125px" class="float-left img-news-thumb" >}}

La structure plate actuelle des jeux de données sur la plateforme I14Y sera progressivement remplacée ces prochaines semaines par une structure permettant la modélisation des hiérarchies. Le futur modèle est basé sur des données liées, comprenant des classes, des attributs et des relations, et sauvegardées au format RDF/TTL.

Dans trois semaines environ, de nouveaux modèles de données plus complexes seront introduits dans le catalogue interne au format RDF/TTL. Les structures existantes resteront provisoirement visibles, mais ne pourront plus être modifiées. Dans six semaines environ, les nouvelles structures auront complètement remplacé les anciennes, y compris la représentation graphique et les liens vers les concepts.

Remarque: les organisations qui ont publié des descriptions de jeux de données dans leur structure n’ont rien à faire. Le service d’interopérabilité se chargera de remplacer les structures actuelles par les nouvelles. Veuillez contacter l’équipe I14Y pour toute modification pendant la période où les structures ne pourront pas être éditées.

##  L’OFAG se lance dans la description des données agricoles sur la plateforme I14Y
*12.05.2025*

{{< figure src="/handbook/img/news/landwirtschaft.jpg" alt="Grafik Landwirtschaft" width="125px" class="float-left img-news-thumb" >}}

L’Office fédéral de l’agriculture (OFAG) a commencé à décrire ses concepts d’éléments de données et ses jeux de données sur la plateforme I14Y, ce qui nous réjouit. Il a notamment saisi des concepts relatifs aux paiements directs, aux engrais, aux aliments pour animaux, aux catégories de surfaces, aux labels, aux systèmes de stabulation et aux exploitations aquacoles. Deux jeux de données sont publiés: [Cultures de paiement direct ou cultures principales](https://www.i14y.admin.ch/fr/catalog/datasets/BLW_DS_DZ_CROP/description) et [Variétés végétales en Suisse](https://www.i14y.admin.ch/fr/catalog/datasets/BLW_DS_VARIETIES/description).

Grâce aux descriptions de l’OFAG, les professionnels, les services administratifs et les particuliers peuvent plus facilement trouver des données sur l’agriculture et les placer dans leur contexte.
 
La description des concepts et des jeux de données favorise non seulement la réutilisation, mais aussi l’harmonisation des données agricoles: une contribution centrale à l’application du principe once-only dans l’administration.

## De précieux enseignements tirés de la pratique
*12.05.2025*

Il est utile d’avoir l’avis d’externes pour améliorer son produit. Dans le cadre d’entretiens avec l’équipe I14Y, huit administrateurs locaux de données ont rendu compte de leur expérience utilisateur quant à la saisie de métadonnées.

Le bilan est globalement positif: la saisie fonctionne bien et les possibilités offertes par la plateforme sont appréciées. Les personnes interrogées estiment qu’il existe un potentiel d’amélioration notamment en ce qui concerne l’assistance contextuelle lors du remplissage et lorsqu’il s’agit d’appliquer des filtres à ses propres jeux de données.

Certains des points mentionnés ont déjà été pris en compte, d’autres le seront progressivement au fil du développement de la plateforme.

Pour rappel: vous pouvez nous soumettre vos propositions d’amélioration en tout temps via [Github](https://github.com/I14Y-ch/feature-requests).

## Accès aisé à l’API I14Y grâce à R
*02.04.2025*

{{< figure src="/handbook/img/news/r-konsole.png" alt="Grafik R-Konsole" width="125px" class="float-left img-news-thumb" >}}

Un package R bien conçu facilite l’accès à l’API de la plateforme d’interopérabilité I14Y. Un tutoriel montre en outre comment utiliser les métadonnées directement dans la console R. Trois questions à Félix Luginbuhl, qui a développé le paquet R.

*Félix Luginbühl, vous avez développé une bibliothèque R qui facilite l’accès à l’interface électronique de la plateforme I14Y. Quel a été l’élément déclencheur, un problème ou un défi en particulier?*

Dans le cadre d’un projet, j’avais besoin d’accéder à certaines données de la plateforme d’interopérabilité. En général, j’utilise le langage de programmation R, qui permet de définir de manière transparente les étapes du traitement et les analyses et de les reproduire. J’ai donc écrit un script qui récupère les métadonnées via l’API. Étant donné le rôle de la plateforme I14Y et l’importance croissante du langage de programmation R en Suisse, j’ai pensé qu’une bibliothèque pourrait être utile à la communauté. J’ai donc entrepris de développer cette nouvelle bibliothèque, à titre bénévole. 

*Quelles lacunes votre bibliothèque R permet-elle de combler?*

Grâce à la bibliothèque R, les utilisateurs peuvent accéder à des métadonnées de la plateforme I14Y aussi simplement qu’ils se procurent des données d’autres sources. Ils n’ont pas besoin de se préoccuper des détails techniques des appels API, mais peuvent utiliser la syntaxe R qui leur est familière. Il est en outre facile de combiner les métadonnées avec les données de l’Office fédéral de la statistique, telles qu’elles se présentent dans ma deuxième bibliothèque R (la bibliothèque «BFS»). Les deux bibliothèques sont disponibles sous forme de code *open source*. 

*Quelles réflexions ou expériences vous ont motivé à mettre à la disposition de la communauté non seulement la bibliothèque, mais aussi un tutoriel?*

En développant la bibliothèque, je voulais qu’il soit possible de tout réaliser directement à partir de la console R: recherche dans le catalogue I14Y, accès aux données et à d’autres identifiants permettant de trouver des données complémentaires. J’ai non seulement décrit l’ensemble du processus, mais aussi donné un exemple de combinaison possible avec une base de données de l’Office fédéral de la statistique. N’hésitez pas à jeter un œil à la documentation en ligne sous   [www.felixluginbuhl.com/I14Y](https://felixluginbuhl.com/I14Y).et à nous envoyer vos questions et commentaires. 

## Téléchargement automatisé des descriptions de données sur I14Y  
*04.03.2025*

{{< figure src="/handbook/img/news/grafik_api.png" alt="Graphique API" width="125px" class="float-left img-news-thumb" >}}

Grâce à un nouveau point de terminaison de l’interface électronique (API), vous pouvez dès à présent télécharger les descriptions des jeux de données de manière automatisée sur I14Y. Une simple requête POST suffit pour générer la description d’un jeu de données, ainsi que des indications sur sa distribution. Rendez-vous sur l’interface Web pour ensuite vérifier et valider l’enregistrement. Vous pouvez aussi modifier et publier le statut directement à partir d’un script via une requête PUT. 

Vous trouverez les spécifications techniques des nouveaux points de terminaison dans le fichier Swagger de l’API partenaire. Un tutoriel donne par ailleurs un exemple d’utilisation. 

Toutes les informations sur l’API I14Y sont disponibles à l’adresse suivante : [apiconsole.i14y.admin.ch](apiconsole.i14y.admin.ch). 

## À chaque cas, son code: saisie uniforme des données médicales
*04.03.2025*

{{< figure src="/handbook/img/news/medical.jpg" alt="Graphique médecine numérisée" width="125px" class="float-left img-news-thumb" >}}

Tous les hôpitaux suisses sont tenus de saisir de manière uniforme les données de diagnostic et de traitement. Pour ce faire, ils utilisent les classifications CIM-10 (diagnostics) et CHOP (examens et traitements). Les dernières versions de ces classifications sont disponibles sur la plateforme I14Y. Elle permet aussi d’exporter les listes de codes aux formats JSON et CSV, ou via une API. Liens directs : [ICD-10](https://www.i14y.admin.ch/fr/catalog/concepts/08dd2e54-00fb-efc5-b7cd-14f5c7d2272d/description) et [CHOP](https://www.i14y.admin.ch/fr/catalog/concepts/08dd2e3a-d99e-d56f-9c1c-5a7c5733f1a6/description).

## La gouvernance des données mise en pratique
*04.03.2025*

{{< figure src="/handbook/img/news/lds_meetup.jpg" alt="Photo de la rencontre des Local Data Stewards" width="125px" class="float-left img-news-thumb" >}}

Alors que certaines unités administratives recourent exclusivement à la plateforme d’interopérabilité I14Y, d’autres utilisent un logiciel catalogue installé localement, qui sera relié à I14Y. Lors d’une rencontre organisée par l’équipe I14Y, les administrateurs locaux des données de plusieurs offices fédéraux et cantons ont expliqué comment ils procédaient pour inventorier et harmoniser leurs données. En plus de se demander comment mieux harmoniser les données, ils ont aussi abordé le sujet de la gouvernance des données, donnant même quelques conseils pratiques en matière d’utilisation de la plateforme I14Y. Le service d’interopérabilité remercie tous les participants pour cet échange riche et fructueux et se réjouit d’ores et déjà de la prochaine rencontre au début de l’été.


## Rétrospective de l'année 2024
*11.12.2024*

L’année 2024 touche à sa fin, l’occasion pour nous de dresser le bilan des mois écoulés. Nous sommes heureux d’avoir pu mettre en œuvre plusieurs projets ambitieux, comme la création d’un domaine commun dédiée à la saisie manuelle de métadonnées OGD sur I14Y. Ce nouveau domaine permet de publier, en un seul clic, des données sur les plateformes [opendata.swiss](https://opendata.swiss) et [I14y.ch](https://i14y.admin.ch).

En novembre dernier, nous avons modernisé l’interface utilisateur d’I14Y et rendu son utilisation plus intuitive. La séparation entre le «Catalogue» et les «Concepts», jusqu’ici imposée par des raisons techniques, a été supprimée sur le site Web. La nouvelle fonction de recherche globale permet d’effectuer des recherches dans toutes les métadonnées, quel que soit leur type. Les résultats sont ordonnés clairement dans des onglets (datasets, services publics, APIs et concepts). Les résultats des recherches effectuées sur les portails de métadonnées opendata.swiss et Geocat sont également affichés. De plus, avec la version implémentée en novembre, nous mettons à la disposition des organisations partenaires un endpoint sur l’API-Gateway, ce qui leur permet de publier des descriptions de datasets. Depuis cette année, toutes les nouveautés sont regroupées dans le [changelog](https://i14y-ch.github.io/handbook/fr/changelog/), journal des changements, du manuel.

L’équipe I14Y s’efforce de faire évoluer la plateforme en continu et reste en contact étroit avec les utilisateurs de celle-ci. Les besoins spécifiques de nos utilisateurs sont pris en compte lors de hackathons, de rencontres informelles avec les administrateurs locaux des données (local data stewards, en anglais) ou dans le cadre du projet Basel+. Les nouvelles exigences sont discutées et classées par ordre de priorité au sein du comité de pilotage nouvellement créé. Actuellement, le développement de la plateforme I14Y est tributaire des exigences de la loi fédérale sur l’utilisation des moyens électroniques pour l’exécution des tâches des autorités ([LMETA](https://www.fedlex.admin.ch/eli/cc/2023/682/fr)). Les solutions et les améliorations apportées profitent néanmoins à tous les utilisateurs.

Sans le renforcement de notre équipe, nous n’aurions pu franchir toutes ces étapes. Et ce n’est pas fini puisque, dans les mois à venir, nous pourrons compter sur le soutien de Lien Beroggi qui nous rejoindra le temps de son stage d’études.

## Ligne de développement d’I14Y en toute transparence
*11.12.2024*

{{< figure src="/handbook/img/news/roadmap.png" alt="Symbolbild Roadmap" width="125px" class="float-left img-news-thumb" >}}

Les nouveautés sur lesquelles travaillent les développeurs du logiciel peuvent être consultées dès maintenant sur la [roadmap](https://i14y-ch.github.io/handbook/fr/plateforme/roadmap/) accessible à tous. Cette feuille de route est mise à jour tous les trimestres, avec une description plus détaillée de la période imminente. Nous faisons preuve d’agilité et adaptons la feuille de route si nécessaire. Il est conseillé de la consulter régulièrement.

## Participer au développement d’I14Y
*11.12.2024*

Les propositions de nouvelles fonctionnalités peuvent être désormais déposées et discutées dans le Repository [Feature Request](https://github.com/I14Y-ch/feature-requests) sur GitHub. Le centre d’interopérabilité, le comité de gestion nationale des données et le comité de pilotage se chargent de classer les propositions par ordre de priorité. Nous attendons vos propositions avec intérêt!

## Nouvelles consoles publiques pour l’API I14Y

{{< figure src="/handbook/img/news/api.png" alt="Symbolbild API" width="125px" class="float-left img-news-thumb" >}}

I14Y propose désormais deux consoles OpenAPI (Swagger) qui facilitent l'accès des utilisateurs à l'API I14Y. Les consoles sont disponibles en permanence et documentent clairement les fonctions de l'API.
- [URL de la console](https://apiconsole.i14y.admin.ch/partner/v1/index.html) pour les métadonnées internes à l'organisation. Fonction: permet de gérer les métadonnées internes à l'organisation. Utilisation: authentification nécessaire. Les objets de métadonnées peuvent être créés et modifiés via cette API.
- [URL de la console](https://apiconsole.i14y.admin.ch/public/v1/index.html) pour les métadonnées publiques. Fonction: permet d'accéder en lecture seule aux métadonnées publiques. Utilisation: pas de login nécessaire, accès libre.

Les consoles sont continuellement complétées. De nouveaux points finaux seront ajoutés, de sorte qu'à l'avenir, la gestion des métadonnées sera entièrement possible via l'API.

## Notre équipe s’agrandit
*11.12.2024*

{{< figure src="/handbook/img/news/lien.jpg" alt="Portrait Lien Beroggi" width="250px" class="float-left img-news-thumb" caption="OFS" >}}

Lien Beroggi a décroché un stage d’une année au sein de notre équipe. Nul doute qu’elle saura nous faire profiter de ses connaissances universitaires fraîchement acquises. Son travail s’articulera autour de trois thèmes: le Web sémantique, le modèle RDF et les linked data. Trois questions pour faire mieux connaissance avec elle.

_Quelle place a occupé l’interopérabilité dans tes études?_
Mes études en informatique de gestion m’ont amené à aborder divers aspects de la gestion de l’information et de l’intégration des systèmes. L’échange de données entre différents systèmes et l’importance des normes pour une communication fluide en faisaient partie. J’ai également suivi des cours spécifiques sur les données semi-structurées. Cela m’a permis de me familiariser avec le Web sémantique et les linked data. Durant mon stage, je pourrai mettre ces connaissances en pratique dans un contexte réel où l’interopérabilité joue un rôle crucial.

_Qu’est-ce qui te passionne dans la plateforme I14Y?_
Je suis impatiente de commencer mon stage pour deux raisons: premièrement, je me réjouis de pouvoir travailler au sein d’une équipe dynamique sur une plateforme en constante évolution. Ce sera une expérience très enrichissante qui me permettra d’apprendre sur le terrain et de travailler avec mes collègues sur des solutions innovantes. Deuxièmement, le travail de la plateforme I14Y a des retombées dans la société: l’interopérabilité et l’accessibilité des données sont deux aspects essentiels pour améliorer et simplifier les services fournis aux citoyens, aux entreprises et aux institutions. Les linked data, en particulier, offrent un potentiel énorme pour relier des informations jusqu’ici isolées et les rendre plus accessibles et utilisables.

_Que souhaiterais-tu accomplir dans les prochains mois?_
Il me tient à cœur d’approfondir mes connaissances en matière de linked data et d’interopérabilité afin de pouvoir contribuer concrètement au développement de la plateforme I14Y. Mon objectif est d’aider à optimiser l’intégration des données, notamment pour faciliter l’échange d’informations avec d’autres plateformes. J’espère apporter ma pierre à l’édifice et souhaite que mon travail fasse évoluer l’efficience et la qualité des fonctionnalités offertes par I14Y.

## Nouveaux champs de saisie pour la protection des données 
*20.02.2024*

{{< figure src="/handbook/img/news/datenschutz.jpg" alt="Symbolbild Datenschutz" width="250px" class="float-left img-news-thumb" >}}

Un jeu de données décrit sur la plateforme I14Y contient-il des données personnelles? Et si c’est le cas, les données métier comprennent-elles des informations sensibles qui concernent par exemple l’opinion politique, l’état de santé ou l’orientation religieuse d’une personne? L’IOP I14Y offre désormais la possibilité de le documenter dans le champ «Confidentialité», tout comme de saisir le délai de conservation légal d’un jeu de données. Lorsque des données sont collectées une seule fois, la date exacte à laquelle elles doivent être supprimées est indiquée. S’il s’agit d’un jeu de données mis à jour régulièrement, il est précisé dans un champ de texte libre à quel intervalle le propriétaire des données procède à la suppression des données, par exemple «cinq ans à compter de la fin de l’année civile concernée». 

Les nouveaux champs «Confidentialité» et «Délai de conservation» ne sont pas prévus dans la norme DCAT. Ils sont proposés en plus, leur saisie n’est pas obligatoire. Pour un aperçu détaillé de tous les champs de saisie proposé par la plateforme d’interopérabilité I14Y, [cliquez ici](https://i14y-ch.github.io/handbook/de/anhang/eingabefelder/) (Page actuelle disponible en allemand).

## Utilisateurs externes à la Confédération mieux intégrés
*20.02.2024*

Avec la release du 4 décembre 2023, la plateforme I14Y est connectée à [eIAM](https://www.eiam.swiss/)  (accessible via CH-LOGIN ou par IdP) pour décrire le profil de ses utilisateurs en plus de l'AdminDir (registre des employés de la Confédération). Cette nouvelle possibilité permet aux utilisateurs externes à la Confédération d'être inscrits comme responsables de concepts et de s'engager dans la maintenance active des métadonnées. Cette fonctionnalité améliore la collaboration entre les utilisateurs internes et externes à la Confédération sur la plateforme d'interopérabilité et uniformise les traitements entre les différentes manières de se connecter.

## Renforcer la collaboration avec les cantons et les communes
*20.02.2024*

La plateforme I14Y est en passe de devenir le catalogue national de métadonnées de la Suisse. De plus en plus de cantons, et même une commune, souhaitent utiliser la plateforme pour inventorier leurs bases de données. Le canton de Bâle-Ville a déposé le Projekt Basel+ auprès de l’Administration numérique suisse [Digitalen Verwaltung Schweiz](https://www.digitale-verwaltung-schweiz.ch/), qui enregistre les besoins et les exigences des cantons et des communes en matière d’I14Y-IOP. La collaboration avec les cantons et les communes permet d’identifier les besoins communs en rapport avec un catalogue national de données. À l’initiative de ce projet, le canton de Bâle-Ville a été rejoint par les cantons d’Argovie, de Bâle-Campagne, de Thurgovie, de Berne et de Zurich ainsi que la ville de Berne. 

## Changelog – notes de mise à jour 
*20.02.2024*

L’IOP I14Y fait l’objet d’un développement continu. Chaque version apporte de nouvelles fonctionnalités et corrige des erreurs. Le manuel I14Y consigne l’essentiel des modifications, des améliorations et des corrections de bugs [Changelog im I14Y-Handbuch](https://i14y-ch.github.io/handbook/de/changelog/) .

## Le service d’interopérabilité (IOS) au GovTech Hackathon 2024
*20.02.2024*

{{< figure src="https://opendata.ch/wordpress/files/2022/12/GoVTech_Hackthon_NL_2048x1150-1024x575.jpg" alt="Logo GovTech-Hackathon" width="250px" class="float-left img-news-thumb" >}}

La deuxième édition du [GovTech Hackathon](https://opendata.ch/events/govtech-hackathon-2024) aura lieu les 14 et 15 mars 2024 à Zollikofen. Cet événement réunit des développeurs, des experts et d’autres personnes issus de l’administration, de l’économie et de la société civile pour travailler ensemble à la résolution de questions concrètes. Les participants chercheront des solutions qui rendront les services publics numériques utilisables, interopérables et durables. L’équipe I14Y a prévu deux challenges. Les résultats du Hackathon seront publiés sur le site [OpenData.ch-Website publiziert](https://opendata.ch/projects/). 

## Un accès sécurisé pour tous - en un seul clic
*06.12.2023*

{{< figure src="/handbook/img/news/kachel_bern.png" alt="eIAM-Kachel für den Kanton Bern" width="250px" class="float-left img-padding-right" >}}

Le canton de Berne souhaite utiliser l’I14Y-IOP pour constituer un inventaire interne de données et partager des listes de codes au sein du canton. La condition préalable est que l’ensemble du personnel du canton puisse accéder de manière simple au domaine du canton sur la plateforme. L’objectif est également d’éviter toute charge de travail administratif inutile pour le canton. L’idée est que les nouveaux collaborateurs et les nouvelles collaboratrices soient enregistrés automatiquement. Même chose côté départs: les comptes des personnes qui quittent le canton doivent être supprimés automatiquement. 

L’équipe I14Y a implémenté une solution efficace en étroite collaboration avec le fournisseur de logiciels Bedag, l’Office d’informatique et d’organisation du canton de Berne et l’Office fédéral de l’informatique et de la télécommunication (OFIT): le fournisseur d’identité cantonal (IdP) est dorénavant relié au système d’accès et d’autorisation de l’administration fédérale (eIAM) par une interface électronique. Le canton peut ainsi autoriser ou bloquer l’accès à la plateforme directement à partir de son propre système d’administration des utilisateurs. Les utilisateurs se connectent à l’I14Y-IOP en cliquant sur la tuile ad hoc. 

Cette solution pourrait aussi être appliquée par les autres cantons qui souhaitent permettre à leur personnel administratif d’accéder à la plateforme d’interopérabilité. À l’avenir, elle pourrait également servir à faire le lien entre les infrastructures informatiques cantonales et d’autres plates-formes fédérales. 

## L’avantage des concepts
*06.12.2023*

{{< figure src="/handbook/img/news/konzepte.png" alt="I14Y-Symbol für Konzepte" width="250px" class="float-left img-news-thumb" >}}

Sur la plateforme I14Y-IOP, un concept décrit un élément de données de manière exhaustive et univoque. Il peut se présenter sous la forme d’un nombre, d’une chaîne de caractères ou d’une liste de codes avec des valeurs prédéfinies. Depuis le printemps dernier, les utilisateurs de l’I14Y-IOP peuvent saisir des concepts sur la plateforme. Ils sont d’ailleurs de plus en plus nombreux à le faire. Quelque 170 concepts harmonisés ont été publiés jusqu’ici, le plus souvent sous la forme de listes de codes. L’époque où chaque organisation devait créer ses propres listes de codes est donc bientôt révolue! Désormais, les listes de codes gérées par un service sont accessibles aisément via une interface électronique. 

## Consécration pour l’I14Y-IOP
*06.12.2023*

{{< figure src="/handbook/img/news/egov-pokale.jpg" alt="Pokale des eGovernment-Wettbewerbs" width="250px" class="float-left img-news-thumb" >}}

L’I14Y-IOP de l’OFS s’est hissée à la seconde place du 22e concours international eGovernment dans la catégorie «Meilleur projet de numérisation». Environ 80 projets de modernisation et de numérisation de l’administration ont été soumis pour l’édition 2023 par des autorités et des organisations publiques d’Allemagne, d’Autriche et de Suisse. Le prix a été remis à Berlin à Mathias Born et à Max Zurkinden, du centre d’interopérabilité. Toute l’équipe I14Y-IOP s’en réjouit. 

## La vidéo sur l'harmonisation des données en Suisse
*18.04.2023*

Comment fonctionnent le principe once-only et la plateforme d’interopérabilité I14Y? Comment les deux sont-ils liés? La vidéo de trois minutes vous explique les tenants et les aboutissants de manière simple et compréhensible.

{{< youtube_custom U0CpW1bNIdU >}}

## Le manuel de la plateforme est en ligne 
*07.08.2023*

{{< figure src="/handbook/img/news/handbuch.png" alt="I14Y-Symbol Handbuch" width="250px" class="float-left img-news-thumb" >}}

Comment la plateforme d’interopérabilité I14Y a-t-elle hérité de son nom énigmatique? Qui peut accéder à quelles métadonnées? Comment remplir correctement un champ donné? Vous trouvez les réponses à ces questions et à bien d’autres encore dans le manuel I14Y qui vient d’être publié. La première partie de cette publication en ligne explique comment la plateforme contribue à l’harmonisation des données administratives. La deuxième partie décrit pas à pas les différents processus. Le manuel est accessible à l’adresse [handbook.i14y.admin.ch](https://handbook.i14y.admin.ch). Il sera complété en continu et votre contribution à son élaboration (textes ou propositions) sera la bienvenue. La manière de procéder est décrite dans le manuel. 

## Nouveau sur l’IOP I14Y: les concepts
*07.08.2023*

{{< figure src="/handbook/img/news/konzepte.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Il y a une nouvelle tuile sur l’IOP I14Y: [I14Y-Konzepte](https://www.i14y.admin.ch/de/concepts). Cette rubrique présente notamment des listes de codes, avec leur description détaillée. Les informations contenues dans un élément de données y sont décrites de manière univoque et complète. Un tel élément peut être un chiffre, une chaîne de caractères, une date ou une liste de codes. Une fonction de recherche vous permet de retrouver rapidement ce que vous cherchez parmi les concepts dont le nombre ne cesse de croître. Dans la mesure du possible, utilisez des concepts existants dans vos fichiers. 

## Agent conversationnel I14Y
*07.08.2023*

{{< figure src="/handbook/img/news/chatbot.png" alt="I14Y-Symbol für den Chatbot" width="250px" class="float-left img-news-thumb" >}}

Notre agent conversationnel [I14Y-Chatbot](https://www.i14y.admin.ch/de/labs/chatbot) répond aux questions sur l’harmonisation des données en général et sur la plateforme d’interopérabilité en particulier. L’intelligence artificielle générative utilise le manuel I14Y comme principale source d’information. L’agent conversationnel pourra à l’avenir répondre également à des questions simples concernant les métadonnées publiées sur l’IOP I14Y. Dans un premier temps, il a été entraîné avec des contenus en allemand, mais peut néanmoins fournir des renseignements dans d’autres langues. 

Cet agent résulte d’une idée lancée lors d’une sortie d’équipe. Il n’est pas impossible qu’il «hallucine» une fois ou l’autre, c’est-à-dire qu’il fournisse des informations erronées. Vérifiez donc soigneusement ses réponses.

## L’IOP I14Y se trouve en finale de la 22e édition du concours «eGovernment-Wettbewerb»
*07.08.2023*

Cette année, dix-huit équipes de l’administration se sont qualifiées pour la finale avec des projets de numérisation et de transformation de l’administration publique. Le jury a déjà fait son choix, mais il reste possible de voter pour le prix du public.
Participez à ce vote en ligne et aidez ainsi le projet IOP I14Y à remporter le prix du public [Online-Voting](https://www.egovernment-wettbewerb.de/online-voting/online-voting.html)!

## Accès aisé à la plateforme interopérabilité I14Y via eIAM 
*16.02.2023*

{{< figure src="/handbook/img/news/02_eiam.jpg" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Grâce à eIAM, la plateforme interopérabilité I14Y (I14Y-IOP) est maintenant encore plus facilement accessible pour les utilisateurs des communes, des cantons, des institutions et de la Confédération. Une fois connectés à l’interface d’administration, ils peuvent saisir et traiter l’offre de données de leur organisation.
eIAM est le système central d’accès et d’autorisation de l’administration fédérale pour les applications web et les applications mobiles natives. Tous les utilisateurs disposant d’un compte eIAM ou CH-Login peuvent désormais se connecter en toute simplicité à la I14Y-IOP. Cette connexion permet de réaliser des économies tout en renforçant la sécurité.

Les utilisateurs issus de l’administration fédérale peuvent bien sûr continuer à se connecter avec leur Smartcard.

## Les données de références des bâtiments et des logements sont désormais accessibles sur la I14Y-IOP 
*16.02.2023*

{{< figure src="/handbook/img/news/03_ewg.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Décrites dans le catalogue de métadonnées I14Y, les données de référence des bâtiments et des logements sont maintenant à la disposition des utilisateurs. Les descriptions détaillées de la structure des données dressent la liste exhaustive des données disponibles dans le registre et contribuent à leur transparence tout en favorisant la réutilisation des standards officiels.
L’API utilisée dans la mise à disposition des données (MADD) du registre est disponible dans le répertoire des API d’I14Y. 
Souhaitez-vous publier vos métadonnées ou vos API sur la plateforme d’interopérabilité I14Y? N’hésitez pas à prendre contact avec nous en écrivant à i14y@bfs.admin.ch.

## L'OFS participe au hackathon GovTech
*16.02.2023*

{{< figure src="/handbook/img/news/01-i14y.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Le secteur TNI de la Chancellerie fédérale organise le hackathon GovTech les 23 et 24 mars 2023 à Zollikofen. Ce sera l’occasion de rencontrer des développeurs, des experts et d’autres acteurs issus de l’administration, de l’économie et de la société civile et de travailler ensemble sur des défis concrets afin de rendre les services publics numériques aussi conviviaux, interopérables et durables que possible.  






