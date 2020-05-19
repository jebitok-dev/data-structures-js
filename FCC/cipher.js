function rot13(str) { // LBH QVQ VG!
  var arr = str.split("");
  var newVal=0;
  
  return arr.map(function(val){
    
    if (val !== " " && val.charCodeAt() >= 65 && val.charCodeAt() <= 90){
        
        newVal= val.charCodeAt() + 13;
        
        if ( newVal  > 90){
          newVal-= 26;
        }
      

        newVal = String.fromCharCode(newVal);

        return newVal;
  
       
    }
    else{
      return val;
    }
      
  
    }).join("");
  
  
}