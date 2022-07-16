function lovefunc(flower1, flower2){
    const resultOne = flower1 % 2 === 0  ? "par" : "impar" 
    const resulTwo = flower2 % 2 === 0  ? "par" : "impar"
    const resultFinal = resultOne !== resulTwo ? true : false 
    return resultFinal
  }
  
  console.log(lovefunc(4, 1))