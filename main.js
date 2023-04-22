let text_div = document.getElementById("text-div");
for (let i=0;i<11;i++) {
    setTimeout(function() {
        hack(i);
    }, i*1000);
}
function hack(percent){
    let p = document.createElement("p1");
    p.innerText="hacking NASA "+(percent*10)+"%\n";
    text_div.appendChild(p);
    if (percent==10){
        document.getElementById("explode").hidden = false;
    }
}