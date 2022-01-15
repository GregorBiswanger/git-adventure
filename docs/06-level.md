# History

## Ziel
- Um zu lernen, den Verlauf des Projekts anzuzeigen.

Das Abrufen einer Liste der vorgenommenen Änderungen ist eine Funktion des `git log` Befehls.

Befehl:  
```bash
git log
```

Du wirst sehen...

Ergebnis:  
```bash
commit 5a9e60b06695c5cf6b84087828f1afaef75032af (HEAD -> main)
Author: Gregor Biswanger <gregor.biswanger@web-enliven.de>
Date:   Sat Jan 15 17:40:52 2022 +0100

    Added HTML header

commit d9352d1c7ba8bd0eceaa3a1e23440a5d3672d344
Author: Gregor Biswanger <gregor.biswanger@web-enliven.de>
Date:   Sat Jan 15 17:39:29 2022 +0100

    Added standard HTML page tags

commit 41b3c462b40e2d882683b0a9408a603e67109489
Author: Gregor Biswanger <gregor.biswanger@web-enliven.de>
Date:   Sat Jan 15 12:58:02 2022 +0100

    Added h1 tag

commit b617603b19fb6ef196ac33f5192297490b65d463
Author: Gregor Biswanger <gregor.biswanger@web-enliven.de>
Date:   Fri Jan 14 22:14:01 2022 +0100

    First Commit
```

Hier ist eine Liste aller vier Commits zum Repository, die wir bisher machen konnten.

## 1. History einzeilig

Du hast die volle Kontrolle darüber, was das Protokoll anzeigt. Ich mag das einzeilige Format:

Befehl:  
```bash
git log --pretty=oneline
```

Du wirst sehen...

Ergebnis:  
```bash
5a9e60b06695c5cf6b84087828f1afaef75032af (HEAD -> main) Added HTML header
d9352d1c7ba8bd0eceaa3a1e23440a5d3672d344 Added standard HTML page tags
41b3c462b40e2d882683b0a9408a603e67109489 Added h1 tag
b617603b19fb6ef196ac33f5192297490b65d463 First Commit
```

## 2. Steuerung der Anzeige von Einträgen

Es gibt viele Optionen, um auszuwählen, welche Einträge im Protokoll erscheinen. Spiele mit den folgenden Parametern herum:

```bash
git log --pretty=oneline --max-count=2
git log --pretty=oneline --since='5 minutes ago'
git log --pretty=oneline --until='5 minutes ago'
git log --pretty=oneline --author=<your name>
git log --pretty=oneline --all
```

## 3. Getting fancy

Dies ist, was ich verwende, um die Änderungen zu überprüfen, die innerhalb der letzten Woche vorgenommen wurden. Ich werde `--author=Gregor` hinzufügen, wenn ich nur die von mir vorgenommenen Änderungen sehen möchte.

```bash
git log --all --pretty=format:"%h %cd %s (%an)" --since='7 days ago'
```

## 4. Das ultimative Format des Protokolls

Im Laufe der Zeit fand ich das folgende Protokollformat am besten geeignet.

Befehl:  
```bash
git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short
```

Ergebnis:
```bash
* 5a9e60b 2022-01-15 | Added HTML header (HEAD -> main) [Gregor Biswanger]
* d9352d1 2022-01-15 | Added standard HTML page tags [Gregor Biswanger]
* 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
* b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Schauen wir es uns im Detail an:

- `--pretty="..."` definiert das Ausgabeformat.  
- `%h` ist der abgekürzte Hash des Commit  
- `%d` Commit-Dekorationen (z. B. Branch heads oder Tags)  
- `%ad` ist das Commit-Datum  
- `%s` ist der Kommentar  
- `%an` ist der Name des Autors  
- `--graph` weist git an, den Commit-Baum in Form eines ASCII-Graph-Layouts anzuzeigen  
- `--date=short` hält das Datumsformat kurz und schön  

Jedes Mal, wenn du ein Protokoll sehen möchtest, müsst du also viel tippen. Glücklicherweise werden wir in der nächsten Lektion mehr über die Git-Aliase erfahren.

## Level abschließen
Gehe direkt ins nächste Level mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis (docs/07-level.md).