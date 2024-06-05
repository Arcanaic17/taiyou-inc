function hideShow(elem){
    document.getElementsByClassName("shop-browse");
switch(elem){
    case "l":
        document.getElementById("light").style.display = "block";
        document.getElementById("gene").style.display = "none";
        document.getElementById("misc").style.display = "none";
        break;

    case "g":
        document.getElementById("gene").style.display = "block";
        document.getElementById("light").style.display = "none";
        document.getElementById("misc").style.display = "none";
        break;

    case "m":
        document.getElementById("misc").style.display = "block";
        document.getElementById("gene").style.display = "none";
        document.getElementById("light").style.display = "none";
        break;

     case "all":
        document.getElementById("light").style.display = "block";
        document.getElementById("gene").style.display = "block";
        document.getElementById("misc").style.display = "block";
        break;
    
    default:
        document.getElementById("light").style.display = "block";
        document.getElementById("gene").style.display = "block";
        document.getElementById("misc").style.display = "block";
        break;
}
}
