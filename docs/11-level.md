# Steged Änderungen abbrechen (vor dem Festschreiben)
## Ziel
- Erfahre, wie du staged Änderungen rückgängig machen kannst.

## 1. Datei bearbeiten und Änderungen vornehmen
Nehme Änderungen an der `hallo.html` Datei in Form eines unerwünschten Kommentars vor.

```html
<html>
  <head>
    <!-- This is an unwanted but staged comment -->
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

Stage die geänderte Datei.

Befehl:  
```bash
git add hallo.html
```

## 2. Überprüfe den Status
Überprüfe den Status unerwünschter Änderungen.

Befehl:  
```bash
git status
```

Ergebnis:  
```bash
$ git status
# On branch main
# Changes to be committed:
#   (use "git restore --staged <file>..." to unstage)
#         modified:   hallo.html
```

Der Status zeigt an, dass die Änderung bereitgestellt wurde und zur Übergabe bereit ist.

## 3. Setze die Pufferzone zurück
Glücklicherweise zeigt uns der angezeigte Status genau, was wir tun sollten, um gestagte Änderungen rückgängig zu machen.

Befehl:  
```bash
git restore --staged hallo.html
```

## 4. Wechsle zur Commit-Version

Befehl:  
```bash
git checkout hallo.html
git status
```

Ergebnis:
```bash
$ git checkout hallo.html
# Updated 1 path from the index

$ git status
# On branch main
# nothing to commit (working directory clean)
```

Unser Arbeitsverzeichnis ist wieder sauber.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/12-level.md).