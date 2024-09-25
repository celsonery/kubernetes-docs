# Instalação kubernetes no Debian - Atualização

Carregue os modulos **overlay** e **br_netfilter**

Crie o arquivo **/etc/modules-load.d/containerd.conf** para subir após o reboot

```bash
overlay
br_netfilter
```

Carregue manualmente

```bash
$ sudo modprobe overlay
$ sudo modprobe br_netfilter
```

Crie o arquivo /etc/sysctl.d/99-kubernetes-k8s.conf

```bash
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-ip6tables = 1
```
Carregue as configurações criadas

```bash
$ sudo sysctl --system
```

Instale o containerd

Instale o repositório do **docker** somente para fazer a instalação do **containerd.io**

Baixe a chave gpg do repositório
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

Crie um arquivo de repositório em **/etc/apt/sources.list.d/** com o nome **docker.list**

```bash
deb [arch=amd64] https://download.docker.com/linux/debian bullseye stable
```

Atualize a lista de pacotes e instale o **containerd.io**

```bash
sudo apt-get update
sudo apt-get install containerd.io
```

Sobreescreva o arquivo de configuração do containerd

```bash
$ sudo containerd config default > /etc/containerd/config.toml
```

Edite o arquivo **/etc/containerd/config.toml** e altere a opção **SystemdCgroup** de **false** para **true**

```bash
sudo vim /etc/containerd/config.toml
```

Restarte o containerd

```bash
sudo systemctl restart containerd
```

Instale o Kubernetes

Adicione a chave gpg do repositório do kubernetes
```bash
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
```

Adicione o repositório do kubernetes

Crie o arquivo: **/etc/apt/sources.list.d/kubernetes.list**
```bash
deb http://apt.kubernetes.io/ kubernetes-xenial main"
```

### Nova atualizacao 06/03/2024
```
$ echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
$ curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
```
install Kubernetes Cluster with Kubeadm
kubelet doesn’t appreciate the command-line options anymore (these are deprecated). Instead, I suggest to create a configuration file, say ‘kubelet.yaml’ with following content.

```
$ vi kubelet.yaml
apiVersion: kubeadm.k8s.io/v1beta3
kind: InitConfiguration
---
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
kubernetesVersion: "1.28.0" # Replace with your desired version
controlPlaneEndpoint: "k8s-master"
---
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
```

```
$ sudo kubeadm init --config kubelet.yaml
```
###

Atualize a lista de pacotes
```bash
sudo apt update
```

Instale o kubernetes
```bash
sudo apt install kubelet kubeadm
```

Marque os pacotes para prevenir modificações.
```bash
sudo apt-mark hold kubelet kubeadm
```

Ative o daemon para iniciar automaticamente
```bash
sudo systemctl enable kubelet
```
