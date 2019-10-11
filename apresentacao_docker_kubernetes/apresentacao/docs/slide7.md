## Slide 7:

#### Docker

- Imagens: 
	Uma imagem docker, nada mais é que um template (read-only) que contém todas as informações que o container irá carregar em sua execução como por exemplo o SO.
	"classe"

- Containes: 
	São espacos que permitem a execução de aplicações de forma isolada, num mesmo so. as bibliotecas da aplicação e a própria aplicação.
	"instancia"

- Registries: 
	São repositórios de imagens que podem ser públicos ou privados.

- Dockerfile: 
	É um aquivo texto que possui uma série de comandos necessários para criação de uma imagem seguindo uma estrutura pré-definida.

```
FROM centos:latest
MAINTAINER Celso Nery
RUN yum -y install httpd
CMD ["/usr/sbin/httpd","-D","FOREGROUND"]
EXPOSE 80
```
