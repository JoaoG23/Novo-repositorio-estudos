### ***** Inicializado MINIKUBE

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

5. Descricao Deployment

kubectl describe deployment