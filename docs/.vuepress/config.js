import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
  head: [['link', {rel: 'icon', href: '/images/hero.png'}]],
  bundler: viteBundler(),
  lang: 'en-US',

  title: 'DevOps',
  description: 'DevOps Documentation',
  base: "/kubernetes-docs/",

  locales: {
    '/': {
      lang: 'en-US',
      title: 'English',
      description: 'English Documentation',
    },
    '/br/': {
      lang: 'Português',
      title: 'Português',
      description: 'Português Brasil Documentação',
    },
  },

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
          '/docker/docker.md',
          '/docker/install-docker.md',
          '/docker/volumes-docker.md'
        ],
    },
    {
      text: 'kubernetes',
      collapsible: true,
      children: [
        '/kubernetes/prepare.md',
        '/kubernetes/install-kubernetes.md',
        '/kubernetes/initialize-master.md',
        '/kubernetes/initialize-slave.md',
        '/kubernetes/running-yamls.md',
        '/kubernetes/running.md',
        '/kubernetes/server-registry-local.md',
        '/kubernetes/helm.md',
        '/kubernetes/metric-server.md',
        '/kubernetes/volumes-k8s.md',
        '/kubernetes/renovar-certs.md',
        '/kubernetes/redis-cluster.md',
        '/kubernetes/add-new-node-at-kubernetes',
        '/kubernetes/regcred.md',
        '/kubernetes/commands.md',
        '/kubernetes/service-yaml.md',
        '/kubernetes/using.md',
        ],
    },
    {
      text: 'kubernetes-addons',
      collapsible: true,
      children: [
        '/kubernetes-addons/cert-manager',
        '/kubernetes-addons/ingress-controller',
        '/kubernetes-addons/prometheus.md',
        '/kubernetes-addons/grafana',
        '/kubernetes-addons/portainer',
        '/kubernetes-addons/redis-cluster',
      ],
    },
    {
      text: 'kvm',
      collapsible: true,
      children: [
        '/kvm/disk-resize-kvm'
      ],
    },
    {
      text: 'gitlab',
      collapsible: true,
      children: [
        '/gitlab/gitlab'
      ],
    },
    {
      text: 'keycloak',
      collapsible: true,
      children: [
        '/keycloak/keycloak-15',
        '/keycloak/keycloak-26',
      ],
    },
    {
      text: 'postgres',
      collapsible: true,
      children: [
        '/postgres/postgres',
        '/postgres/zabbix-postgres',
      ],
    },
    {
      text: 'letsencrypt',
      collapsible: true,
      children: [
        '/letencrypt/letencrypt.md',
      ],
    },
    {
      text: 'vsftp',
      collapsible: true,
      children: [
        '/vsftp/vsftp',
      ],
    },
    {
      text: 'Others',
      collapsible: true,
      children: [
        '/others/k3s',
        '/others/install-minikube.md',
        '/others/install-openshift.md'
      ],
    }
    ],
  }),
})
