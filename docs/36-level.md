# Hinzufügen eines Tracking-Branch
## Ziel
- Um zu erfahren, wie man einen lokale Branch hinzufügt, der einen entfernten Branch verfolgt.

Branches, die mit remotes/origin beginnen, gehören zum ursprünglichen Repository. Beachte das diese keinen Style-Branch mehr haben, aber er weiß, dass er sich im ursprünglichen Repository befand.

## 1. Füge einen lokalen Branch hinzu, der den Remote-Branch verfolgt.

Befehl:  
```bash
git branch --track style origin/style
git branch
git hist --max-count=2
```

Ergebnis:  
```bash
$ git branch --track style origin/style
# Branch 'style' set up to track remote branch 'style' from 'origin'.

$ git branch
# * main
#   style

$ git hist --max-count=2
# * 1f26579 2022-01-18 | Changed README in original repo (HEAD -> main, origin/main, origin/HEAD) [Gregor Biswanger]
# * 0d4bc09 2022-01-16 | Updated index.html (origin/style, style) [Gregor Biswanger]
```

Jetzt können wir den Style-Branch in der Branchliste und im Protokoll sehen.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/37-level.md).