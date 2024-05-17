No Oracle, você pode usar os seguintes comandos SQL para ver o número de conexões ativas e o número máximo de conexões permitidas:

Para ver o número de conexões ativas:

```sql
SELECT status, count(*) as connections FROM V$SESSION GROUP BY status;
```

Este comando retorna uma lista de sessões ativas no servidor Oracle, agrupadas por status⁶.

Para ver o número máximo de conexões permitidas:

```sql
SELECT name, value FROM v$parameter WHERE name = 'sessions';
```

Este comando retorna o número de sessões que o banco de dados foi configurado para permitir¹.

Além disso, você pode usar o seguinte comando para verificar o número máximo de conexões configuradas e quantas dessas conexões estão atualmente em uso:

```sql
SELECT resource_name, current_utilization, max_utilization, limit_value 
FROM v$resource_limit 
WHERE resource_name IN ('sessions', 'processes');
```

Este comando retorna algo como:

```
RESOURCE_NAME CURRENT_UTILIZATION MAX_UTILIZATION LIMIT_VALUE
------------- ------------------- --------------- -----------
processes     96                  309             500
sessions      104                 323             792
```

Neste exemplo, `RESOURCE_NAME` é o nome do recurso (sessões ou processos), `CURRENT_UTILIZATION` é o número de conexões atualmente em uso, `MAX_UTILIZATION` é o número máximo de conexões que foram usadas ao mesmo tempo e `LIMIT_VALUE` é o número máximo de conexões configuradas¹.

Lembre-se de que você precisa ter as permissões adequadas para executar esses comandos no seu banco de dados.

Espero que isso ajude! Se você tiver mais perguntas, fique à vontade para perguntar. 😊

Origem: conversa com o Bing, 23/04/2024
(1) Como visualizar a quantidade de conexões ativas no Oracle? - sql, oracle. https://living-sun.com/pt/sql/807745-how-to-view-the-amount-of-active-connections-in-oracle-sql-oracle.html.
(2) How to check the maximum number of allowed connections to an Oracle .... https://stackoverflow.com/questions/162255/how-to-check-the-maximum-number-of-allowed-connections-to-an-oracle-database.
(3) Qual comando SQL para mostrar o número máximo de conexões ativas ao .... https://pt.stackoverflow.com/questions/85412/qual-comando-sql-para-mostrar-o-n%c3%bamero-m%c3%a1ximo-de-conex%c3%b5es-ativas-ao-banco-de-dad.
(4) Exibir Conexões Disponíveis - Oracle. https://bing.com/search?q=como+ver+quantidade+de+conex%c3%b5es+no+Oracle.
(5) Exibir Conexões Disponíveis - Oracle. https://docs.oracle.com/cloud/help/pt_BR/analytics-cloud/ACUBI/GUID-5E1C240C-0FDA-422A-B2B8-604012944B55.htm.
(6) Monitorar Usuários e Logs de Atividades - Oracle. https://docs.oracle.com/cloud/help/pt_BR/analytics-cloud/ACABI/GUID-8A2DF5B1-06AC-434D-86B4-267DE63BE48F.htm.