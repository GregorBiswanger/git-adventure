# Änderungen festhalten

## Ziele
Änderungen mit Commits speichern.

## Staging und Committing

Ein Staging-Schritt in Git ermöglicht es uns, weiterhin Änderungen am Arbeitsverzeichnis vorzunehmen, und wenn du dich entscheidest, mit der Versionskontrolle zu interagieren, kannst du die Änderungen flexibel in kleinen Commits festhalten.

Angenommen, du hast drei Dateien bearbeitet (a.html, b.html und c.html). Danach musst du alle Änderungen festschreiben, sodass die Änderungen an a.html und b.html in ein einziges Commit gehören. Die Änderungen an c.html sind allerdings nicht logisch mit den ersten beiden Dateien verknüpft und soll in einem separaten Commit gespeichert werden.

Theoretisch kannst du folgendes tun:
```bash
git add a.html
git add b.html  
git commit -m "Changes for a and b"

git add c.html
git commit -m "Unrelated change to c"
```

Durch die Trennung von Staging und Commit, können wir ganz einfach Steuern, was in ein Commit aufgenommen werden soll und was nicht.

## 1. Änderungen festschreiben

Nun, genug über das Staging. Lass uns die Änderungen an das Repository übertragen.

Als du zuvor mit `git commit` die erste hallo.html-Version in das Repository gespeichert hast, haben wir mit dem -m Paramter ein Kommentar hinzugefügt. Der Commit-Befehl ermöglicht die interaktive Bearbeitung von Kommentaren für den Commit. Jetzt wollen wir sehen, wie es funktioniert.

Wenn du den -m Parameter in der Befehlszeile weg lässt, wird git dich in den Editor deiner Wahl aus der Liste (in der Reihenfolge der Priorität) bringen:

- GIT_EDITOR-Umgebungsvariable
- core.editor Konfigurationseinstellung
- VISUAL-Umgebungsvariable
- EDITOR-Umgebungsvariable

Ich habe core.editor auf Visual Studio Code gesetzt:  
```bash
git config --global core.editor "code --wait"
```

Lass uns jetzt Comitten und den Status überprüfen.

Befehl:  
```bash
git commit
```

In deinem Editor wirst du folgendes sehen:

```bash
|  
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch main
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#   modified:   hallo.html
#  
```

Gebe in der ersten Zeile den Kommentar ein: „Added h1 tag“. Speichere die Datei und beende den Editor. Das solltest du sehen...

Ergebnis:  
```bash
git commit
# hint: Waiting for your editor to close the file... 
# [main 41b3c46] Added h1 tag
# 1 files changed, 1 insertions(+), 1 deletions(-)
```
## 2. Status überprüfen

Lass uns am Ende den Status überprüfen.

Befehl:  
```bash
git status
```

Ergebnis: 
```bash 
$ git status
# On branch main
# nothing to commit (working directory clean)
```

Das Arbeitsverzeichnis ist sauber, wir können weiterarbeiten.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/05-level.md).