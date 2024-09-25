# - Postgres

#### Tranferencia on-the-fly

```bash
pg_dump -v -C <nome-banco> | psql -h <nome-novo-host ou ip-novo-host> -U postgres <nome-banco>
```

#### Tranferencia on-the-fly para outro banco na mesma maquina **remover tag '-C'**

```bash
pg_dump -v <nome-banco> | psql -U postgres <nome-banco>
```