# Instalação kubernetes no Debian 9

- Adicionando repositório do kubernetes

> Utilize o "sudo" antes dos comandos caso esteja utilizando como usuário comum.
```
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
```

> Crie o arquivo: **/etc/apt/sources.list.d/kubernetes.list**
> com o seguinte conteúdo:

```
deb https://apt.kubernetes.io/ kubernetes-xenial main
```

> Atualize lista de pacotes
```
apt update
```

> Instalação do kubernetes
```
apt install kubelet kubeadm kubectl flannel etcd
```

> Marque os pacotes para prevenir modificações.
```
apt-mark hold kubelet kubeadm kubectl
```

