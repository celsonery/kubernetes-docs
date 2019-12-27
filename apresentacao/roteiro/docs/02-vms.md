# Máquinas virtuais

O que são máquinas virtuais ou VMs?

As **VMS** Foram projetadas para emular o hardware para outros sistemas operacionais serem instalados sobre o SO **hospedeiro** em um servidor físico.

## Hypervisor

O Hypervisor é uma camada de software localizada entre o hardware e as máquinas virtuais, responsável por fornecer recursos (storage, CPU, memória, rede, etc.) da máquina física para a máquina virtual. 

Ele permite que vários sistemas operacionais possam ser executados em um mesmo host.

Todo o gerenciamento e alocação de recursos de hardware de uma máquina virtual é feito pelo Hypervisor ou Monitor de Máquina Virtual (VMM – Virtual Machine Monitor). O Hypervisor é uma camada de software localizada entre a camada de hardware e o sistema operacional. É, também, responsável por controlar o acesso do sistema operacional visitante (máquina virtual) aos dispositivos de hardware. Ele também deve prover recursos que garantam a segurança das máquinas virtuais através de mecanismos como isolamento, particionamento e encapsulamento.

A virtualização é dividida basicamente em paravirtualização e virtualização completa. Na completa, o hypervisor simula todo o hardware da máquina física, fazendo com que as máquinas virtuais executem de forma isolada. Em outras palavras, o hypervisor emula todo o hardware para as VMs, fazendo com que o sistema operacional execute como se não estivesse em um ambiente virtual. Sua vantagem é a larga aceitação por parte de diversos tipos de sistemas operacionais.

Já a paravirtualização entrega para as VMs um hardware igual ao real, com isso o sistema a ser virtualizado pode sofrer alterações no decorrer do tempo. Funcionalidade esta que a virtualização completa não permite, já que nela o hardware é entregue de forma virtual. A principal característica da paravirtualização é o desempenho, ou seja, sua facilidade em se adaptar às modificações do sistema operacional devido a sua similaridade com o hardware real.

A virtualização do tipo completa fornece dois tipos de hypervisor. O tipo 1, chamado de bare-metal e o tipo 2, chamado de hosted. O hypervisor do tipo bare-metal interage diretamente com o hardware da máquina física. Ele é completamente independente do sistema operacional do host. Já no tipo hosted, o hypervisor roda sobre o sistema operacional do host, sendo isto possível em qualquer tipo de SO.

Destacamos **VMWARE**, **VIRTUALBOX**, **HYPER-V**, **XEN**, **KVM/QEMU**.

## Mostrar uma VM Rodando.