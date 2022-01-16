# Konflikte lösen
# Ziel
- Zusammenführungskonflikte lösen lernen.

## 1. Merge den Main-Branch mit Style
Gehen wir zurück zum Style-Zweig und führen ihn mit einem neuen Main-Zweig zusammen.

Befehl:  
```bash
git checkout style
git merge main
```

Ergebnis:  
```bash
$ git checkout style
# Switched to branch 'style'
$ git merge main
# Auto-merging lib/hallo.html
# CONFLICT (content): Merge conflict in lib/hallo.html
# Automatic merge failed; fix conflicts and then commit the result.
```

Wenn du die lib/hallo.html öffnest, siehst du:
```html
<html>
  <head>
<<<<<<< HEAD
      <link type="text/css" rel="stylesheet" media="all" href="style.css" />
=======
      <!-- no style -->
>>>>>>> main
  </head>
  <body>
    <h1>Hello, World! Life is great!</h1>
  </body>
</html>
```

Der erste Abschnitt ist die Version des HEADS vom aktuellen Zweig (Style). Der zweite Abschnitt ist die Version des Main-Zweigs.

## 2. Lösung des Konflikts
Du musst den Konflikt manuell lösen. Nehme die Änderungen an `lib/hallo.html` vor, um das folgende Ergebnis zu erzielen.

```html
<!-- Author: Gregor Biswanger (gregor.biswanger@web-enliven.de) -->
<html>
  <head>
    <link type="text/css" rel="stylesheet" media="all" href="style.css" />
  </head>
  <body>
    <h1>Hello, World! Life is great!</h1>
  </body>
</html>
```

## 3. Konfliktlösung commiten

Befehl:  
```bash
git add lib/hallo.html
git commit -m "Merged main fixed conflict."
```

Ergebnis:  
```bash
$ git add lib/hallo.html
$ git commit -m "Merged main fixed conflict."
# [style 0e4ed00] Merged main fixed conflict.
```

## 4. Erweitertes Merging
Git hat keine grafischen Merge-Tools, aber es akzeptiert jedes Merge-Tool von Drittanbietern (Zum Beispiel Visual Studio Code).

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/27-level.md).