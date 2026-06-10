---
title: Prossimo rilascio
translationKey: next-release
slug: prossimo-rilascio
weight: 10
type: docs
keywords: [I14Y, Piattaforma di interoperabilità I14Y, IOP, Changelog, Releases, Versioni, Sviluppo software]
draft: true
notification: false
---

The next release of I14Y is planned for the early evening of 17 June 2026. It includes the changes and enhancements described below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y acceptance environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Unit if you do not yet have access to this environment, which is used for software testing.

Please note that the release date may be postponed at short notice if problems arise. Individual features may also be removed from the release and only activated at a later point in time. If you have any questions or issues related to this release, please contact the Competence Center Data Management ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Open source:** The I14Y source code is now published in a public repository on GitHub. The new repository contains the current state of the I14Y software and is publicly accessible.

**Organisation logo:** The I14Y team can now store a logo or another image (for example, a photo of a building) for each organisation and link it to that organisation. This enhancement was developed as part of the work on the new version of opendata.swiss and will also be used for the future metadata.swiss platform. Please [contact the I14Y team](mailto:i14y@bfs.admin.ch) if you would like to provide an image or replace an existing one.

**API for organisations:** Basic information on recorded organisations can now be retrieved through both the Partner API and the Public API. Links to organisation logos are also available through these interfaces.

**Better overview for data providers:** The start page of the internal I14Y area has been improved. In the My Data column, entries are now shown if the signed-in person is listed as (deputy) contact person or as data owner. This allows users to access the entries relevant to them more quickly.

**Stable first identifier:** I14Y allows multiple identifiers to be stored. The first identifier of an entry for a dataset, concept, mapping table, API, or public service can no longer be changed once the entry has been published publicly for the first time. This ensures that public permalinks remain permanently valid.

**Export of filtered codelists:** Filtered entries of a codelist can now be exported directly from the user interface.

**Optional date fields for concepts:** The Valid from and Valid to fields are now optional for concepts and mapping tables.

**Deputy contact person:** The deputy contact person field is now optional. It is no longer possible to enter the same person as in the contact person field.

**Bug fixes**