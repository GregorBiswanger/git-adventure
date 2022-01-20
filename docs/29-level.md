# Mehrere Repositories

## Ziel
- Wie man Kopien der Repositories erstellt.

Bisher haben wir mit nur einem Git-Repository gearbeitet. Git eignet sich jedoch hervorragend für die Arbeit mit mehreren Repositories. Diese zusätzlichen Repositories können lokal gespeichert oder über eine Netzwerkverbindung aufgerufen werden.

Im nächsten Abschnitt erstellen wir ein neues Repo namens **„cloned_my-project“**. Wir werden das Verschieben von Änderungen von einem Repo in ein anderes und den Umgang mit Konflikten bei der Arbeit mit zwei Repositories besprechen.

In der Zwischenzeit arbeiten wir mit lokalen Repositories (die auf Ihrer lokalen Festplatte gespeichert sind). Die meisten Informationen in diesem Abschnitt können auch auf die Arbeit mit mehreren Repositories angewendet werden, unabhängig davon, ob sie lokal gespeichert oder über ein Netzwerk gemeinsam genutzt werden.

**HINWEIS:** Wir werden Änderungen an beiden Kopien unserer Repositories vornehmen. Beachte das Repository, in dem du dich in jeder Phase der nächsten Lektionen befindest.

## 1. Gehe zu deinem Arbeitsverzeichnis

Gehe in das Arbeitsverzeichnis und klone dein my-project Repository.

Befehl:  
```bash
cd..
git clone my-project cloned_my-project
```

Ergebnis:  
```bash
$ cd..
$ git clone my-project cloned_my-project
# Cloning into 'cloned_my-project'...
# done.
```

Im Moment sollten sich zwei Repos in deinem Arbeitsverzeichnis befinden: das ursprüngliche „my-project“-Repo und das geklonte Repository mit dem Namen „cloned_my-project“.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/29-level.md).