#====== IF ESLE ==========

SELECT * , if( custo > 4 ,'Caro', 'Barato' ) AS SITUACAO FROM produto;

SELECT * ,
	CASE
		WHEN (estoque_atual < 0) THEN 'BAIXO'
		WHEN (estoque_atual >= 1) AND (estoque_atual < 3) THEN 'MEDIO'
		WHEN (estoque_atual >= 4) THEN 'ALTO' 
	END AS SITUACAO FROM produto;
    
    