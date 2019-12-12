
---

Segundo um relatório da DATADOG ( empresa com uma plataforma de monitoramento de infraestrutura de TI em SaaS) mostra em 2015 um aumento de containers em 5x em apenas 1 ano.

Os containers têm facilitado o desenvolvimento ágil e aplicação da metodologia Devops e isso tem aquecido o mercado e soluções poderosas têm sido disponibilizadas. 

O Google usa containers a mais de 1 década. Mas o assunto nunca foi tão comentado acompanhado do uso do Cloud Computing.

Os containers permitem adoção híbrida e multicloud

Uma vez conteinerizados, os aplicativos podem ser implantados em qualquer infraestrutura, máquinas virtuais, metal ou nuvens públicas que executam diferentes hypervisors. 

Muitas organizações começam com a execução de containers em sua infraestrutura virtualizada e acham mais fácil migrar para a nuvem sem precisar alterar o código.
}

- Docker

- Imagens: 
	Uma imagem docker, nada mais é que um template (read-only) que contém todas as informações que o container carregará em sua execução como por exemplo o SO. "Classe"

- Container: 
	São espaços que permitem a execução de aplicações de forma isolada, num mesmo so. as bibliotecas da aplicação e a própria aplicação.
	"Instancia"

- Registries: 
	São repositórios de imagens que podem ser públicos ou privados.

- Dockerfile: 
	É um aquivo texto que possui uma série de comandos necessários para criação de uma imagem seguindo uma estrutura pré-definida.

FROM centos:latest
MAINTAINER Celso Nery
RUN yum -y install httpd
CMD ["/usr/sbin/httpd","-D","FOREGROUND"]
EXPOSE 80

}

=====================================================



- Maquinas virtuais

Á medida que o poder de processamento e a capacidade dos servidores aumentavam, as aplicações no bare-metal não eram capazes de utilizar a nova abundância de recursos. Assim as VMs vieram, projetadas executando software em cima de servidores físicos para emular um sistema de hardware especifico. 

Um hypervisor é um software que cria e executa máquinas virtuais. É o que fica entre o SO e o hardware, sendo utilizado para virtualizar o servidor. (destacamos vmWare, Xen, Hyper-V e até o VirtualBox).

As VMs com diferentes sistemas, podem ser executadas no mesmo servidor físico. Cada VM tem seus próprios binários, kernel, bibliotecas, aplicativos e isso as tornam muito grande em termos de espaço no servidor.

A virtualização trouxe uma variedade de benefícios, sendo uma das maiores a capacidade de consolidar aplicativos em único sistema. A virtualização conduziu uma redução de custos através da possibilidade de um provisionamento mais rápido e uma capacidade de recuperação de desastres melhorada. Ambientes de desenvolvimento também se beneficiaram desta consolidação da virtualização, onde por exemplo, com uma maior utilização de servidores mais potentes liberou servidores não utilizados para montagem destes ambientes.

- Containers

Os containers permitem que uma aplicação rode de forma encapsulada em um único sistema operacional hospedeiro, onde o código, bibliotecas e todas as suas dependências são carregadas e executadas de forma independente. 

Existem várias implementações de containers, a mais utilizada e mais conhecida no momento é o Docker. 

Os containers ficam em cima de um servidor físico e seu sistema operacional hospedeiro. 
Cada container compartilha o kernel do SO host e geralmente, os binários e bibliotecas também. 
Componentes compartilhados são somente leitura e isso torna os containers excepcionalmente leve. 
Os containers têm tamanhos estimados em MB e levam segundos para serem iniciados contra os minutos e os vários gigabytes de uma VM inteira.

Containers fornecem o básico necessário para qualquer aplicativo ser executado em um sistema operacional hospedeiro.

Além disso os containers reduzem a carga de trabalho na gestão dos sistemas operacionais, já que eles compartilham o mesmo kernel, você terá menos sistemas em seus servidores para gerenciar pacotes de atualização e segurança.

Através de recursos como (Namespaces / chroot / cgroups ) containers isolam processos e passam a gerir totalmente os recursos e garantem a segurança necessária.

Namespaces para sistemas Linux ajuda os processos a terem seu próprio ambiente.
Chroot isola os namespaces do resto do sistema e assim protege contra ataques ou interferência de outros containers no mesmo host.
Cgroups é um recurso do kernel Linux responsável por isolar a utilização de recursos como CPU, MEMÓRIA, I/O de DISCO e de REDE, a partir de um conjunto de processos.

Esses 3 ingredientes criam a magia da virtualização de Containers.

-
Uma vez conteinerizados, os aplicativos podem ser implantados em qualquer infraestrutura. Sejam elas máquinas virtuais, bare-metal ou várias nuvens públicas que executam diferentes hipervisores. Muitas organizações começam com a execução de containers em sua infraestrutura virtualizada e acham mais fácil migrar para a nuvem sem precisar alterar o código.


4. Os containers economizam no licenciamento de VM
Os aplicativos em contêiner compartilham o sistema operacional e as bibliotecas de softwares comuns, o que melhora bastante a utilização da CPU em uma VM. Isso significa que uma organização pode reduzir o número total de máquinas virtuais necessárias para operar seu ambiente e aumentar o número de aplicativos que podem ser executados em um servidor. Os usuários do Docker Enterprise geralmente observam uma consolidação de servidor 50% maior após a conteinerização, o que significa menos custos de hardware e economia no licenciamento de VMs e sistemas operacionais.


- Docker
- Container: São espaços segregados que permitem a execução de aplicações de forma isolada, num mesmo SO.
- Imagens: Uma imagem docker, nada mais é que um template (read-only) que contém todas as informações que o container irá carregar em sua execução como por exemplo o SO, as bibliotecas da aplicação e a própria aplicação.
- Registries: São repositórios de imagens que podem ser públicos ou privados.
- Dockerfile: É um aquivo texto que possui uma série de comandos necessários para criação de uma imagem seguindo uma estrutura pré-definida.

FROM centos:latest
MAINTAINER Rafael Araújo
RUN yum -y install httpd
CMD ["/usr/sbin/httpd","-D","FOREGROUND"]
EXPOSE 80


- Kubernetes

Desenvolvido pelo Google, tem ganhado bastante espaço na comunidade, o Kubernetes ou simplesmente (k8s) é um poderoso orquestrador de containers que permite abstrair dos usuários toda complexidade de gerenciar múltiplos containers e mantê-los online.

O Kubernetes é um sistema distribuído e, por isso, roda em um cluster onde os hosts ficam disponíveis para executar os containers. Ou seja, o Kubernetes realiza todo o gerenciamento dos containers realizando o melhor esforço para mantê-los operacionais. Caso haja alguma perturbação no cenário, o Kubernetes se encarrega de realizar as operações necessárias de forma a manter a aplicação online.

Normalmente, o Kubernetes é utilizado junto com um serviço de cloud. O Google Cloud Platform, AWS e Azure são exemplos de serviços de cloud compatíveis com Kubernetes. No entanto, o Kubernetes pode ser instalado em seu cluster próprio.



- Minikube


- Openshift

O Openshift é uma ferramenta de orquestração e gerenciamento de containers baseada no kubernetes (“por baixo dos panos” temos o kubernetes) que facilita e adiciona ainda mais inteligência ao seu ambiente. Permitindo que rapidamente você coloque sua aplicação para “rodar” sem muita complexidade. Além de trazer uma série de funções adicionais que o kubernetes por si só, não oferece.




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

Minikube

Openshift