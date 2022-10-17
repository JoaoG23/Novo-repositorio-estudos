
var firebaseConfig = {
    apiKey: "AIzaSyDyVZESJsEGh6moDoRg-W9Wm1i1-azkohQ",
    authDomain: "colegio-def21.firebaseapp.com",
    projectId: "colegio-def21",
    storageBucket: "colegio-def21.appspot.com",
    messagingSenderId: "936488250191",
    appId: "1:936488250191:web:0965501ddce931151df33a",
    measurementId: "G-HG5KM6HGPQ"
};
// Aula 1 = Integrando o firebase Com JS
firebase.initializeApp(firebaseConfig);

// let most = document.getElementById("mostra");
let db = firebase.firestore();

db.collection("lista").get().then(snapshot =>{
    snapshot.forEach(item =>{
        console.log(item.data());
    })
}).catch(error =>{
    console.log(error);
})

// //Ler Todos os Dados de Minha coleção
// // db.collection("turmaA").get()
// //     .then((sanpshot)=>{
// //         sanpshot.forEach((doc)=>{
// //             let aluno = doc.data();
// //             console.log(aluno.nome)
// //             // most.innerHTML = `<p>${JSON.stringify(doc.data())}</p>`
// //         })
// //     })

//------------Indice------- Diferencas do SQL E NOSQL-----


//     //doc.id = filtra id = ex: turma
//     //.data() = filtra os dados coleção
//     //data().nome = filtra só nome
//     //db = variavel.collection("turmaA") = as tabela nos SQL
//     //doc = linhas ou campos no SQL
//     //values = igual ao campos;

// let docRef = db.collection("turmaA").doc("turma0"
// );

// docRef.get().then((doc)=>{
//     console.log(doc.data().notas);
// })

///--------Aula 2 --- WHERE Localizando aLunos no db----

// db.collection("turmaA").where("notas.nota1",">",7).get()
// .then((snapshot)=>{
//     snapshot.forEach((doc)=>{
//         let aluno = doc.data();
//         console.log(aluno.notas,aluno.nome);
//     })
// })

// -------Aula 3 ------- Alterando documentos


// const TURMA = "turmaA";
//-----------Primeira Forma de Inserir um documento-----


// db.collection(TURMA).add({
//     nome:"Casio",
//     sobrenome:"Santos",
//     notas:{nota1:9.6, nota2:5.6},
// }).then((doc) => {
//     console.log("Documento Inserido com Sucesso",doc)
// }).catch(err=>{
//     console.log(err)
// })

// db.collection(TURMA).doc("AlunoNovo").set({
//         nome:"Joste",

// },{ merge: true }

//-----------Segunda Forma de Inserir um documento-----
// db.collection(TURMA).doc("AlunoNovo").update({
//         // cidades:firebase.firestore.FieldValue.arrayUnion("Sion")
//         // cidades:firebase.firestore.FieldValue.arrayRemove("SIOns")
//         // falta:firebase.firestore.FieldValue.increment(1)

// }

// ).then((doc)=>{
//     console.log(" Documento Inserido com SUCESSO :",doc)
// }).catch(err =>{
//     console.log(err);
// })

// Para Inserir Colunas
// UPDate + EX:cidades:Values
// Remove : remove
// Union: Unir ao que ja  tem
// Increment:

//------------AULA-4 On snapshot----
//Para modificar em tempo real os documento de uma tabela

// db.collection("turmaA").onSnapshot((snapshot) =>{
//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno);
//     })
// })

// let docRef = db.collection("turmaA").doc("turma");

// docRef.onSnapshot((doc) =>{
//     console.log(doc.data().nome);
// })

// db.collection("turmaA").where("notas.nota1",">",9).onSnapshot((snapshot) =>{
// snapshot.forEach((doc)=>{
//     let aluno = doc.data();
//     console.log(aluno.nome);
// })
// })


//--------AULA_5 Apagando Campos e Documentos-----

// db.collection("turmaA").doc("turma").delete({

//     sobrenome: firebase.firestore.FieldValue.delete()
// }).then(() =>{
//     console.log("Documento apagado com sucesso");
// }).catch(err =>{
//     console.log(err);
// })

//------AULA_6------ Gerenciando login---s

// let auth = firebase.auth()
// function criarUsuario()

// let newUserEmail ="novoteste@teste.com";
// let newUserPassword = "123abc";

// auth.createUserWithEmailAndPassword(newUserEmail,newUserPassword)
// .then(user => {
//     console.log(user);
// }).catch(error =>{
//     console.log(error);
// })
// // 
// function login() {

//     let userEmail = "novoteste@teste.com";
//     let userPassword = "123abc";

//     auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(()=>{

//         auth.signInWithEmailAndPassword(userEmail, userPassword)
//         .then(loggedUser => {
//             console.log(loggedUser);
//         }).catch(error => {
//             console.log(error);
//         })

//     }).catch(error=>{
//         console.log(error)
//     })

//     //Em pesistence.LOCAL = Pesistindo em qualquer nova janela no Navegador com mesmo endereço
//                 //SESSION = Persistindo somente na janela que atual 
//                 //NONE = Quando atualizar a pagina nao consegue mais logar

//     // auth.signInWithEmailAndPassword(userEmail, userPassword)
//     //     .then(loggedUser => {
//     //         console.log(loggedUser);
//     //     }).catch(error => {
//     //         console.log(error);
//     //     })

//     // let user = auth.currentUser;

//     // console.log(user);
// }

// login();

//     let user = auth.currentUser;
//     console.log(user)

//     auth.onAuthStateChanged(user =>{
//         if (user){
//             console.log(user)
//         } else{
//             console.log("Ninguém logado")
//         }
//     })

//     function logout(){
//         auth.signOut().then(obj => {
//             console.log(obj);
        
//         }).catch(error => {
//             console.log(error)
//         })
//     }

//     // setTimeout(login,2000);

    //----AULA _7 Criando Novo Usuários -------

    // let newUserEmail = "novoteste@teste.com";
    // let newUserPassword = "123abc";

    // let auth = firebase.auth()

    // auth.createUserWithEmailAndPassword(newUserEmail,newUserPassword)
    //     .then(user =>{
    //         console.log(user);
    //     }).catch(error => {
    //         console.log(error);
    //     })

    //-------AULA-8 Sessão de Pesistencia--------

    // function login() {

    //     let userEmail = "novoteste@teste.com";
    //     let userPassword = "123abc";
    
    //     auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(()=>{
    
    //         auth.signInWithEmailAndPassword(userEmail, userPassword)
    //         .then(loggedUser => {
    //             console.log(loggedUser);
    //         }).catch(error => {
    //             console.log(error);
    //         })
    
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    
    //     //Em pesistence.LOCAL = Pesistindo em qualquer nova janela no Navegador com mesmo endereço
    //                 //SESSION = Persistindo somente na janela que atual 
    //                 //NONE = Quando atualizar a pagina nao consegue mais logar
    
    //     // auth.signInWithEmailAndPassword(userEmail, userPassword)
    //     //     .then(loggedUser => {
    //     //         console.log(loggedUser);
    //     //     }).catch(error => {
    //     //         console.log(error);
    //     //     })
    
    //     // let user = auth.currentUser;
    
    //     // console.log(user);
    // }
    
    // login();
    
    //     let user = auth.currentUser;
    //     console.log(user)
    
    //     auth.onAuthStateChanged(user =>{
    //         if (user){
    //             console.log(user)
    //         } else{
    //             console.log("Ninguém logado")
    //         }
    //     })
    
    //     function logout(){
    //         auth.signOut().then(obj => {
    //             console.log(obj);
            
    //         }).catch(error => {
    //             console.log(error)
    //         })
    //     }

    