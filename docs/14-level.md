# Entfernen des oops-Tags
## Ziel
- Entfernen des oops-Tags (Aufräumen)

## 1. Entfernung des oops-Tags
Der Oops-Tag hat seine Funktion erfüllt. Lasse uns diesen Tag entfernen und dem Garbage Collector erlauben, den referenzierten Commit zu löschen.

Befehl:  
```bash
git tag -d oops
git hist --all
```

Ergebnis:
```bash
$ git tag -d oops
# Deleted tag 'oops' (was 744ff5f)

$ git hist --all
# * 5a9e60b 2022-01-15 | Added HTML header (HEAD -> main, tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Der Opps-Tag erscheint nicht mehr im Repository.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/15-level.md).