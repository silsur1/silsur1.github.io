/*
function cup_color(imgid,folder,newimg){
    document.getElementById(imgid).src = "/images" + folder + "/" + newimg + ".png";
}
*/

function cup_color(){
    color = document.getElementById("kopp_farge").value;

    if (color == "hvit"){
        document.getElementById("cup_image").src="images/white_cup.png";
    }
    else if (color == "svart"){
        document.getElementById("cup_image").src="images/black_cup.png";
    }
    else{
        document.getElementById("cup_image").src="images/cup.png";
    }
}

