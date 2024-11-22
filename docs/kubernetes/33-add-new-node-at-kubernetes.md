# Novo no Cluster

## Use template
Use o k8sno-template e clone para uma nova maquina

## Update ssh keys em **/etc/ssh/**
```bash
  
ssh-keygen -t rsa -f ssh_host_rsa_key
ssh-keygen -t ecdsa -f ssh_host_ecdsa_key
ssh-keygen -t ed25519 -f ssh_host_ed25519_key
```

## Update hostname and add host in /etc/hosts all machines in the cluster
```bash
hostnamectl set-hostname <new-name>
```
## apt update and apt upgrade
```bash
apt update
apt upgrade
```

## join this machine in the kubernetes cluster

No master gere uma nova key

```bash
kubeadm token create --print-join-command
```

Va na no e conecte-o
```bash
kubeadm join 192.168.121.100:6443 --token r5jtqh.pek774xjqw4m52di --discovery-token-ca-cert-hash sha256:518233918ee03536725320c4e37c8b94357088233ee1089381822fde4478b895
```

> Após este procedimento verifique se subiu o novo no.
```bash
kubectl get nodes
```

