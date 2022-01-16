# Abbrechen von Commits
## Ziel
- Wie Commits vom lokalen Repository rückgängig gemacht werden.

## 1. Abbrechen von Commits
Manchmal stellest du fest, dass die neuen Commits falsch sind und abbrechen möchtest. Es gibt mehrere Möglichkeiten, das Problem zu lösen und wir verwenden hierbei die sicherste.

Um das Commit abzubrechen, erstellen wir ein neues Commit und stornieren die unerwünschten Änderungen.

## 2. Bearbeite die Datei und führe einen Commit durch
Ersetze `hallo.html` durch den folgenden Inhalt:

```html
<html>
  <head>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <!-- This is an unwanted but committed change -->
  </body>
</html>
```

Befehl:  
```bash
git add hallo.html
git commit -m "Oops, we didn't want this commit"
```

## 3. Mache einen Commit mit neuen Änderungen, die vorherige Änderungen verwerfen
Um den Commit abzubrechen, müssen wir einen Commit erstellen, der die Änderungen löscht, die durch einen unerwünschten Commit gespeichert wurden.

Befehl:  
```bash
git revert HEAD
```

Gehe zum Editor, wo du die Standard Commit-Nachricht bearbeiten oder unverändert lassen möchtest. Speichere und schließe die Datei.

Du wirst sehen...

Ergebnis:  
```bash
$ git revert HEAD --no-edit
# [main 45fa96b] Revert "Oops, we didn't want this commit"
# 1 files changed, 1 insertions(+), 1 deletions(-)
```

Da wir den letzten Commit abgebrochen haben, können wir `HEAD` als Argument für den Abbruch verwenden. Wir können jeden zufälligen Commit im Verlauf stornieren und auf seinen Hash-Wert hinweisen.

**Hinweis:** Der `--no-edit` Parameter kann ignoriert werden. Es war notwendig, die Ausgabedaten zu generieren, ohne den Editor zu öffnen.

## 4. Überprüfe das Protokoll
Die Überprüfung des Protokolls zeigt die unerwünschten Abbrüche und Festschreibungen in unserem Repository.

Befehl:  
```bash
git hist
```

Ergebnis:  
```bash
$ git hist
# * 744ff5f 2022-01-16 | Revert "Oops, we didn't want this commit" (HEAD -> main) [Gregor Biswanger]
# * 076f969 2022-01-16 | Oops, we didn't want this commit [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Diese Technik kann auf jeden Commit angewendet werden (es kann jedoch zu Konflikten kommen). Es kann sogar in öffentlichen Branches von Remote-Repositories sicher verwendet werden.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/13-level.md).