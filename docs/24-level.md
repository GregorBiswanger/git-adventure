# Merging (Zusammenführen)
## Ziel
- Lerne wie du zwei unterschiedliche Branches zu einem Branch zusammenführst.

## 1. Branches zusammenführen
Beim Zusammenführen werden Änderungen aus zwei Zweigen in einen übertragen. Gehen wir zurück zum Style-Zweig und führe ihn mit main zusammen.

Befehl:  
```bash
git checkout style
git merge main
git hist --all
```

Ergebnis:  
```bash
$ git checkout style
# Switched to branch 'style'
$ git merge main
# Merge made by the 'recursive' strategy.
#  README.md | 1 +
#  1 file changed, 1 insertion(+)
#  create mode 100644 README.md
$ git hist --all
# *   deb31a1 2022-01-16 | Merge branch 'main' into style (HEAD -> style) [Gregor Biswanger]
# |\
# | * d99d725 2022-01-16 | Added README (main) [Gregor Biswanger]
# * | f810921 2022-01-16 | Updated index.html [Gregor Biswanger]
# * | 762149e 2022-01-16 | Hallo uses style.css [Gregor Biswanger]
# * | 8f84751 2022-01-16 | Added css stylesheet [Gregor Biswanger]
# |/
# * 6f888c2 2022-01-16 | Added index.html. [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Durch regelmäßiges Zusammenführen des Main-Zweigs mit dem Style-Zweig kannst du alle Änderungen oder Modifikationen am Main übernehmen, um die Kompatibilität mit den Style-Änderungen in der Hauptlinie aufrechtzuerhalten.

Allerdings sieht die Commit-Grafik dadurch hässlich aus. Später werden wir eine Standortverlagerung als Alternative zur Fusion betrachten.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/25-level.md).