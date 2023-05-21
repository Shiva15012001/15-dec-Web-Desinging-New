
    function check_name(){
        let fname = document.getElementById("f_name").value;
        if(fname == ""){
            document.getElementById("msg1").innerHTML = "Enter your name";
            return false;
        }else{
            document.getElementById("msg1").innerHTML = "";
            return false;
        }
    }
    function reg_ex_name(){
        let fname = document.getElementById("f_name").value;
        let name_reg_ex = /^[a-zA-Z]*$/;
        if(name_reg_ex.test(fname)){
            document.getElementById("msg1").innerHTML = ""
            return false
        }else{
            document.getElementById("msg1").innerHTML = "number not allowed"
            return false
        }
    }
    function check_email(){
        let email  = document.getElementById("mail").value;
        if(email == ""){
            document.getElementById("msg").innerText = "enter email";
            return false;
        }
    }
    function reg_ex(){
        // w3resource
        let reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let email  = document.getElementById("mail").value;

        if(reg.test(email)){
            document.getElementById("msg").innerText = "";
            return false
        }else{
            document.getElementById("msg").innerText = "Enter email address properly...!!!";
            return false
        }
    }