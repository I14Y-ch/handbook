---
title: Datensatz
slug: datensatz
weight: 20
type: docs
translationKey: dataset
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, Interoperabilität, Datensatz, Datensatz, Dataset, Datensatz, Erfassen, Erfassung, Inventar, Katalog]
---

```mermaid
    flowchart TD
        dataset1(Datensatz)
        structure1(Struktur)
        dataelement1(Datenelement)
        concept1(Konzept)
        codelist(Codeliste)
        numeric(Zahl)
        string(Zeichenkette)
        date(Datum)

        dataset1---|hat eine|structure1
        structure1---|beinhaltet ein|dataelement1
        dataelement1---|hat ein|concept1
        concept1---|ist eine|codelist
        concept1---|ist eine|numeric
        concept1---|ist eine|string
        concept1---|ist ein|date

    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black

    style dataelement1 fill:#Fbb54e
    style dataelement1 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black

    style codelist stroke:#Ff8076
    style numeric stroke:#Ff8076
    style string stroke:#Ff8076
    style date stroke:#Ff8076
```

Auf der Interoperabilitätsplattform I14Y können Datensätze beschrieben werden. Unter einem Datensatz ist eine Zusammenstellung von Daten zu verstehen, die von einer einzigen Quelle veröffentlicht oder kuratiert werden und durch eine gemeinsame Idee oder ein gemeinsames Konzept verbunden sind. 

Zusätzlich zu den Kataloginformationen lassen sich auf der Interoperabilitätsplattform I14Y auch strukturelle Metadaten erfassen. Damit kann die "Anatomie des Datensatzes" detailliert beschrieben werden. Jeder Datensatz hat eine Struktur, die aus mindestens einem Datenelement besteht. Jedes dieser Datenelemente referenziert ein Konzept. Es kann sich dabei um eine Zeichenkette, um eine Zahl, um ein Datum oder um eine Codeliste handeln. Detailinformationen zu Datensätzen sind im Abschnitt zum [Informationsmodell](/handbook/de/gouvernanz/informationsmodell) zu finden.

Soll ein Datensatz erfasst werden, sind mindestens die Kataloginformationen zu hinterlegen. Anschliessend besteht die Möglichkeit, die Struktur des Datensatzes  zu beschreiben. Auch Metainformationen zu den einzelnen Datenelementen lassen sich erfassen. Schliesslich werden die eigentlichen Daten verknüpft. Und es können Angaben zur Qualität des Datensatzes gemacht werden. 

```mermaid
    flowchart LR
        catalog(Kataloginformationen)
        content(Inhalt)
        structure(Struktur)
        distribution(Distributionen)
        qualityinformation(Qualitätsinformationen)

        catalog---structure
        catalog---content
        catalog---distribution
        catalog---qualityinformation


    style catalog fill:#6CC8FF
    style catalog stroke:black

    style content fill:#Bfe2ab
    style content stroke:black
    style structure fill:#Bfe2ab
    style structure stroke:black
    style distribution fill:#Bfe2ab
    style distribution stroke:black
    style qualityinformation fill:#Bfe2ab
    style qualityinformation stroke:black
```

Datensätze werden im organisationsinternen Bereich erfasst. Sollen sie öffentlich auf der Interoperabilitätsplattform I14Y publiziert werden, müssen die Daten harmonisiert sein. Zudem bestehen höhere Anforderungen an die Metadaten. So müssen Beschreibungen zu Datensätzen, die öffentlich gelistet werden sollen, etwa zwingend Qualitätsinformationen enthalten. Publizierte Metadaten können nicht mehr einfach angepasst werden. 

Weitere Informationen zum Arbeitsablauf und zum Publikationsworkflow sind im Kapitel [Rollen und Prozesse](/handbook/de/gouvernanz/arbeitsablauf) zu finden. Das I14Y-Team berät Sie gerne bei Ihren Vorhaben zur Datenharmonisierung. 