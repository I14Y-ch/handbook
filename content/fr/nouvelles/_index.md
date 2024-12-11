---
title: News
slug: nouvelles
translationKey: news
weight: 90
type: docs
keywords: [I14Y, I14Y-Interoperabilitätsplattform, IOP, nouvelles, News]
---

{{<alert title="Tenez-vous informés!" color="success" >}}

Vous souhaitez être informés des nouvelles fonctions et des offres de la plateforme d’interopérabilité I14Y? Abonnez-vous aux NewsMails. Un courriel résumant les derniers développements de la plateforme vous sera envoyé trois ou quatre fois par an. Pour vous abonner, il vous suffit de vous rendre sur la page du [service d’abonnement de l’Office fédéral de la statistique](https://www.bfs.admin.ch/bfs/fr/home/services/contact/abonnement-newsmail.html) et de cocher l’option «I14Y Plateforme d’interopérabilité». 

{{</alert>}}

## Rétrospective de l'année 2024
*11.12.2024*

L’année 2024 touche à sa fin, l’occasion pour nous de dresser le bilan des mois écoulés. Nous sommes heureux d’avoir pu mettre en œuvre plusieurs projets ambitieux, comme la création d’un domaine commun dédiée à la saisie manuelle de métadonnées OGD sur I14Y. Ce nouveau domaine permet de publier, en un seul clic, des données sur les plateformes [opendata.swiss]](https://opendata.swiss) et [I14y.ch](https://i14y.admin.ch).

En novembre dernier, nous avons modernisé l’interface utilisateur d’I14Y et rendu son utilisation plus intuitive. La séparation entre le «Catalogue» et les «Concepts», jusqu’ici imposée par des raisons techniques, a été supprimée sur le site Web. La nouvelle fonction de recherche globale permet d’effectuer des recherches dans toutes les métadonnées, quel que soit leur type. Les résultats sont ordonnés clairement dans des onglets (datasets, services publics, APIs et concepts). Les résultats des recherches effectuées sur les portails de métadonnées Opendata.swiss et Geocat sont également affichés. De plus, avec la version implémentée en novembre, nous mettons à la disposition des organisations partenaires un endpoint sur l’API-Gateway, ce qui leur permet de publier des descriptions de datasets. Depuis cette année, toutes les nouveautés sont regroupées dans le [changelog](https://i14y-ch.github.io/handbook/fr/changelog/), journal des changements, du manuel.

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

L’IOP I14Y fait l’objet d’un développement continu. Chaque version apporte de nouvelles fonctionnalités et corrige des erreurs. Le manuel I14Y consigne l’essentiel des modifications, des améliorations et des corrections de bugs [Changelog im I14Y-Handbuch](https://i14y-ch.github.io/handbook/de/8_changelog/) .

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






