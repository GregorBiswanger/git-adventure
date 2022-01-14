# Erstellen eines Projekts

## Ziele
Um zu lernen, wie man ein Git-Repository von Grund auf neu erstellt.

## 1. Erstelle eine „Hallo Welt!“ Webseite
Beginne mit einem leeren Arbeitsverzeichnis. Erzeuge das Verzeichnis mit dem Namen „my-project“ im Root vom Git Adventure-Verzeichnis. Anschließend erstelle darin eine hallo.html-Datei mit den folgenden Inhalt: `Hallo Welt!`.

Befehle:  
`mkdir my-project`  
`cd my-project`  
`code hallo.html`

hallo.html Inhalt:  
`Hallo Welt!`

## 2. Erstelle ein Repository
Du hast also ein Verzeichnis, das eine Datei enthält. Führe den Befehl `git init` aus, um ein Git-Repo aus diesem Verzeichnis zu erstellen.

Befehl:  
`git init`

Ergebnis:  
`$ git init`    
`Initialized empty Git repository in ../git-adventure/my-project/.git/`

## 3. Füge die Webseite zum Repository hinzu
Lass uns nun die Webseite zum Repository hinzufügen.

Befehl:  
`git add hallo.html`  
`git commit -m "First Commit"`

Du wirst sehen…

Ergebnis:  
`$ git add hallo.html`  
`$ git commit -m "First Commit"`  
`[master (root-commit) 911e8c9] First Commit`  
` 1 files changed, 1 insertions(+), 0 deletions(-)`  
` create mode 100644 hallo.html`

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/02-level.md).