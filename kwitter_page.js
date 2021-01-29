user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value 
    firebase.database().ref(room_name).push ({ 
        name : user_name 
        message:msg,
        like: 0 
    )};
    {
    document.getElementById("msg").value = "";
}
console.log (firebase_message_Id);
console.log (message_data);
name = message_data['name'];
message = message_data ['message'];
like = message_data ['like'];
name_with_tag = "h4 " + name +"<img class='user_tick scr = 'tick.png></h4>"
message_with_tag = "<h4 class='message_h4>" + message + "</h4>"
like_button "<button class='btn btnwarning' id"= + firebase_message_Id+"value"= + like + "onclick='updateLike (this.id)'>'"; 
 

