---
title: Prossimo rilascio
translationKey: next-release
slug: prossimo-rilascio
weight: 10
type: docs
keywords: [I14Y, Piattaforma di interoperabilità I14Y, IOP, Changelog, Releases, Versioni, Sviluppo software]
draft: false
---

Il prossimo rilascio di I14Y è previsto per la sera del 6 maggio 2026. Comprende le modifiche e le estensioni descritte di seguito. Le organizzazioni partner di I14Y con il relativo accesso possono testare sin da subito il software aggiornato nell'[ambiente di collaudo di I14Y](https://input.i14y-a.admin.ch). Se non avete ancora accesso a questo ambiente, utilizzato per i test del software, vi preghiamo di contattare il Servizio di interoperabilità.

Si prega di notare che, in caso di problemi, la data di rilascio può essere posticipata a breve termine. È anche possibile che singole funzionalità vengano rimosse dal rilascio e attivate solo in un secondo momento. Per domande o problemi relativi a questo rilascio potete rivolgervi al Servizio di interoperabilità ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Modifica delle strutture nell'interfaccia utente:** classi, attributi e associazioni di una struttura dati possono ora essere modificati direttamente nell'interfaccia utente. Tutte le proprietà visualizzate nella barra laterale sono modificabili. Durante la modifica di un attributo, è inoltre possibile cercare un concetto e collegarlo a una versione specifica.

**Metadati di sistema nella Partner API:** tutti gli oggetti contengono ora una sezione "system" nelle risposte JSON della Partner API. Essa contiene la data di creazione (`createdAt`), la data dell'ultima modifica (`modifiedAt`) e il tipo di creazione (`creationType`). Quest'ultimo indica se un oggetto è stato creato manualmente tramite un token del browser (_Manual_) oppure automaticamente tramite un token M2M (_Automated_).

**Più identificatori per concetti e prestazioni amministrative:** concetti e prestazioni amministrative possono ora avere più identificatori. A tale scopo è stata introdotta la proprietà `identifiers` come array. Per non interrompere le integrazioni esistenti, il precedente campo `identifier` continuerà per il momento a essere restituito; entrambi i campi compaiono contemporaneamente nelle risposte dell'API. Nota: il campo `identifier` (singolare) sarà rimosso in una versione futura. Gli script che utilizzano questo campo durante la creazione degli oggetti dovranno essere adeguati per tempo.

**Creare una nuova versione di una tabella di mapping:** è ora possibile creare una nuova versione a partire da una tabella di mapping esistente.

**Ricerca nel catalogo tramite la Partner API:** il punto di accesso per la ricerca nel catalogo è ora disponibile anche tramite la Partner API. La ricerca supporta diversi parametri, come il termine di ricerca e la lingua.

**Diritti di modifica estesi per i submitter:** i submitter possono ora modificare oggetti con stato di registrazione "Initial" o "Kandidat", anche se sono già pubblicati. La condizione è che non siano stati precedentemente bloccati.

**Distribuzioni nella pagina di dettaglio del dataset:** le distribuzioni associate a un dataset vengono ora visualizzate direttamente nella pagina descrittiva del dataset.

**Esportazione di codelist senza annotazioni:** le codelist possono ora essere esportate, se desiderato, anche senza annotazioni; i formati supportati sono JSON e CSV.

**Aggiornamenti tecnici nonché piccoli miglioramenti e correzioni di bug**