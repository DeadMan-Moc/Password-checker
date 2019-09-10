function password_is_ok(password){

    
    let condition2 = /^[0-9]*$/g; 
    let condition3 = /^[a-z]*$/g;
    let condition4 = /^[A-Z]*$/g;

    if (password.length > 8 && password.match(condition2) && password.match(condition3) || password.match(condition4)){
        return true;
    }
    else {
        return false;
    }
        
}
function password_is_valid(password)
{

    let testit = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let getit = testit.test(password);
    try {
        if (getit == false)
            throw new Error ("passshjvbhk");
    }
    catch(err){
        console.log("Error " +err);
    }
    return getit;
}
console.log(password_is_valid("hhcJHh88hyuyu"));
