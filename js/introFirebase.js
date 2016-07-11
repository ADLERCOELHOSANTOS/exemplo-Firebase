// Iniciando o nosso Firebase
var config = {
    apiKey: "AIzaSyAsOgXG7CncqhJRKGJLtg-mgO-CnBXTtKQ",
    authDomain: "projetinho-92394.firebaseapp.com",
    databaseURL: "https://projetinho-92394.firebaseio.com",
    storageBucket: "projetinho-92394.appspot.com",
};
firebase.initializeApp(config);

// Pegando referência do nosso elemento
var something = document.getElementById("something");

// Resgatando o nosso nó do Firebase que vai ser escutado
var nodeRef = firebase.database().ref().child("something");

// Podemos usar assim (arrow function), recurso do ES6
// Aqui estamos escutando o change do valor
nodeRef.on('value', value => something.innerHTML = value.val());

// Mesma coisa do que está acima
// nodeRef.on('value', function(value) {
//     something.innerHTML = value.val(); 
// });