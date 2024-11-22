# Bem-vindo ao guia de intalação Kubernetes

Estes documentos informa como instalar e configurar um ambiente kubernetes para uso.

> Todo ambiente foi construido em cima da distribuição Debian 9 (stretch).
este ambiente não obtive sucesso na versão 10 (buster) do Debian.

> Autor: **[Celso Nery](https://github.com/celsonery)**

## Sumário
1. [Docker](01-docker.md)
1. [Sobre](02-sobre.md)
1. [Preparação](03-prepare.md)
1. [Instalação docker](04-install-docker.md)
1. [Instalação kubernetes](05-install-kubernetes.md)
1. [Iniciando nó mestre ](06-initialize-master.md)
1. [Integrando um nó escravo ao cluster](07-initialize-slave.md)
1. [Testando e colocando pra funcionar](08-running.md)
1. [Testando usando arquivos yamls](08-2-running-yamls.md)
1. [Minikube - Ambiente para testes](09-install-minikube.md)
1. [Openshift - Ambiente frontend simples](10-install-openshift.md)
1. [Registro server local](11-server-registry-local.md)
1. [Usando o gerenciador de pacotes helm](12-helm.md)
1. [Instando metric-server](13-metric-server.md)
1. [Instalando prometheus](14-prometheus.md)
1. [Instalando grafana](15-grafana.md)
1. [Instalando ingress-controller](16-ingress-controller.md)
1. [Instalando cert-manager](17-cert-manager.md)
1. [Usando volumes em docker](18-volumes-docker.md)
1. [Usando volumes no k8s](19-volumes-k8s.md)
1. [Usando k3s para desenvolvimento](20-k3s.md)
1. [Instalando gitlab](23-gitlab.md)
1. [Instalando portainer](24-portainer.md)
1. [Instalando sonarqube](24-sonarqube.md)
1. [Renovando certificados SSL](25-renovar-certs.md)
1. [Instalando redis](26-redis-cluster.md)
1. [Usando secrets](regcred.md)
1. Guia rápido:
    - [Guia rapido 'kubernete'](commands.md)
    - [Guia rapido 'Criando conteiner'](using.md)
1. [LICENSE](LICENSE.md)

> Consiga todas as informações necessárias em [Docker para desenvolvedores](https://github.com/gomex/docker-para-desenvolvedores)
ou na própria documentação oficial [Docker.com](https://www.docker.com/)

Kubernetes
> Consulte a [Documentação oficial do kubernetes](https://kubernetes.io/)

## License
Documento sob licença [MIT license](LICENSE.md)
