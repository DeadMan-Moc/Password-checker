describe("Password validator", ()=>{
    it ("Returns error if the password length is less than 8 characters", ()=> {
        
        expect(parser.parse(raw)).toThrow(new Error("Parsing is not possible"));
    })
})
describe("Password validator", ()=>{
    it ("Returns error if the password does not consist atleast 1 capital letter", ()=> {
        
        expect(parser.parse(raw)).toThrow(new Error("Parsing is not possible"));
    })
})
describe("Password validator", ()=>{
    it ("Returns error if the password does not consist atleast 1 number", ()=> {
        
        expect(parser.parse(raw)).toThrow(new Error("Parsing is not possible"));
    })
})
describe("Password validator", ()=>{
    it ("Returns error if the password does not consist special characters", ()=> {
        
        expect(parser.parse(raw)).toThrow(new Error("Parsing is not possible"));
    })
})
describe("Password validator", ()=>{
    it ("Returns error if the password does not consist small letters", ()=> {
        
        expect(parser.parse(raw)).toThrow(new Error("Parsing is not possible"));
    })
})
