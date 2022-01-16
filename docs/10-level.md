# Lokale Änderungen verwerfen (vor dem Staging)

## Ziel
- Lerne wie du deine Änderungen des Arbeitsverzeichnisses wieder verwirfst.

## 1. Auschecken des Main-Zweigs
Stelle sicher, dass du dich auf dem letzten Commit im Main-Branch befindest, bevor du loslegst.

Befehl:  
```bash
git checkout main
```

## 2. Ändere die hallo.html Datei
Es kommt vor, dass du eine Datei in deinem lokalen Arbeitsverzeichnis änderst und die festgeschriebenen Änderungen einfach verwerfen möchtest. Hier hilft dir der `Checkout`-Befehl.

Ändere die `hallo.html` mit einem unerwünschten Kommentar.
  
```html
<html>
  <head>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <!-- This is a bad comment.  We want to revert it. -->
  </body>
</html>
```

## 3. Überprüfe den Status
Überprüfe zunächst den Status des Arbeitsverzeichnisses.

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
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#   modified:   hallo.html
#
# no changes added to commit (use "git add" and/or "git commit -a")
```

Wir sehen, dass die `hallo.html` Datei geändert, aber noch nicht bereitgestellt wurde.

## 4. Zurücksetzen der Änderungen im Arbeitsverzeichnis
Verwende den `checkout` Befehl, um die aktuelle Version der `hallo.html` Datei aus dem Repository auszuchecken.

Befehl:  
```bash
git checkout hallo.html
git status
code hallo.html
```

Ergebnis:
```bash
$ git checkout hallo.html
$ git status
# On branch main
# nothing to commit (working directory clean)
```

Der Statusbefehl zeigt an, dass es keine unstagierten Änderungen im Arbeitsverzeichnis gab. Und unser „schlechter Kommentar“ ist nicht mehr in der Datei enthalten.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/11-level.md).