# Allgemeine Änderungen entfernen
## Ziel
- Erfahre, wie du Änderungen aus dem gemeinsamen Repository entfernst.

Wechsele schnell zum geklonten Repository und ziehe die gerade an das gemeinsame Repository gesendeten Änderungen.

Befehl:
```bash
cd ..\cloned_my-project
```

**Hinweis:** Wir befinden uns jetzt im Repository `cloned_my-project`.

Weitermachen mit...

Befehl:
```bash
git remote add shared ../my-project.git
git branch --track shared main
git pull shared main
code README.md
```

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/41-level.md).