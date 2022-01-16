# Commits aus einem Branch entfernen
## Ziel
- Wie man die letzten Commits des Branches löscht.

`Revert` ist ein mächtiger Befehl aus dem vorherigen Level, mit dem du alle Übertragungen an das Repository abbrechen kannst. Sowohl ursprüngliche als auch abgebrochene Commits werden jedoch im Verlauf des Branches angezeigt (bei Verwendung des `git log` Befehls).

Oft erkennen wir, nachdem ein Commit bereits vorgenommen wurde, dass es ein Fehler war. Es wäre schön, einen Undo-Befehl zu haben, der es erlaubt, die falschen Commits sofort zu löschen. Dieser Befehl würde das Erscheinen eines oder mehrerer unerwünschter Commits im Verlauf des Git-Protokolls verhindern.

## 1. Der Reset-Befehl
Wir haben bereits den `Reset`-Befehl verwendet, um die Pufferzone und den ausgewählten Commit abzugleichen (HEAD-Commit wurde in der vorherigen Lektion verwendet).

Wenn eine Commit-Referenz angegeben wird (d. h. ein Branch-, Hash- oder Tag-Name), wird der `Reset`-Befehl:

1. Überschreibt den aktuellen Branch, damit er auf das richtige Commit zeigt.
1. Setzt optional die Pufferzone zurück, damit sie dem angegebenen Commit entspricht.
1. Setzt optional das Arbeitsverzeichnis zurück, damit es mit dem angegebenen Commit übereinstimmt.

## 2. Überprüfe die History
Lass uns einen schnellen Scan unseres Commit-Verlaufs durchführen.

Befehl:  
```bash
git hist
```

Ergebnis:  
```bash
$ git hist
# * 744ff5f 2022-01-16 | Revert "Oops, we didn't want this commit" (HEAD -> main) [Gregor Biswanger]
# * 076f969 2022-01-16 | Oops, we didn't want this commit [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Wir sehen, dass die letzten beiden Commits in diesem Branch „Oops“ und „Revert Oops“ sind. Lass uns diese beiden mit dem Reset-Befehl entfernen.

## 3. Markiere zuerst diesen Branch
Lass uns den letzten Commit mit einem Tag markieren, damit du ihn nach dem Entfernen eines Commits finden kannst.

Befehl:  
```bash
git tag oops
```

## 4. Commit auf vorheriges "Oops" zurücksetzen
Im Verlaufsprotokoll oben befindet sich der mit „v1“ gekennzeichnete Commit vor den „Oops“- und „Revert Oops“-Commits. Lass uns den Branch auf diesen Punkt zurücksetzen. Da der Branch ein Tag hat, können wir den Tag-Namen im Reset-Befehl verwenden (wenn er kein Tag hat, können wir den Hash-Wert verwenden).

Befehl:  
```bash
git reset --hard v1
git hist
```

Ergebnis:
```bash
# * 5a9e60b 2022-01-15 | Added HTML header (HEAD -> main, tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Unser Main-Branch zeigt auf Commit v1 und die Commits „Revert Oops“ und „Oops“ existieren nicht mehr im Branch. Der Parameter `--hard` bewirkt, dass das Arbeitsverzeichnis den neuen Zweigkopf (Branch head) widerspiegelt.

## 5. Nichts geht jemals verloren
Was ist mit den falschen Commits passiert? Sie befinden sich noch im Depot. Eigentlich können wir uns immer noch auf sie beziehen. Zu Beginn der Lektion haben wir das „oops“-Tag für den abgebrochenen Commit erstellt. Werfen wir einen Blick auf alle Commits.

Befehl:  
```bash
git hist --all
```

Ergebnis:
```bash
# * 744ff5f 2022-01-16 | Revert "Oops, we didn't want this commit" (tag: oops) [Gregor Biswanger]
# * 076f969 2022-01-16 | Oops, we didn't want this commit [Gregor Biswanger]
# * 5a9e60b 2022-01-15 | Added HTML header (HEAD -> main, tag: v1) [Gregor Biswanger]
# * d9352d1 2022-01-15 | Added standard HTML page tags (tag: v1-beta) [Gregor Biswanger]
# * 41b3c46 2022-01-15 | Added h1 tag [Gregor Biswanger]
# * b617603 2022-01-14 | First Commit [Gregor Biswanger]
```

Wir können sehen, dass die falschen Commits nicht verschwunden sind. Sie werden nicht mehr im Main-Zweig aufgelistet, verbleiben aber weiterhin im Repository. Sie wären immer noch im Repository, wenn wir sie nicht taggen würden, aber dann könnten wir sie nur über ihre Hash-Namen referenzieren. 

Nicht referenzierte Commits verbleiben im Repository, bis die Garbage Collection vom System ausgeführt wird.

# 6. Gefahren beim zurücksetzen mit `reset`
Resets auf lokale Branches sind in der Regel harmlos. Die Folgen eines "Unfalls" können durch die Verwendung des richtigen Commit rückgängig gemacht werden.

Andere Benutzer, die den Branch teilen, können jedoch verwirrt werden, wenn der Branch auf Remote-Repositories geteilt wird.

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/14-level.md).