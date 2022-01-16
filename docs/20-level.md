# Branch erstellen
## Ziel
- Um zu erfahren, wie man einen lokalen Branch im Repository erstellt.

Es ist an der Zeit, unser Hallo-Welt ausdrucksvoller zu machen. Da dies einige Zeit dauern kann, ist es am besten, diese Änderungen in einen neuen Branch (Zweig) zu verschieben, um sie von den Änderungen am Hauptzweig zu isolieren.

## 1. Erstelle einen Branch
Nennen wir unseren neuen Branch "style".

Befehl:  
```bash
git checkout -b style
git status
```

**Hinweis:** `git checkout -b <branch name>` ist eine Abkürzung für `git branch <branch name>` gefolgt von `git checkout <branch name>`.

Beachte dass der `git status` Befehl meldet, dass du dich im style-Zweig befindest.

## 2. Die style.css-Datei hinzufügen

Befehl:  
```bash
code lib/style.css
```

style.css:  
```css
h1 {
  color: red;
}
```

Befehl:  
```bash
git add lib/style.css
git commit -m "Added css stylesheet"
```

## 3. Ändern der Hauptseite

Update der `hallo.html` Datei, um die style.css-Datei zu laden.

hallo.html:  
```html
<!-- Author: Gregor Biswanger (gregor.biswanger@web-enliven.de) -->
<html>
  <head>
      <link type="text/css" rel="stylesheet" media="all" href="style.css" />
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

Befehl:  
```bash
git add lib/hallo.html
git commit -m "Hallo uses style.css"
```

## 4. Ändere die index.html
Update der `index.html` Datei, um die style.css-Datei zu laden.

index.html:  
```html
<html>
  <head>
    <link type="text/css" rel="stylesheet" media="all" href="lib/style.css" />
  </head>
  <body>
    <iframe src="lib/hallo.html" width="200" height="200" />
  </body>
</html>
```

Befehl:  
```bash
git add index.html
git commit -m "Updated index.html"
```

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/21-level.md).