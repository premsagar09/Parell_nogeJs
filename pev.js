//password validation regular expression function 

const checkvalidpassword = function(value){
    const isWhitespace = /^(?=.*\s)/;
    if (isWhitespace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z])/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z])/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9])/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isContainsSymbol =/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    if (!isContainsSymbol.test(value)) {
    return "Password must contain at least one Special Symbol.";
    }
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
    return "Password must be 8-16 Characters Long.";
    }
    return value;
}

//phone numbe validation regular expression  function 

const checkPhoneNumber = function  (value){
  const isLength = /^.{10}$/;
  if(!isLength.test(value)){
    return "Phone number must be 10 digits"
  }
  const specialandAlpha =/^[\d]*$/;
  if(!specialandAlpha.test(value)){
    return "Phone Number must not contain any  alphabet or special characters"
  }
  return value
}

// username validation regular expression  function 

const checkusername = function(value){
  const characters =/^[a-zA-Z ]*$/
  if (!characters.test(value)){
    return 'Special characters and numbers are not allowed'
  }
  return value;
}

//fullname validation regular expression function 

const checkfullname = function(value){
  const characters =/^[\w\s]*$/
  if(!characters.test(value)){
    return 'Special characters and numbers are not allowed'
  }
  return value;
}

// email validation regular expression function 

const checkemailid = function(value){
  const formate = /^[\w\d_.-]+@[a-z]+.[a-z]{2,3}$/
  if(!formate.test(value)){
    return "Invalid Emailid"
  }
  return value;
}

// console.log(checkemailid('premagar3303@gmail.com'))
// console.log(checkvalidpassword('Prem0@123'))
// console.log(checkfullname('premsagar macharla'))
// console.log(checkPhoneNumber('9398138335'))
// console.log(checkusername('premsagar'))
module.exports ={checkvalidpassword, checkPhoneNumber, checkusername, checkfullname, checkemailid};