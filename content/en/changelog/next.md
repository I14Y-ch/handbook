---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability platform I14Y, IOP, Changelog, Releases, Versions, Software development]
draft: false
---

The next release of I14Y is planned for the evening of 25 March 2026. It includes the changes and enhancements described below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y acceptance environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Unit if you do not yet have access to this environment, which is used for software testing.

Please note that the release date may be postponed at short notice if problems arise. Individual features may also be removed from the release and only activated at a later point in time. If you have any questions or issues related to this release, please contact the Interoperability Unit ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Mapping tables:** With this release, mapping tables are introduced on the interoperability platform. They serve to document similarities and differences between the values of two codelists. Mapping tables are normal objects on I14Y: they are discoverable via search and filters, and can be viewed both on the public platform and in the administration interface. Via the administration interface or the API, mapping tables can also be created and edited; an import function is also available.

**Clickable «Conforms to» links:** For each data element it can be documented whether it is based on a foundational concept. To do so, a link is stored in the SHACL structure in the «Conforms to» field. Previously, these IRIs were only displayed in the attribute sidebar; they are now clickable.

**Sorted versions:** For versioned concepts, a table listing the available versions of the concept is displayed. Entries are now shown in descending order, which simplifies navigation through the concept history.

**Various bug fixes**