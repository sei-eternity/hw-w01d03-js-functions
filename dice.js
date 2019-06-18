const randomNumber = function() {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    let sum = random1 + random2;
    return sum;
  }
  
  const randomNumber1 = function(a) {
    random1 = "";
    random2 = "";
    sum = "";
    for (i = 0; i < a; i++) {
     random1 = Math.floor(Math.random() * 6) + 1;
     random2 = Math.floor(Math.random() * 6) + 1;
     sum = random1 + random2;
    }
    return sum;
  }
  