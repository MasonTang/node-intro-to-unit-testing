const expect = require ('chai').expect;

const fizz = require('../fizzBuzzer');

describe('fizz', function(){
    it('should return fizz-buzz at 15, buzz at 5 and fizz at 3', function(){
        const normalCases = [
            {num:30, expected:'fizz-buzz'},
            {num:10, expected:'buzz'},
            {num:9, expected:'fizz'},
            {num:1, expected:1}
        ]
        normalCases.forEach(input => {
            const answer = fizz(input.num);
            expect(answer).to.equal(input.expected);
        });
    });
    it('should raise an error of the input is not a num', () => {
        const badInputs = [true, false, 'cat', function () { }, [1, 2, 3]]

        badInputs.forEach(input => {
            expect(() => fizz(input)).to.throw(Error);
        })
    })
})