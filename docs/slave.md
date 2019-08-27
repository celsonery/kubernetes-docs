## Ingrassando um nó escravo no cluster kubernetes.

```
kubeadm join 10.0.2.100:6443 --token 9e0xeu.s0if3... --discovery-token-ca-cert-hash sha256:3a328e56729515d...
```

> Utilize o token e a chave que recebeu ao iniciar o nó mestre.