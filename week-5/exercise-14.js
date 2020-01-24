function changeVocals (str) {
    var vokal = 'aiueo'
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    
    var result = ''
    for (var i = 0; i < str.length; i++) {
        var vokalCheck = false
        for (var j = 0; j < vokal.length; j++) {
            if (str[i].toLowerCase() === vokal[j]) {
                vokalCheck = true
            }
        }

        if (vokalCheck) {
            for (var j = 0; j < abjad.length; j++) {
                if (str[i].toLowerCase() === abjad[j] && str[i] === str[i].toLowerCase()) {
                    result += abjad[j+1]
                } else if (str[i].toLowerCase() === abjad[j] && str[i] === str[i].toUpperCase()) {
                    result += abjad[j+1].toUpperCase()
                }
            }
        } else {
            result += str[i]
        }
    }
    return result
}


function reverseWord (str) {
    var reversed = ''
    for (var i = 0; i < str.length; i++) {
        reversed += str[str.length-1-i]
    }
    return reversed
}
  
function setLowerUpperCase (str) {
    var result = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase()
        } else {
            result += str[i].toLowerCase()
        }
    }
    return result
}
  
function removeSpaces (str) {
    var result = ''
    for (var i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            result += str[i]
        }
    }
    return result
}
  
function passwordGenerator (name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var changed = changeVocals(name)
    var kebalik = reverseWord(changed)
    var lowerUpper = setLowerUpperCase(kebalik)
    var result = removeSpaces(lowerUpper)
    return result
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'