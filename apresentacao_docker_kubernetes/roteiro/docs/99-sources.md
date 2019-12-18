=====================================================










==========================================================


Teoria
- Virtual Machines x Containers
	- Hypervisors: Vmware, Xen, Hyper-v, VirtualBox, KVM

- Diferenças e propósitos
	- Virtual machines 
		- Proposito: rodar outro sistema operacional
		- SO ( Licença / iso )
		- Hardware ( Memória, processador, Disco )
		-> Virtualização pesada

	- container 
		- Proposito: rodar outros serviços e aplicações isolada independente do SO hospedeiro
		- Roda como processo do Hospedeiro isolado
		- Vários containers no mesmo hospedeiro
		- Tempo de resposta mais agilidade ( Inicializacao / regeneração )
		- 
		-> Virtualização compacta e leve

Docker
- o que e containers e por que usar
	- diferenças máquina virtual e containers
	- tipos de containers ( docker, nspawn, rocket )
	
	- virtualização SO
	- imagens
	- containers
	
- instalação ( linux / windows / Mac )
- comandos básicos
	- gerenciando imagens
	- gerenciando containers
	
- Criando imagens
	- criando com commit
	- criando com dockerfiles
	- subindo para o dockerhub

- Armazenamento no docker
	- criando volumes
	- anexando volumes ao container

- Rede no docker
	

- Aplicação no container
	- 12factor app


Kubernetes
- o que eh introducao
- preparacao
	- entendendo ( master, nodes, containers, pods, deployment, services, etcd, registry, 
	- montagem cluster
	- preparação firewall
	- 

- instalação
- iniciação no mestre
- ingressão no slaves

-- Testando a bagaça
	- testando com imagens publicas
	- testando com imagens próprias
		- imagem no dockerhub
		
	- criando servidor de imagem local
		- subindo imagem para o servidor

	- criando um container com a imagem criada
	- criando um serviço para acesso externo
	
- Atualizando a app
- Voltando a app

- Escalando a app
	- manualmente
	- automaticamente

---
O cluster

Master / Slaves
Containers / Pods
Deployments
Services
Etcd / Registry

Vantagens:
Atualização
Volta
Escala
Auto escalando
---
