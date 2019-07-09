function myAnimal() {
  var animal = 'dog';
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  var two = 2;
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction

// instructions
describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })
