Se você precisa remover um commit local no Git, aqui estão algumas formas de fazer isso, dependendo da situação:

Remover o último commit sem perder alterações no código

bash
    git reset --soft HEAD~1
Isso mantém as mudanças feitas no commit no seu diretório de trabalho, permitindo que você faça um novo commit.

Remover o último commit e as alterações feitas

bash
    git reset --hard HEAD~1
Isso apaga completamente o commit e todas as mudanças relacionadas. Cuidado ao usar esse comando, pois ele não pode ser desfeito facilmente!

Remover um commit específico sem alterar os outros

bash
git rebase -i HEAD~N
Onde N é o número de commits que você quer revisar. Isso abrirá um editor de texto onde você pode excluir commits indesejados.

Desfazer um commit sem perder histórico

bash
git revert <commit-hash>
Isso cria um novo commit que reverte as alterações feitas no commit especificado, preservando o histórico do repositório.