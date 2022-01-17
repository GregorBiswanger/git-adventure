# Ändern des ursprünglichen Repository
## Ziel
- Um Änderungen am ursprünglichen Repository vorzunehmen, damit wir versuchen können, die Änderungen abzurufen.

## 1. Nehme eine Änderung im ursprünglichen my-project-Repository vor

Befehl:  
```bash
cd ../my-project
```

**HINWEIS:** Wir befinden uns jetzt im `my-project` Repository.

Nehme die folgenden Änderungen an der README.md-Datei vor:

```
Dies ist das Hello World-Beispiel aus dem Git-Workshop.
```

Füge diese Änderung jetzt hinzu und übernehmen diese.

Befehl:  
```bash
git add README.md
git commit -m "Changed README in original repo"
```

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/33-level.md).