function addUser()
user_name = document.getElementById ("user_name").Value;
firebase.database().ref ("/").child(user_name).update( {
purpose : "adding_room"
});



