
function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading')
          fn();
      });
    }
  }
  window.ready(function() {
    const testbtn = document.getElementById("passwordTest");
    testbtn.addEventListener("click", () => {
      var length = 0;
      while (true) {
        length = prompt("length?");
        if (isNaN(length) || length < 8 || length > 128) {
          alert("Must be between 8 and 128");
        } else {
          break;
        }
      }
      var uselowercase = confirm("Use lowercase?");
      var useUppercase = confirm("Use uppercase?");
      var useNumeric = confirm("Use numbers?");
      var useSpecialChar = confirm("Use special?");
      var characters = "";
      if (uselowercase)
        characters += 'abcdefghijklmnopqrstuvwxyz';
      if (useUppercase)
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (useNumeric)
        characters += '0123456789';
      if (useSpecialChar) 
        characters += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var id = makeId(length, characters);
      
      var passwordText = document.querySelector("#password");
      passwordText.value = id;
    });
    function makeId(length, characters) {
      var result = '';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result;
    }
  });
