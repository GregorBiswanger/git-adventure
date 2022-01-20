# Erstellen eines Projekts

## Ziele
Um zu lernen, wie man ein Git-Repository von Grund auf neu erstellt und den Status überprüft.

## 1. Erstelle eine „Hallo Welt!“ Webseite
Beginne mit einem leeren Arbeitsverzeichnis. Erzeuge das Verzeichnis mit dem Namen „my-project“ im Root vom Git Adventure-Verzeichnis. Anschließend erstelle darin eine hallo.html-Datei mit den folgenden Inhalt: `Hallo Welt!`.

Befehle:  
```bash
mkdir my-project
cd my-project 
code hallo.html
```

hallo.html Inhalt:  
```html
Hallo Welt!
```

## 2. Erstelle ein Repository
Du hast also ein Verzeichnis, das eine Datei enthält. Führe den Befehl `git init` aus, um ein Git-Repo aus diesem Verzeichnis zu erstellen.

Befehl:  
```bash
git init
```

Ergebnis:  
```bash
$ git init
# Initialized empty Git repository in ../git-adventure/my-project/.git/
```

## 3. Füge die Webseite zum Repository hinzu
Lass uns nun die Webseite zum Repository hinzufügen.

Befehl:  
```bash
git add hallo.html
git commit -m "First Commit"
```

Du wirst sehen...

Ergebnis:  
```bash
$ git add hallo.html
$ git commit -m "First Commit"
# [main (root-commit) 911e8c9] First Commit
# 1 files changed, 1 insertions(+), 0 deletions(-)
# create mode 100644 hallo.html
```

## 4. Überprüfe den Status des Repositories
Verwende den Befehl `git status`, um den aktuellen Status des Repositories zu überprüfen.

Befehl:  
```bash
git status
```

Du wirst sehen...

Ergebnis:  
```bash
$ git status  
# On branch main  
# nothing to commit (working directory clean)`
```

Der Befehl überprüft den Status und meldet, dass es nichts zu übergeben gibt, was bedeutet, dass das Repository den aktuellen Status des Arbeitsverzeichnisses speichert und keine Änderungen aufzuzeichnen sind.

Wir werden den Befehl `git status` verwenden, um den Status sowohl des Arbeitsverzeichnisses als auch des Repositories zu überwachen.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/02-level.md).