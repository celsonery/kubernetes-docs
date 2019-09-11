## Colocando para funcionar

#### Criando imagem Docker local para o container

Criar o arquivo **Dockerfile**
```
FROM alpine
WORKDIR /opt/npsys
RUN apk update && apk add vim openjdk11-jre
COPY npsys.sh .
CMD ash npsys.sh
```

Gerar a imagem 
```
docker image build -t karyon/npsys-api .
```

Subir para o dockerhub ou [Crie um servidor de respositório local](server-registry-local.md)
```
docker login

username:
password:

docker push karyon/npsys-api:latest
```

Verificar o que está rodando
```
kubectl get pods -o wide
kubectl get deployments -o wide
```

### Criar um container com a imagem criada
```
kubectl run npsys-api --image=karyon/npsys-api --port=8761
```

### Criar um serviço para acesso externo a aplicação
```
kubectl expose deployment npsys-api --type=LoadBalancer --external-ip=192.168.239.158 --port=8080
```

Para derrubar a aplicação
```
kubectl delete deployment npsys-api
```

### Atualizando e voltando uma versão da aplicação.

Para atualizar a aplicação
```
kubectl set image deployments/npsys-api npsys-api=npsys-api:0.0.2
```

Voltando uma atualizacao
```
kubectl rollout undo deployments/npsys-api

```

### Escalando a aplicação

Escalando manualmente 3 replicas do container
```
kubectl scale deployment npsys-api --replicas=3
```

Escalando automaticamente iniciando com 2 replicas até 15 réplicas escalando quando a CPU atingir 80% de utilização.
```
kubectl autoscale deployment npsys-api --min=2 --max=15 --cpu-percent=80
```

Para verificar o autoscale
```
kubectl get hpa
```

Para remover o autoscale
```
kubectl delete hpa npsys-api
```
