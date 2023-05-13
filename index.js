// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = (str) => {
    str = str.replace(/ +/g, "");
    let arr = [];

    for(let el of str){
        if(el === el.toUpperCase()){
            arr.push(" ")
            arr.push(el)     
        }else{
            arr.push(el)
        }
    }

    return arr.join("")
}

solution("companyGroup Own")

//Solution 2

const solution = (str) => {
    let arr = str.replace(/ +/g, "").split("").map((el) => {
        if(el === el.toUpperCase()){
            return el = " " + el
        }
        return el
    })

    return arr.join("")
}

solution("companyGroup Own")