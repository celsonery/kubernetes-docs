## Slide 2:

#### Maquinas virtuais x Containers

###### Maquinas virtuais
O que são máquinas virtuais?

A medida que o poder de processamento foi avançando sobravam recursos. Assim surgiu a idéia das VMs, projetadas para executar em cima do servidor fisicos emulando outros sistemas operacionais.

Hypervisor: Um hypervisor e um software que fica entre o hardware e o SO sendo utilizado para virtualizar o hardware. ( destacamos vmware, virtualbox, hyper-v, xen, kvm/qemu ).


###### Containers
O que são containers?

Os containers permitem que uma aplicação rode de forma encapsulada em cima de um único sistema operacional hospedeiro, onde o código, bibliotecas e todas as suas dependências são carregadas e executadas de forma independente.

Os containers ficam em cima de um servidor físico e seu sistema operacional hospedeiro.
Cada container compartilha o kernel do host e geralmente, os binários e bibliotecas também. 

Componentes compartilhados são somente leitura e isso torna os containers excepcionalmente leve. 
Os containers têm tamanhos estimados em MB e levam segundos para serem iniciados contra os minutos e os varios gigabytes de uma VM inteira.

Containers fornecem o básico necessário para qualquer aplicativo ser executado em um sistema operacional hospedeiro.

Além disso os containers reduzem a carga de trabalho na gestão dos sistemas operacionais, já que eles compartilham o mesmo kernel, você terá menos sistemas em seus servidores para gerenciar pacotes de atualização e segurança.

Existem várias implementações de containers, a mais utilizada e mais conhecida no momento é o Docker. 

