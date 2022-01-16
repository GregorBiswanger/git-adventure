# Ältere Versionen bekommen

## Ziel
- Um zu erfahren, wie du einen vorherigen Snapshot in das Arbeitsverzeichnis auschecken kannst.

In der Geschichte zurückzugehen ist sehr einfach. Der `Checkout`-Befehl kann jeden Snapshot aus dem Repo in das Arbeitsverzeichnis kopieren.

## 1. Abrufen von Hashes für die vorherigen Versionen

Befehl:  
```bash
git hist
```

**Hinweis:** In Level 7 haben wir `hist` als Alias hinzugefügt.

Ergebnis:  
```bash
* 5a9e60b 2022-01-15 | Added HTML header (HEAD -> main) [Gregor Biswanger]
* d9352d1 2022-01-15 | Added standard HTML page tags [Gregor Biswanger]
* 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
* b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Überprüfe die Ausgabe und finde den Hash für den ersten Commit. Du findest ihn in der letzten Zeile. Verwende den Code (die ersten 7 Zeichen reichen aus) im folgenden Befehl. Überprüfe danach den Inhalt der `hallo.html` Datei.

Befehl:  
```bash
git checkout <hash>
code hallo.html
```

**Hinweis:** Viele Befehle hängen von den Hash-Werten im Repository ab. Da sich meine Hash-Werte von deinen unterscheiden, ersetze den entsprechenden Hash-Wert für dein Repository jedes Mal, wenn du `<hash>` oder `<treehash>` im Befehl siehst.

Du wirst sehen...

Ergebnis:  
```bash
$ git checkout b617603
# Note: switching to 'b617603'.
# 
# You are in 'detached HEAD' state. You can look around, make experimental
# changes and commit them, and you can discard any commits you make in this
# state without impacting any branches by switching back to a branch.
# 
# If you want to create a new branch to retain commits you create, you may
# do so (now or later) by using -c with the switch command. Example:
# 
#   git switch -c <new-branch-name>
# 
# Or undo this operation with:
# 
#   git switch -
# 
# Turn off this advice by setting config variable advice.detachedHead to false
# 
# HEAD is now at b617603 First Commit
```

Die Ausgabe des `Checkout`-Befehls klärt die Situation vollständig. Ältere Git-Versionen werden sich darüber beschweren, dass du nicht in einem lokalen Branch bist. Aber darüber brauchst du dir jetzt keine Gedanken zu machen.

Beachte, dass der Inhalt der `hallo.html` Datei der Standardinhalt ist ohne HTML-Code.

## 2. Rückkehr zur neuesten Version im Main-Branch

Befehl:  
```bash
git checkout main
code hallo.html
```

Du wirst sehen...

Ergebnis:   
```bash
$ git checkout main
Previous HEAD position was b617603 First Commit
Switched to branch 'main'
```

„main“ ist der Name des Standardzweigs (Branch). Indem du einen Zweig (Branch) nach Namen auscheckst, gelangst du zu seiner neuesten Version.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/09-level.md).