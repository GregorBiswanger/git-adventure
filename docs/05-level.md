# Die Zustände

## Ziel
- Verstehen, dass Git mit Zuständen arbeitet, nicht mit den Dateien.

Die meisten Versionskontrollsysteme arbeiten mit Dateien. Du fügst die Datei der Quellcodeverwaltung hinzu und das System verfolgt von diesem Moment an die Änderungen.

Git konzentriert sich auf die Zustände an einer Datei, nicht auf die Datei selbst. Ein `git add file`-Befehl weist Git nicht an, die Datei zum Repository hinzuzufügen, sondern den aktuellen Status der Datei zu notieren, damit sie später festgeschrieben werden kann.

Wir werden versuchen, den Unterschied in dieser Lektion zu untersuchen.

## 1. Erste Änderung: Hinzufügen von HTML-Tags
Ändere die „Hello, World“-Seite so, dass sie die Standard HTML-Tags `<html>` und `<body>` enthält.

hallo.html:  
```html
<html>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

## 2. Änderung hinzuzufügen
Füge diese Änderung nun dem Git-Staging hinzu.

Befehl:  
```console
git add hallo.html
```

## 3. Zweite Änderung: Füge die HTML-Header hinzu
Füge nun die HTML-Header (Abschnitt `<head>`) zur „Hello, World“-Seite hinzu.

hello.html:  
```html
<html>
  <head>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

## 4. Überprüfe den aktuellen Status

Befehl:  
```bash
git status
```  

Du wirst sehen...

Ergebnis:  
```bash
$ git status  
# On branch main  
# Changes to be committed:  
#   (use "git reset HEAD <file>..." to unstage)
#
#   modified:   hallo.html
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be ommitted)
#   (use "git checkout -- <file>..." to discard changes in orking directory)
#
#   modified:   hallo.html
#
```

Bitte beachte, dass `hallo.html` im Status doppelt aufgeführt ist. Die erste Änderung (das Hinzufügen von Standard-Tags) wird bereitgestellt und ist bereit für einen Commit. Die zweite Änderung (Hinzufügen von HTML-Headern) ist nicht bereitgestellt. Wenn du jetzt einen Commit durchführen würdest, wären die Header nicht im Repository gespeichert worden.

Lass uns nachsehen.

## 5. Commit
Übernehme die gestageden Änderungen (Standardwerte) und überprüfe den Status dann noch einmal.

Befehl:  
```bash
git commit -m "Added standard HTML page tags"  
git status  
```

Du wirst sehen...

Ergebnis:  
```bash
$ git commit -m "Added standard HTML page tags"
[master 8c32287] Added standard HTML page tags  
 1 files changed, 3 insertions(+), 1 deletions(-)
  
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

Der Statusbefehl deutet darauf hin, dass `hallo.html` nicht aufgezeichnete Änderungen aufweist, sich aber nicht mehr in der Pufferzone befindet.

## 6. Hinzufügen der zweiten Änderung

Füge die zweite Änderung zum Staging-Bereich hinzu und führe danach den Befehl git status aus.

Befehle:  
```bash
git add .
git status
```

**Hinweis:** Das aktuelle Verzeichnis (‘.’) ist unsere hinzuzufügende Datei. Dies ist der bequemste Weg, um alle Änderungen zu den Dateien des aktuellen Verzeichnisses und seiner Ordner hinzuzufügen. Aber da es alles hinzufügt, ist es eine gute Idee, den Status vor dem Hinzufügen zu überprüfen, um sicherzustellen, dass du keine Datei hinzufügst, die nicht hinzugefügt werden sollte.

Ich wollte, dass du denn `add .` Tick siehst und wir werden später weitere explizite Dateien hinzufügen.

Du wirst sehen...

Ergebnis:  
```bash
$ git status
# On branch main
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#   modified:   hallo.html
#
```

Die zweite Änderung wurde bereitgestellt und ist bereit für einen Commit.

## 7. Commit der zweiten Änderung

Befehl:  
```bash
git commit -m "Added HTML header"
```

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/06-level.md).