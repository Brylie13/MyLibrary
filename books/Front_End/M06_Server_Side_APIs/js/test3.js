// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    var result = [];
  
    var words = str.split(' '); //words = ["hello", "world"];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i].split(''); //word = ["h", "e", "l", "l", "o"]; ["w", "o", "r", "l", "d"]
  
      word[0] = word[0].toUpperCase();
  
      result.push(word.join('')); //result = ["Hello"]; ["World"];
  
      //var word = words[i].toUpperCase(); // Capitalizes the entire word
      //result.push(word); // Push the fully capitalized word into result
    }
  
    return result.join(' '); //["Hello World"]
  };
  
  titleCase("hello world");
  

  var expect = chai.expect;

describe('titleCase', function() {
  it('should return `The Quick Brown Fox Jumped Over The Lazy Dog` when given `the quick brown fox jumped over the lazy dog`', function() {
    var str = 'the quick brown fox jumped over the lazy dog';

    var result = titleCase(str);

    expect(result).to.eql('The Quick Brown Fox Jumped Over The Lazy Dog');
  });

  it('should return `A Christmas Carol` when given `a christmas carol`', function() {
    var str = 'a christmas carol';

    var result = titleCase(str);

    expect(result).to.eql('A Christmas Carol');
  });
});
