---
title: Changelog
slug: changelog
translationKey: changelog
weight: 80
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
---

{{<alert title="Language" color="warning">}}
__FR:__ Ce site est en anglais. Seules les descriptions des grandes releases sont publiées en français.
{{</alert>}}

The I14Y interoperability platform is under continuous development. New features are added with each release. Bugs are also fixed. The most important changes are briefly documented below. For detailed information on the development of the platform, please contact the [I14Y team](mailto:i14y@bfs.admin.ch). 

## Release September 10 2025
- Two new date fields have been introduced for electronic interfaces (APIs): the issue date and the date of last modification. This information makes it easier to track updates.
- When creating public services and electronic interfaces (APIs), it is now possible to specify the responsible person and their deputy. This improves contact options and clarifies responsibilities.
- Code list entries now have "Valid from" and "Valid to" fields. This allows the temporal validity of entries to be clearly defined, which is particularly helpful for classifications that change over time.
- Similar to datasets, specifying an identifier for electronic interfaces (APIs) is now optional. If no identifier is entered, one is automatically generated.
- Electronic interfaces (APIs) can now be deleted directly via the user interface. This simplifies the management of API descriptions that are no longer needed.
- Various bug fixes to improve stability and user-friendliness.

## Release July 30 2025
- Specifying an identifier for datasets is now optional. If no identifier is entered, one is generated automatically, regardless of whether the metadata is entered via the user interface or the electronic interface.
- The display and functionality of the organisation page have been improved.
- Bug fix: In the last version, public services whose channel contained an ownedBy field triggered an error message. This issue has been resolved.
- Bug fix: Public services with an assigned channel could not be edited in the last version. This bug has been fixed.
- Bug fix: An error occurred when searching within code list entries in the last version. The search function has been corrected and now works as expected.

## Release July 23 2025
- Which organisations use the I14Y interoperability platform? A new page lists all organisations that publish metadata on I14Y. It also shows the number of descriptions of datasets, APIs and public services published by each organisation, as well as the number of concepts published.
- Since early summer, more complex data structures can be documented on I14Y. Previously, this information was only visible in the internal area. The latest release introduces a graphical representation of recorded data structures on the public website.
- Public services can now be accessed individually via the electronic interface (API). Another endpoint also allows I14Y partner organisations to publish public services on I14Y in a fully or semi-automated manner.
- Bug fixes

## Release July 2 2025
- I14Y uses [Oblique](https://oblique.bit.admin.ch/), a collection of standardised graphic components from the federal administration, for its graphical user interface. With this release, we are switching to Oblique 13. This will slightly modernise the graphics of the I14Y website. 
- With the latest releases, I14Y has introduced a new technology for describing data structures (see Structure Beta). The uploaded structures can now be displayed graphically in the internal area of the platform.
- Published code lists can now be searched on the public website.
- Thanks to new endpoints, descriptions of APIs can be obtained and written automatically. 
- The contact point's email address field must now be filled in. This complies with the requirements of the next version of the DCAT-AP CH standard ([Version 3](https://www.dcat-ap.ch/releases/3.0_workingdraft/dcat-ap-ch_3.0_workingdraft.html)). Existing entries on I14Y cannot be saved again until the email field has been filled in. 
- Bug fixes

## Release May 28 2025
- A new download button allows descriptions of data sets from the internal area to be downloaded in JSON format. This simplifies the export of metadata.
- Descriptions of data sets can now be imported from a file. The import option is available when you click on the "Import" button. 
- Since the last release, it has been possible to upload data structures in RDF, TTL or JSON-LD format. These structures can now be displayed graphically.
- The [I14Y-API](https://apiconsole.i14y.admin.ch/) provides new endpoints for importing and exporting a structure in RDF, TTL, and JSON-LD formats.
- New information fields have been introduced for organisations. These enable a more detailed description of the organisations recorded in I14Y.
- Some translations have been updated.
- The search indexing system has been improved. Search queries now deliver more accurate results.

## Release May 7 2025
- The I14Y interoperability platform has previously stored some objects in a BFS database. With the current version, the systems are separated. All metadata is now stored in the I14Y database. The previous functions have been adapted and the data from the old system has been migrated. The decision not to use a microservice architecture in this area makes the system faster, especially when searching across multiple object categories.
- The appearance of the pages displaying descriptions of a data record, an electronic interface, a government service or a concept has been improved: a directory is now available on the left-hand side, allowing users to navigate quickly through the descriptions.
- Which data is publicly available, which can be viewed under certain conditions, and which is confidential? The new icons on the overview pages indicate the status of each entry.
- Thanks to a new endpoint in the public API and in the API for I14Y partners, filtered concept lists can be requested. Filtering can be done by publisher or status, for example. 
- A new endpoint in the API for I14Y partners allows existing concepts to be updated automatically.
- In the description of an electronic interface, a link can now be set to the data set that the interface accesses.
- The recording of data structures is currently being completely revised. A new tab is being introduced with this release. This can be used to upload and download information about the data structure in RDF and TTL formats. The new functions are still in the test phase. The previous tab is still available. However, structures can no longer be created in the conventional way. The next release will further improve the recording and visualisation of structures.
- Numerous bug fixes

## Release March 5 2025
- The [I14Y-API](https://apiconsole.i14y.admin.ch/) offers new endpoints in the area of dataset descriptions. The metadata for datasets can be read (GET). New descriptions can be entered (POST). Existing ones can be edited and published (PUT) or deleted if necessary (DELETE).
- When registering a public service, it is now possible to select the area for which the service is offered. In addition to the whole of Switzerland, all cantons, districts and municipalities are available in the selection field. This information is also supplied when exporting via the API. The basis for this is the code list [cantons, districts and municipalities](https://www.i14y.admin.ch/de/catalog/concepts/08dc23f0-d04d-2d2f-a9f5-9cea80695acf/description).
- When creating an internal work area for an office or other organisation, the interoperability service can now store the organisation number from the business register, information on the [legal form](https://www.i14y.admin. ch/en/catalog/concepts/08dad8ff-f18a-560b-bfa6-20767f2afb17/description) and information on the federal level of the organisation. The information on the area in which an organisation operates is provided when a public  service description is obtained via the API.
- The home page and the overview page in the internal area have been slightly revised in terms of content: the introductory texts have been adapted. And a link to the I14Y API console has been added in the footer area. The video on data harmonisation, which was previously placed on the home page, has been removed; it can still be found in the [news section](https://i14y-ch.github.io/handbook/fr/news/) and on [Youtube](https://youtu.be/mqpaAeJVkME?si=1RSv0xYFTudEDjSx).
- An error in the publisher field has been corrected: Until now, the publisher's organisation name often had to be reselected as soon as an entry had been edited. This is no longer necessary. 
- An error in the data owner field has been corrected: Previously, it was not possible to delete a name when editing an entry. This is now possible again.
- Numerous bug fixes

## Release January 15 2025
- The [Partner API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) can now be used to retrieve and publish dataset descriptions (GET and POST). 
- The [Partner API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) can now be used to set status and publication level (PUT).
- Minor search improvements
- Numerous bug fixes

## Grande Release du 13 novembre

Avec la grande release du 13 novembre, l'interface utilisateur de I14Y devient plus simple et son utilisation plus intuitive: la séparation actuelle entre le catalogue et les concepts au niveau de l'interface graphique est supprimée. Il y a désormais une recherche globale. En outre, les éléments graphiques sont modernisés. Les nouveautés en détail:

### Changements sur le site web public
- Le design est aligné sur la nouvelle version du système de design Oblique de l'administration fédérale. L'apparence est ainsi modernisée.
- La séparation graphique entre le catalogue et les concepts est supprimée ; les concepts de données sont désormais associés au catalogue. Les tuiles sont supprimées. Le menu comprend uniquement les points Page d'accueil, Catalogue, News et Manuel.
- Un champ de recherche bien en vue est désormais disponible, ce qui permet d'effectuer des recherches dans les métadonnées, quel que soit leur type. Les résultats sont présentés dans des onglets (par exemple, datasets, services publics, APIs, concepts). Les résultats des portails de métadonnées d'Opendata.swiss et de Geocat sont également affichés.Le pied de page est complété par un lien vers le dépôt [GitHub d'I14Y](https://github.com/I14Y-ch/) (avec des scripts et des tutoriels). Un lien vers le compte [LinkedIn d'I14Y](https://www.linkedin.com/showcase/i14y/) est également ajouté.

### Changements dans la section interne de l'organisation du site web
- Les concepts d'éléments de données sont désormais pris en compte dans "Mes tâches", "Propositions en suspens" et "Données de mon organisation".
- Les concepts d'éléments de données peuvent désormais être laissés ouverts ou verrouillés. S'ils sont laissés ouverts, les concepts et les listes de codes peuvent être édités sans qu'il soit nécessaire de créer une nouvelle version. Si les concepts sont verrouillés, ils ne peuvent pas être édités, mais doivent être versionnés.
- Toutes les entrées d'une liste de codes peuvent désormais être supprimées en une seule fois.

### Interfaces électroniques (API)
- Avec la nouvelle version, un endpoint est disponible sur la [API-Gateway](https://input.i14y.admin.ch/console/partner/v1/index.html) pour les organisations partenaires, permettant de publier des descriptions de datasets.

## Release August 14 2024
- Data concepts (input area): Until now, entries for a code list were inserted directly on the page. The new release introduces a pop-up. This provides a clearer display and makes it easier to add entries to a code list.  
- Data concepts (input area): The "Versions" section in the input area for data concepts is now positioned above the "Connections" section. In this way, the order corresponds to that on the public side of the I14Y. 
- Data concepts (input area): The entries in a code list can now be filtered. This makes it easier to check and adapt longer code lists.
- Data concepts: Previously, data concepts that were integrated into a data collection via a structure could be edited directly from the display screen in the catalogue section. The corresponding "Edit" button has now been removed. Concepts are consistently edited in the concept section of the platform.  
- Public services (input area): The input screen for public services has been slightly adapted: The fields for the identifier and the publisher are now on one row. Previously, they were arranged one below the other. The input screen is now harmonised with the screen for entering datasets.   
- Input area: The new "View publication" button allows you to check an entry you have just entered directly on the publicly accessible website. 
- Input area: The "My data" mini-dashboard has been improved. It gives users an overview of their tasks and of their metadata.  
- Bug fixes

## Release July 17 2024
- Since the last release, public services can be better categorised using Life and Business events. It is now also possible to filter the search results according to specific life or business events. 
- The display of codelists has been improved. 
- The download link for concept content has been adapted to ensure consistency across the system.
- Bug fixes

## Release July 10 2024
- The I14Y improves the categorisation of public services: When entering the description of a public service, it is now possible to select the life or business situation in which a particular e-government service can be useful. This makes it easier for both citizens and entrepreneurs to find the right public service. 
- Improved and enhanced filtering for description of datasets, data services and public services.
- The Labs tile has been removed to make the GUI clearer. Experimental work can be found in the [I14Y Github](https://github.com/I14Y-ch/) area. 
- Bug fixes

## Release July 3 2024
- The catalogue search functionality in the input section of the platform has been visually improved.
- The buttons to create or edit an object are now disabled if the action is not allowed. 
- Several minor improvements
- Bug fixes

## Release 19 June 2024
- Hierarchical code lists are now displayed in a tree view. This improves the visibility of the hierarchy. 
- The code lists can be downloaded in JSON and CSV format from the public front-end.
- When describing a distribution, usage rights information can now be entered. 
- It is no longer necessary to specify the format for distributions. This information can still be entered as an option. 
- Descriptions of dataservices also list which datasets are linked. 
- Descriptions of distributions refer to the appropriate dataservice. 
- The versions of a data element concept are now displayed on the overview page. 
- Several improvements have been made to the graphical interface. 
- Bugfixes

## Release 26 Mai 2024
- The system now automatically checks for correct URL syntax when entering metadata. If the entry is incorrect, an error message is displayed.
- Spaces are not allowed in identifiers to ensure compatibility with different systems. When entering metadata, the system now automatically checks for spaces in the identifier. If spaces are detected, an error message is displayed. 
- Improved display speed for frequently used concepts, such as the AHV number.
- Bugfixes

## Release 22 April 2024
- With the new release, it will be possible to delete distributions with just a few clicks via the web interface. Previously, this had to be done via the electronic interface. 
- The news page has been revised: it can now be updated more quickly. 
- Bugfixes

## Release 8 April 2024
- The interoperability service introduces new entry fields. They allow for more detailed description of records on the I14Y interoperability platform. The fields in detail: The name of the data owner can now be entered. It is also possible to add the name of the person who is operationally responsible for the data and the name of the deputy. For data collections that are official geodata under federal law according to the [Geoinformation Ordinance](https://www.fedlex.admin.ch/eli/cc/2008/389/de), the corresponding number can now be selected.    
- Bugfixes

## Release 27 March 2024
- Bugfixes

## Release 12 March 2024
- Concepts can be reused in various datasets. This ensures that the same definitions, the same characteristics and the same coding methods are used. The description of the individual concepts now shows which datasets use this particular concept. An indication of the number of reuses is also displayed. Only data collections that have been publicly described on the platform are counted. 
- Bugfixes

## Release 27 February 2024
- The description of a dataset (fields according to DCAT-AP CH) can now be assigned to several catalogues. This allows it to use the description both in the I14Y catalogue and in the catalogue for Opendata.swiss. The interoperability service can open additional catalogues upon request. 
- Bugfixes

## Release 5 February 2024
- The channels of a public service are now displayed directly on the overview page. Previously, they could be found in a separate tab. This change allows users to access the public service with fewer clicks. 
- Records can now be assigned to multiple catalogues. For example, a record can be part of both the I14Y and Opendata catalogues. The keywords, which may differ from catalogue to catalogue, can be set for each catalogue. 

## Release 25 January 2024
- Introduction of new fields to document the protection status of the da dataset: Thanks to the news fields, it is possible to enter information about whether a record contains personal data or even particularly sensitive personal data. Information about the retention period of the data can also be recorded.
- First implementation of the Catalog class. In the future, several catalogues can be managed on the I14Y. Records can be assigned to one or more catalogues. 
- Provision of a machine-readable security information file (security.txt) according to the National Cyber Security Centre (NCSC) specification.
- Bug fixes

## Release 04 December 2023
- Change in user management: Only people who have logged in to the I14Y input can be found and entered as responsible person and responsible deputy for concepts and structures.
- The filters "Publisher" and "Topics" are now available on the concept search page.
- The "Delete" action is now available on the concept view page.
- Bug fixes

## Release 20 November 2023
- Filters for publication level, publisher and themes are now available on the concept page.
- Bug fixes

## Relase 3 November 2023
- Demo endpoint: Retrieve catalogue as RDF-XML and RDF-Turtle
- Bug fixes

## Relase 24 October 2023
- Concept search fix: Terms are now found regardless of capitalisation and default language. 
- The Qualified Attribution and Qualified Relation properties can now be edited from the user interface.
- The submitter role is now displayed in the user info box. 
- Bug fixes

## Release 10 October 2023
- Concept search now works with hyphens and underscores. This makes it possible to find concepts with titles such as "EXAMPLE_CONCEPT-2023-10-04". 
- The concept detail page now displays the additional properties Themes, Keywords, and ConformsTo.
- The concept JSON endpoint now returns the additional themes, keywords and conformsTo fields.
- Optimised the user information popup. An issue with the login status display has been fixed. And the organisation name is now displayed in the default language. 
- Bug fixes

## Release 29 September 2023
- Additional fields for describing data collections have been introduced. These correspond to the DCAT-AP-CH standard in version 2. The following fields are now available: frequency, image, is referenced by, qualified attribution, qualified relation, related resource, licence, availability, checksum, coverage, identifier, image, media type, packaging format, temporal resolution.
- Revision of the I14Y Homepage: Adjusted structure with headings and revised texts, contact information added.
- IdP Kanton Bern can be used for the I14Y input area.
- Various bugfixes and UX improvements

## Release 30 Juin 2023
- I14Y Handbook: The comprehensive documentation of the I14Y functionality can now be accessed via the tile on the homepage and the main navigation.
- I14Y Chatbot: A chatbot is now available in the lab section that can answer questions about the I14Y interoperability platform and data harmonisation in Switzerland.
- A problem concerning the import of code list entries via the API has been fixed.
- First public endpoint to retrieve concepts is available.

## Release 15 June 2023
- Concepts can now be displayed and searched on the public page 
- The registration status and publication level can be set via the graphical user interface
- Versioning for concepts 
- Bugfixes

## Release 15 January 2023
- Conversion of authentication to eIAM. The accounts of existing users must be migrated. 
- Bugfixes
