# Tagging

## Ziel
- Um zu lernen, wie man Commits für zukünftige Referenzen taggt.

Nennen wir die aktuelle Version des Hello World-Programms Version 1 (v1).

## 1. Tag für die erste Version erstellen

Befehl:  
```bash
git tag v1
```

Jetzt wird die aktuelle Version der Seite als v1 bezeichnet.

## 2. Tags für frühere Versionen
Taggen wir die Version vor der aktuellen Version mit dem Namen `v1-beta`. Zuerst checken wir die vorherige Version aus. Anstatt den Hash nachzuschlagen, verwenden wir die Notation `^`, die **„das Elternteil von v1“** angibt.

Wenn die Notation `v1^` Probleme verursacht, versuche `v1~1` zu verwenden um auf dieselbe Version zu verweisen. Diese Notation bedeutet **„die erste Version vor v1“**.

Befehl:  
```bash
git checkout v1^
code hallo.html
```

Ergebnis:  
```bash
$ git checkout v1^
Mehr? ~1
# Note: switching to 'v1~1'.
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
# HEAD is now at d9352d1 Added standard HTML page tags
```

Dies ist die Version mit den Tags `<html>` und `<body>`, aber ohne `<head>`. Nehmen wir an, es ist die v1-Beta-Version.

Befehl:  
```bash
git tag v1-beta
```

## 3. Auschecken anhand des Tag-Namens
Versuche nun, zwischen den beiden getaggten Versionen auszuchecken.

Befehl:  
```bash
git checkout v1
git checkout v1-beta
```

Ergebnis:  
```bash
$ git checkout v1
# Previous HEAD position was d9352d1 Added standard HTML page tags
# HEAD is now at 5a9e60b Added HTML header
$ git checkout v1-beta
# Previous HEAD position was 5a9e60b Added HTML header
# HEAD is now at d9352d1 Added standard HTML page tags
```

## 4. Anzeigen von Tags mit dem Tag-Befehl
Du kannst die verfügbaren Tags mit dem `git tag` Befehl anzeigen.

Befehl:  
```bash
git tag
```

Ergebnis:  
```bash
$ git tag
# v1
# v1-beta
```

## 5. Anzeigen von Tags in der History
Du kannst auch im Protokoll nach Tags suchen.

Befehl:  
```bash
git hist main --all
```

Ergebnis:  
```bash
* 5a9e60b 2022-01-15 | Added HTML header (tag: v1, main) [Gregor Biswanger]
* d9352d1 2022-01-15 | Added standard HTML page tags (HEAD, tag: v1-beta) [Gregor Biswanger]
* 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
* b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Du kannst Tags (`v1` und `v1-beta`) zusammen mit dem Namen des Zweigs (main) im Protokoll sehen. Der HEAD zeigt den Commit, den du ausgecheckt hast (derzeit v1-beta).

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/10-level.md).