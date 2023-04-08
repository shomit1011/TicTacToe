function start(){
    ress();
    for(var i=0; i<9; i++){
        document.getElementsByClassName("btn")[i].innerHTML = "";
    }
}

var st=0;
function play(x){
    if(st%2==0){
        document.getElementById(x).innerHTML = "O";
        document.getElementById(x).value=-1;
        st++;
    }
    else{
        document.getElementById(x).innerHTML = "X";
        document.getElementById(x).value=-2;
        st++;
    }
    checkk();
}

function checkk(){
    var m0 = document.getElementById("1_1").value;
    var m1 = document.getElementById("1_2").value;
    var m2 = document.getElementById("1_3").value;
    var m3 = document.getElementById("2_1").value;
    var m4 = document.getElementById("2_2").value;
    var m5 = document.getElementById("2_3").value;
    var m6 = document.getElementById("3_1").value;
    var m7 = document.getElementById("3_2").value;
    var m8 = document.getElementById("3_3").value;

    if((st+1)%2==0){
        var player = "O";
    }else{
        player = "X";
    }

    if((m0==m1) && (m1==m2)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if((m3==m4) && (m4==m5)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if((m3==m4) && (m4==m5)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if((m6==m7) && (m7==m8)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if((m0==m3) && (m3==m6)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if((m1==m4) && (m4==m7)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if((m2==m5) && (m5==m8)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if((m0==m4) && (m4==m8)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if((m2==m4) && (m4==m6)){
        document.getElementById("f-msg").innerHTML = "Player "+ player + " Won";
        dis();
        document.getElementById("kk").innerHTML="Reset Game";
    }
    else if(st==9)
    {
        ress();
        dis();
        document.getElementById("f-msg").innerHTML="No One Won Retry!";
        document.getElementById("kk").innerHTML="Reset Game";
    }
}
function dis()
{
    document.getElementById("1_1").disabled = true;
    document.getElementById("1_2").disabled = true;
    document.getElementById("1_3").disabled = true;
    document.getElementById("2_1").disabled = true;
    document.getElementById("2_2").disabled = true;
    document.getElementById("2_3").disabled = true;
    document.getElementById("3_1").disabled = true;
    document.getElementById("3_2").disabled = true;
    document.getElementById("3_3").disabled = true;

}
function ress()
{st=0;
    document.getElementById("1_1").disabled = false;
    document.getElementById("1_2").disabled = false;
    document.getElementById("1_3").disabled = false;
    document.getElementById("2_1").disabled = false;
    document.getElementById("2_2").disabled = false;
    document.getElementById("2_3").disabled = false;
    document.getElementById("3_1").disabled = false;
    document.getElementById("3_2").disabled = false;
    document.getElementById("3_3").disabled = false;
    document.getElementById("1_1").value=1;
    document.getElementById("1_2").value=2;
    document.getElementById("1_3").value=3;
    document.getElementById("2_1").value=4;
    document.getElementById("2_2").value=5;
    document.getElementById("2_3").value=6;
    document.getElementById("3_1").value=7;
    document.getElementById("3_2").value=8;
    document.getElementById("3_3").value=9;
    document.getElementById("f-msg").innerHTML="";
}