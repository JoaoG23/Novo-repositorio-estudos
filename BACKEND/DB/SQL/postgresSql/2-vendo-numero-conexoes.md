No PostgreSQL, você pode usar o seguinte comando SQL para ver o número de conexões ativas:

```sql
SELECT * FROM pg_stat_activity;
```

Este comando retorna uma lista de processos ativos no servidor PostgreSQL, que inclui conexões ativas⁴.

Além disso, você pode usar o seguinte comando para verificar o número máximo de conexões configuradas e quantas dessas conexões estão atualmente em uso:

```sql
SELECT max_conn,used,res_for_super,max_conn-used-res_for_super res_for_normal
FROM  
  (SELECT count(*) used FROM pg_stat_activity) t1, 
  (SELECT setting::int res_for_super FROM pg_settings WHERE name=$$superuser_reserved_connections$$) t2, 
  (SELECT setting::int max_conn FROM pg_settings WHERE name=$$max_connections$$) t3
```

Este comando retorna algo como:

```
 max_conn | used | res_for_super | res_for_normal  
----------+------+---------------+---------------- 
 300      |  266 |             3 |             31 
```

Neste exemplo, `max_conn` é o número máximo de conexões configuradas, `used` é o número de conexões atualmente em uso, `res_for_super` é o número de conexões reservadas para superusuários e `res_for_normal` é o número de conexões restantes disponíveis para usuários normais¹.

Lembre-se de que você precisa ter as permissões adequadas para executar esses comandos no seu banco de dados.

Espero que isso ajude! Se você tiver mais perguntas, fique à vontade para perguntar. 😊

(1) Monitorando conexões no Postgresql com pg_stat_activity. https://raphaleao.medium.com/monitorando-conexões-no-postgresql-com-pg-stat-activity-daf4ae171d47.
(2) Como listar número de conexões no PostgreSQL - Coffops. https://coffops.com/como-listar-numero-de-conexoes-no-postgresql/.
(3) Entenda o Pool de Conexões no PostgreSQL e Melhore a ... - Blog 4Linux. https://blog.4linux.com.br/conexoes-e-pool-postgresql/.
(4) Como limitar e verificar o número de conexões por usuário no PostgreSQL .... https://coffops.com/como-limitar-e-verificar-o-numero-de-conexoes-por-usuario-no-postgresql/.