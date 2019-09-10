function password_is_ok(password){
    try {
        if (password !== password.match(/[0-9]/) ){
              throw new Error("password should include 1 number")
        }
        else if (password.length !== 0) {
             throw new Error("password cannot be empty")
        }
        else if (password.length < 8){
              throw new Error("password should be longer than 8 characters")
        } 
        else {
            return err
        }
     }
  
        catch(err){
         throw new Error(err);
         }
}

function password_is_valid(password)
{
    if (password.length >= 8 && password.length !== null)
    {
        if (password.match(password_is_ok(password))) {
            return true;
        }
        else {
            throw new Error("password is invalid indeed.");
        }
    }
    else {
        throw new Error("password is invalid");
    }
}
  

console.log(password_is_valid("Allie95mok"));
