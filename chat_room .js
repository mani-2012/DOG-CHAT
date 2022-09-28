var firebaseConfig = {
      apiKey: "AIzaSyBwmqXUIe_q8lAma5RDZb2qY1muyDTTDyg",
  authDomain: "dog-chat-2975e.firebaseapp.com",
  projectId: "dog-chat-2975e",
  storageBucket: "dog-chat-2975e.appspot.com",
  messagingSenderId: "162693618744",
  appId: "1:162693618744:web:21e95937533c75cfa55acd"
};
    firebase.initializeApp(firebaseConfig);
    lat=localStorage.getItem("pet");
    console.log(lat);
    document.getElementById("hola").innerHTML="hola "+lat+ "Bienvenido a DOG Chat" ;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
function cha(){
      window.location="index.html";
  }
