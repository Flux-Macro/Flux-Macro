window.addEventListener("load",()=>{
    console.log("loaded");
    function gcd (a, b) {return (b == 0) ? a : gcd (b, a%b);}
    var w = screen.width;
    var h = screen.height;
    var r = gcd (w, h);
    var aspectW = w/r;
    var aspectH = h/r;
    // unpractical as shit
    // console.log(`got aspect ratio ${aspectW} : ${aspectH}`);
    // var is54=(aspectW==5&&aspectH==4);
    // var is169=(aspectW==16&&aspectH==9);
    // var is1610=(aspectW==16&&aspectH==10);
    // var is32=(aspectW==3&&aspectH==2);
    // var is43=(aspectW==4&&aspectH==3);
    // var is85=(aspectW==8&&aspectH==5);
    // if(!is54&&!is169&&!is1610&&!is32&&!is43&&!is85){
    //     document.write("<h1>This device is unsupported</h1>")
    // }
});