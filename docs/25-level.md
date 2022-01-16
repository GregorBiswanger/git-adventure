# Erstelle einen Konflikt
## Ziel
- Erstellen eines Konflikts von Änderungen im Main-Zweig.

## 1. Kehre zur Main zurück und erzeuge Konflikte
Kehre zum Main-Branch zurück und nehme die folgenden Änderungen vor:

Befehl:  
```bash
git checkout main
```

lib/hallo.html:
```html
<!-- Author: Gregor Biswanger (gregor.biswanger@web-enliven.de) -->
<html>
  <head>
      <!-- no style -->
  </head>
  <body>
    <h1>Hello, World! Life is great!</h1>
  </body>
</html>
```

Befehl:  
```bash
git add lib/hallo.html
git commit -m "Life is great!"
```

(**Warnung:** Stelle sicher, dass du einfache Anführungszeichen verwendet hast, um Probleme mit bash und dem Ausrufezeichen zu vermeiden.)

## 2. Branches ansehen

Befehl:  
```bash
git hist --all
```

Ergebnis:  
```bash
$ git hist --all
# * 080ed40 2022-01-16 | Life is great! (HEAD -> main) [Gregor Biswanger]
# | *   deb31a1 2022-01-16 | Merge branch 'main' into style (style) [Gregor Biswanger]
# | |\
# | |/
# |/|
# * | d99d725 2022-01-16 | Added README [Gregor Biswanger]
# | * f810921 2022-01-16 | Updated index.html [Gregor Biswanger]
# | * 762149e 2022-01-16 | Hallo uses style.css [Gregor Biswanger]
# | * 8f84751 2022-01-16 | Added css stylesheet [Gregor Biswanger]
# |/
# * 6f888c2 2022-01-16 | Added index.html. [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# :...skipping...
# * 080ed40 2022-01-16 | Life is great! (HEAD -> main) [Gregor Biswanger]
# | *   deb31a1 2022-01-16 | Merge branch 'main' into style (style) [Gregor Biswanger]
# | |\
# | |/
# |/|
# * | d99d725 2022-01-16 | Added README [Gregor Biswanger]
# | * f810921 2022-01-16 | Updated index.html [Gregor Biswanger]
# | * 762149e 2022-01-16 | Hallo uses style.css [Gregor Biswanger]
# | * 8f84751 2022-01-16 | Added css stylesheet [Gregor Biswanger]
# |/
# * 6f888c2 2022-01-16 | Added index.html. [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Nach dem hinzugefügten README-Commit wurde der Main-Zweig mit dem Style-Zweig zusammengeführt, aber es gibt einen zusätzlichen Main-Commit, der nicht wieder mit dem Style-Zweig zusammengeführt wurde.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/26-level.md).