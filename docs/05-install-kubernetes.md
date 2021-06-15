# Instalação kubernetes no Debian

Adicione o repositório do kubernetes

> Utilize o "sudo" antes dos comandos caso esteja utilizando como usuário comum.
```
# curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
```

Crie o arquivo: **/etc/apt/sources.list.d/kubernetes.list** com o seguinte conteúdo:
```
deb https://apt.kubernetes.io/ kubernetes-xenial main
```
ou
```
# echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | tee /etc/apt/sources.list.d/kubernetes.list
```

Atualize a lista de pacotes
```
apt update
```

Instale o kubernetes no master (control-plane)
```
apt install kubelet kubeadm kubectl
```

Nos nós escravos (workers) instale somente o kubelet
```
apt install kubelet
```

Marque os pacotes para prevenir modificações.
```
apt-mark hold kubelet kubeadm kubectl
```

Ative o daemon para iniciar automaticamente
```
# systemctl enable kubelet
```

Continue para [Iniciando o cluster Kubernetes Master](06-initialize-master.md)
