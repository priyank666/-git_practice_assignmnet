    var str = "naman";
    var N = 5;
    var new_str="";
    
    for (var i=N-1; i>=0; i--){
        new_str = new_str + str[i];
    }
    if(str==new_str){
        console.log("Yes");
    }
    else {
        console.log("No");
    }