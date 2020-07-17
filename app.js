function repeatStringNumTimes(str, num) { 
    var string = "";
    
while (num > 0) {
    string += str;
    num--;
}
    console.log(string);
    return string;
}

repeatStringNumTimes("abc", 3);
    
function truncateString(str, num) {
    var string = str;
    return string.length > num ? string.slice(0, num) + "..." : str; 
    }
       
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
       
    function findElement(arr, func) {
    let num = 0;
      
for (var i = 0; i < arr.length; i++) {
     num = arr[i];

if (func(num)) {
    return num;
    }
}
      
return undefined;
}
