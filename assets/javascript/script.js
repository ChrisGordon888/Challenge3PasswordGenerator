// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var acceptLength = parseInt(prompt("Enter Password Length: "))
  if (acceptLength < 8 || acceptLength > 128 || isNaN(acceptLength)) {

    return "Invalid Password length entered!"
  }

  var acceptLowerCaseLetter = confirm("Do you want lowecase letters? ")  //true or false
  var acceptUpperCaseLetter = confirm("Do you want uppercase letters? ")
  var acceptNumbers = confirm("Do you want numbers? ")
  var acceptSymbols = confirm("Do you want symbols? ")
  var acceptCharacters = ""
  if(acceptLowerCaseLetter ){
    acceptCharacters += "abcdefghijklmnopqrstuvwxyz"
  }
  if(acceptUpperCaseLetter){
    acceptCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(acceptNumbers ){
    acceptCharacters += "1234567890"
  }
  if(acceptSymbols ){
    acceptCharacters += "!@#$%^&*()"
  }
  let temp1 = 123
  let temp2 = "123"
  console.log(temp1 == temp2)
  console.log(temp1 === temp2)
  console.log("Accepted character",acceptCharacters,acceptCharacters.length)

  if(acceptCharacters.length === 0){
    return 'Please choose minimum one option'
  }

  var addPassword = ""
  for(let i=1; i<=acceptLength;i++){
    var index = Math.floor(Math.random()*acceptCharacters.length)
    addPassword += acceptCharacters[index]
    console.log(addPassword, index, acceptCharacters[index],"This character")
  }
  return addPassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
