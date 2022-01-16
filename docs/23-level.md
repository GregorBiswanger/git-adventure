# Sehe dir die verschiedenen Branches an
# Ziel
- Erfahre, wie du die verschiedenen Branches im Repository anzeigen lassen kannst.

## 1. Aktuelle Branches anzeigen
Jetzt haben wir ein Repository mit zwei verschiedenen Branches (Zweigen). Um Verzweigungen und ihre Unterschiede anzuzeigen, verwende den log Befehl wie folgt.

Befehl:  
```bash
git hist --all
```

Ergebnis:  
```bash
$ git hist --all
# * d99d725 2022-01-16 | Added README (HEAD -> main) [Gregor Biswanger]
# | * f810921 2022-01-16 | Updated index.html (style) [Gregor Biswanger]
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

Wir haben die Möglichkeit, `--graph` von `git hist` in Aktion zu sehen. Das Hinzufügen der Option `--graph` zu `git log` bewirkt die Konstruktion eines Commit-Baums mit Hilfe einfacher ASCII-Zeichen. Wir sehen beide Branches (style und main) und dass der aktuelle Branch main HEAD ist. Der hinzugefügte index.html-Zweig geht vor beiden Zweigen.

Das `--all` Flag garantiert, dass wir alle Zweige sehen. Standardmäßig wird nur der aktuelle Zweig angezeigt.

## Level abschließen
Gehe direkt ins nächste Level mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis (docs/24-level.md).