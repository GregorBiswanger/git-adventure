# Verschieben von Dateien
## Ziel
- Um zu erfahren, wie man eine Datei innerhalb des Repositories verschiebt.

## 1. Verschiebe die Datei hallo.html in das Verzeichnis lib
Jetzt erstellen wir die Struktur in unserem Repository. Lass uns die Seite in das lib-Verzeichnis verschieben.

Befehl:  
```bash
mkdir lib
git mv hallo.html lib
git status
```

Ergebnis:
```bash
$ mkdir lib
$ git mv hallo.html lib
$ git status
# On branch main
# Changes to be committed:
#  (use "git restore --staged <file>..." to unstage)
#        renamed:    hallo.html -> lib/hallo.html
```

Indem wir Dateien mit Git verschieben, benachrichtigen wir Git über zwei Dinge:

1. Die `hallo.html`-Datei wurde gelöscht.
1. Die `lib/hallo.html`-Datei wurde erstellt.

Beide Tatsachen sind sofort inszeniert und bereit für einen Commit. Der Git-Status befehl meldet, dass die Datei verschoben wurde.

## 2. Eine weitere Möglichkeit, Dateien zu verschieben

Eine positive Tatsache bei Git ist, dass du nicht an die Versionskontrolle denken musst. Was würde passieren, wenn wir die Befehlszeile des Betriebssystems anstelle des Git Befehls zum Verschieben von Dateien verwenden würden?

Die folgenden Befehle haben das gleiche Ergebnis wie die oben verwendeten, aber die folgenden erfordern etwas mehr Arbeit.

Wir können ebenfalls:
```bash
mkdir lib
mv hallo.html lib
git add lib/hallo.html
git rm hallo.html
```

## 3. Neues Verzeichnis übernehmen
Lass uns diese Bewegung festhalten.

Befehl:  
```bash
git commit -m "Moved hallo.html to lib"
```

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/17-level.md).