---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability Platform I14Y, IOP, Changelog, Releases, Versions, Software Development]
draft: false
---

The next release of I14Y is scheduled for the early evening of 24 September 2025. It includes the adjustments and enhancements listed below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y pre-publication environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Service if you do not yet have access to this environment used for software testing.
 
Please note that the release date may be postponed at short notice in the event of problems. It is possible that individual functions may be removed from the release and only activated at a later date. If you have any questions or problems regarding the release, please contact the Interoperability Service ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- A detailed technical description of the data structure can be stored for every dataset description on I14Y. The stored structures can now be downloaded from the public website in multiple formats (TTL, RDF, JSON-LD).
- All metadata of a dataset can now be exported from the public website via a newly introduced button.
- Web addresses inserted into descriptions are automatically displayed as clickable links.
- When retrieving information via the API, all results are now returned if no number of desired items per page (pageSize) is specified.
- There is now a direct link in the website footer to the I14Y toolbox with helpful tools for importing metadata.
- The search index is now built independently of application startup. The platform therefore becomes available more quickly after a restart and search is more stable.
- New internal monitoring endpoints (health checks) help detect technical issues more quickly.
- Various bugs have been fixed.
