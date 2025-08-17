o que faz comando git add -u?


ChatGPT said:
O comando git add -u atualiza a staging area (área de preparação para commit) com as mudanças em arquivos já rastreados pelo Git, incluindo:

✅ Arquivos modificados

✅ Arquivos removidos (deletados do sistema de arquivos)

❌ Não inclui novos arquivos não rastreados (ou seja, arquivos novos que o Git ainda não conhece)

Exemplos rápidos:
Situação:
bash
Copy
Edit
.
├── rastreado.txt   # já está versionado
├── novo.txt        # novo arquivo, não está rastreado
└── deletado.txt    # foi deletado do sistema, mas ainda está versionado
Comando:
bash
Copy
Edit
git add -u
Resultado:
rastreadado.txt → adicionado se foi modificado

deletado.txt → marcado para remoção no commit

novo.txt → ignorado (não rastreado)

Comparação:
Comando	O que adiciona à staging
git add .	Tudo: novos, modificados e removidos
git add -u	Apenas modificados e removidos
git add -A	Tudo também (igual ao git add . na maioria dos casos)

Uso típico:
Quando você remove arquivos localmente e quer que o Git também os remova no próximo commit:

bash
Copy
Edit
git add -u
git commit -m "Remove arquivos obsoletos"
Se ainda tiver dúvida, posso simular um caso real com arquivos.