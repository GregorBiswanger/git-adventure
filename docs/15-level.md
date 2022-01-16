# Commits ändern
## Ziel
- Um zu erfahren, wie man einen bereits bestehenden Commit ändert.

## 1. Ändere die Webseite und halte es fest
Füge einen Autorenkommentar auf der Seite hinzu.

```html
<!-- Author: Gregor Biswanger -->
<html>
  <head>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

Befehl:  
```bash
git add hallo.html
git commit -m "Add an author comment"
```

## 2. Hoppla... Die E-Mail Adresse ist erforderlich
Nachdem du ein commit gemacht hast, fällt dir gerade ein, dass jeder gute Kommentar die E-Mail des Autors enthalten sollte. Bearbeite die Hallo-Seite, um eine E-Mail bereitzustellen.

```html
<!-- Author: Gregor Biswanger (gregor.biswanger@web-enliven.de) -->
<html>
  <head>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

## 3. Ändere das vorherige Commit
Wir möchten keinen weiteren Commit zum Hinzufügen der E-Mail-Adresse erstellen. Lass uns das vorherige Commit ändern und eine E-Mail-Adresse hinzufügen.

Befehl:  
```bash
git add hallo.html
git commit --amend -m "Add an author/email comment"
```

Ergebnis:  
```bash
$ git add hallo.html
$ git commit --amend -m "Add an author/email comment"
# [main e9c95d3] Add an author/email comment
#  Date: Sun Jan 16 20:57:50 2022 +0100
#  1 file changed, 1 insertion(+)
```

## 4. Siehe Verlauf

Befehl:  
```bash
git hist
```

Ergebnis:  
```bash
$ git hist
# * e9c95d3 2022-01-16 | Add an author/email comment (HEAD -> main) [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Der neue „Autor/E-Mail“-Commit ersetzt den ursprünglichen „Autor“-Commit. Derselbe Effekt kann erzielt werden, indem der letzte Commit im Branch zurückgesetzt und neue Änderungen erneut festgeschrieben werden.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/16-level.md).