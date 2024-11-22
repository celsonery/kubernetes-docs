# Resize KVM Disk

140  qemu-img info /var/lib/libvirt/images/k8sno3.qcow2
141  qemu-img resize /var/lib/libvirt/images/k8sno3.qcow2 +50G
  
  
144  virsh blockresize k8sno3 /var/lib/libvirt/images/k8sno3.qcow2 80G
  
145  ssh k8sno3

122  df -h

128  fdisk /dev/vda
129  apt install parted
130  partprobe /dev/vda

132  df -h
133  lsblk
134  lvs
135  pvs
136  vgs
137  pvresize /dev/vda5
138  pvresize /dev/vda
139  pvresize /dev/vda2

140  vgs
141  pvs

142  lvextend -l +100%FREE /dev/mapper/k8s01--vg-var

143  resize2fs /dev/k8s01-vg/var

144  df -Th
