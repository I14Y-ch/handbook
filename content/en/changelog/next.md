---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability platform I14Y, IOP, Changelog, Releases, Versions, Software development]
draft: false
---

The next release of I14Y is planned for the evening of 6 May 2026. It includes the changes and enhancements described below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y acceptance environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Unit if you do not yet have access to this environment, which is used for software testing.

Please note that the release date may be postponed at short notice if problems arise. Individual features may also be removed from the release and only activated at a later point in time. If you have any questions or issues related to this release, please contact the Interoperability Unit ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Editing structures in the user interface:** Classes, attributes and associations of a data structure can now be edited directly in the user interface. All properties displayed in the sidebar are editable. When editing an attribute, it is also possible to search for a concept and link to a specific version.

**System metadata in the Partner API:** All objects now include a "system" section in the JSON responses of the Partner API. It contains the creation date (`createdAt`), the date of the last modification (`modifiedAt`) and the creation type (`creationType`). The latter indicates whether an object was created manually via a browser token (_Manual_) or automatically via an M2M token (_Automated_).

**Multiple identifiers for concepts and public services:** Concepts and public services can now carry multiple identifiers. For this purpose, the `identifiers` property has been introduced as an array. To avoid disrupting existing integrations, the previous `identifier` field will continue to be returned for the time being; both fields appear in API responses at the same time. Note: the `identifier` field (singular) will be removed in a future release. Scripts that use this field when creating objects will need to be updated in time.

**Create a new version of a mapping table:** It is now possible to create a new version from an existing mapping table.

**Catalog search via the Partner API:** The endpoint for catalog search is now also available via the Partner API. The search supports various parameters such as query term and language.

**Extended editing rights for submitters:** Submitters can now edit objects with the registration status "Initial" or "Candidate", even if they are already publicly published. The condition is that they must not have been locked beforehand.

**Distributions on the dataset detail page:** Distributions belonging to a dataset are now displayed directly on the dataset description page.

**Export of codelists without annotations:** Codelists can now optionally be exported without annotations; the supported formats are JSON and CSV.

**Technical updates as well as minor improvements and bug fixes**