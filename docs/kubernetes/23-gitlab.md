# Gitlab - CE

### Instalação

#### Reset Root Password

```
docker exec -it gitlab bash
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
- Realizar o update somente após os backups estiverem terminados

- Conectar na maquina com o usuário Bagarote
- Altere o arquivo docker-compose.yml e adicione a nova versao na imagem docker
```
$ docker-compose pull
$ docker-compose up -d
```

- Aguardar o container gitlab ficar em **Healthy**
```
$ watch -n2 docker ps
```

### Liberar espaço

- Entrar em cada aplicação e remover imagens antigas - Docker

- Script para remover imagens antigas e liberar espaço em disco
for i in `docker image ls | grep etotem/front | awk '{print $2}' | egrep -v '(dev|hml|latest|v1391|v1601|v1639)'`;do docker image rm "registry.bagarote.com.br/karyon/etotem/front:"$i;done

- Script 2 para remover imagens antigas e liberar espaço em disco


- Liberar espaço nos registry - Gitlab
Entrar no container gitlab
```
$ docker exec -it 
```


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
```

### Ativação **SSL**
```
```

### Ativação **Envio de e-mail**
- Editar o arquivo /opt/gitlab/config/gitlab.rb

```
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.server"
gitlab_rails['smtp_port'] = 465
# gitlab_rails['smtp_user_name'] = "smtp user"
# gitlab_rails['smtp_password'] = "smtp password"
gitlab_rails['smtp_domain'] = "example.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_openssl_verify_mode'] = 'peer'
```

- Entrar no container gitlab
```
$ docker exec -it gitlab bash
```

- Criar as credenciais do email
```
# gitlab-rake gitlab:smtp:secret:edit
```

- Apos o editor abrir insira as credenciais
```
user_name: 'smtp user'
password: 'smtp password'
```

- Após as configurações feitas, reinicie as configurações do gitlab
```
$ gitlab-ctl reconfigure

```

- Documentação oficial
```
https://docs.gitlab.com/omnibus/settings/smtp.html
```


### Ativação **Container Registry**
```
```

### Ativação **Gitlab-runner**
```
```
