Para atualizar sua branch com as novas atualizações da branch `feature` e da branch `main` no Git, você pode seguir os seguintes passos:

1. Primeiro, mude para a branch `main`:
```bash
git checkout main
```
2. Atualize a branch `main`:
```bash
git pull origin main
```
3. Mude para a branch `feature`:
```bash
git checkout feature
```
4. Atualize a branch `feature`:
```bash
git pull origin feature
```
5. Mude para a branch que você deseja atualizar:
```bash
git checkout <sua-branch>
```
6. Faça o rebase da branch `main` para a sua branch:
```bash
git rebase main
```
7. E então, faça o rebase da branch `feature` para a sua branch:
```bash
git rebase feature
```
Lembre-se de substituir `<sua-branch>` pelo nome da sua branch. 

Esses comandos irão aplicar as alterações da branch `main` e da branch `feature` para a sua branch. Se ocorrerem conflitos durante o rebase, você precisará resolvê-los manualmente. Depois de resolvidos, você pode continuar o rebase com `git rebase --continue`. Se quiser abortar o processo de rebase, você pode usar `git rebase --abort`. 
