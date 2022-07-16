function countSheeps(arrayOfSheep) {
    const sortArray = arrayOfSheep.sort()
    let presentSheep = []
    let abstenceSheep = []
    for (i = 0 ; i < sortArray.length; i++) {
        if(sortArray[i] === true) {
            presentSheep.push(sortArray[i])
        } else {
            abstenceSheep.push(sortArray[i])
        }
    }
    return console.log(presentSheep.length)
  }
  
  countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])