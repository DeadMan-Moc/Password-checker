function password_is_ok(password){

    var condition1 = /(?=.{8,})/;
    var condition2 = /[A-Z]/;
    var condition3 = /[a-z]/;
    var condition4 = /[0-9]/;
    
    let minimum_len = condition1.test(password)
    let uppercase = condition2.test(password)
    let lowercase = condition3.test(password)
    let didgits = condition4.test(password)

    if (minimum_len && didgits || (uppercase || lowercase)){
        return true;
    }
    else {
        return false;
    }
        
}
function password_is_valid(password)
{

    let testit = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let getit = testit.test(password);
    try {
        if (getit == false)
            throw new Error ("Password should meet maximum criterias of a strong password.");
    }
    catch(err){
        console.log("Error " +err);
    }
    return getit;
}
console.log(password_is_valid("hhcJHh88hyuyu"));
