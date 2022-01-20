# Änderungen machen

## Ziele
Um zu lernen, den Zustand des Arbeitsverzeichnisses zu überwachen.

## 1. Ändern der „Hallo Welt!“-Seite
Fügen wir unserer Begrüßung einige HTML-Tags hinzu. Ändere den Dateiinhalt in:

```html
<h1>Hello, World!</h1>
```

## 2. Überprüfen des Status
Überprüfe den Status des Arbeitsverzeichnisses.

Befehl:  
```bash
git status
```

Ergebnis:  
```bash
$ git status
# On branch main
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working irectory)
#
#   modified:   hallo.html
#
# no changes added to commit (use "git add" and/or "git commit -a")
```

Der erste wichtige Aspekt hier ist, dass Git weiß, dass die hallo.html-Datei geändert wurde, aber diese Änderungen noch nicht in das Repository übernommen wurden.

Ein weiterer Aspekt ist, dass die Statusmeldung Hinweise darauf gibt, was als nächstes zu tun ist. Wenn du diese Änderungen zum Repository hinzufügen möchtest, verwende den `git add` Befehl. Um die Änderungen rückgängig zu machen, verwende `git checkout`.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/03-level.md).