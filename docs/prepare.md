# Preparação do ambiente para o kubernetes.

### Requisitos

1. Mínimo de 3 servers
1. Servidor master com 2 CPUS (cores)
1. Acesso administrativo (Root)


### Preparação
Adicionar nomes e IPs das maquinas no arquivo **/etc/hosts**

```
10.0.2.100  master.empresa.local    master
10.0.2.101  slav01.empresa.local    slav01
10.0.2.102  slav02.empresa.local    slav02
```

Configurar o firewall

Master:

| Porta | Protocolo |
| ---- | ---- |
| 6443 | TCP |
| 2379-2380 | TCP |
| 10250 | TCP |
| 10251 | TCP |
| 10252 | TCP |
| 10253 | TCP |

Slaves:

| Porta | Protocolo |
| ---- | ---- |
| 10251 | TCP |
| 10255 | TCP |

Desabilitar o SWAP
```
# swapon -s
# swapoff -a
```

Editar o arquivo **/etc/fstab** e comentar a linha correspondente
```
#/dev/mapper/master--vg-swap_1 none swap    sw  0   0
```

Após toda configuração verifique se as maquinas estão se enxergando com o **ping**
```
# ping slav01
# ping slav02
```

Se tudo correu bem e obteve resposta dos nós escravos e vice-versa reinicie o computador.
```
# shutdown -r now
```
Continuar para a [Instalação do docker](install-docker.md)

