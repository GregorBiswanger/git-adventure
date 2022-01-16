# Navigieren in Branches
## Ziele
- Um zu lernen, wie man zwischen den Repository-Zweigen navigiert.

Jetzt hat dein Projekt zwei Branches:

Befehl:  
```bash
git hist --all
```

Ergebnis:
```bash
$ git hist --all
# * f810921 2022-01-16 | Updated index.html (HEAD -> style) [Gregor Biswanger]
# * 762149e 2022-01-16 | Hallo uses style.css [Gregor Biswanger]
# * 8f84751 2022-01-16 | Added css stylesheet [Gregor Biswanger]
# * 6f888c2 2022-01-16 | Added index.html. (main) [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

## 1. Zum Main Branch wechseln

Um zwischen Zweigen zu wechseln, verwende einfach den `git checkout` Befehl.

Befehl:  
```bash
git checkout main
code lib/hallo.html
```

Ergebnis:  
```bash
$ git checkout main
# Switched to branch 'main'
$ code lib/hallo.html
# <!-- Author: Gregor Biswanger (gregor.biswanger@web-enliven.de) -->
# <html>
#   <head>
#   </head>
#   <body>
#     <h1>Hello, World!</h1>
#   </body>
# </html>
```

Jetzt befinden wir uns im Main-Zweig. Dies lässt sich dadurch belegen, dass die `hallo.html` Datei keine Styles aus `style.css` verwendet.

## 2. Kehren wir zum Style-Zweig zurück.

Befehl:  
```bash
git checkout style
code lib/hallo.html
```

Ergebnis:  
```bash
$ git checkout style
# Switched to branch 'style'
$ code lib/hallo.html
# <!-- Author: Gregor Biswanger (gregor.biswanger@web-enliven.de) -->
# <html>
#   <head>
#       <link type="text/css" rel="stylesheet" media="all" href="style.css" />
#   </head>
#   <body>
#     <h1>Hello, World!</h1>
#   </body>
# </html>
```

Wir sind wieder beim **Style-Zweig**, was daran zu erkennen ist, dass die `hallo.html`-Datei Styles aus style.css verwendet.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/22-level.md).