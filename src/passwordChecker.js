function password_is_ok(password){




















































































































































    
    let condition2 = /[0-9]/; 
    let condition3 = /[a-z]/;
    let condition4 = /[A-Z]/;

    if (password.length < 8 && password.match(condition2) && password.match(condition3) || password.match(condition4)){
        return true;
    }
    else {
        throw new Error("Password incorrect check conditions of the password");
    }
function password_is_valid(password)
{
    if (password.match(password_is_ok(password))) {
        return true;
    }
    else {
        throw new Error("password is invalid");
    }
    
}
// console.log(password_is_valid("Allie95mok"));
