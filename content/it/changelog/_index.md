---
title: Changelog
slug: changelog
translationKey: changelog
weight: 80
type: docs
keywords: [I14Y, I14Y-Interoperabilitätsplattform, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
---

{{<alert title="Language" color="warning">}}
__IT:__ Questa pagina è disponibile solo in inglese.
{{</alert>}}

The I14Y interoperability platform is under continuous development. New features are added with each release. Bugs are also fixed. The most important changes are briefly documented below. For detailed information on the development of the platform, please contact the [I14Y team](mailto:i14y@bfs.admin.ch). 

## Major release 13 November
With the major release of 13 November, the I14Y user interface becomes simpler and more intuitive to use: the previous separation between the catalogue and the concepts on the graphical interface is eliminated. A global search is now available. The appearance has been modernised. A new API endpoint is also introduced. The changes in detail.

### Public area of the portal
- With the new release, the portal will be updated to the new version of the Federal Administration's Oblique design system. This modernises the appearance.
- The graphical distinction between catalogue and concept has been removed; data concepts are now assigned to the catalogue and the tiles have been removed. The menu now contains only the Home, Catalogue, News and Manual items.
A prominently placed search field is now available, making metadata searchable regardless of type. Results are displayed in tabs (Data Collections, Government Services, APIs, Concepts). Results from the Opendata and Geocat metadata portals are also displayed.
- A link to the I14Y GitHub repository (https://github.com/I14Y-ch/) (with scripts and tutorials) has been added to the footer. A link to I14Y's LinkedIn account (https://www.linkedin.com/showcase/i14y/) has also been added.

### Changes to the internal organisation section of the website
- The "My Tasks", "Pending Proposals" and "My Organisation's Data" sections now include data element concepts.
- Data element concepts can now be left open or locked. If left open, the concepts and code lists can be edited without having to create a new version. When locked, concepts cannot be edited but must be versioned.
- All entries in a code list can now be deleted at once.

### Application interfaces (APIs)
- With the new release, an endpoint is available on the [API gateway](https://input.i14y.admin.ch/console/partner/v1/index.html) for partner organisations to publish descriptions of datasets.

## Release September 4 2024
- How fast is the number of metadata entries on the I14Y growing? And how often are data concepts reused? The I14Y dashboard, which is available in a beta version, is now accessible via the homepage. 
- Web links can now be opened with a right click. 
- Additional filtering options have been added to the data concepts overview. The list can now be filtered by status.  
- The "My data" section on the I14Y homepage now also lists data concepts that need the attention of the logged-in user. 
- The button to link an additional catalogue on the data collection input screen is greyed out if the logged-in user has only submitter rights. 
- Information about government services can now be retrieved via the I14Y Partner API.

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
