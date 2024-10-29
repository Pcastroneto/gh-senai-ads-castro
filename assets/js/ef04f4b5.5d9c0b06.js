"use strict";(self.webpackChunksenai=self.webpackChunksenai||[]).push([[28],{2756:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(4848),o=s(8453);const i={title:"Aula 30-04",sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:6},a="Aulinha p\xf3s prova tensa...",l={id:"Aulas/ComputacaoNuvem/aula2",title:"Aula 30-04",description:"Comandos Iniciais",source:"@site/docs/Aulas/ComputacaoNuvem/aula2.md",sourceDirName:"Aulas/ComputacaoNuvem",slug:"/Aulas/ComputacaoNuvem/aula2",permalink:"/gh-senai-ads-castro/docs/Aulas/ComputacaoNuvem/aula2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Aulas/ComputacaoNuvem/aula2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Aula 30-04",sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Aula 23-04",permalink:"/gh-senai-ads-castro/docs/Aulas/ComputacaoNuvem/aula1"},next:{title:"Aula 14-05",permalink:"/gh-senai-ads-castro/docs/Aulas/ComputacaoNuvem/aula3"}},c={},d=[{value:"Comandos Iniciais",id:"comandos-iniciais",level:2},{value:"Configura\xe7\xe3o do Dockerfile",id:"configura\xe7\xe3o-do-dockerfile",level:2},{value:"Criar o Projeto Django",id:"criar-o-projeto-django",level:2},{value:"Utilizando o PlayWithDocker",id:"utilizando-o-playwithdocker",level:2},{value:"Rodando o Container",id:"rodando-o-container",level:2},{value:"Ajustes no Dockerfile",id:"ajustes-no-dockerfile",level:2},{value:"Verificando os Containers",id:"verificando-os-containers",level:2},{value:"Executar o Projeto Django",id:"executar-o-projeto-django",level:2}];function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"aulinha-p\xf3s-prova-tensa",children:"Aulinha p\xf3s prova tensa..."}),"\n",(0,r.jsx)(e.h2,{id:"comandos-iniciais",children:"Comandos Iniciais"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Criar diret\xf3rio e configurar ambiente virtual:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"mkdir nomedapasta\ncd nomedapasta\npython -m venv venv\ncode .\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Ativar o ambiente virtual:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"venv\\Scripts\\activate.bat\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Instalar o Django:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"pip install django\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["Gerar um ",(0,r.jsx)(e.code,{children:".gitignore"}),":"]})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Usei o site ",(0,r.jsx)(e.a,{href:"https://www.toptal.com/developers/gitignore",children:"gitignore generator"})," com os prompts: ",(0,r.jsx)(e.strong,{children:"python"}),", ",(0,r.jsx)(e.strong,{children:"vs"}),", ",(0,r.jsx)(e.strong,{children:"pycharm"})," e ",(0,r.jsx)(e.strong,{children:"django"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"configura\xe7\xe3o-do-dockerfile",children:"Configura\xe7\xe3o do Dockerfile"}),"\n",(0,r.jsxs)(e.p,{children:["Criei um ",(0,r.jsx)(e.code,{children:"Dockerfile"})," com o seguinte conte\xfado:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-dockerfile",children:'FROM python:3.12\n\nWORKDIR /app\n\nCOPY . /app\n\nRUN pip install -r requirements.txt\n\nCMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"criar-o-projeto-django",children:"Criar o Projeto Django"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Iniciar o projeto Django:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"django-admin startproject core .\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["Gerar o arquivo ",(0,r.jsx)(e.code,{children:"requirements.txt"}),":"]})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"pip freeze > requirements.txt\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Fazer o commit dos arquivos para o GitHub."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"utilizando-o-playwithdocker",children:"Utilizando o PlayWithDocker"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["Acessar o ",(0,r.jsx)(e.a,{href:"https://labs.play-with-docker.com/",children:"PlayWithDocker"})]})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Criar uma inst\xe2ncia e clonar o reposit\xf3rio:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"git clone <url-do-repositorio>\ncd nome-repositorio\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Listar os arquivos:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ls -ltrac\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Construir a imagem Docker:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"docker image build -t docker-aula-comnuv:0.0.1 .\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Exibir o caminho completo e o nome do diret\xf3rio:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"readlink -f .\nbasename $(readlink -f .)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"rodando-o-container",children:"Rodando o Container"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Executar o container em modo interativo com bash:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"docker container run --rm -it docker-aula-comnuv:0.0.1 bash\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Dentro do bash, executar o comando:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"pip freeze\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"ajustes-no-dockerfile",children:"Ajustes no Dockerfile"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsxs)(e.strong,{children:["Adicionar a linha ",(0,r.jsx)(e.code,{children:"EXPOSE 8000"})," no Dockerfile logo ap\xf3s o ",(0,r.jsx)(e.code,{children:"RUN pip install -r requirements.txt"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"verificando-os-containers",children:"Verificando os Containers"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Sair do bash:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"exit\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Listar os containers em execu\xe7\xe3o:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"docker container list\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Listar todos os containers, incluindo os desativados:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"docker container list -a\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"executar-o-projeto-django",children:"Executar o Projeto Django"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Rodar o container expondo a porta 8000 para a porta 8080 do host:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"docker container run --name django-app -p 8080:8000 docker-aula-comnuv:0.0.1\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"Com esses passos, configuramos e rodamos um projeto Django dentro de um container Docker, usando o PlayWithDocker para realizar testes e valida\xe7\xf5es."})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(t,{...n})}):t(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>l});var r=s(6540);const o={},i=r.createContext(o);function a(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);