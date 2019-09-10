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
