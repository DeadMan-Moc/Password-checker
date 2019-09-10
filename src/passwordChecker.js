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

    var condition2 = /(?=.{8,})/;
    var condition3 = /[A-Z]/;
    var condition4 = /[a-z]/;
    var condition1 = /[0-9]/;
    let combine = condition1 + condition2 + condition3 + condition4;
    // let condition2 = /^[0-9]*$/g; 
    // let condition3 = /^[a-z]*$/g;
    // let condition4 = /^[A-Z]*$/g;
    //let x = password.length > 8 && password.match(condition2) && password.match(condition3) && password.match(condition4);
    //let y = condition2 && condition3 && condition4 && condition1;
    let x = password.test(combine);
    // console.log(y)
    try {
        if (x == false)
            throw new Error ("passshjvbhk");
    }
    catch(e){
        throw new Error("Error " +e);
    }
    return x;
}
console.log(password_is_valid("hhcJHh88hyuyu"));
