function DNAtoRNA(dna) {
    let string = dna
    let regex = /T/g
    let result = string.replace(regex,"U")
     return result
  }
  
  DNAtoRNA("CACT")