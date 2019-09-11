## Rodando o dashboard no Minikube

Executando um proxy
```
# kubectl proxy --address='0.0.0.0' --disable-filter=true
```

Acessar a url exemplo:
```
http://server_ip:8001/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/
```
