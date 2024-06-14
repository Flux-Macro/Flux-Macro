window.addEventListener("load",()=>{
    console.log("loaded");
    function gcd (a, b) {return (b == 0) ? a : gcd (b, a%b);}
    var w = screen.width;
    var h = screen.height;
    var r = gcd (w, h);
    var aspectW = w/r;
    var aspectH = h/r;
    console.log(`got aspect ratio ${aspectW} : ${aspectH}`);
    var is54=(aspectW==5&&aspectH==4);
    var is169=(aspectW==16&&aspectH==9);
    if(!is54&&!is169){
        document.write("<h1>This device is unsupported</h1>")
    }
});