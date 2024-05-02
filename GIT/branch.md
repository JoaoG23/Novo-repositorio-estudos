´´´´js
$ git branch
* minha_branch
  main
$ git checkout minha_branch
Já está na 'minha_branch'
$ git push origin minha_branch
´´´´

### Baixa branch existem para repository local 

git checkout -b <nome-do-seu-branch-local> origin/<nome-do-branch-remoto>

git checkout -b meu-novo-branch origin/branch-remoto
