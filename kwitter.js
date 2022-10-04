function mas(){
    pet=document.getElementById("cat").value;
    localStorage.setItem("pet" , pet);
    window.location="chat_room.html";
}