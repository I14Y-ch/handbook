---
title: Beispiele für reguläre Ausdrücke
slug: regex
weight: 30
type: docs
keywords: [I14Y-Interoperabilitätsplattform, I14Y-IOP, Glossar, Eingabefelder, Standard]
---

Dank regulären Ausdrücken (_Regular expression_, kurz _Regex_) können Zeichenketten beschrieben werden. Werden reguläre Ausdrücke auf der I14Y-Interoperabilitätsplattform hinterlegt, können später die Daten anhand dieser Angaben überprüft werden. So lassen sich fehlerhafte Eingaben rasch korrigieren. Dank den regulären Ausdrücken kann zudem die Datenqualität automatisiert überprüft werden. Im Laufe der Jahre wurden verschiedene Regex-Implementierungen entwickelt, die sich teilweise in wichtigen Details unterscheiden. Auf der I14Y-Interoperabilitätsplattform wird die grundlegende, weit verbreitete Syntax _Basic Regular Expressions (BRE)_ bevorzugt.

Nachfolgend werden einige Beispiele für solche Ausdrücke aufgelistet. 

| Ausdruck | Beschreibung | Beispiel |
| --- | --- | --- |
| `\+41\s\d{2}\s\d{3}\s\d{2}\s\d{2}` | Schweizer Telefonnummer | +41 26 262 62 62 |
| `[A-Za-z0-9\-\_\.\+]{1,64}@[A-Za-z0-9\-\_\.]+\.[a-zA-Z]+` | E-Mail-Adresse | i14y@bfs.admin.ch |
| `(0[1-9]\|[12][0-9]\|3[01])\.(0[1-9]\|1[1,2])\.(19\|20)\d{2}` | Datum zwischen dem 01.01.1900 und dem 31.12.2099 | 15.05.2023 |
| `http[s]?:\/\/[\w+\.]?\w+\.\w+` | URL | https://i14y.admin.ch |
| `\-?\d{1,2}\s\°C` | Temperaturangabe zwischen -99 und 99, inklusive der Masseinheit °C. | -12 °C |
| `756\.\d{4}\.\d{4}\.\d{2}` | Schweizer [AHV-Nummer](https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ahv/grundlagen-gesetze/ahv-nummer.html) | 756.1234.5678.97 |
{.regex}
