function checkForm(){
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var pass = document.forms["form"]["pass"].value;
    var passC = document.forms["form"]["passC"].value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(name=='' || email=='' || pass=='' || passC==''){
        if(passC==''){
            document.getElementById("error").innerHTML ="Please fill Confirm password";
        }
        if(pass==''){
            document.getElementById("error").innerHTML ="Please fill password";
        }
        if(email==''){
            document.getElementById("error").innerHTML ="Please fill email";
        }
        if(name==''){
            document.getElementById("error").innerHTML ="Please fill name";
        } 
        return false;
    }
    else if(!email.match(validRegex)){
        document.getElementById("error").innerHTML ="Please enter a valid email";
        return false;
    }
    else if(passC != pass){
        document.getElementById("error").innerHTML ="Password and confirm password are not the same";
        return false;
    }
    else{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){
                var name = this.responseText;
                window.location.href="welcome.php?name="+name;
            }
            else{
                document.getElementById("error").innerHTML = this.responseText;
            }
        };
        var dataS = 'name='+name+'&email='+ email + '&pass=' + pass;
        xmlhttp.open("get","ajaxReg.php?"+dataS,true);
        xmlhttp.send();
        return false;
    }
    
}