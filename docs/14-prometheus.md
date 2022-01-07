1 - Instale o Helm

2 - Instale ou confirme se o Metrics-server está instalado
```sh
kubectl top nodes
```

3 - Instale o prometheus

https://artifacthub.io/

Instalar o Chart

```sh
$helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

$ helm repo update
```

$ helm repo list

$ helm show values prometheus-community/prometheus > prometheus-values.yaml


$ helm install prometheus prometheus-community/prometheus --values prometheus-values.yaml

testar

https://adm.bagarote.com.br:30001

https://adm.bagarote.com.br:30001/metrics


Habilitar a aplicacao

adicionar no manifest da aplicacao

spec:
    template:
        metadata:
            annotacions:
                prometheus.io/scrape: "true"
                prometheus.io/path: /metrics
                prometheus.io/port: "8080"
            labels:
                app: api
            ...



```


