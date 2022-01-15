# Aliases

## Ziel
- Um zu erfahren, wie man Aliase und Shortcuts für Git-Befehle einrichtet.

## 1. Allgemeine aliases

Für Windows Benutzer:  
```bash
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.br branch
git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
git config --global alias.type 'cat-file -t'
git config --global alias.dump 'cat-file -p'
```

Für Unix/Mac Benutzer:  
`git status`, `git add`, `git commit` und `git checkout` sind gängige Befehle, daher ist es eine gute Idee, Abkürzungen für sie zu verwenden.

Füge folgendes zur .gitconfig-Datei in deinem $HOME-Verzeichnis hinzu.

```ini
[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
  type = cat-file -t
  dump = cat-file -p
```

Wir haben bereits über Commit- und Statusbefehle gesprochen. In der vorherigen Lektion haben wir den `log`-Befehl behandelt und werden den `checkout`-Befehl sehr bald kennenlernen. 

Das Wichtigste, was du aus dieser Lektion lernen kannst, ist, dass du `git st`  überall dort eingeben kannst, wo du `git status` eingeben kannst. Das Beste ist, dass der Befehl `git hist` dir hilft, den wirklich langen `log` Befehl zu vermeiden.

Fahre fort und versuche es mit den neuen Befehlen.

### Tipp
Es gibt in der Community einige lustige Aliase die direkt übernommen werden können. Wie zum Beispie [Git auf Bayerisch](https://github.com/danielauener/git-auf-deutsch/blob/master/README-bayerisch.md). Der `git init` Befehl würde dann `git ofanga` lauten.

## 2. Definiere den hist-Alias in der .gitconfig-Datei

Zum größten Teil werde ich weiterhin den vollständigen Befehl in dieser Anleitung eingeben. Die einzige Ausnahme ist, dass ich den oben definierten Hist-Alias verwenden werde, wenn ich das Git-Protokoll sehen muss. Stelle sicher, dass du ein Hist-Alias in deiner .gitconfig-Datei hast, bevor du fortfahrst.

## 3. Type und Dump
Wir haben ein paar Aliase für Befehle hinzugefügt, die wir noch nicht besprochen haben. Wir werden sehr bald über den Befehl `git branch` sprechen und der `git cat-file` Befehl ist nützlich, um git zu erkunden.

## 4. Command aliases (optional)
Wenn deine Shell Aliase oder Abkürzungen unterstützt, kannst du auch auf dieser Ebene Aliase hinzufügen. Ich benutze:

```bash
alias gs='git status '
alias ga='git add '
alias gb='git branch '
alias gc='git commit'
alias gd='git diff'
alias gco='git checkout '
alias gk='gitk --all&'
alias gx='gitx --all'

alias got='git '
alias get='git '
```

Die `gco`-Abkürzung für `git checkout` ist sehr nützlich, sodass ich Folgendes eingeben kann:

```bash
gco <branch>
```

Um einen bestimmten Branch auszuchecken.

Außerdem schreibe ich `git` oft falsch. Zum Beispiel `get` oder `got`, also habe ich auch Aliase für diese erstellt.

## Level abschließen
Gehe direkt ins nächste Level mit dem Befehl `npm start` innerhalb vom Git-Adventure Verzeichnis (docs/08-level.md).