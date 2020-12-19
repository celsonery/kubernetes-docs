# Instalação docker no Debian 9

Atualizar o sistema

> Utilize o "sudo" antes dos comandos caso esteja fazendo como usuário comum.
```
# apt update
# apt upgrade
```

Instalar pacotes necessários para a instalação.
```
# apt install curl gnupg2 apt-transport-https software-properties-common ca-certificates
```

Adicionar repositório do Docker no Debian
```
# curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
```

Crie o arquivo: **/etc/apt/sources.list.d/docker.list**
```
deb [arch=amd64] https://download.docker.com/linux/debian stretch stable
```
ou
```
add-apt-repository "deb [arch=64] https://download.docker.com/linux/debian stretch stable"
``` 

instalar o docker
> Caso tenha problemas ao executar um container instale a versão anteriror [18.06.0]
```
# apt update
# apt install docker-ce

ou 

# apt install docker-ce=18.06.0~ce~3-0~debian
```

Configurar o daemon
Editar o arquivo **/etc/docker/daemon.json**
```
{
    "exec-opts": ["native.cgroupdriver=systemd"],
    "log-driver": "json-file",
    "log-opts": {
        "max-size": "100m"
        },
    "storage-driver": "overlay2"
}
```

Criar o diretorio **/etc/systemd/system/docker.service.d**
```
# mkdir -p /etc/systemd/system/docker.service.d
```

Reinicie o serviço Docker Daemon
```
systemctl daemon-reload
systemctl restart docker
```

Verifique se o docker está funcionando.
```
$ docker version
```

Deve aparecer algo parecido com:
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

Dar permissão de usuário comum usar containers
```
# usermod -aG docker $USER
```

Executando o primeiro docker
```
$ docker run hello-world
```

ou imagem melhor para teste httpd

```
$ docker run --rm -p 80:80 httpd
```

Para verificar se a imagem funcionou basta acessar via browser o ip da maquina host.
```
http://127.0.0.1
```

Mais informações sobre docker acesse: [docker](01-docker.md)
Continuar para [kubernetes instalação](05-install-kubernetes.md)
