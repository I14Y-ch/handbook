---
title: Metadatenkatalog für die Schweiz
slug: willkommen
translationKey: welcome
description: 'Die Interoperabilitätsplattform I14Y ist das zentrale Verzeichnis der Daten, elektronischen Schnittstellen und Behördenleistungen in der Schweiz. Die Plattform stellt zudem Werkzeuge zur Verfügung, damit Daten mehrfach genutzt werden können. Dies entlastet Unternehmen, Bürgerinnen und Bürger sowie die Behörden.'
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Einleitung, Interoperabilität, Mehrfachnutzung, Schweiz, Datensatz, elektronische Schnittstelle, elektronische Schnittstelle, API, Once-Only-Prinzip, Sekundärnutzung von Daten, Harmonisierung, Standardisierung]
weight: 0
type: docs
---

{{<alert title="Serverausfall bei I14Y. Wir versuchen die Probleme so rasch wie möglich zu beheben." color="info">}}

![Szene aus dem Erklärvideo zur Interoperabilitätsplattform I14Y](/handbook/img/i14y-film_55.png)

Welche Daten sind verfügbar? Und wie lassen sie sich abrufen? Die Interoperabilitätsplattform I14Y ist das zentrale Verzeichnis der Daten, elektronischen Schnittstellen und Behördenleistungen der öffentlichen Verwaltungen in der Schweiz. Die Plattform macht Daten auffindbar. Und sie zeigt auf, wie darauf zugegriffen werden kann.  

I14Y dokumentiert, ob die betreffenden Daten frei oder eingeschränkt verfügbar sind, ob sie einem Standard entsprechen, wer die Sammlung verantwortet, wie regelmässig die Daten aktualisiert werden und wie ihre Qualität einzuschätzen ist. Die Plattform hilft also den Kontext eines Datensatzes zu verstehen. Auf I14Y sind ausschliesslich Metadaten zu finden; die eigentlichen Daten verbleiben bei den zuständigen Stellen. I14Y fördert den effizienten Datenaustausch innerhalb der öffentlichen Verwaltungen wie auch zwischen den Behörden, den Unternehmen sowie den Bürgerinnen und Bürgern. 

Behörden und staatsnahe Unternehmen können die Plattform als Werkzeug nutzen, um ein Inventar ihrer Datensätze zu erstellen. Gleichzeitig dient I14Y als Hilfsmittel, um die Daten zu harmonisieren, sodass diese mehrfach genutzt werden können. Damit können redundante Datenerhebungen vermieden werden -- wie es der Bund mit dem _Once-Only-Prinzip_ vorsieht. 

{{<alert title="Was ist das <i>Once-Only-Prinzip</i>?" color="info">}}

Bislang mussten Bürgerinnen und Bürger sowie Unternehmen ihre Informationen oftmals mehrfach dem Staat melden. Mit dem [Programm Nationale Datenbewirtschaftung](https://www.bfs.admin.ch/bfs/de/home/nadb/nadb.html) hat es sich der Bund zum Ziel gesetzt diese Doppelspurigkeiten zu vermeiden. Dadurch werden die Bürgerinnen und Bürger sowie die Unternehmen entlastet. Und der Staat kann seine Leistungen effizienter erbringen. 

```mermaid
flowchart TD
    subgraph titel[" "]
        
    subgraph aktuell1[ ]
            B(fa:fa-user Einwohnerin/ \nEinwohner)
            B-->|meldet|C(fa:fa-building \nAmt 1)
            B-->|meldet|D(fa:fa-building \nAmt 2)
            B-->|meldet|E(fa:fa-building \nAmt 3)
            B-->|meldet|F(fa:fa-building \nAmt 4)
        end
    
        subgraph ziel1[ ]
            BB(fa:fa-user Einwohnerin/ \nEinwohner)
            BB-->|meldet|CC(fa:fa-table \nAmt 1)
            CC-->DD(fa:fa-building \nAmt 2)
            CC-->EE(fa:fa-building \nAmt 3)
            CC-->FF(fa:fa-building \nAmt 4)
            CC-->GG(fa:fa-building \nAmt ...)
        end
    end
    
    style B fill: #Bfe2ab
    style BB fill: #Bfe2ab
    style C fill: #Ff987a
    style CC fill: #Ff987a
    style D fill: #Ff987a
    style DD fill: #Ff987a
    style E fill: #Ff987a
    style EE fill: #Ff987a
    style F fill: #Ff987a
    style FF fill: #Ff987a
    style GG fill: #Ff987a
```

Damit das _Once-Only-Prinzip_ Realität wird, müssen die verschiedenen Verwaltungseinheiten Daten direkt austauschen können. Voraussetzung dafür ist, dass eine rechtliche Grundlage besteht und dass ein Austausch insbesondere aus der Perspektive des Datenschutzes zulässig ist. Zudem muss geklärt werden, ob und wie lange Daten für eine mögliche Mehrfachnutzung auf Vorrat gespeichert werden dürfen. Einzelne Kantone haben die Mehrfachnutzung von Daten bereits gesetzlich festgeschrieben.  

{{</alert>}}
