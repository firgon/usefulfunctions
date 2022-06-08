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
