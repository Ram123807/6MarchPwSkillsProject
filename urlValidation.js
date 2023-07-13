function isValidURL(str) {
    if(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/g.test(str)) {
         console.log('YES');
     } else {
         console.log('NO');
     }
 }
   
 isValidURL("abc15768@domain.com");
 isValidURL("siv564@gmail.com.in")