## Ingressando nós escravos no cluster kubernetes.

Execute o comando abaixo em cada nó que desejar ingressar no cluster
> Utilize o token e a chave que recebeu ao iniciar o nó mestre.

```
kubeadm join 10.0.10.100:6443 --token 9e0xeu.s0if3... --discovery-token-ca-cert-hash sha256:3a328e56729515d...
```

> Verique no master os nós em execução
```
kubectl get nodes

ou

kubectl get nodes -o wide
```
> OBS.: A opção **-o wide** acrecenta mais informações a saida

> A Saída deve ser parecida com essa:
![verificadndo nos do cluester](imgs/checando_nos_do_cluster.PNG)


Continue para [Usando o cluster](08-running.md)
