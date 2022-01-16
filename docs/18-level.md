# Inside Git: Das .git-Verzeichnis
## Ziel
- Um mehr über die Git-Verzeichnisstruktur zu erfahren.

## 1. Das .git-Verzeichnis
Es ist Zeit, etwas zu recherchieren. Ausgehend vom Stammverzeichnis des Projekts...

Befehl unter Windows:  
```bash
dir .git
```

Befehl unter Unix/Mac:  
```bash
ls -C .git
```

Ergebnis:  
```bash
$ dir .git
# Datenträger in Laufwerk C: ist Local Disk
# Volumeseriennummer: CC1D-XXXX
# 
# Verzeichnis von C:\..\git-adventure\my-project\.git
# 
# 16.01.2022  21:22                18 COMMIT_EDITMSG
# 14.01.2022  22:13               130 config
# 14.01.2022  22:13                73 description
# 14.01.2022  23:45                 0 FETCH_HEAD
# 16.01.2022  13:44                21 HEAD
# 14.01.2022  22:13    <DIR>          hooks
# 16.01.2022  21:22               253 index
# 14.01.2022  22:13    <DIR>          info
# 14.01.2022  22:14    <DIR>          logs
# 16.01.2022  21:22    <DIR>          objects
# 16.01.2022  20:36                41 ORIG_HEAD
# 16.01.2022  20:44                46 packed-refs
# 14.01.2022  22:13    <DIR>          refs
               8 Datei(en),            582 Bytes
               5 Verzeichnis(se), 383.015.170.048 Bytes frei
```

Dies ist ein spezieller Ordner, in dem sich all das Git-Zeug befindet. Lass uns das Verzeichnis erkunden.

## 2. Objekt Datenbank

Befehl unter Windows:  
```cmd
dir .git\objects
```

Befehl unter Unix/Mac:  
```bash
ls -C .git/objects
```

Ergebnis:  
```cmd
$ dir .git\objects
...
16.01.2022  21:22    <DIR>          .
16.01.2022  21:22    <DIR>          ..
16.01.2022  20:10    <DIR>          07
15.01.2022  17:38    <DIR>          10
16.01.2022  21:13    <DIR>          25
16.01.2022  20:10    <DIR>          2a
14.01.2022  23:38    <DIR>          2d
16.01.2022  20:09    <DIR>          3e
16.01.2022  21:21    <DIR>          3f
15.01.2022  12:58    <DIR>          41
16.01.2022  21:13    <DIR>          4a
15.01.2022  17:40    <DIR>          5a
16.01.2022  20:57    <DIR>          6e
16.01.2022  21:22    <DIR>          6f
15.01.2022  17:39    <DIR>          70
16.01.2022  20:11    <DIR>          74
16.01.2022  20:57    <DIR>          7a
15.01.2022  17:40    <DIR>          80
16.01.2022  21:22    <DIR>          93
16.01.2022  20:58    <DIR>          95
15.01.2022  12:58    <DIR>          98
16.01.2022  14:03    <DIR>          a6
14.01.2022  22:14    <DIR>          b6
15.01.2022  17:40    <DIR>          c4
15.01.2022  17:39    <DIR>          d9
14.01.2022  22:13    <DIR>          df
16.01.2022  20:57    <DIR>          e0
16.01.2022  20:58    <DIR>          e1
16.01.2022  20:58    <DIR>          e9
14.01.2022  22:13    <DIR>          info
14.01.2022  22:13    <DIR>          pack
...
```

Du solltest viele Ordner sehen, die mit zwei Zeichen benannt sind. Die ersten beiden Buchstaben des SHA1-Hashes der in Git gespeicherten Objekte sind die Verzeichnisnamen.

## 3. Frage die Datenbankobjekte ab

Befehl unter Windows:  
```cmd
dir .git\objects\<dir>
```

Befehl unter Unix/Mac:  
```bash
ls -C .git/objects/<dir>
```

Ergebnis:  
```cmd
$ dir .git\objects\07
...
16.01.2022  20:10    <DIR>          .
16.01.2022  20:10    <DIR>          ..
16.01.2022  20:10               189 6f96982647f77ff8f55fcfca324bb0740c1991
...
```

Schauen wir uns einen der Ordner an, die mit zwei Zeichen benannt sind. Es sollten Dateien mit Namen von 38 Zeichen vorhanden sein. Diese Dateien enthalten in Git gespeicherte Objekte. Sie sind komprimiert und verschlüsselt, sodass es unmöglich ist, ihren Inhalt direkt anzuzeigen. Schauen wir uns das Git-Verzeichnis genauer an.

## 4. Konfigurationsdatei

Befehl:  
```cmd
code .git/config
```

Ergebnis:  
```ini
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
```

Diese Konfigurationsdatei wird für jedes einzelne Projekt erstellt. Zumindestens in diesem Projekt überschreiben Einträge in dieser Datei, die Einträge in der `.gitconfig`-Datei deines Hauptverzeichnisses.

## 5. Branches und Tags

Befehl unter Windows:  
```cmd
dir .git\refs
dir .git\refs\heads
dir .git\refs\tags
code .git/refs/tags/v1
```

Befehl unter Unix/Mac:  
```bash
ls .git/refs
ls .git/refs/heads
ls .git/refs/tags
code .git/refs/tags/v1
```

Ergebnis:  
```cmd
$ dir .git\refs
...
14.01.2022  22:13    <DIR>          .
14.01.2022  22:13    <DIR>          ..
16.01.2022  21:22    <DIR>          heads
16.01.2022  20:44    <DIR>          tags
...

$ dir .git\refs\heads
...
16.01.2022  21:22    <DIR>          .
16.01.2022  21:22    <DIR>          ..
16.01.2022  21:22                41 main
...

$ dir .git\refs\tags
...
16.01.2022  20:44    <DIR>          .
16.01.2022  20:44    <DIR>          ..
16.01.2022  01:18                41 v1
16.01.2022  01:22                41 v1-beta
...

$ code .git/refs/tags/v1
Inhalt: 5a9e60b06695c5cf6b84087828f1afaef75032af
```

Dateien im Unterverzeichnis tags sollten dir vertraut sein. Jede Datei entspricht dem zuvor mit dem `git tag` Befehl erstellten Tag. Sein Inhalt ist nichts anderes als ein an das Tag angehängter Hash-Commit.

Der Heads-Ordner ist fast identisch und wird nicht für Tags, sondern für Branches verwendet. Im Moment haben wir nur einen Branch, und alles, was du in diesem Ordner sehst, ist ein Main-Branch.

## 6. HEAD Datei

Befehl:  
```cmd
code .git/HEAD
Inhalt: ref: refs/heads/main
```

In der HEAD-Datei befindet sich ein Verweis auf den aktuellen Branch. Im Moment muss es der Main-Branch sein.

## Level abschließen
Gehe direkt ins nächste Level mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis (docs/19-level.md).