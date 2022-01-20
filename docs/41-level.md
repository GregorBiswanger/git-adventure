# Dein Git-Repository als Git-Server bereitstellen
## Ziel
- Um zu erfahren, wie man einen Git-Server für die gemeinsame Nutzung von Repos konfiguriert.

Es gibt verschiedene Möglichkeiten, ein Git-Repository im Netzwerk freizugeben. Hier ist der schnellste Weg.

## 1. Git server starten

Befehl:
```bash
git daemon --verbose --export-all --base-path=.
```

Gehe nun in einem separaten Terminalfenster zu deinem Arbeitsverzeichnis.

Befehl:
```bash
git clone git://localhost/my-project.git network_my-project
cd network_my-project
dir
```

Du findest eine Kopie des my-project-Projekts.

## 2. Push an Git-Daemon erlauben

Wenn du einen Push an den Repository-Git-Daemon zulassen möchtest, füge den Parameter `--enable=receive-pack` zum Befehl git daemon hinzu. Sei aufmerksam, dieser Server führt keine Authentifizierung durch, sodass jeder Änderungen an dein Repository übertragen kann.

Überprüfe, ob dein Nachbar einen Git-Daemon betreibt. Tauscht eure IP-Adressen aus und prüft dann, ob ihr Änderungen aus den Repos des anderen extrahieren könnt.

# Danke!
Das war es! Dieses Spiel wurde durch Git Branches und Unit-Tests ermöglicht. Erkunde die lokalen Branches wenn du möchtest.

Ich wünsche dir jetzt viel Spaß mit Git. 🚀🚀🚀