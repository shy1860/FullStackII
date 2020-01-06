function myFunction1() {
    var str = "the quick brown fox";
    var res = str.split(" ");

    var result='';
    for (var i=0;i<res.length;i++){
        res[i]=res[i].charAt(0).toUpperCase()+res[i].slice(1);
        result=result+res[i]+ ' ';
    }
    result.trim;
    console.log( result);

}
myFunction1();

function max(a,b,c) {
    var max;
    if(a>=b){
        max=a;
        if(a<c){
            max=c;
        }
    }else {
        max=b;
        if (b<c){
            max=c;
        }
    }
    return max;

}
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

function right(text){
    var result=text.split('');
    var output='';
    var pointer;
    if(result.length<=3){
        return text;
    }else{
        for( var i=0;i<result.length;i++){
            if(i>=result.length-3){
                output+=result[i];
                pointer=i;
            }
        }
        for(i=0;i<result.length-3;i++){
            output+=result[i];
        }

        return output.toString();
    }


}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

