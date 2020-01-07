# Máquinas virtuais

O que são máquinas virtuais ou VMs?

As **VMS** Foram projetadas para emular o hardware para outros sistemas operacionais serem instalados sobre o SO **hospedeiro** em um servidor físico.

## Hypervisor

#### Definição

Hypervisor ou Virtual Machine Monitor (VMM) é a camada de software que permite a execução concorrente de vários sistemas operacionais em um mesmo computador.

O Hypervisor é responsável pelo controle da execução das máquinas virtuais e também funciona como um mediador entre os dispositivos virtuais e o hardware, como por exemplo transações de I/O. Para isto o VMM tem que ter controle sobre o processador e sobre o resto do hardware.

O Hypervisor apresenta a camada de software hóspede um processador virtual (ou vários) e a permite executar código diretamente sobre ele. Enquanto isso o Hypervisor mantém controle seletivo de recursos do processador real, memória física, gerenciamento de interrupções e I/O.

Essa camada de software hóspede é um ambiente para a execução de um Sistema Operacional que possui pilhas de execução independentes, ou seja, cada SO é executado isoladamente dos demais SOs concorrentes, e cada um executaria como se o Hypervisor não existisse.


Na literatura classificam os Hypervisors em 2 tipos:
•Tipo 1, também chamado de nativo ou “bare-metal”.
•Tipo 2, também chamado de hospedado (hosted em inglês).

TIPO 1: NATIVO

Bare-metal é o termo dado a execução de software diretamente sobre o hardware, sem nenhuma outra camada de software por cima, ou seja, neste tipo o Hypervisor tem controle total sobre o processador e o resto do hardware.

Como exemplos de produtos que utilizam esse tipo de Hypervisor temos o VMware ESXi, o Xen, Microsoft Hyper-V Server e o KVM (Kernel-based Virtual Machine) que são Kernels Linux modificados para trabalhar como Hypervisors.

TIPO 2: HOSPEDADO

Este tipo de Hypervisor é executado como um software sobre um sistema operacional normal chamado de hóspede. Logo, nesta situação o Hypervisor tem controle limitado sobre o hardware.


Os produtos que utilizam esse tipo de Hypervisor são os mais populares, pois não requerem que o sistema operacional nativo seja substituído. Exemplos: VMware Player/Fusion/Workstation, Parallels Desktop/Workstation, VirtualBox, VirtualBox OSE, QEMU, oVirt, Microsoft Virtual PC, Virtual Server.


## Mostrar uma VM Rodando.