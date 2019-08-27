# Instalação docker no Debian 9

- Primeiramente atualize o sistema

> Utilize o "sudo" antes dos comandos caso esteja utilizando como usuário comum.
```
# apt update
# apt upgrade
```

- Instalação de pacotes necessários para a instalação.
```
# apt install build-essential module-assistant curl gnupg2 \
apt-transport-https software-propoerties-common ca-certificates
```

- Adicionando repositório do Docker no Debian
```
# curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
```

> Crie o arquivo: **/etc/apt/sources.list.d/docker.list**
> com o seguinte conteúdo:

```
deb [arch=amd64] https://download.docker.com/linux/debian stretch stable
```

- instalando o docker
> OBS.: A versão atual não funcionou no meu Debian 9 então tive que instalar a versão 18.06.0
```
# apt install docker-ce=18.06.0~ce~3-0~debian
```

> Testando se o docker está funcionando.
```
$ docker version
```

> Deve aparecer algo parecido com:
```
Client:
 Version:           18.06.0-ce
 API version:       1.38
 Go version:        go1.10.3
 Git commit:        0ffa825
 Built:             Wed Jul 18 19:09:33 2018
 OS/Arch:           linux/amd64
 Experimental:      false

Server:
 Engine:
  Version:          18.06.0-ce
  API version:      1.38 (minimum version 1.12)
  Go version:       go1.10.3
  Git commit:       0ffa825
  Built:            Wed Jul 18 19:07:38 2018
  OS/Arch:          linux/amd64
  Experimental:     false
```

> Adicionar um usuário comum para execuar um container
```
# groupadd docker
# usermod -aG docker $USER
```

- Testando o docker
```
$ docker run hello-world
```


Mais informações sobre docker acesse: [docker](docker.md)
Continuar para a instalação do kubernetes [kubernetes instalação](install-kubernetes.md)
