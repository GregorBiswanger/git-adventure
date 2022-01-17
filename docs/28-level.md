# Merging vom Main-Branch
## Ziel
- Wir haben unseren Style-Branch mit dem Main-Branch auf dem neuesten Stand gehalten (unter Verwendung von Rebase), aber lass uns jetzt die Änderungen des Style-Branches wieder in den Main zusammenführen.

## 1. Style mit Main verschmelzen

Befehl:  
```bash
git checkout main
git merge style
```

Ergebnis:  
```bash
$ git checkout main
# Switched to branch 'main'

$ git merge style
# Updating d99d725..0d4bc09
# Fast-forward
#  index.html     | 3 +++
#  lib/hallo.html | 1 +
#  lib/style.css  | 3 +++
#  3 files changed, 7 insertions(+)
#  create mode 100644 lib/style.css
```

Da der letzte Main-Commit direkt vor dem letzten Commit des Style-Branches liegt, kann Git schnell vorspulen, indem er einfach den Branch-Zeiger nach vorne bewegt und auf denselben Commit vom Style-Branch zeigt.

Konflikte treten bei der Fast-Forward-Zusammenführung nicht auf.

## 2. Überprüfe die Protokolle

Befehl:  
```bash
git hist
```

Ergebnis:  
```bash
$ git hist
# * 0d4bc09 2022-01-16 | Updated index.html (HEAD -> main, style) [Gregor Biswanger]
# * 462cbb5 2022-01-16 | Hallo uses style.css [Gregor Biswanger]
# * 5374e23 2022-01-16 | Added css stylesheet [Gregor Biswanger]
# * d99d725 2022-01-16 | Added README [Gregor Biswanger]
# * 6f888c2 2022-01-16 | Added index.html. [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Jetzt sind Style und Main identisch.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/29-level.md).