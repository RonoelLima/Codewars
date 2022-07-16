function removeExclamationMarks(s) {
    let string = s
    let regex = /\!/g
    let result = (string.replace(regex,""))
    return console.log(result)
  }
  
  removeExclamationMarks("Ronoel!")