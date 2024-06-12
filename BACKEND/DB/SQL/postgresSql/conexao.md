Para visualizar as conexões ativas no PostgreSQL, você pode usar a visão `pg_stat_activity`. Aqui estão alguns comandos que você pode usar:

1. Para ver todas as atividades:

```sql
SELECT * FROM pg_stat_activity;
```

2. Para ver apenas as conexões ativas:

```sql
SELECT * FROM pg_stat_activity WHERE state = 'active';
```

3. Se você quiser limitar a apenas um banco de dados, você pode usar:

```sql
SELECT * FROM pg_stat_activity WHERE datname = 'nome_do_banco_de_dados';
```

4. Para obter detalhes mais específicos das conexões ativas, você pode usar:

```sql
SELECT 
    pid,
    datname,
    usename,
    application_name,
    client_hostname,
    client_port,
    backend_start,
    query_start,
    query,
    state 
FROM  
    pg_stat_activity 
WHERE  
    state  = 'active';
```

### Encerrando conexoes :

SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'db_fxfinancas_dev'
  AND pid <> pg_backend_pid();
