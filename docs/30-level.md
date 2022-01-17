# Untersuche das geklonte Repository

## Ziel
Informationen zu Branches in den Remote-Repositories finden.

## 1. Anzeigen des geklonten Repositorys
Werfen wir einen Blick auf unser geklontes Repository.

Befehl:  
```bash
cd cloned_my-project
dir
```

Ergebnis:  
```bash
$ cd cloned_my-project
$ dir
# ...
# 17.01.2022  21:38    <DIR>          .
# 17.01.2022  21:38    <DIR>          ..
# 17.01.2022  21:38               199 index.html
# 17.01.2022  21:38    <DIR>          lib
# 17.01.2022  21:38                57 README.md
# ...
```

Du siehst eine Liste aller Dateien in der obersten Ebene des ursprünglichen Repositorys (README, index.html und lib).

## 2. Der Verlauf vom geklonten Repository

Befehl:  
```bash
git hist --all
```

Ergebnis:  
```bash
$ git hist --all
# * 0d4bc09 2022-01-16 | Updated index.html (HEAD -> main, origin/style, origin/main, origin/HEAD) [Gregor Biswanger]
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

Du siehst eine Liste aller Commits im neuen Repository, die mit dem ursprünglichen Repository übereinstimmt. Der einzige Unterschied sollte in den Namen der Branches liegen.

## 3. Remote branches
Du wirst einen Main-Branch (HEAD) und auch seltsame Namen in der Historie finden (origin/main, origin/style und origin/HEAD). Aber was ist eigentlich origin (Herkunft/Ursprung)?

Befehl:  
```bash
git remote
```

Ergebnis:  
```bash
$ git remote
# origin
```

Wir sehen, dass das geklonte Repository den Standardnamen des entfernten Repositorys kennt. Um mehr Informationen über die Herkunft zu erhalten:

Befehl:  
```bash
git remote show origin
```

Ergebnis:  
```bash
$ git remote show origin
# * remote origin
#   Fetch URL: C:/dev/git-adventure/my-project
#   Push  URL: C:/dev/git-adventure/my-project
#   HEAD branch: main
#   Remote branches:
#     main  tracked
#     style tracked
#   Local branch configured for 'git pull':
#     main merges with remote main
#   Local ref configured for 'git push':
#     main pushes to main (up to date)
```

Wir können sehen, dass der „origin“ des Remote-Repositories das ursprüngliche my-project-Repo ist. Remote-Repos werden normalerweise auf einem separaten Computer oder einem zentralen Server gespeichert. Wie wir sehen, können diese jedoch auch auf ein Repository auf derselben Maschine verweisen. Der Name „origin“ ist nichts Besonderes, aber es gibt eine Konvention, ihn für das primäre zentralisierte Repository (falls vorhanden) zu verwenden.

## Level abschließen
Gehe direkt ins nächste Level mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis (docs/31-level.md).