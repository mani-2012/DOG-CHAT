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
    document.getElementById("hola").innerHTML="hola "+lat+ ". Bienvenido a DOG Chat" ;
function dragon() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      halloween = childKey;
      mouster="<div id="+halloween+" onclick='amongus(this.id)'>"+halloween+" </div> <br>";
      document.getElementById("chuche").innerHTML+=mouster;
      //Final del código
      });});}
dragon();
function cha(){
      window.location="index.html";
  }
  function chat(){
    come= document.getElementById("lala").value;
    firebase.database().ref("/").child(come).update({
          purpose:"lala"
    });
    localStorage.setItem("come",come);
    window.location.replace("coment.html");
}
