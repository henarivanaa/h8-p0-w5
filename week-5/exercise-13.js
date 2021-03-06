function sorting(arrNumber) {
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = 0; j < arrNumber.length-1-i; j++) {
            if (arrNumber[j] < arrNumber[j+1]) {
                var temp = arrNumber[j]
                arrNumber[j] = arrNumber[j+1]
                arrNumber[j+1] = temp
            }
        }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    var result = []
    for (var i = 0; i < arrNumber.length; i++) {
        var same = false
        for (var j = 0; j < result.length; j++) {
            if (arrNumber[i] === result[j][0]) {
                same = true
                result[j][1] += 1
            }
        }
        if (!same) {
            result.push([arrNumber[i],1])
        }
    }
    return result
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    if (arrNumber.length === 0) {
        return ''
    }
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return `angka paling besar adalah ${countHighest[0][0]} dan jumlah kemunculan sebanyak ${countHighest[0][1]}`;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''