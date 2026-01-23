---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability Platform I14Y, IOP, Changelog, Releases, Versions, Software Development]
draft: false
---

The next release of I14Y is scheduled for the early evening of 28 January 2026. It includes the adjustments and enhancements listed below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y pre-publication environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Service if you do not yet have access to this environment used for software testing.
 
Please note that the release date may be postponed at short notice in the event of problems. It is possible that individual functions may be removed from the release and only activated at a later date. If you have any questions or problems regarding the release, please contact the Interoperability Service ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- **Permalinks for concepts:** A so-called _International Resource Identifier (IRI)_ is now displayed on the detail pages of published concepts. The _Linked Data_ area of the federal government is used for this stable and unique identifier, also known as a permalink. The permalink is composed of the system-internal identifier and the version of the concept: `https://register.ld.admin.ch/i14y/concept/{concept-identifier}/version/{version}`. An IRI is only generated once a concept is published; internal concepts do not have such a permalink.
- **Extension of the RDF export:** Descriptions of data records are also available in RDF format via the electronic interface (API). This enables the automated reading of the contents of a catalogue (known as _harvesting_). The RDF export has now been supplemented with additional information on the distribution type.
– **More information in the graph view:** The structure of a data record is displayed graphically on I14Y. This display now also shows the units of measurement for attributes, if the relevant information has been entered.
- **Improved filters:** The options in filters are now better organised. Some are sorted according to business criteria (e.g. the status filter), while others are in alphabetical order (e.g. the filter for life situations).
- **Bug fixes:** Several bugs have been fixed. Among other things, large code lists can now be uploaded more quickly again.