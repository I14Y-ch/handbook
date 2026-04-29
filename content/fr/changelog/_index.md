---
title: Changelog
slug: changelog
translationKey: changelog
weight: 80
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
---

La plateforme d'interopérabilité I14Y est en développement continu. De nouvelles fonctionnalités sont ajoutées à chaque version, et des erreurs sont également corrigées. Les changements les plus importants sont brièvement documentés ci-dessous. Pour des informations détaillées sur l'évolution de la plateforme, veuillez contacter l'[équipe I14Y](mailto:i14y@bfs.admin.ch).

## Version du 25 mars 2026

**Tables de correspondance (Mapping):** Avec cette version, des tables de correspondance sont introduites sur la plateforme d'interopérabilité. Elles permettent de documenter les similitudes et les différences entre les valeurs de deux listes de codes. Les tables de correspondance sont des objets à part entière sur I14Y : elles sont trouvables via la recherche et les filtres, consultables aussi bien sur la plateforme publique que dans l'interface d'administration. Via l'interface d'administration ou l'API, elles peuvent également être créées et éditées ; une fonction d'import est également disponible.

**Liens «Conforme à» cliquables:** Pour chaque élément de données, il est possible de documenter s'il se base sur un concept fondamental. À cet effet, un lien est enregistré dans la structure SHACL dans le champ «Conforme à». Jusqu'à présent, ces IRIs n'étaient qu'affichés dans le panneau latéral ; ils sont désormais cliquables.

**Versions triées:** Pour les concepts versionnés, un tableau listant les versions disponibles du concept est affiché. Les entrées sont désormais présentées en ordre décroissant, ce qui simplifie la navigation dans l'historique du concept.

**Diverses corrections de bugs**

## Version du 25 février 2026

- **IRIs pour tous les objets:** Lors de la dernière version, des _International Resource Identifier (IRIs)_ ont été introduits pour les concepts. Il s’agit d’adresses stables et uniques qui permettent de créer des liens fiables vers des contenus. Avec cette nouvelle version, tous les autres objets d’I14Y obtiennent également leur propre IRI. Cela concerne notamment les codes des listes de codes, les jeux de données, les services de données (Data Services) et les prestations publiques (Public Services). Les IRIs sont affichés sur les pages de détail correspondantes dans l’interface utilisateur. Pour les codes publiés sur la plate‑forme LINDAS, les IRIs renvoient aux informations disponibles sur LINDAS. Pour les jeux de données, les services de données et les prestations publiques, aucun contenu n’est disponible directement sur LINDAS, mais ils disposent tout de même d’une adresse stable et lisible par machine. Dans les exports RDF techniques, par exemple pour opendata.swiss, ces nouveaux IRIs remplacent les anciennes URL. Pour les utilisatrices et utilisateurs, peu de choses changent dans l’utilisation quotidienne, mais les références vers les contenus d’I14Y deviennent plus fiables.

- **Filtrer les jeux de données disposant d’une structure :** La recherche dans le catalogue propose un nouveau filtre permettant de limiter les résultats aux jeux de données pour lesquels une structure est enregistrée. Il est ainsi plus facile d’identifier rapidement les jeux de données pouvant servir de base à des travaux d’harmonisation.

- **Première étape vers les tables de correspondance entre listes de codes:** Pour mieux mettre en évidence les similitudes et les différences entre deux listes de codes, I14Y introduit des tables de correspondance (mappings). Dans un premier temps, ces tables sont visibles sous forme de pages de détail dans la vue de saisie d’I14Y. Elles peuvent y être consultées, mais ne sont pas encore modifiables. Elles ne sont pas non plus accessibles via la recherche habituelle du catalogue. Cela permet de recueillir des premiers retours sur la manière de représenter ces correspondances avant d’étendre la fonction et de l’intégrer davantage dans l’interface.

- **Affichage de l’utilisation des API dans le tableau de bord:** I14Y met des données à disposition via une API publique et une API partenaire. Le tableau de bord I14Y affiche désormais des indicateurs simples sur l’utilisation de ces interfaces, par exemple le nombre de requêtes par jour pour certains agents utilisateurs (user agents) sélectionnés. Les organisations obtiennent ainsi une meilleure vue d’ensemble de l’utilisation des API et peuvent réagir plus facilement en cas d’anomalies.

- **Règles plus strictes pour les identifiants:** Tous les objets sur I14Y, par exemple les jeux de données, les listes de codes ou les services de données, possèdent un identifiant. Celui‑ci est utilisé notamment dans les IRIs et dans les interfaces techniques. Afin que ces identifiants fonctionnent de manière fiable avec le nouveau résolveur d’IRIs, les caractères autorisés ont été restreints. Certains caractères spéciaux ne sont désormais plus admis. Seules les lettres (A–Z, a–z), les chiffres (0–9) ainsi que les caractères point (.), trait de soulignement (_), tilde (~), arobase (@) et tiret (-) sont autorisés. Techniquement, cela correspond au motif `^[A-Za-z0-9._~@-]+$`. Pour les utilisatrices et utilisateurs, cela signifie que des messages d’erreur peuvent apparaître lors de la saisie ou de la modification d’identifiants si des caractères spéciaux non autorisés sont utilisés. Dans ces cas, le système signale le problème par un message approprié.

- **Améliorations des résultats de recherche:** La fonction de recherche d’I14Y a été encore affinée afin que les contenus importants soient plus faciles à trouver. Les entrées marquées comme standard ou standard préféré sont désormais mieux pondérées dans le tri des résultats et apparaissent donc plus en évidence. Il est en outre possible de rechercher explicitement par détenteur de données (_data owner_). Les jeux de données et services peuvent ainsi être retrouvés plus facilement.

## Version du 28 janvier 2026

- **Permaliens pour les concepts :** un identifiant international de ressource (IRI) s'affiche désormais sur les pages détaillées des concepts publiés. Cet identifiant stable et unique, également appelé permalien, utilise la section Linked Data de la Confédération. Le permalien se compose de l'identifiant interne et de la version du concept : `https://register.ld.admin.ch/i14y/concept/{concept-identifier}/version/{version}`. Un IRI n'est généré qu'une fois qu'un concept est publié ; les concepts internes ne disposent pas d'un tel permalien.
- **Extension de l'exportation RDF :** les descriptions des ensembles de données sont également disponibles au format RDF via l'interface électronique (API). Cela permet la lecture automatisée du contenu d'un catalogue (ce que l'on appelle le _harvesting_). L'exportation RDF a désormais été complétée par une information supplémentaire sur le type de distribution.
– **Information supplémentaire dans la vue graphique :** la structure d'un enregistrement est représentée graphiquement sur I14Y. Cette représentation affiche désormais également les unités de mesure des attributs, dans la mesure où les informations correspondantes ont été enregistrées.
- **Filtre amélioré :** les options de sélection dans les filtres sont mieux organisées. Certaines sont classées selon des critères techniques (par exemple, le filtre de statut), d'autres par ordre alphabétique (par exemple, le filtre par situation de vie).
- **Corrections d'erreurs :** plusieurs erreurs ont été corrigées. Entre autres, les grandes listes de codes peuvent à nouveau être téléchargées plus rapidement.

## Version du 7 janvier 2026

- **Mots-clés liés à des concepts prédéfinis**: les mots-clés peuvent désormais être reliés à des désignations univoques provenant de listes de termes contrôlées. Techniquement, cela se fait via un champ de texte supplémentaire (`uri`). _Attention: la structure des données renvoyées par l’API publique et l’API partenaire s’en trouve modifiée._ Cette modification a été approuvée par le comité de pilotage.
- **Meilleure présentation des valeurs autorisées**: dans les structures SHACL de données, il est possible de définir les valeurs autorisées d’un champ. Dès que le champ correspondant est sélectionné dans la visualisation, les valeurs autorisées sont désormais aussi affichées dans la barre latérale. Il est ainsi plus facile de voir quelles valeurs sont admises pour chaque champ.
- **Recherche de catalogue améliorée**: la recherche dans le catalogue a été encore étendue. Elle ne fait plus de distinction entre majuscules et minuscules. Elle prend également en compte les champs supplémentaires personne de contact et suppléance de la personne de contact, point de contact ainsi que les identifiants des objets.
- **Améliorations internes et corrections de bugs**

## Version du 27 novembre 2025

Cette version marque un changement d'infrastructure important : la plateforme d'interopérabilité I14Y est désormais exploitée dans le cloud public (Azure, obtenu via l'Office fédéral de l'informatique et de la télécommunication [OFIT]). En outre, le code est désormais géré sur GitHub. En raison de cette nouvelle infrastructure, divers détails techniques du code d'I14Y ont dû être adaptés.

Fonctionnalités supplémentaires :
- **Fonction de recherche étendue :** la Partner API et l'API publique proposent désormais un point de terminaison permettant de rechercher des entrées de listes de codes.
- **Gestion des entrées de catalogue :** de nouveaux points de terminaison dans la Partner API et l'API publique permettent de récupérer des entrées provenant de catalogues DCAT.
- **Exportation de catalogue améliorée :** le point de terminaison GET pour l'exportation du catalogue a été remanié. Le format souhaité (RDF ou TTL) peut désormais être demandé via un paramètre.
- **Corrections de bugs :** diverses erreurs ont été corrigées afin d'améliorer la stabilité et la convivialité.

## Version du 22 octobre 2025
- **Masques de saisie améliorés:** le bouton Enregistrer est désormais actif par défaut. Jusqu’à présent, il ne s’activait qu’après des modifications des métadonnées. Un clic sur le bouton permet d’identifier les métadonnées incomplètes: les champs concernés sont encadrés en rouge.
- **Page des organisations plus claire:** les organisations qui n’ont pas encore publié de métadonnées ne sont plus affichées sur la page des organisations (https://www.i14y.admin.ch/fr/organisations).
- **Saisie simplifiée des prestations des autorités:** jusqu’ici, deux étapes étaient généralement nécessaires. D’abord, la description de base de la prestation était saisie, puis le lien ou le canal sur une deuxième page du formulaire. Désormais, la description de base et les liens peuvent être saisis au moyen d’un seul formulaire, ce qui permet une saisie plus rapide et plus efficace.
- **Nouvelles possibilités de filtrage:** grâce au nouveau filtre Type de concept, il est désormais possible de filtrer spécifiquement les concepts selon certains types. Il est par exemple possible de restreindre une recherche à toutes les listes de codes.
- **Améliorations internes et corrections**

## Version du 24 septembre 2025
- Une description technique détaillée de la structure des données peut être enregistrée pour chaque description de jeu de données sur I14Y. Les structures enregistrées peuvent désormais être téléchargées depuis le site public dans plusieurs formats (TTL, RDF, JSON-LD).
- L’ensemble des métadonnées d’un jeu de données peut désormais être exporté depuis le site public via un nouveau bouton.
- Les adresses web insérées dans les descriptions sont automatiquement affichées comme liens cliquables.
- Lors de la récupération d’informations via l’API, l’intégralité des résultats est désormais renvoyée si aucun nombre d’éléments par page (pageSize) n’est spécifié.
- Le pied de page du site contient désormais un lien direct vers la boîte à outils I14Y proposant des outils utiles pour l’import des métadonnées.
- L’index de recherche est désormais construit indépendamment du démarrage de l’application. La plateforme devient ainsi disponible plus rapidement après un redémarrage et la recherche est plus stable.
- De nouveaux points de terminaison internes de monitoring (health checks) permettent de détecter plus rapidement les problèmes techniques.
- Divers bogues ont été corrigés.

## Version du 10 septembre 2025
- Deux nouveaux champs de date ont été introduits pour les interfaces électroniques (API) : la date de publication et la date de dernière modification. Ces informations facilitent le suivi des mises à jour.
- Lors de la création de descriptions de prestations publiques et d'interfaces électroniques (API), il est désormais possible d'indiquer la personne responsable et sa suppléante ou son suppléant. Cela améliore les possibilités de contact et clarifie les responsabilités.
- Les entrées des listes de codes disposent désormais des champs « Valide à partir de » et « Valide jusqu'à ». Cela permet de définir clairement la validité temporelle des entrées, ce qui est particulièrement utile pour les classifications qui évoluent dans le temps.
- Comme pour les jeux de données, l'indication d'un identifiant pour les interfaces électroniques (API) est désormais facultative. Si aucun identifiant n'est saisi, il est généré automatiquement.
- Les interfaces électroniques (API) peuvent désormais être supprimées directement via l'interface utilisateur. Cela simplifie la gestion des descriptions d'API qui ne sont plus nécessaires.
- Diverses corrections de bugs ont été apportées afin d'améliorer la stabilité et la convivialité.

## Version du 30 juillet 2025
- L'indication d'un identifiant pour les jeux de données est désormais facultative. Si aucun identifiant n'est saisi, il est généré automatiquement, que les métadonnées soient saisies via l'interface utilisateur ou via l'interface électronique.
- L'affichage et le fonctionnement de la page des organisations ont été améliorés.
- Correction de bug : dans la version précédente, les prestations publiques dont le canal contenait un champ `ownedBy` provoquaient un message d'erreur. Ce problème a été résolu.
- Correction de bug : dans la version précédente, les prestations publiques auxquelles un canal était attribué ne pouvaient pas être modifiées. Cette erreur a été corrigée.
- Correction de bug : dans la version précédente, une erreur survenait lors de la recherche dans les entrées des listes de codes. La fonction de recherche a été corrigée et fonctionne désormais comme prévu.

## Version du 23 juillet 2025
- Quelles organisations utilisent la plateforme d'interopérabilité I14Y ? Une nouvelle page répertorie toutes les organisations qui publient des métadonnées sur I14Y. Elle indique également le nombre de descriptions de jeux de données, d'API et de prestations publiques publiées par chaque organisation, ainsi que le nombre de concepts publiés.
- Depuis le début de l'été, des structures de données plus complexes peuvent être documentées sur I14Y. Jusqu'à présent, ces informations n'étaient visibles que dans la zone interne. La nouvelle version introduit une représentation graphique des structures de données enregistrées sur le site public.
- Les prestations publiques peuvent désormais être consultées individuellement via l'interface électronique (API). Un autre point de terminaison permet également aux organisations partenaires d'I14Y de publier des prestations publiques sur I14Y de manière entièrement ou partiellement automatisée.
- Corrections de bugs.

## Version du 2 juillet 2025
- I14Y utilise [Oblique](https://oblique.bit.admin.ch/), une collection de composants graphiques standardisés de l'administration fédérale, pour son interface utilisateur graphique. Avec cette version, nous passons à Oblique 13. Cela modernise légèrement l'apparence graphique du site I14Y.
- Avec les dernières versions, I14Y a introduit une nouvelle technologie pour décrire les structures de données (voir Structure Beta). Les structures téléversées peuvent désormais être affichées graphiquement dans la zone interne de la plateforme.
- Les listes de codes publiées peuvent désormais être recherchées sur le site public.
- Grâce à de nouveaux points de terminaison, les descriptions d'API peuvent être obtenues et écrites automatiquement.
- Le champ de l'adresse e-mail du point de contact doit désormais être renseigné. Cela répond aux exigences de la prochaine version de la norme DCAT-AP CH ([version 3](https://www.dcat-ap.ch/releases/3.0_workingdraft/dcat-ap-ch_3.0_workingdraft.html)). Les entrées existantes sur I14Y ne peuvent plus être enregistrées tant que ce champ n'a pas été rempli.
- Corrections de bugs.

## Version du 28 mai 2025
- Un nouveau bouton de téléchargement permet désormais de télécharger les descriptions de jeux de données depuis la zone interne au format JSON. Cela simplifie l'exportation des métadonnées.
- Les descriptions de jeux de données peuvent désormais être importées à partir d'un fichier. L'option d'importation est disponible en cliquant sur le bouton « Import ».
- Depuis la dernière version, il est possible de téléverser des structures de données aux formats RDF, TTL ou JSON-LD. Ces structures peuvent désormais être affichées graphiquement.
- L'[API I14Y](https://apiconsole.i14y.admin.ch/) propose de nouveaux points de terminaison pour l'importation et l'exportation d'une structure aux formats RDF, TTL et JSON-LD.
- De nouveaux champs d'information ont été introduits pour les organisations. Ils permettent une description plus détaillée des organisations enregistrées dans I14Y.
- Certaines traductions ont été mises à jour.
- Le système d'indexation de la recherche a été amélioré. Les requêtes fournissent désormais des résultats plus précis.

## Version du 7 mai 2025
- La plateforme d'interopérabilité I14Y stockait jusqu'à présent certains objets dans une base de données de l'OFS. Avec la version actuelle, les systèmes sont séparés. Toutes les métadonnées sont désormais stockées dans la base de données I14Y. Les fonctions existantes ont été adaptées et les données de l'ancien système ont été migrées. Le choix de ne pas utiliser une architecture microservices dans ce domaine rend le système plus rapide, notamment lors des recherches sur plusieurs catégories d'objets.
- L'apparence des pages affichant les descriptions d'un jeu de données, d'une interface électronique, d'une prestation publique ou d'un concept a été améliorée : un sommaire est désormais disponible sur le côté gauche pour permettre une navigation rapide dans les descriptions.
- Quelles données sont publiques, lesquelles sont consultables sous certaines conditions et lesquelles sont confidentielles ? Les nouvelles icônes sur les pages d'aperçu indiquent désormais le statut de chaque entrée.
- Grâce à un nouveau point de terminaison dans l'API publique et dans l'API destinée aux partenaires d'I14Y, des listes de concepts filtrées peuvent être demandées. Le filtrage peut par exemple se faire selon l'éditeur ou le statut.
- Un nouveau point de terminaison dans l'API destinée aux partenaires d'I14Y permet de mettre à jour automatiquement des concepts existants.
- Dans la description d'une interface électronique, un lien peut désormais être établi vers le jeu de données auquel l'interface accède.
- La saisie des structures de données est actuellement en cours de refonte complète. Un nouvel onglet est introduit avec cette version. Il permet de téléverser et de télécharger des informations sur la structure de données aux formats RDF et TTL. Les nouvelles fonctions sont encore en phase de test. L'onglet précédent reste disponible. En revanche, il n'est plus possible de créer des structures de manière conventionnelle. La prochaine version améliorera encore la saisie et la visualisation des structures.
- Nombreuses corrections de bugs.

## Version du 5 mars 2025
- L'[API I14Y](https://apiconsole.i14y.admin.ch/) propose de nouveaux points de terminaison dans le domaine des descriptions de jeux de données. Les métadonnées des jeux de données peuvent être lues (GET). De nouvelles descriptions peuvent être créées (POST). Les descriptions existantes peuvent être modifiées et publiées (PUT) ou supprimées si nécessaire (DELETE).
- Lors de l'enregistrement d'une prestation publique, il est désormais possible de sélectionner le périmètre pour lequel la prestation est proposée. Outre l'ensemble de la Suisse, tous les cantons, districts et communes sont disponibles dans le champ de sélection. Ces informations sont également fournies lors de l'exportation via l'API. La base utilisée est la liste de codes [cantons, districts et communes](https://www.i14y.admin.ch/de/catalog/concepts/08dc23f0-d04d-2d2f-a9f5-9cea80695acf/description).
- Lors de la création d'un espace de travail interne pour un office ou une autre organisation, le service d'interopérabilité peut désormais enregistrer le numéro de l'organisation issu du registre des entreprises, des informations sur la [forme juridique](https://www.i14y.admin.ch/en/catalog/concepts/08dad8ff-f18a-560b-bfa6-20767f2afb17/description) ainsi que sur le niveau fédéral de l'organisation. Les informations sur le périmètre dans lequel une organisation opère sont fournies lors de l'obtention d'une description de prestation publique via l'API.
- La page d'accueil et la page d'aperçu de la zone interne ont été légèrement révisées sur le fond : les textes d'introduction ont été adaptés. En outre, un lien vers la console API d'I14Y a été ajouté dans le pied de page. La vidéo sur l'harmonisation des données, auparavant placée sur la page d'accueil, a été retirée ; elle reste disponible dans la [rubrique actualités](https://i14y-ch.github.io/handbook/fr/news/) et sur [YouTube](https://youtu.be/mqpaAeJVkME?si=1RSv0xYFTudEDjSx).
- Une erreur dans le champ de l'éditeur a été corrigée : jusqu'à présent, le nom de l'organisation éditrice devait souvent être resélectionné dès qu'une entrée avait été modifiée. Ce n'est plus nécessaire.
- Une erreur dans le champ du détenteur des données a été corrigée : auparavant, il n'était pas possible de supprimer un nom lors de la modification d'une entrée. C'est désormais à nouveau possible.
- Nombreuses corrections de bugs.

## Version du 15 janvier 2025
- La [Partner API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) permet désormais de récupérer et de publier des descriptions de jeux de données (GET et POST).
- La [Partner API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) permet désormais de définir le statut et le niveau de publication (PUT).
- Améliorations mineures de la recherche.
- Nombreuses corrections de bugs.

## Grande version du 13 novembre

Avec la grande version du 13 novembre, l'interface utilisateur de I14Y devient plus simple et son utilisation plus intuitive: la séparation actuelle entre le catalogue et les concepts au niveau de l'interface graphique est supprimée. Il y a désormais une recherche globale. En outre, les éléments graphiques sont modernisés. Les nouveautés en détail:

### Changements sur le site web public
- Le design est aligné sur la nouvelle version du système de design Oblique de l'administration fédérale. L'apparence est ainsi modernisée.
- La séparation graphique entre le catalogue et les concepts est supprimée ; les concepts de données sont désormais associés au catalogue. Les tuiles sont supprimées. Le menu comprend uniquement les points Page d'accueil, Catalogue, News et Manuel.
- Un champ de recherche bien en vue est désormais disponible, ce qui permet d'effectuer des recherches dans les métadonnées, quel que soit leur type. Les résultats sont présentés dans des onglets (par exemple, datasets, services publics, APIs, concepts). Les résultats des portails de métadonnées d'opendata.swiss et de Geocat sont également affichés.Le pied de page est complété par un lien vers le dépôt [GitHub d'I14Y](https://github.com/I14Y-ch/) (avec des scripts et des tutoriels). Un lien vers le compte [LinkedIn d'I14Y](https://www.linkedin.com/showcase/i14y/) est également ajouté.

### Changements dans la section interne de l'organisation du site web
- Les concepts d'éléments de données sont désormais pris en compte dans "Mes tâches", "Propositions en suspens" et "Données de mon organisation".
- Les concepts d'éléments de données peuvent désormais être laissés ouverts ou verrouillés. S'ils sont laissés ouverts, les concepts et les listes de codes peuvent être édités sans qu'il soit nécessaire de créer une nouvelle version. Si les concepts sont verrouillés, ils ne peuvent pas être édités, mais doivent être versionnés.
- Toutes les entrées d'une liste de codes peuvent désormais être supprimées en une seule fois.

### Interfaces électroniques (API)
- Avec la nouvelle version, un endpoint est disponible sur la [API-Gateway](https://input.i14y.admin.ch/console/partner/v1/index.html) pour les organisations partenaires, permettant de publier des descriptions de datasets.

## Version du 14 août 2024
- Concepts de données (zone de saisie) : jusqu'à présent, les entrées d'une liste de codes étaient insérées directement sur la page. La nouvelle version introduit une fenêtre pop-up. Cela rend l'affichage plus clair et facilite l'ajout d'entrées à une liste de codes.
- Concepts de données (zone de saisie) : la section « Versions » dans la zone de saisie des concepts de données est désormais positionnée au-dessus de la section « Connexions ». L'ordre correspond ainsi à celui de la partie publique d'I14Y.
- Concepts de données (zone de saisie) : les entrées d'une liste de codes peuvent désormais être filtrées. Cela facilite la vérification et l'adaptation des listes de codes plus longues.
- Concepts de données : auparavant, les concepts de données intégrés à une collecte de données via une structure pouvaient être modifiés directement depuis l'écran d'affichage dans la section catalogue. Le bouton « Modifier » correspondant a désormais été supprimé. Les concepts sont désormais modifiés de manière cohérente dans la section des concepts de la plateforme.
- Prestations publiques (zone de saisie) : l'écran de saisie des prestations publiques a été légèrement adapté. Les champs pour l'identifiant et l'éditeur se trouvent désormais sur une même ligne. Auparavant, ils étaient disposés l'un en dessous de l'autre. L'écran de saisie est maintenant harmonisé avec celui des jeux de données.
- Zone de saisie : le nouveau bouton « Voir la publication » permet de vérifier directement sur le site public une entrée qui vient d'être créée.
- Zone de saisie : le mini-tableau de bord « Mes données » a été amélioré. Il donne aux utilisatrices et utilisateurs une vue d'ensemble de leurs tâches et de leurs métadonnées.
- Corrections de bugs.

## Version du 17 juillet 2024
- Depuis la dernière version, les prestations publiques peuvent être mieux catégorisées à l'aide d'événements de vie et d'affaires. Il est désormais également possible de filtrer les résultats de recherche selon des événements de vie ou d'affaires spécifiques.
- L'affichage des listes de codes a été amélioré.
- Le lien de téléchargement du contenu des concepts a été adapté afin d'assurer une cohérence dans l'ensemble du système.
- Corrections de bugs.

## Version du 10 juillet 2024
- I14Y améliore la catégorisation des prestations publiques : lors de la saisie de la description d'une prestation publique, il est désormais possible de sélectionner la situation de vie ou d'affaires dans laquelle un service d'e-government particulier peut être utile. Cela aide aussi bien les citoyennes et citoyens que les entreprises à trouver la prestation adéquate.
- Le filtrage des descriptions de jeux de données, de services de données et de prestations publiques a été amélioré et étendu.
- La tuile Labs a été supprimée afin de rendre l'interface plus claire. Les travaux expérimentaux peuvent être consultés dans l'espace [GitHub d'I14Y](https://github.com/I14Y-ch/).
- Corrections de bugs.

## Version du 3 juillet 2024
- La fonction de recherche dans le catalogue, dans la section de saisie de la plateforme, a été améliorée sur le plan visuel.
- Les boutons permettant de créer ou de modifier un objet sont désormais désactivés lorsque l'action n'est pas autorisée.
- Plusieurs améliorations mineures.
- Corrections de bugs.

## Version du 19 juin 2024
- Les listes de codes hiérarchiques sont désormais affichées sous forme d'arborescence. Cela améliore la lisibilité de la hiérarchie.
- Les listes de codes peuvent désormais être téléchargées au format JSON et CSV depuis le front-end public.
- Lors de la description d'une distribution, il est désormais possible de saisir des informations sur les droits d'utilisation.
- Il n'est plus nécessaire d'indiquer le format des distributions. Cette information peut toujours être saisie de manière facultative.
- Les descriptions des services de données indiquent désormais également quels jeux de données sont liés.
- Les descriptions des distributions renvoient au service de données approprié.
- Les versions d'un concept d'élément de données sont désormais affichées sur la page d'aperçu.
- Plusieurs améliorations ont été apportées à l'interface graphique.
- Corrections de bugs.

## Version du 26 mai 2024
- Le système vérifie désormais automatiquement la syntaxe correcte des URL lors de la saisie des métadonnées. Si l'entrée est incorrecte, un message d'erreur s'affiche.
- Les espaces ne sont pas autorisés dans les identifiants afin d'assurer la compatibilité avec différents systèmes. Lors de la saisie des métadonnées, le système vérifie désormais automatiquement la présence d'espaces dans l'identifiant. Si des espaces sont détectés, un message d'erreur s'affiche.
- La vitesse d'affichage a été améliorée pour les concepts fréquemment utilisés, comme le numéro AVS.
- Corrections de bugs.

## Version du 22 avril 2024
- Avec cette version, il est désormais possible de supprimer des distributions en quelques clics via l'interface web. Auparavant, cela devait se faire via l'interface électronique.
- La page d'actualités a été remaniée : elle peut désormais être mise à jour plus rapidement.
- Corrections de bugs.

## Version du 8 avril 2024
- Le service d'interopérabilité introduit de nouveaux champs de saisie. Ils permettent de décrire plus en détail les enregistrements sur la plateforme d'interopérabilité I14Y. En détail : il est désormais possible d'indiquer le nom du détenteur des données. Il est également possible d'ajouter le nom de la personne responsable opérationnelle des données ainsi que celui de sa suppléante ou de son suppléant. Pour les collections de données qui constituent des géodonnées de base relevant du droit fédéral au sens de l'[ordonnance sur la géoinformation](https://www.fedlex.admin.ch/eli/cc/2008/389/de), le numéro correspondant peut désormais être sélectionné.
- Corrections de bugs.

## Version du 27 mars 2024
- Corrections de bugs.

## Version du 12 mars 2024
- Les concepts peuvent désormais être réutilisés dans différents jeux de données. Cela garantit l'utilisation des mêmes définitions, des mêmes caractéristiques et des mêmes méthodes de codage. La description de chaque concept indique désormais quels jeux de données utilisent ce concept précis. Une indication du nombre de réutilisations est également affichée. Seules les collections de données décrites publiquement sur la plateforme sont prises en compte.
- Corrections de bugs.

## Version du 27 février 2024
- La description d'un jeu de données (champs selon DCAT-AP CH) peut désormais être attribuée à plusieurs catalogues. Cela permet d'utiliser la description à la fois dans le catalogue I14Y et dans le catalogue d'opendata.swiss. Le service d'interopérabilité peut ouvrir des catalogues supplémentaires sur demande.
- Corrections de bugs.

## Version du 5 février 2024
- Les canaux d'une prestation publique sont désormais affichés directement sur la page d'aperçu. Auparavant, ils se trouvaient dans un onglet séparé. Cette modification permet d'accéder à la prestation publique en moins de clics.
- Les enregistrements peuvent désormais être attribués à plusieurs catalogues. Par exemple, un enregistrement peut faire partie à la fois du catalogue I14Y et du catalogue Opendata. Les mots-clés, qui peuvent varier d'un catalogue à l'autre, peuvent être définis séparément pour chaque catalogue.

## Version du 25 janvier 2024
- Introduction de nouveaux champs pour documenter le statut de protection d'un jeu de données : grâce à ces nouveaux champs, il est possible d'indiquer si un enregistrement contient des données personnelles, voire des données personnelles particulièrement sensibles. Des informations sur la durée de conservation des données peuvent également être enregistrées.
- Première mise en œuvre de la classe « Catalogue ». À l'avenir, plusieurs catalogues pourront être gérés sur I14Y. Les enregistrements pourront être attribués à un ou plusieurs catalogues.
- Mise à disposition d'un fichier d'information de sécurité lisible par machine (`security.txt`) conformément à la spécification du National Cyber Security Centre (NCSC).
- Corrections de bugs.

## Version du 4 décembre 2023
- Changement dans la gestion des utilisateurs : seules les personnes qui se sont connectées à la saisie I14Y peuvent désormais être trouvées et enregistrées comme personne responsable et personne suppléante pour les concepts et les structures.
- Les filtres « Éditeur » et « Thèmes » sont désormais disponibles sur la page de recherche des concepts.
- L'action « Supprimer » est désormais disponible sur la page de vue d'un concept.
- Corrections de bugs.

## Version du 20 novembre 2023
- Des filtres pour le niveau de publication, l'éditeur et les thèmes sont désormais disponibles sur la page des concepts.
- Corrections de bugs.

## Version du 3 novembre 2023
- Point de terminaison de démonstration : récupération du catalogue en RDF-XML et RDF-Turtle.
- Corrections de bugs.

## Version du 24 octobre 2023
- Correction de la recherche de concepts : les termes sont désormais trouvés indépendamment des majuscules/minuscules et de la langue par défaut.
- Les propriétés Qualified Attribution et Qualified Relation peuvent désormais être modifiées depuis l'interface utilisateur.
- Le rôle de submitter est désormais affiché dans la boîte d'information utilisateur.
- Corrections de bugs.

## Version du 10 octobre 2023
- La recherche de concepts fonctionne désormais avec les traits d'union et les traits de soulignement. Cela permet de trouver des concepts portant des titres tels que « EXAMPLE_CONCEPT-2023-10-04 ».
- La page de détail d'un concept affiche désormais aussi les propriétés supplémentaires « Thèmes », « Mots-clés » et « Conforme à ».
- Le point de terminaison JSON des concepts renvoie désormais également les champs supplémentaires `themes`, `keywords` et `conformsTo`.
- La fenêtre d'information utilisateur a été optimisée. Un problème concernant l'affichage du statut de connexion a été corrigé. Le nom de l'organisation est désormais affiché dans la langue par défaut.
- Corrections de bugs.

## Version du 29 septembre 2023
- Des champs supplémentaires ont été introduits pour décrire les collections de données. Ils correspondent à la norme DCAT-AP-CH en version 2. Les champs suivants sont désormais disponibles : frequency, image, is referenced by, qualified attribution, qualified relation, related resource, licence, availability, checksum, coverage, identifier, image, media type, packaging format, temporal resolution.
- Révision de la page d'accueil d'I14Y : structure ajustée avec des titres et des textes révisés, ainsi que l'ajout d'informations de contact.
- L'IdP du canton de Berne peut désormais être utilisé pour la zone de saisie I14Y.
- Diverses corrections de bugs et améliorations UX.

## Version du 30 juin 2023
- Manuel I14Y : la documentation complète des fonctionnalités d'I14Y est désormais accessible via la tuile sur la page d'accueil et via la navigation principale.
- Chatbot I14Y : un chatbot est désormais disponible dans la section laboratoire et peut répondre aux questions sur la plateforme d'interopérabilité I14Y et sur l'harmonisation des données en Suisse.
- Un problème concernant l'importation d'entrées de listes de codes via l'API a été corrigé.
- Un premier point de terminaison public permettant de récupérer des concepts est désormais disponible.

## Version du 15 juin 2023
- Les concepts peuvent désormais être affichés et recherchés sur la page publique.
- Le statut d'enregistrement et le niveau de publication peuvent désormais être définis via l'interface utilisateur graphique.
- Gestion des versions pour les concepts.
- Corrections de bugs.

## Version du 15 janvier 2023
- La procédure d'authentification a été convertie vers eIAM. Les comptes des utilisatrices et utilisateurs existants doivent être migrés.
- Corrections de bugs.