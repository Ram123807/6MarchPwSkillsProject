function isValidate(str){

    if(/((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/g.test(str)){
        console.log("YES")
        
        }
        else {
            console.log("NO")
    }
}

isValidate("www.linkedin.com/in/vijayraj-singh-84a0220");
isValidate("www.linkedin.com/in/vijayraj-singh-84a0220$$");