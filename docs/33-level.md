# Änderungen abrufen
## Ziel
- Wie wir Änderungen aus einem Remote-Repository ziehen können.

Befehl:
```bash
cd ../cloned_my-project
git fetch
git hist --all
```

**HINWEIS:** Wir befinden uns jetzt im Repository cloned_my-project.

Ergebnis:
```bash
$ git fetch
# remote: Enumerating objects: 5, done.
# remote: Counting objects: 100% (5/5), done.
# remote: Compressing objects: 100% (3/3), done.
# remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
# Unpacking objects: 100% (3/3), 373 bytes | 13.00 KiB/s, done.
# From C:/dev/git-adventure/my-project
#    0d4bc09..1f26579  main       -> origin/main

$ git hist --all
# * 1f26579 2022-01-18 | Changed README in original repo (origin/main, origin/HEAD) [Gregor Biswanger]
# * 0d4bc09 2022-01-16 | Updated index.html (HEAD -> main, origin/style) [Gregor Biswanger]
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

Im Moment enthält das Repository alle Commits aus dem ursprünglichen Repo; Sie sind jedoch nicht in die lokalen Zweige des geklonten Repositorys integriert.

Sie finden den Commit mit dem Namen „Changed README in original repo“ im Verlauf. Beachten Sie, dass der Commit „origin/master“ und „origin/HEAD“ enthält.

Werfen wir nun einen Blick auf den Commit „Updated index.html“. Sie werden sehen, dass der lokale Master-Branch genau auf diesen Commit zeigt, nicht auf den neuen Commit, den wir gerade abgerufen haben.

Dies bringt uns zu dem Schluss, dass der Befehl „git fetch“ neue Commits aus dem Remote-Repo holt, sie aber nicht in den lokalen Zweigen zusammenführt.

## 1. Überprüfen die README.md
Wir können zeigen, dass die geklonte README-Datei nicht verändert wurde.

Befehl:
```bash
code README.md
```

Keine Änderungen, wie wir sehen können.

## Level abschließen
Gehe direkt ins nächste Level mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis (docs/34-level.md).