# ***** Inicializado MINIKUBE



1. inicializar 

    minikube start --drive=docker

2. Parar 

    minikube stop

3. Dashboard

    minikube dashboard

mostrar url

  minikube dashboard --url

4. Deployment criar

kubectl create deployment node-exercices --image=joaog545/kub-node-exercicio-img

5. Listar Deployment

kubectl get deployment

6. Descricao Deployment

kubectl describe deployment

7. Configurações do kubernets

kubectl config view

### ---------- PODS

1. Pods list

kubectl get pods

2. Describe

kubectl describe pods

### ---------- SERVICES

1. Criar service

kubectl expose deployment "nome_deployment" --type=LoadBalancer --port="numero_porta"

Ex: kubectl expose deployment node-exercices-kub --type=LoadBalancer --port=5000

2. Dar acesso a ele pelo navegador

minikube service "nome_deployment"
minikube service node-exercices-kub
