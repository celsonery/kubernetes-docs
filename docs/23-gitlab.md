# Gitlab - CE

### Instalação


#### Reset Root Password

```
docker exec -it gitlab_continer bash
```

```
gitlab-rails console -e production
```

```
user = User.where(id: 1).first
user.password = 'your secret'
user.password_confirmation = 'your secret'
user.save
exit
```

### Backup

### Restore
- Stop the processes that are connected to the database
docker exec -it <name of container> gitlab-ctl stop puma
docker exec -it <name of container> gitlab-ctl stop sidekiq

- Verify that the processes are all down before continuing
docker exec -it <name of container> gitlab-ctl status

- Run the restore. NOTE: "_gitlab_backup.tar" is omitted from the name
docker exec -it <name of container> gitlab-backup restore BACKUP=16759806511_2023_02_09_14.10.5


- Restart the GitLab container
docker restart <name of container>

- Check GitLab
docker exec -it <name of container> gitlab-rake gitlab:check SANITIZE=true


### Update Gitlab


### Liberar espaço

- Entrar em cada aplicação e remover imagens antigas

- Script para remover imagens antigas e liberar espaço em disco
for i in `docker image ls | grep etotem/front | egrep -v '(dev|hml|latest|v1391|v1601|v1639)' | awk '{print $2}'`;do docker image rm "registry.bagarote.com.br/karyon/etotem/front:"$i;done

### Migração
- Transferir os aquivos abaixo todos com permissao 600

Gitlab
```
/opt/gitlab/data/config/gitlab.rb
/opt/gitlab/data/config/gitlab-secrets.json
```

Runner
```
/opt/gitlab/runners/shared/config/config.toml