function password_is_ok(password){
    try {
        if (password !== password.match(/\d+/) ){
              throw new Error("password should include 1 number")
         }
         if (password.match(/[!@#$%^&*-_(),.?":{}|<>]/g) ){
             throw new Error("password should include 1 special character")
         }
         if (password.length !== 0) {
             throw new Error("password cannot be empty")
         }
         if (password.length < 8){
              throw new Error("password should be longer than 8 characters")
         } 
     }
     catch(err){
         throw new Error("Error "+err);
     }
 
}

function password_is_valid(password)
{
    if (*)
        if (password_is_ok(password))
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
