"use strict";(self.webpackChunksenai=self.webpackChunksenai||[]).push([[363],{1547:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=s(4848),a=s(8453);const r={title:"Aula 14-05",sidebar_position:3},i=void 0,c={id:"Aulas/ComputacaoNuvem/aula3",title:"Aula 14-05",description:"---",source:"@site/docs/Aulas/ComputacaoNuvem/aula3.md",sourceDirName:"Aulas/ComputacaoNuvem",slug:"/Aulas/ComputacaoNuvem/aula3",permalink:"/gh-senai-ads-castro/docs/Aulas/ComputacaoNuvem/aula3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Aulas/ComputacaoNuvem/aula3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Aula 14-05",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Aula 30-04",permalink:"/gh-senai-ads-castro/docs/Aulas/ComputacaoNuvem/aula2"},next:{title:"Cybersecurity",permalink:"/gh-senai-ads-castro/docs/category/cybersecurity"}},l={},d=[{value:"1. Aplica\xe7\xe3o React JS [Web]",id:"1-aplica\xe7\xe3o-react-js-web",level:2},{value:"Deploy e Workflow",id:"deploy-e-workflow",level:3},{value:"Workflow no Github",id:"workflow-no-github",level:4},{value:"Passos:",id:"passos",level:3},{value:"Configura\xe7\xe3o das Portas no Docker:",id:"configura\xe7\xe3o-das-portas-no-docker",level:3},{value:"2. Kubernetes Play",id:"2-kubernetes-play",level:2},{value:"Iniciando a Inst\xe2ncia",id:"iniciando-a-inst\xe2ncia",level:3},{value:"Comandos Executados:",id:"comandos-executados",level:3},{value:"Verifica\xe7\xe3o:",id:"verifica\xe7\xe3o",level:3},{value:"Conceitos de Networking no Kubernetes",id:"conceitos-de-networking-no-kubernetes",level:2},{value:"Testando Conex\xe3o via curl no Kubernetes",id:"testando-conex\xe3o-via-curl-no-kubernetes",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Aqui est\xe1 a reformula\xe7\xe3o do conte\xfado com base no novo formato solicitado:"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h1,{id:"aula-14-05-comnuv",children:"Aula 14-05 ComNuv"}),"\n",(0,o.jsx)(n.h2,{id:"1-aplica\xe7\xe3o-react-js-web",children:"1. Aplica\xe7\xe3o React JS [Web]"}),"\n",(0,o.jsx)(n.h3,{id:"deploy-e-workflow",children:"Deploy e Workflow"}),"\n",(0,o.jsxs)(n.p,{children:["A aplica\xe7\xe3o foi comitada na branch ",(0,o.jsx)(n.code,{children:"main"})," e agora precisa ser publicada no ",(0,o.jsx)(n.strong,{children:"Render"}),". A seguir est\xe3o os passos principais para realizar esse processo:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Utiliza\xe7\xe3o de ",(0,o.jsx)(n.strong,{children:"Docker"})," para criar uma imagem de ",(0,o.jsx)(n.strong,{children:"Express"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Github Actions"})," para automa\xe7\xe3o do pipeline de integra\xe7\xe3o e deploy cont\xednuo."]}),"\n",(0,o.jsxs)(n.li,{children:["Publicar a imagem no ",(0,o.jsx)(n.strong,{children:"Docker Hub"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.strong,{children:"tag"})," da imagem ser\xe1 gerada dinamicamente a partir da aplica\xe7\xe3o."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Deploy final da aplica\xe7\xe3o no ",(0,o.jsx)(n.strong,{children:"Render"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Camada API"}),": N\xe3o \xe9 obrigat\xf3ria, mas \xe9 recomendada para melhorar a organiza\xe7\xe3o e escalabilidade."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"workflow-no-github",children:"Workflow no Github"}),"\n",(0,o.jsxs)(n.p,{children:["Dentro do ",(0,o.jsx)(n.strong,{children:"Github"}),", ser\xe1 criado um workflow para ",(0,o.jsx)(n.strong,{children:"for\xe7ar a imagem no reposit\xf3rio"}),", processo semelhante ao utilizado no ",(0,o.jsx)(n.strong,{children:"Docusaurus"})," em uma aula anterior."]}),"\n",(0,o.jsx)(n.h3,{id:"passos",children:"Passos:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Criar a aplica\xe7\xe3o React com o comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx create-react-app --template typescript exemplo-build-ui\ncd exemplo-build-ui\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Criar o arquivo YAML para configurar o ",(0,o.jsx)(n.strong,{children:"Github Actions"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Dentro de ",(0,o.jsx)(n.strong,{children:"Settings > Secrets"}),", adicionar as vari\xe1veis de ambiente, como ",(0,o.jsx)(n.strong,{children:"API Keys"})," e ",(0,o.jsx)(n.strong,{children:"credenciais do Docker"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["No ",(0,o.jsx)(n.strong,{children:"Docker Hub"}),", gerar uma ",(0,o.jsx)(n.strong,{children:"Access Key"})," e salvar essa chave, associando-a aos ",(0,o.jsx)(n.strong,{children:"Secrets"})," do Github."]}),"\n",(0,o.jsxs)(n.li,{children:["Executar o comando ",(0,o.jsx)(n.code,{children:"docker push"})," para enviar a imagem ao ",(0,o.jsx)(n.strong,{children:"Docker Hub"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configura\xe7\xe3o-das-portas-no-docker",children:"Configura\xe7\xe3o das Portas no Docker:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"0-1023"}),": Portas baixas."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"1024-65535"}),": Portas altas."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2-kubernetes-play",children:"2. Kubernetes Play"}),"\n",(0,o.jsx)(n.h3,{id:"iniciando-a-inst\xe2ncia",children:"Iniciando a Inst\xe2ncia"}),"\n",(0,o.jsxs)(n.p,{children:["No ",(0,o.jsx)(n.strong,{children:"Kubernetes Play"}),", iniciamos uma inst\xe2ncia e utilizamos os seguintes comandos para configurar o ambiente. O ",(0,o.jsx)(n.strong,{children:"kubectl"})," \xe9 a ferramenta que envia os comandos para a ",(0,o.jsx)(n.strong,{children:"API dos nodes"}),", e o ",(0,o.jsx)(n.strong,{children:"kubeadm"})," \xe9 usado para inicializar ou reiniciar o cluster."]}),"\n",(0,o.jsx)(n.h3,{id:"comandos-executados",children:"Comandos Executados:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Inicializar o cluster no node master"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubeadm init --apiserver-advertise-address $(hostname -i) --pod-network-cidr 10.5.0.0/16\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Inicializar a rede do cluster"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/cloudnativelabs/kube-router/master/daemonset/kubeadm-kuberouter.yaml\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Criar um deployment do NGINX (opcional)"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/kubernetes/website/master/content/en/examples/application/nginx-app.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Ap\xf3s o comando de inicializa\xe7\xe3o no ",(0,o.jsx)(n.strong,{children:"node master"}),", foi gerado um ",(0,o.jsx)(n.strong,{children:"c\xf3digo de join"})," que usamos para adicionar um segundo node ao cluster:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubeadm join 192.168.0.23:6443 --token g0k0bu.5lgwumf2ehpt1iel \\\n    --discovery-token-ca-cert-hash sha256:f45942f2acb5ea840d4386c66542272575fb12a3ff95a2e91206a3d80d7e4b51\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Com isso, configuramos duas m\xe1quinas: uma como ",(0,o.jsx)(n.strong,{children:"master node"})," e outra como ",(0,o.jsx)(n.strong,{children:"work node"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Cluster Quorum"}),": \xc9 poss\xedvel configurar mais de um master node, mas \xe9 importante levar em considera\xe7\xe3o o ",(0,o.jsx)(n.strong,{children:"quorum"})," para garantir que o cluster funcione corretamente."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"verifica\xe7\xe3o",children:"Verifica\xe7\xe3o:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Executamos o ",(0,o.jsx)(n.strong,{children:"comando 3"})," no master node para criar o deployment do NGINX."]}),"\n",(0,o.jsxs)(n.li,{children:["Com os comandos ",(0,o.jsx)(n.code,{children:"kubectl get node"})," e ",(0,o.jsx)(n.code,{children:"kubectl get pods"}),", verificamos o status dos nodes e pods. Observamos que o Kubernetes recria os pods automaticamente se algum for removido, devido \xe0 configura\xe7\xe3o ",(0,o.jsx)(n.code,{children:"replicas: 3"}),", que mant\xe9m sempre tr\xeas inst\xe2ncias do NGINX rodando."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"conceitos-de-networking-no-kubernetes",children:"Conceitos de Networking no Kubernetes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Cluster IP"}),": Usado para comunica\xe7\xe3o interna entre os pods do cluster."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Node Port"}),": Exp\xf5e um servi\xe7o do cluster para fora, mapeando uma porta externa para uma porta interna do cluster."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Load Balancer"}),": Distribui as requisi\xe7\xf5es entre os nodes para balancear a carga de trabalho."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"testando-conex\xe3o-via-curl-no-kubernetes",children:"Testando Conex\xe3o via curl no Kubernetes"}),"\n",(0,o.jsx)(n.p,{children:"Para testar a comunica\xe7\xe3o com o servi\xe7o NGINX, rodamos o comando abaixo no Kubernetes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl run curl-cmd \\\n--image=radial/busyboxplus:curl \\\n-i --tty --rm\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Acessamos o servi\xe7o NGINX com o comando ",(0,o.jsx)(n.strong,{children:"curl"})," no endere\xe7o:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:"http://192.168.0.23:30251\n"})}),"\n",(0,o.jsx)(n.p,{children:"Esse comando faz uma requisi\xe7\xe3o HTTP ao servi\xe7o rodando no cluster."}),"\n",(0,o.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var o=s(6540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);