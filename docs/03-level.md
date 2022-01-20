# Staging der Änderungen

## Ziele
Um zu lernen, Änderungen für die bevorstehenden Commits zu inszenieren.

## 1. Änderungen hinzufügen
Jetzt befehle Git, Änderungen zu inszenieren (Stagen). Überprüfe den Status.

Befehl:  
```bash
git add hallo.html
git status
```

Du wirst sehen...

Ergebnis:  
```bash
$ git add hallo.html  
$ git status
# On branch main
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#  
#   modified:   hallo.html
#
```

Änderungen an hallo.html wurden inszeniert (staged). Das bedeutet, dass Git von der Änderung weiß, aber sie ist nicht dauerhaft im Repository. Der nächste Commit wird die inszenierten Änderungen enthalten.

Solltest du dich entscheiden, die Änderung nicht zu übernehmen, erinnert dich der `git status` Befehl daran, dass du den `git reset` Befehl verwenden kannst, um diese Änderungen rückgängig zu machen.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/04-level.md).