export function bizBuz(n) {
    let eredmeny = ""
    if(n <= 0){
        eredmeny = "Nincs ilyen sorozat"
    }else {
        for (let index = 1; index <= n; index++) {
                if(index === n){
                    eredmeny += seged(index)
                }else {
                    eredmeny += seged(index) + ", "
                }
            
            
        }
        
    }


    return eredmeny
}

function seged(n) {
    let eredmeny = ""
    if((n % 2 === 0) && (n % 3 === 0)){
        eredmeny = "BIZZ BUZZ"
    }else if(n % 2 === 0){
        eredmeny = "BIZZ"
    }else if(n % 3 === 0){
        eredmeny = "BUZZ"
    }else {
        eredmeny = n
    }

    return eredmeny
}