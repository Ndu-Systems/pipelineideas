$("#send").click(function(){
		
    var name = $("#name").val();	
    var email = $("#email").val();
    var cell = $("#cell").val();
    var msg = $("#msg").val();
    alert(name);
		
    if(name == ""){
        AlertError("Please Enter your name");
    }
    else if(email == ""){
        AlertError("Please Enter your email address");
    }
    else if(!(email.includes("@"))){
        AlertError("Please Enter valid email address");
    }
    else if(cell == ""){
        AlertError("Please Enter your cell phone numer");
    }
    else if(msg == ""){
        AlertError("Please Enter your  message");
    }else{			
			
        AlertError("Thank you! Your message has been successfully sent. We will contact you very soon!");
        $.post("email.php",
{
    name: "Name :" + name + "  Cell : " + cell + " Email : " + email ,
    msg : msg, email : email
},
function(data, status){
    AlertError("Thank you! Your message has been successfully sent. We will contact you very soon!");
});

    }
});
function AlertError(err) {
    $("#output").val(err);
}