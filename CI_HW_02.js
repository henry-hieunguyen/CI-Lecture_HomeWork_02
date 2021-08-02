// ---------------- Problem 1 Reverse number ------------------
const reverse = function(x) {
    const isNegative = x< 0 ? true : false;
    
    if (isNegative){
        x = x *-1;
    }
    
    let reversed = 0;
    while(x>0){
        reversed = (reversed * 10) + (x % 10);
        
        x = parseInt(x/10);
    }
    
    if(reversed > 2**31){
        return 0;
    }
    
    return isNegative? reversed * -1 : reversed;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1111));
console.log(reverse(0));


// ---------------- Problem 2: Roman number to Integer number ------------------

function romanToInt(str1) {
    if(str1 == null) return -1;
    var num = charToInt(str1.charAt(0));
    var pre, curr;
    
    for(var i = 1; i < str1.length; i++){
    curr = charToInt(str1.charAt(i));
    pre = charToInt(str1.charAt(i-1));
    if(curr <= pre){
    num += curr;
    } else {
    num = num - pre*2 + curr;
    }
    }
    
    return num;
    }
    
    function charToInt(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
    }

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));