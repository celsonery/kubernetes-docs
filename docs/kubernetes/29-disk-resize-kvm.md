# Resize KVM Disk

```bash
qemu-img info /var/lib/libvirt/images/k8sno3.qcow2
qemu-img resize /var/lib/libvirt/images/k8sno3.qcow2 +50G
```  
  
```bash
virsh blockresize k8sno3 /var/lib/libvirt/images/k8sno3.qcow2 80G
```

```bash
ssh k8sno3
```

```bash
df -h
```

```bash
fdisk /dev/vda
apt install parted
partprobe /dev/vda
```

```bash
df -h
lsblk
lvs
pvs
vgs
pvresize /dev/vda5
pvresize /dev/vda
pvresize /dev/vda2
```

```bash
vgs
pvs
```

```bash
lvextend -l +100%FREE /dev/mapper/k8s01--vg-var
```

```bash
resize2fs /dev/k8s01-vg/var
```

```bash
df -Th
```