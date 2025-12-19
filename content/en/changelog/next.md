---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability Platform I14Y, IOP, Changelog, Releases, Versions, Software Development]
draft: false
---

The next release of I14Y is scheduled for the early evening of 7 January 2026. It includes the adjustments and enhancements listed below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y pre-publication environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Service if you do not yet have access to this environment used for software testing.
 
Please note that the release date may be postponed at short notice in the event of problems. It is possible that individual functions may be removed from the release and only activated at a later date. If you have any questions or problems regarding the release, please contact the Interoperability Service ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- **Keywords linked to predefined concepts**: Keywords can now be linked to unique designations from controlled vocabularies. Technically, this is done via an additional text field (`uri`). _Attention: This changes the structure of the data returned by the public and partner API._ This change has been approved by the Steering Committee.
- **Improved display of allowed values**: In the data structures, the allowed values of a field can be defined. As soon as the corresponding field is clicked in the visualisation, the allowed values are now also displayed in the sidebar. This makes it easier to see which values are permitted per field.
- **Improved catalogue search**: The search in the catalogue has been further expanded. It no longer distinguishes between upper and lower case. It also takes into account the additional fields contact person and deputy contact person, contact point as well as the identifiers of the objects.
- **Internal improvements and bug fixes**