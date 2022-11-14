let password = document.getElementById("password");
password.addEventListener('input',verifyPassword);

function verifyPassword() {  
    let pw = document.getElementById("password").value;
    let confirm = document.getElementById("confirm-password").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "*Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    else if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "*Password length must be at least 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    else if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "*Password length must not exceed 15 characters";  
       return false;  
    }

 //confirmation of password
    else if(pw != confirm) {  
        document.getElementById("message").innerHTML = "*Passwords must match";  
        return false;  
    }

    else {  
        document.getElementById("message").innerHTML = "*Correct";  
        return false;  
    }
  }  