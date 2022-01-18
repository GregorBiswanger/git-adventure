# Änderungen übermitteln
## Ziel
- Um zu erfahren, wie du Änderungen an das Remote-Repository übermittelst.

Da ein sauberes Repository normalerweise auf einem Netzwerkserver freigegeben wird, müssen wir unsere Änderungen an andere Repositories senden. Erstelle zunächst eine zu sendende Änderung. Bearbeite die README.md-Datei und führe einen Commit durch.

README.md:
```
Dies ist das Hello World-Beispiel aus dem Git-Workshop.

(Im Original geändert und auf shared gepusht.)
```

Befehl:  
```bash
git checkout main
git add README.md
git commit -m "Added shared comment to readme"
```

Sende nun Änderungen an das gemeinsam genutzte Repository.

Befehl:  
```bash
git push shared main
```

Das gemeinsam genutzte Repository ist dasjenige, das von uns gesendete Änderungen erhält. (Denke daran, dass wir es in der vorherigen Lektion als Remote-Repository hinzugefügt haben).

Ergebnis:  
```bash
$ git push shared main
# Enumerating objects: 5, done.
# Counting objects: 100% (5/5), done.
# Delta compression using up to 8 threads
# Compressing objects: 100% (3/3), done.
# Writing objects: 100% (3/3), 427 bytes | 427.00 KiB/s, done.
# Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
# To ../my-project.git
#    1f26579..4d3a273  main -> main
```

**Hinweis:** Wir mussten den Master-Zweig explizit angeben, um Änderungen zu übermitteln. Es kann automatisch konfiguriert werden, aber ich vergesse immer den Befehl. Wechseln Sie zur einfachen Verwaltung von Remote-Branches zu "Git Remote Branch".

## Level abschließen
Hast du alles richtig gemacht? Überprüfe es mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis und schalte das nächste Level frei (docs/40-level.md).