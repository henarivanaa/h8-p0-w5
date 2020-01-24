function hapusSimbol(str) {
    var regex = /[a-z] | [0-9]/
    var result = ''
    for (var i = 0; i < str.length; i++) {
        if (regex.test(str[i]) === true) {
            result+= str[i]
        }
    }
    return result

    //return str.match(/[a-z]+|[0-9]/gi).join('').toLowerCase()
}
  
  // TEST CASES
  console.log(hapusSimbol('Test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100

  var par = 'aku adalah seorang kapiten'
  