# Instalação kubernetes no Debian

Carregue os modulos **overlay** e **br_netfilter**

```
# modprobe overlay
# modprobe br_netfilter
```

Crie o arquivo /etc/sysctl.d/98-kubernetes-cri.conf
```
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
net.bridge.bridge-nf-call-ip6tables = 1
```

Carregue as configurações criadas
```
# sysctl --system
```

Instale o containerd
```
# apt install containerd
```

Sobreescreva o arquivo de configuração do containerd
```
# containerd config default > /etc/containerd/config.toml
```

Reinicie o serviço do containerd
```
# systemctl restart containerd
```

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

Instale o kubernetes
```
apt install kubelet kubeadm kubectl
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
