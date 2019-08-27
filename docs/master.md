## Iniciando o nó mestre

```
kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=10.0.2.100 --kubernetes-version "1.15.1"
```