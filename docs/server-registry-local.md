## Criando um servidor de repositórios local

Configurações iniciais
> Realizar a configuração no servidor e em todos os nós 
> OBS.: Configuração somente para teste, usar certificado o conexão TLS para produção.

> Acrescentar no arquivo **/etc/docker/daemon.json**
```
"insecure-registries": [ "10.0.2.0/16" ]
```
> Reiniciar o serviço docker
```
# systemctl restart docker
```

- Criar o servidor
> Para criar um servidor local precisamos criar um container com a imagem registry com o nome que desejarmos.

```
# docker run -d -p 5000:5000 --restart=always --name=repositorio registry

-d                  <- rodar como daemon
-p 5000:5000        <- porta
--restart=always    <- auto reiniciar se falhar
--name=repositorio  <- nome do repositorio
registry            <- imagem docker para o servidor 
```


- Tageando uma imagem
> Listando as imagens
```
# docker image ls
```

> Tageando a imagem **karyon/npsys-front**
```
# docker tag karyon/npsys-front virtdev01:5000/npsys-front
```

- Subindo a imagem
```
# docker push virtdev01:5000/npsys-front
```

- Rodando um container kubernetes com a imagem do servidor local
```
$ kubectl run npsys-front --image=virtdev01:5000/npsys-front --replicas=3 --port=8761 
```
