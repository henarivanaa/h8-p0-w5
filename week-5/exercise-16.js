function totalDigitRekursif(angka) {
    if (angka.toString().length === 1) {
        return angka
    } else {
        
        return angka.toString()[0]/1 + totalDigitRekursif(angka-((angka.toString()[0]/1) * Math.pow(10, angka.toString().length-1)))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5