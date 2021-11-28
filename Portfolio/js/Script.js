function Clickbutton(x){
    if (x===1){
        document.querySelector(".hide-part1").classList.toggle("play");
        if (document.querySelector(".hide-part1").classList.contains("play")){
            document.getElementById("button1").innerHTML="Close";
        }
        else {
            document.getElementById("button1").innerHTML="See More";
        }
    }
    else if (x===2){
        document.querySelector(".hide-part2").classList.toggle("play");
        if (document.querySelector(".hide-part2").classList.contains("play")){
            document.getElementById("button2").innerHTML="Close";
        }
        else {
            document.getElementById("button2").innerHTML="See More";
        }
    }
    else if (x===3){
        document.querySelector(".hide-part3").classList.toggle("play");
        if (document.querySelector(".hide-part3").classList.contains("play")){
            document.getElementById("button3").innerHTML="Close";
        }
        else {
            document.getElementById("button3").innerHTML="See More";
        }
    }
}