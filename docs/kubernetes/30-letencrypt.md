# Let's Encrypt

certbot certonly -v --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory -d '*.bagarote.dev.br' -d bagarote.dev.br