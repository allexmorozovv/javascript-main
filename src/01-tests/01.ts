export const sum = (a:number, b:number) => {
    return a + b
}
export const mult = (a:number, b:number) => {
    return a * b
}


export const splitInToWords = (sentence:string) => {
    return sentence.toLowerCase().split(" ")
        .filter(w=>w !=="" && w !== "-")
        .map(w=>
            w.replace("!","")
            .replace(".","")
            .replace(",",""))
}