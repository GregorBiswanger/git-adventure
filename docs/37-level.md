# Bare Repository
## Ziel
- Um zu lernen, wie man ein Bare Repository erstellt.

Ein Bare Repository (Ein Git-Repository ohne Arbeitsverzeichnis) wird normalerweise für die gemeinsame Nutzung benötigt.

## 1. Ein Bare-Repository erstellen.

Befehl:  
```bash
cd ..
git clone --bare my-project my-project.git
dir my-project.git
```

Ergebnis:  
```bash
$ cd ..
$ git clone --bare my-project my-project.git
# Cloning into bare repository 'my-project.git'...
# done.

$ dir my-project.git
# 18.01.2022  10:14    <DIR>          .
# 18.01.2022  10:14    <DIR>          ..
# 18.01.2022  10:14               193 config
# 18.01.2022  10:14                73 description
# 18.01.2022  10:14                21 HEAD
# 18.01.2022  10:14    <DIR>          hooks
# 18.01.2022  10:14    <DIR>          info
# 18.01.2022  10:14    <DIR>          objects
# 18.01.2022  10:14               274 packed-refs
# 18.01.2022  10:14    <DIR>          refs
```

Typischerweise sind Repositories, die auf „.git“ enden, leer. Wie du sehen kannst, gibt es im my-project.git-Repository kein Arbeitsverzeichnis. Eigentlich ist es nichts anderes als das .git-Verzeichnis eines nicht-nackten Repositorys.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/38-level.md).