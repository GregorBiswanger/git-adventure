# Weitere Informationen zur Struktur
## Ziel
- Füge eine weitere Datei in unserem Repository hinzu.

## 1. Hinzufügen von index.html
Lass uns eine index.html-Datei zum Repository hinzufügen. Die folgende Datei ist perfekt für diesen Zweck.

index.html  
```html
<html>
  <body>
    <iframe src="lib/hallo.html" width="200" height="200" />
  </body>
</html>
```

Füge die Datei hinzu und mache einen Commit.

```bash
git add index.html
git commit -m "Added index.html."
```

Wenn du jetzt die index.html öffnest, solltest du einen Teil der Hallo-Seite in einem kleinen Fenster sehen.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/18-level.md).