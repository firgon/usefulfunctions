function parseToRoman(number) {
    values = [ 1000, 100, 50, 10, 5, 1 ];
    romans = [ "M", "C", "L", "X", "V", "I"];
    retour = "";
    while(number>0){
        for (i=0; i<values.length;i++){
            if (number>=values[i]){
                retour+=romans[i];
                number-=values[i];
                break;
            } else if (number>=values[i]-values[i+1] && (i!=1 && i!=3)){
                retour+=romans[i+1]+romans[i];
                number-=values[i]-values[i+1];
                break;
            }
        }
    }
    
    return retour;
}


function transform(char){
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
    if (char== " ") return char;
    let index = alphabet.indexOf(char.toLowerCase());
    let new_index = (index+13>25)?index-13:index+13;
    return alphabet[new_index].toUpperCase();
}

function toRot13(stringToTransform) {

    let arrayToTransform = Array.from(stringToTransform);
    let result = "";
    arrayToTransform.forEach(element => result+=transform(element));

    return result;
}
