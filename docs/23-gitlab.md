# Gitlab - CE

### Instalação

### Backup

### Restore
- Stop the processes that are connected to the database
docker exec -it <name of container> gitlab-ctl stop puma
docker exec -it <name of container> gitlab-ctl stop sidekiq

- Verify that the processes are all down before continuing
docker exec -it <name of container> gitlab-ctl status

- Run the restore. NOTE: "_gitlab_backup.tar" is omitted from the name
docker exec -it <name of container> gitlab-backup restore BACKUP=11493107454_2018_04_25_14.4.1

- Restart the GitLab container
docker restart <name of container>

- Check GitLab
docker exec -it <name of container> gitlab-rake gitlab:check SANITIZE=true