function calcMM1(){
    var resultL, resultW, resultLq, resultWq, resultRo, resultP0, resultPnk, pnk1, pnk2 = 0;
    var mu = document.getElementById("mm1_1").value;
    var lambda = document.getElementById("mm1_2").value;
    var ka = document.getElementById("mm1_3").value;
    resultL = ((lambda)/(mu-lambda));
    console.log(resultL);
    resultW = ((1)/(mu-lambda));
    console.log(resultW);
    resultLq = ((Math.pow(lambda,2))/(mu*(mu-lambda)));
    console.log(resultLq);
    resultWq = ((lambda)/(mu*(mu-lambda)));
    console.log(resultWq);
    resultP0 = ((1)-(lambda/mu))*100;
    console.log(resultP0);
    resultRo = (lambda/mu)*100;
    console.log(resultRo);
    pnk1 = lambda/mu;
    console.log(pnk1);
    pnk2 = parseInt(ka)+1;
    console.log(pnk2);
    resultPnk = (Math.pow(pnk1, pnk2))*100;
    console.log(resultPnk);
    document.getElementById("trMM1").style.display="block";
    document.getElementById("mm1_l").value=resultL;
    document.getElementById("mm1_lq").value=resultLq;
    document.getElementById("mm1_ro").value=resultRo + "%";
    document.getElementById("mm1_pnk").value=resultPnk + "%";
    document.getElementById("mm1_p0").value=resultP0 + "%";
    document.getElementById("mm1_w").value=resultW;
    document.getElementById("mm1_wq").value=resultWq;
    
    
}

function cleanMM1(){
    document.getElementById("trMM1").style.display="none";
    document.getElementById("mm1_1").value="";
    document.getElementById("mm1_2").value="";
    document.getElementById("mm1_3").value="";
    document.getElementById("mm1_l").value="";
    document.getElementById("mm1_lq").value="";
    document.getElementById("mm1_ro").value="";
    document.getElementById("mm1_pnk").value="";
    document.getElementById("mm1_p0").value="";
    document.getElementById("mm1_w").value="";
    document.getElementById("mm1_wq").value="";
    
}