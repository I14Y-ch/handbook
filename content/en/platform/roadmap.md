---
title: Road map
slug: roadmap
translationKey: roadmap
weight: 30
type: docs
keywords: [I14Y, I14Y interoperability platform, system architecture, technology, database]
---

The I14Y Interoperability Platform is developed on the Confederation's behalf by the Interoperability Office (IOS) in collaboration with the Federal Office of Information Technology, Systems and Telecommunication (FOITT). The range of functions is constantly being expanded.

The IOS is prioritising the following functionalities in the coming months. The areas of focus may change at short notice. Please contact the IOS if you need detailed information on the further development of the platform or if you have requests for specific functions.

{{<alert title="Your suggestions are welcome" color="success">}}
If you find an opportunity for improvement or a bug on I14Y, the development team would be grateful to hear your suggestions. The best way to reach us is via [email](mailto:i14y@bfs.admin.ch). Other feedback channels will be offered at a later date.

{{</alert>}}

{{< mermaid width="650px" >}}
timeline
    title Roadmap Interoperability Platform I14Y
    
    section 2025
        Q4 2025 (12.09.2025 - 12.2025)
        : The platform will be migrated to the public cloud. 1️⃣
        : Complex data set structures can be edited via the web interface.1️⃣
        : URIs/permalinks will be introduced for all objects.1️⃣
        : Reuse of concepts 1️⃣
        : Additional work on the structures – adaptation to EMBAG specifications 1️⃣
        : ⭐ Introduction of mapping tables to document differences between concepts.1️⃣
        : Introduction of logging options (audit trail) 2️⃣
        : ⭐ A toolbox with additional import and export options will be made available Phase II. 2️⃣
        : Improvement of the user interface based on user feedback 3️⃣

    section 2026
        Q1-Q4 2026 (05.12.2025 - 31.12.2026 / tbd)
        : Harmonisation tools – EMBAG specifications 1️⃣
        : Regulate co-development 1️⃣
        : Release of the programme code (open source). 1️⃣
        : Completion of the project phase. 1️⃣
        : Manual, instructions. Etc 1️⃣
        : Changes to objects are recorded (audit trail) 2️⃣
        : ⭐ Notifications of changes to metadata can be subscribed to. 2️⃣
        : DCAT Quality Dashboard 2️⃣
        : Adaptation to DCAT AP v3 2️⃣
        : Additional dashboard evaluations 3️⃣
        : Automatic onboarding of the federal administration. 3️⃣
        : Improvement of the user dashboard 3️⃣
        : Preview of data will be integrated. 3️⃣
        : Expansion of connection options to tools.3️⃣
        : ⭐ Option for documenting data flows (data lineage) will be created 3️⃣

{{< /mermaid >}}

*⭐ Entries marked with a star are suggestions from the DVS BS+ project.*

*1️⃣2️⃣3️⃣ The numbers represent the priority of the features in the development plan.*

## Electronic interfaces (APIs)
I14Y already offers electronic interfaces (APIs) for retrieving, saving and editing metadata on the platform. However, they are still subject to change. Therefore, they have not been communicated publicly yet. In addition, many of the interfaces can only be accessed from the federal network. Please contact the [Interoperability Office](mailto:i14y@bfs.admin.ch) if you already rely on the interfaces now.

Stable electronic interfaces are to be made available in the coming months. They will be accessible at [api.i14y.admin.ch](https://api.i14y.admin.ch). Detailed documentation will also be made available there. The service will be gradually expanded upon.

Publicly published metadata can be retrieved via these interfaces. In addition, it is possible to obtain internal metadata of one's own organisation without manual intervention. For this purpose, a so-called API gateway is connected to the system.

### Adding further fields
I14Y plans to introduce further fields in the catalogue section so that data sets and electronic interfaces can be described in even greater detail. In addition, this should ensure interoperability with other data portals. Some of the fields will be available exclusively in the internal areas, others will supplement the public offer.

In a second stage, individual organisations will be able to define their own fields to better describe their data sets and interfaces for internal use and connection to specialised applications.

### Quality information
I14Y collects assessments of the quality of each data set. In future, it will also be possible to obtain this information automatically via an electronic interface.
Later, it will be possible to store information on the quality of the individual data elements. For example, the filling capacity of a data element could be documented. This information should also be accessible via the API one day.

### Open Source
The programme code of I14Y is to be published under a [free licence](https://www.gnu.org/licenses) licence. This is in accordance with the future Federal Act on the Use of Electronic Means to Conduct the Tasks of the Authorities (EMBAG). According to Article 9, the federal authorities are to make their source codes -- as far as possible -- freely available.

{{<card header="Legal basis" title="__Art. 9 Open Source Software__" footer="Federal Act on the Use of Electronic Means to Conduct the Tasks of the Authorities [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)">}}

The federal authorities subject to this Act shall, if it is possible and reasonable and if the rights of third parties are respected, disclose the source code of software which they develop or have developed for the performance of their tasks. They shall allow any person to use, develop and pass on the software and shall not charge any licence fees.

{{</card>}}

I14Y publishes source codes and scripts under the name i14y-ch on the [platform Github](https://github.com/i14y-ch). This manual and the prototype of an API developed at the GovTech Hackathon 2023 are already available. Sample scripts for data reference are also to be published on the platform. The first modules of I14Y are expected to be available in Q4 2023. Detailed information on the possibilities of use and further procedures will be added to this manual at that time.