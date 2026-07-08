---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability platform I14Y, IOP, Changelog, Releases, Versions, Software development]
draft: true
---

The next release of I14Y is planned for the early evening of 9 July 2026. It includes the changes and enhancements described below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y acceptance environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Unit if you do not yet have access to this environment, which is used for software testing.

Please note that the release date may be postponed at short notice if problems arise. Individual features may be removed from the release and only activated at a later point in time. If you have any questions or issues related to this release, please contact the Competence Center Data Management ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Organisation logo:** Since the last release, a logo or photo can be stored for each organisation. These images are now displayed on the Organisations page.

**Tabular view of data structures:** Data structures can now also be displayed as a table instead of a UML diagram. In some cases, the table view is more suitable for getting a quick overview of the structure of a dataset.

**Improved navigation:** A new Back button is now available above the detail view of an entry. It allows users to jump back to the list of filtered search results. Until now, users had to use the browser's Back button.

**More information in overview lists:** The list of entries now includes chips for the themes and the formats of the attached distributions.

**RDF export enhancement:** The RDF export, which is used in particular for harvesting a data catalogue, now includes the `coverage` attribute in the area of distributions.

**API adjustment:** In the electronic interface (API), the field `identifier` was previously used for concepts and public services. It contained a string. This field has now been fully replaced in this release by `identifiers`, which contains a list of strings. Existing integrations for reading or writing concepts or public services must be adapted without exception. Please read the corresponding [News article](/handbook/de/news/#breaking-change-auf-der-i14y-api).

**Bug fixes:** Incorrect results in the My Data area in the platform's internal section have been corrected. A layout issue on the codelist entries page has been fixed, and several typos in the user interface have been corrected.

**Note:** The open source publication of the I14Y codebase has, contrary to the earlier announcement, been postponed to a later date because one remaining dependency is not compatible with the MIT licence.