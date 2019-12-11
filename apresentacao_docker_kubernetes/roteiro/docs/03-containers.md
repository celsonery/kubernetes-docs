# Containers

E containers o que são?

Os containers têm facilitado o desenvolvimento ágil e aplicação da metodologia Devops e isso tem aquecido o mercado e soluções poderosas têm sido disponibilizadas. O Google usa containers a mais de 1 década. Mas o assunto nunca foi tão comentado ultimamente, acompanhado de uso de Cloud Computing.

Os containers substituem a virtualização com Hypervisor, então precisamos entender o que cada um oferece para termos certeza de uma escolha assertiva.

### O que são containers

Os containers permitem que uma aplicação rode de forma encapsulada em cima de um único sistema operacional hospedeiro, onde o código, bibliotecas e todas as suas dependências são carregadas e executadas de forma independente.

Os containers ficam em cima de um servidor físico e seu sistema operacional hospedeiro.
Cada container compartilha o kernel do host e geralmente, os binários e bibliotecas também. 

Componentes compartilhados são somente leitura e isso torna os containers excepcionalmente leve. 
Os containers têm tamanhos estimados em MB e levam segundos para serem iniciados contra os minutos e os vários gigabytes de uma VM inteira.

Containers fornecem o básico necessário para qualquer aplicativo ser executado em um sistema operacional hospedeiro.

Além disso os containers reduzem a carga de trabalho na gestão dos sistemas operacionais, já que eles compartilham o mesmo kernel, você terá menos sistemas em seus servidores para gerenciar pacotes de atualização e segurança.

Existem várias implementações de containers (**rocket, docker, systemd-nspawn**), sendo a mais utilizada e mais conhecida no momento é o **Docker**.
