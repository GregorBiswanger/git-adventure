# Änderungen am Main-Branch
## Ziel
- Zu lernen, wie man mit mehreren Branches mit unterschiedlichen (manchmal widersprüchlichen) Änderungen arbeitet.

Zu der Zeit, als du den Style-Zweig geändert hast, hat jemand beschlossen, den Main-Zweig zu ändern. Er fügte eine README-Datei hinzu.

## 1. README.md-Datei im Main Branch erzeugen.

Befehl:  
```bash
git checkout main
echo This is the Hello World example from the git tutorial. > README.md
git add README.md
git commit -m "Added README"
```

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/23-level.md).