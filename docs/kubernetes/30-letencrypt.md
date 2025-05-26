# Let's Encrypt

## Create cert for a machine
```bash
certbot -v certonly --webroot -w /var/www/vhosts/oregon.net.br -d api-pit.oregon.net.br
```
#### Renew cert
```bash
certbot renew
```

#### Renew a specific domain
```bash
certbot renew certonly -d api-pit.oregon.net.br
```

## Create wildcard cert for a domain
```bash
certbot certonly -v --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory -d '*.bagarote.dev.br' -d bagarote.dev.br
```

#### Renew wildcard cert
```bash
certbot certonly --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory -d '*.bagarote.dev.br' -d bagarote.dev.br --force-renewal --manual-public-ip-logging-ok
```