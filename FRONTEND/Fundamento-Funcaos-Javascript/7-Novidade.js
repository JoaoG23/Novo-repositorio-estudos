// ------- Entendo o porque das coisa no JavaScript ------

// ONDE INCLUIR -----
/**
1 - O navegador precisa baixa o Arquivojs
 e exerculta-lo, enquanto faz parsing do HTML
 2- Durante a exercusao os navegadores podem
 interronper o parse do HTML

 
 DEFER - tag DEFER - ao colocada no 
 arquivo js ele irá começar abaixar
 os arquivos antes do body aparecer.
 */
<script src="caminho" defer ></script>

// async - ao colocada nao garante a ordem
// de execulsao do escripts
// 

<script src="caminho" async ></script>