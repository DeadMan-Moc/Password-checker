// describe("Password validator", ()=>{
//     it ("Returns error if the password length is less than 8 characters", ()=> {
//         var raw = "asdAAda489";
//          var answer = 8;
//         expect(password_is_valid(raw)).toBeGreaterthan(answer);
//     })
// })
describe("Password validator", ()=>{
    it ("Checks for strong password.", ()=> {
        var raw = "123OOPs$$5";
        var answer = password_is_valid(raw);
        expect(answer).toBe(true);
    })
})
// describe("Password validator", ()=>{
//     it ("Returns error if the password does not consist atleast 1 number", ()=> {
//         var raw;
//         var answer = password_is_valid(raw);
//         expect(parser.parse(answer)).toThrow(new Error("Password must contain Numbers"));
//     })
// })
// describe("Password validator", ()=>{
//     it ("Returns error if the password does not consist special characters", ()=> {
//         var raw;
//         var answer = password_is_valid(raw);
//         expect(parser.parse(answer)).toThrow(new Error("Password must contain 1 special character"));
//     })
// })
// describe("Password validator", ()=>{
//     it ("Returns error if the password field is empty", ()=> {
//         var raw;
//         var answer = password_is_valid(raw);
//         expect(parser.parse(answer)).toThrow(new Error("Password must not be null"));
//     })
// })