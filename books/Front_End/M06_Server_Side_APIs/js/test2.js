// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    var result = 1;
  
    for (var i = num; i > 1; i--) {
      result = result * i;
    }
  
    return result;
  };
  
  /*
      •	The factorial function uses a loop to compute the factorial of a given number by multiplying the number down to 2.
      •	The loop stops at i = 2 because multiplying by 1 doesn’t change the result.
      •	It works for small numbers and edge cases like 0 (which correctly returns 1).
  */
  

      var expect = chai.expect;

      describe('factorial', function() {
        it('should return 24 when given 4', function() {
          var num = 4;
      
          var result = factorial(num);
      
          expect(result).to.eql(24);
        });
      
        it('should return 6 when given 3', function() {
          var num = 3;
      
          var result = factorial(num);
      
          expect(result).to.eql(6);
        });
      
        it('should return 1 when given 0', function() {
          var num = 0;
      
          var result = factorial(num);
      
          expect(result).to.eql(1);
        });
      
        it('should return 1 when given 1', function() {
          var num = 1;
      
          var result = factorial(num);
      
          expect(result).to.eql(1);
        });
      });
      