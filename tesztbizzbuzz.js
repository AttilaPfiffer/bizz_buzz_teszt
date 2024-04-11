import { bizBuz } from "./bizbuz.js";

export function tesztBizBuz(){
    const tesztObjektum = [
        {
            n: 0,
            vart: "nincs ilyen sorozat"
        },
        {
            n: -1,
            vart: "nincs ilyen sorozat"
        },
        {
            n: 1,
            vart: "nincs ilyen sorozat"
        },
        {
            n: 2,
            vart: "nincs ilyen sorozat"
        },
        {
            n: 3,
            vart: "nincs ilyen sorozat"
        },
        

    ]
    tesztObjektum.forEach((tesztEset, index) => {
        let fvEredmeny = bizBuz(tesztEset.n)
        console.assert(tesztEset.vart === fvEredmeny, "%o", `${tesztEset.n} vart: ${tesztEset.vart} kapott: ${fvEredmeny}, "HIBA!"`)
        
    })

}

export function tesztSeged(n){
    const tesztObjektum = [
        {
            n: 1,
            vart: "1"
        },
        {
            n: 2,
            vart: "BIZZ"
        },
        {
            n: 3,
            vart: "BUZZ"
        },
        {
            n: 6,
            vart: "BIZZ BUZZ"
        },
        

    ]
    tesztObjektum.forEach((tesztEset, index) => {
        let fvEredmeny = bizBuz(tesztEset.n)
        console.assert(tesztEset.vart === fvEredmeny, "%o", `${tesztEset.n} vart: ${tesztEset.vart} kapott: ${fvEredmeny}, "HIBA!"`)
        
    })
}