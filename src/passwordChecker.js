function password_is_valid(password)
{
//     try {
//        if (password !== password.match(/\d+/) ){
//             // throw new Error("password should include 1 number")
//         }
//         if (password.match(/[!@#$%^&*-_(),.?":{}|<>]/g) ){
//             // throw new Error("password should include 1 special character")
//         }
//         if (password.length !== 0) {
//             // throw new Error("password cannot be empty")
//         }
//         if (password.length < 8){
//             // throw new Error("password should be longer than 8 characters")
//         } 
//     }
//     catch(err){
//         throw new Error("Error "+err);
//     }
// }

        if (password.length != 0 && password.length >= 8)
        {
            if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)) {
                throw ("password is valid")
            }
            else {
                throw ("password is invalid indeed.")
            }
        }
        else {
            throw("password is invalid")
        }
    }
  

console.log(password_is_valid("Allie95@mok"))