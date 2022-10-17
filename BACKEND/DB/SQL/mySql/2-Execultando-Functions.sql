## ----Chamando as funcões de dentro os Argumentos -----
select respondeComMensagem('João');

select id, removeAcentuacao(descricao) 
from produtos_padaria
limit 2;

## Para filtar um só itens -----
/*select id, removeAcentuacao(descricao) 
from produtos_padaria;
where removeAcentuacao(descricao) = 'Pão'; */