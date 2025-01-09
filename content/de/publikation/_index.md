---
title: Metadaten publizieren
slug: publizieren
description: "Sie möchten Ihre Datensammlungen, elektronischen Schnittstellen, Behördenleistungen oder einzelne Datenelemente auf der Interoperabilitätsplattform I14Y beschreiben? In diesem Teil wird aufgezeigt, wie solche Metadaten erfasst werden."
weight: 30
type: docs
keywords: [Interoperabilitätsplattform I14Y, I14Y, Publikation, Veröffentlichung, Metadaten, Katalog, Konzepte]
---

![Szene aus dem Erklärvideo zur Interoperabilitätsplattform I14Y](/handbook/img/i14y-film_erfassen.png)

Die Interoperabilitätsplattform I14Y lässt sich vielfältig einsetzen: Im Katalog-Bereich werden Datensammlungen, elektronische Schnittstellen und Behördenleistungen verzeichnet. Und unter "Konzepte" lassen sich einzelne Datenelemente beschreiben. Werden Konzepte öffentlich freigegeben, können sie von anderen Nutzerinnen und Nutzern wiederverwendet werden. 

```mermaid
flowchart LR
    i14y(Interoperabilitätsplattform I14Y)
    catalog(Katalog)
    dataset(Datensammlung)
    dataservice(Elektronische Schnittstelle)
    publicservice(Behördenleistung)
    concepts(Konzepte)


    i14y-->catalog
    i14y-->concepts
    
    catalog-->dataset
    catalog-->dataservice
    catalog-->publicservice

    
style i14y fill:#6CC8FF
style i14y stroke:black

style catalog fill:#Bfe2ab
style catalog stroke:black

style dataset fill:#Fbb54e
style dataset stroke:black

style dataservice fill:#Fbb54e
style dataservice stroke:black

style publicservice fill:#Fbb54e
style publicservice stroke:black

style concepts fill:#Bfe2ab
style concepts stroke:black
```

Abhängig davon, was beschrieben werden soll, müssen andere Aspekte berücksichtigt werden. In diesem Teil des Handbuchs wird gezeigt, wie die verschiedenen Metadaten auf der I14Y-Interperabilitätsplattform erfasst werden.