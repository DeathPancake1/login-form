function checkForm(){
    var email = document.forms["loginForm"]["email"].value;
    var pass = document.forms["loginForm"]["pass"].value;
    if(email=='' || pass==''){
        if(pass==''){
            document.getElementById("error").innerHTML ="Please fill password!";
        }
        if(email==''){
            document.getElementById("error").innerHTML ="Please fill email!";
        }
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
        var dataS = 'email='+ email + '&pass=' + pass;
        xmlhttp.open("get","ajax.php?"+dataS,true);
        xmlhttp.send();
        return false;
    }
}