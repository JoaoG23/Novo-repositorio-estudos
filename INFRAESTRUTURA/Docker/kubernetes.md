# **\*** Inicializado MINIKUBE

1. inicializar

   minikube start --driver=docker

2. Parar

   minikube stop

3. Dashboard

   minikube dashboard

mostrar url

minikube dashboard --url

### ---------- Deployment = Container run

4. Deployment criar

kubectl create deployment node-exercices --image=joaog545/kub-node-exercicio-img

5. Listar Deployment

kubectl get deployment

6. Descricao Deployment

kubectl describe deployment

7. Configurações do kubernets

kubectl config view

8. Deletar um deployment

kubectl delete deployment <nome>

### ---------- PODS = Container

1. Pods list

kubectl get pods

2. Describe

kubectl describe pods

### ---------- SERVICES = Ponte de acesso no navegador

1. Criar service

kubectl expose deployment "nome_deployment" --type=LoadBalancer --port="numero_porta"

Ex: kubectl expose deployment node-exercices-kub --type=LoadBalancer --port=5000

2. Dar acesso a ele pelo navegador

minikube service "nome_deployment"
minikube service node-exercices-kub

---

3. Obter detalhes do serviços criados

Todos:

kubectl get services

Apenas Um:

kubectl describe services/node-exercices-kub

---

4.Escalando a aplicação replicar para outros pods

kubectl scale deployment/node-exercices-kub --replicas=6

Agora temos 6 servidores caso um caia temos 5 para servir
nossa aplicação

5. Checar o número de replicas estão funcionando corretamente
   Checar status das réplicas

kubectl get rs

6.Reduzir escalas ou (número de pods);
Técnica scale down

Mesmo comando de escalar porem troca no número de replicas abaixo do esperado

7. Atualizar uma imagens no container

kubectl set image deployment/<nome> <nome_container>=<nova_image>

kubectl set image deployment/node-exercices-kub kub-node-exercicio-img=joaog545/kub-node-exercicio-img:versao2

8. Desfazendo alteração de projeto

Verificar deployment :


kubectl rollout status deployment/<nome>
kubectl rollout status deployment/node-exercices-kub

Desfazer : 

kubectl rollout undo deployment/<nome>
kubectl rollout undo deployment/node-exercices-kub


9. Deletar um service

kubectl delete service <nome>


------------------- MODO DECLARATIVO ---------------------

1. Rodar o arquivo

kubectl apply -f <Arquivo>

2. Deletar um arquivo (serve para deployment and service)

kubectl delete -f <Arquivo>