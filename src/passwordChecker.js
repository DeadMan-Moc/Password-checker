function password_is_valid(password)
{
    try {
        if (password == /[A-Z]|[a-z]/g){
        }
    }
    catch{

    }
    try {
        if (password == /[0-9]/g){
        }
    }
    catch{

    }
    try{
        if (password == /[!@#$%^&*(),.?":{}|<>]/g){
        }
    }
    catch{

    }
    try {
        if (password == null) {
        }
    }
    catch{
        
    }
}