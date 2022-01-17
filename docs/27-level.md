# Relocating als Alternative zu Merging
## Ziel
- Den Unterschied zwischen Relocating (Rebase) und Merging kennenzulernen.

Schauen wir uns die Unterschiede zwischen Relocating und Merging an. Dazu müssen wir zum Zeitpunkt vor der ersten Zusammenführung wieder in das Repository zurückkehren und dann dieselben Schritte wiederholen, jedoch mit Relocating.

Wir werden den Reset-Befehl verwenden, um den Zweig in einen früheren Zustand zurückzusetzen.

## 1. Zurücksetzen vom Style-Branch
Gehen wir zum Style-Branch bis zu dem Punkt, bevor wir ihn mit dem Main-Branch zusammengeführt haben. Wir können den Branch auf jeden Commit zurücksetzen. Tatsächlich kann **reset** den Verzweigungszeiger so ändern, dass er auf einen beliebigen Commit im Tree zeigt.

Hier wollen wir im Style-Zweig bis zu einem Punkt zurückgehen, bevor wir mit dem Main fusionieren. Wir müssen den letzten Commit vor dem Zusammenführen finden.

Befehl:  
```bash
git checkout style
git hist
```

Ergebnis:  
```bash
$ git checkout style
# Already on 'style'

$ git hist
# *   0e4ed00 2022-01-17 | Merged main fixed conflict. (HEAD -> style) [Gregor Biswanger]
# |\
# | * 080ed40 2022-01-16 | Life is great! (main) [Gregor Biswanger]
# * | deb31a1 2022-01-16 | Merge branch 'main' into style [Gregor Biswanger]
# |\|
# | * d99d725 2022-01-16 | Added README [Gregor Biswanger]
# * | f810921 2022-01-16 | Updated index.html [Gregor Biswanger]
# * | 762149e 2022-01-16 | Hallo uses style.css [Gregor Biswanger]
# * | 8f84751 2022-01-16 | Added css stylesheet [Gregor Biswanger]
# |/
# * 6f888c2 2022-01-16 | Added index.html. [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Es ist ein wenig schwer zu lesen, aber wir können aus der Ausgabe erkennen, dass der Commit „Updated index.html“ vor dem Zusammenführen der letzte im Style-Branch war. Lass uns den Style-Branch auf diesen Commit zurücksetzen.

Befehl:  
```bash
git reset --hard <hash>
```

Ergebnis:  
```bash
$ git reset --hard f810921
# HEAD is now at f810921 Updated index.html
```

## 2. Überprüfe den Branch.
Suche nach dem Style-Branch im Log. Es gibt keine Merge-Commits in unserer Historie.

Befehl:  
```bash
git hist --all
```

Ergebnis:  
```bash
$ git hist --all
# * 080ed40 2022-01-16 | Life is great! (main) [Gregor Biswanger]
# * d99d725 2022-01-16 | Added README [Gregor Biswanger]
# | * f810921 2022-01-16 | Updated index.html (HEAD -> style) [Gregor # Biswanger]
# | * 762149e 2022-01-16 | Hallo uses style.css [Gregor Biswanger]
# | * 8f84751 2022-01-16 | Added css stylesheet [Gregor Biswanger]
# |/
# * 6f888c2 2022-01-16 | Added index.html. [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) # [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

## 3. Zurücksetzen des Main-Branchs
Der interaktive Modus, den wir dem Main-Branch hinzugefügt haben, ist zu einer Änderung geworden, die im Widerspruch zu den Änderungen im Style-Branch steht. Lass uns die Änderungen im Main-Branch bis zu dem Punkt rückgängig machen, bevor die Konfliktänderung vorgenommen wurde. Dadurch können wir den rebase-Befehl demonstrieren, ohne uns um Konflikte kümmern zu müssen.

Befehl:  
```bash
git checkout main
git hist
```

Ergebnis:  
```bash
$ git checkout main
# Switched to branch 'main'

$ git hist
# * 080ed40 2022-01-16 | Life is great! (HEAD -> main) [Gregor Biswanger]
# * d99d725 2022-01-16 | Added README [Gregor Biswanger]
# * 6f888c2 2022-01-16 | Added index.html. [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Der „Added README“ Commit steht direkt vor dem von uns hinzugefügten widersprüchlichen interaktiven Modus. Im Moment müssen wir den Main-Branch auf „Added README“ zurücksetzen.

Befehl:  
```bash
git reset --hard <hash>
git hist --all
```

Untersuche das Protokoll. Es sollte so aussehen, als hätten wir das Repository auf einen Zeitpunkt vor dem Merging zurückgespult.

Ergebnis:  
```bash
$ git reset --hard d99d725
# HEAD is now at d99d725 Added README
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

Also sind wir in der Geschichte vor dem ersten Merge zurückgegangen und wollen die Änderungen in main in unseren Style-Branch verlagern.

Dieses Mal werden wir den rebase-Befehl verwenden, anstatt merge.

Befehl:  
```bash
git checkout style
git rebase main
git hist
```

Ergebnis:  
```bash
$ git checkout style
# Switched to branch 'style'

$ git rebase main
# Successfully rebased and updated refs/heads/style

$ git hist
# * 0d4bc09 2022-01-16 | Updated index.html (HEAD -> style) [Gregor Biswanger]
# * 462cbb5 2022-01-16 | Hallo uses style.css [Gregor Biswanger]
# * 5374e23 2022-01-16 | Added css stylesheet [Gregor Biswanger]
# * d99d725 2022-01-16 | Added README (main) [Gregor Biswanger]
# * 6f888c2 2022-01-16 | Added index.html. [Gregor Biswanger]
# * 4adf1a1 2022-01-16 | Moved hallo.html to lib [Gregor Biswanger]
# * e9c95d3 2022-01-16 | Add an author/email comment [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

## 4. Merging VS rebasing

Das Ergebnis des Rebase-Befehls sieht dem des Merge-Befehls sehr ähnlich. Der Style-Branch enthält derzeit alle seine Änderungen sowie alle Änderungen des Main-Branches. Der Commit-Tree ist jedoch etwas anders. Der Style-Branch Commit-Tree wurde neu geschrieben, um den Main-Branch zu einem Teil des Commit-Verlaufs zu machen. Dadurch wird die Kette der Commits linearer und besser lesbar.

## 5. Wann sollte der Rebase-Befehl und wann der Merge-Befehl verwendet werden?
Verwende **nicht** den Rebase-Befehl...

1. Wenn die Verzweigung öffentlich und freigegeben ist. Das Umschreiben solcher Branches behindert die Arbeit anderer Teammitglieder.
1. Wenn der genaue Commit-Verzweigungsverlauf wichtig ist (weil der Befehl rebase den Verlauf der Commits neu schreibt).

Angesichts der obigen Empfehlungen bevorzuge ich die Verwendung von Rebase für kurzfristige, lokale Branches und den Merge-Befehl für Branches im öffentlichen Repository.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/28-level.md).