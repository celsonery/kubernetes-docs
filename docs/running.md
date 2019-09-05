## Colocando para funcionar

- Criando imagem Docker local para o container

Criar o arquivo **Dockerfile**
```
FROM alpine
WORKDIR /opt/npsys
RUN apk update && apk add vim openjdk11-jre
COPY npsys.sh .
CMD ash npsys.sh
```

Gerando a imagem 
```
docker image build -t karyon/npsys-api .
```

Subindo para o dockerhub
```
docker login

username:
password:

docker push karyon/npsys-api:latest
```

Verificando o que está rodando
```
kubectl get pods -o wide
kubectl get deployments -o wide
```

Criando um container com a imagem criada
```
kubectl run npsys-api --image=karyon/npsys-api --image-pull-policy=Never --port=8761
```

Criando um serviço para acesso externo a aplicação
```
kubectl expose deployment npsys-api --type=LoadBalancer --external-ip=192.168.239.158 --port=8080
```

- Derrubando a aplicação
```
kubectl delete deployment npsys-api
```


- Atualizando a aplicação
```

```

- Escalando a aplicação

Criando 3 replicas do container
```
kubectl scale deployment npsys-api --replicas=3
```

Criando um autoscalling iniciando em 2 replicas até 15 réplicas escalando quando a CPU atingir 80% de utilização.
```
kubectl autoscale deployment npsys-api --min=2 --max=15 --cpu-percent=80
```