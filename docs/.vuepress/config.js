import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
  head: [['link', {rel: 'icon', href: '/images/hero.png'}]],
  bundler: viteBundler(),
  lang: 'en-US',

  title: 'DevOps',
  description: 'DevOps Documentation',
  base: "/k8s-documentation/",

  theme: defaultTheme({
    theme: "readthedocs",
    docsRepo: 'https://github.com/celsonery/devops-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    sidebarDepth: 0,
    logo: '/images/hero.png',
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'github',
        link: 'https://github.com/celsonery/devops-docs'
      },
      ],
    sidebar: [
    {
      text: 'Docker',
      collapsible: true,
      children: [
          '/docker/01-docker.md',
          '/docker/02-install-docker.md',
          '/docker/03-volumes-docker.md'
        ],
    },
    {
      text: 'kubernetes',
      collapsible: true,
      children: [
        '/kubernetes/01-prepare.md',
        '/kubernetes/02-install-kubernetes.md',
        '/kubernetes/03-initialize-master.md',
        '/kubernetes/04-initialize-slave.md',
        '/kubernetes/05-running-yamls.md',
        '/kubernetes/05-running.md',
        '/kubernetes/11-server-registry-local.md',
        '/kubernetes/12-helm.md',
        '/kubernetes/13-metric-server.md',
        '/kubernetes/14-prometheus.md',
        '/kubernetes/15-grafana.md',
        '/kubernetes/16-ingress-controller.md',
        '/kubernetes/17-cert-manager.md',
        '/kubernetes/19-volumes-k8s.md',
        '/kubernetes/20-k3s.md',
        '/kubernetes/23-gitlab.md',
        '/kubernetes/24-portainer.md',
        '/kubernetes/24-sonarqube.md',
        '/kubernetes/25-renovar-certs.md',
        '/kubernetes/26-redis-cluster.md',
        '/kubernetes/27-postgres.md',
        '/kubernetes/28-zabbix-postgres.md',
        '/kubernetes/29-disk-resize-kvm.md',
        '/kubernetes/30-letencrypt.md',
        '/kubernetes/33-add-new-node-at-kubernetes',
        '/kubernetes/34-regcred.md',
        '/kubernetes/35-vsftp.md',
        '/kubernetes/commands.md',
        '/kubernetes/service-yaml.md',
        '/kubernetes/using.md',
        ],
    },
    ],
  }),
})
