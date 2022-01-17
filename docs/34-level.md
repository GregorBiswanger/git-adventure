# Merging gezogener Änderungen
## Ziel
- Wie man die abgerufenen Änderungen in den aktuellen Branch übernimmt.

## 1. Merge die abgerufenen Änderungen in den lokalen Main-Branch

Befehl:  
```bash
git merge origin/main
```

Ergebnis:  
```bash
$ git merge origin/main
# Updating 0d4bc09..1f26579
# Fast-forward
#  README.md | 2 +-
#  1 file changed, 1 insertion(+), 1 deletion(-)
```

## 2. Überprüfe die README.md erneut
Jetzt sollten wir die Änderungen sehen.

Befehl:  
```bash
code README.md
```

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/35-level.md).