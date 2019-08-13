describe("Password validator", ()=>{
    it ("Returns error if the password length is less than 8 characters", ()=> {
        var raw;
        var answer = password_is_valid(raw);
        expect(parser.parse(answer)).toThrow(new Error("Password must contain 8 characters"));
    })
})
describe("Password validator", ()=>{
    it ("Returns error if the password does not consist atleast 1 upper case and 1 lower case", ()=> {
        var raw;
        var answer = password_is_valid(raw);
        expect(parser.parse(answer)).toThrow(new Error("Password must contain 1 uppercase annd lower case character"));
    })
})
describe("Password validator", ()=>{
    it ("Returns error if the password does not consist atleast 1 number", ()=> {
        var raw;
        var answer = password_is_valid(raw);
        expect(parser.parse(answer)).toThrow(new Error("Password must contain Numbers"));
    })
})
describe("Password validator", ()=>{
    it ("Returns error if the password does not consist special characters", ()=> {
        var raw;
        var answer = password_is_valid(raw);
        expect(parser.parse(answer)).toThrow(new Error("Password must contain 1 special character"));
    })
})
describe("Password validator", ()=>{
    it ("Returns error if the password field is empty", ()=> {
        var raw;
        var answer = password_is_valid(raw);
        expect(parser.parse(answer)).toThrow(new Error("Password must not be null"));
    })
})
