describe("Password validator", ()=>{
    it ("Checks for strong password.", ()=> {
        var raw = "Allnssbd95";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })
    
    it ("checks if password is empty.", ()=> {
        var raw = "";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })
    it ("checks if password is empty.", ()=> {
        var raw = "asadfAA551";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })

    it ("Checks if password length is greater than 8.", ()=> {
        var raw = "Allns95";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })
    it ("Checks if password length is greater than 8.", ()=> {
        var raw = "Allnssbd95";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })

    it ("Checks if passwords has atleast 1 digit.", ()=> {
        var raw = "Allnssbd";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })
    it ("Checks if passwords has atleast 1 digit.", ()=> {
        var raw = "Allnssbd95";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })

    it ("Checks if password has upper and lower cases.", ()=> {
        var raw = "aaaanssbd95";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })

    it ("Checks if password has upper and lower cases.", ()=> {
        var raw = "Allnssbd95";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })
})





// var condition2 = /(?=.{8,})/;
    // var condition3 = /[A-Z]/;
    // var condition4 = /[a-z]/;
    // var condition1 = /[0-9]/;
    // //let combine = condition1 + condition2 + condition3 + condition4;
    // let combine = condition1.test(password) && condition2.test(password) && condition3.test(password) && condition4.password(password);
    // let condition2 = /^[0-9]*$/g; 
    // let condition3 = /^[a-z]*$/g;
    // let condition4 = /^[A-Z]*$/g;
    //let x = password.length > 8 && password.match(condition2) && password.match(condition3) && password.match(condition4);
    //let y = condition2 && condition3 && condition4 && condition1;
    //let x = combine.test(password);
    // console.log(y)