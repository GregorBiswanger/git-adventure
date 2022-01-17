# Remote branches
## Ziel
- Erfahre mehr über lokale und Remote-Branches.

Werfen wir einen Blick auf die Branches in unserem geklonten Repository.

Befehl:  
```bash
git branch
```

Ergebnis:  
```bash
$ git branch
# * main
```

Wie wir sehen können, ist darin nur der Main-Branch aufgeführt. Wo ist der Style-Branch? `git branch` listet standardmäßig nur die lokalen Branches auf.

## 1. Liste der Remote-Branches

Versuche den folgenden Befehl, um alle Zweige anzuzeigen:

Befehl:  
```bash
git branch -a
```

Ergebnis:  
```bash
$ git branch
# * main
#   remotes/origin/HEAD -> origin/main
#   remotes/origin/main
#   remotes/origin/style
```

Git listet alle Branches aus dem ursprünglichen Repo auf, aber die Remote-Repository-Branches werden nicht als lokale behandelt. Wenn wir einen eigenen style branch benötigen, müssen wir ihn selbst erstellen.

## Level abschließen
Gehe direkt ins nächste Level mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis (docs/32-level.md).