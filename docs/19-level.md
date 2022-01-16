# Git inside: Direktes Arbeiten mit Git-Objekten
## Ziele
- Untersuche die Struktur der Datenbankobjekte.
- Verwenden von SHA1-Hashes zum Durchsuchen des Inhalts im Repository.

Lass uns Git-Objekte mit einigen Tools untersuchen.

## 1. Suche nach dem letzten Commit

Befehl:  
```bash
git hist --max-count=1
```

Dieser Befehl sollte den letzten Commit im Repository finden. SHA1-Hash ist auf unseren Systemen wahrscheinlich anders; Du solltest jedoch so etwas sehen:

```bash
$ git hist --max-count=1
# * 6f888c2 2022-01-16 | Added index.html. (HEAD -> main) [Gregor Biswanger]
```
## 2. Anzeige des letzten Commit
Mit dem SHA1-Hash eines Commits wie oben...

Befehl:  
```bash
git cat-file -t <hash>
git cat-file -p <hash>
```

Ich sehe...

Ergebnis:  
```bash
$ git cat-file -t 6f888c2
# commit
$ git cat-file -p 6f888c2
# tree 93f50a2de0f9f9ca5d40d3cd827688707560615b
# parent 4adf1a1d05f9a109cc9304ae3a73130d552c297b
# author Gregor Biswanger <gregor.biswanger@web-enliven.de> 1642364522 +0100
# committer Gregor Biswanger <gregor.biswanger@web-enliven.de> 1642364522 +0100
# 
# Added index.html.
```

**Hinweis:** Wenn du den Alias als "type" und "dump" angibst, wie in der Alias Lektion beschrieben, kannst du anstelle eines langen Befehls (den ich mir nie merke) die Befehle `git type` und `git dump` eingeben.

Dies zeigt das Commit-Objekt an, das sich im head des Main-Branches befindet.

## 3. Tree suche
Wir können den im Commit referenzierten Tree anzeigen. Dies sollte eine Dateibeschreibung (oberste Ebene) in unserem Projekt sein (für ein bestimmtes Commit). Verwende den SHA1-Hash vom Tree string aus der obigen Liste.

Befehl:  
```bash
git cat-file -p <treehash>
```

Hier ist mein Tree...

Ergebnis:  
```bash
$ git cat-file -p 93f50a2
# 100644 blob 3fbf4a4e2f25d15c8e3fb452ed1f38736977890f    index.html
# 040000 tree 957e682bf8fe475a51286c22c05b5a3d66d8e893    lib
```

Ich kann die `index.html` Datei und den lib Ordner sehen.

## 4. lib-Verzeichnis anzeigen

Befehl:  
```bash
git cat-file -p <libhash>
```

Hier ist mein Tree...

Ergebnis:  
```bash
$ git cat-file -p 957e682
# 100644 blob e1ee9cf3ff562fbd1db2c32c7fb0daf878776e38    hallo.htm
```

Das ist die `hallo.html` Datei.

## 5. hallo.html-Datei anzeigen
Befehl:  
```bash
git cat-file -p <hallohash>
```

Ergebnis:  
```bash
$ git cat-file -p e1ee9cf
# <!-- Author: Gregor Biswanger (gregor.biswanger@web-enliven.de) -->
# <html>
#   <head>
#   </head>
#   <body>
#     <h1>Hello, World!</h1>
#   </body>
# </html>
```

Und da ist es. Tree-Objekte, Commit-Objekte und Blob-Objekte werden direkt aus dem Git-Repository angezeigt. Das ist alles, was es gibt – Trees, Blobs und Commits.

## 6. Erkunde selbst
Das Git-Repository kann manuell durchsucht werden. Versuche die ursprüngliche hallo.html-Datei aus dem ersten Commit mithilfe von SHA1-Hash-Referenzen im letzten Commit manuell zu finden.

## Level abschließen
Gehe direkt ins nächste Level mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis (docs/20-level.md).