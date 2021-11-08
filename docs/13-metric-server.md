kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

Rodando:
```bash
kubectl get pods --all-namespaces
```

Conferindo se está funcionando:
```bash
kubectl top nodes

ou

kubectl top pods --all-namespaces
```
