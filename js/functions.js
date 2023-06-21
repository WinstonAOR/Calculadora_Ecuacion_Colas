
/** Factorial */

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

/** MM1 */

function calcMM1(){
    var resultL, resultW, resultLq, resultWq, resultRo, resultP0, resultPnk, pnk1, pnk2, pp1 = 0;
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
    document.getElementById("tbMM1").style.display="block";
    document.getElementById("mm1_l").value=resultL;
    document.getElementById("mm1_lq").value=resultLq;
    document.getElementById("mm1_ro").value=resultRo + "%";
    document.getElementById("mm1_pnk").value=resultPnk + "%";
    document.getElementById("mm1_p0").value=resultP0 + "%";
    document.getElementById("mm1_w").value=resultW;
    document.getElementById("mm1_wq").value=resultWq;
    
    
}

function cleanMM1(){
    document.getElementById("tbMM1").style.display="none";
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


/** MMn */

function calcMMn(){
    var resultL, resultW, resultLq, resultWq, resultRo, resultP0, factN, factM = 0;
    var mu = document.getElementById("mmn_1").value;
    var lambda = document.getElementById("mmn_2").value;
    var m = document.getElementById("mmn_3").value;
    var n = document.getElementById("mmn_4").value;
    factN = factorial(n);
    factM = factorial(m);
    resultP0 = (1/(((1/factN)+(Math.pow(lambda/mu,n)))+((1/factM)*(Math.pow(lambda/mu, m))*((m*mu)/((m*mu)-lambda)))));
    console.log(resultP0);
    resultL = (((((lambda*mu)*(Math.pow(lambda/mu, m)))/((factorial(m-1))*(Math.pow(((m*mu)-lambda),2))))*resultP0)+(lambda/mu));
    console.log(resultL);
    resultW = (resultL/lambda);
    console.log(resultW);
    resultLq = (resultL-(lambda/mu));
    console.log(resultLq);
    resultWq = (resultLq/lambda);
    console.log(resultWq);
    resultRo = (lambda/(m*mu));
    console.log(resultRo);
    document.getElementById("tbMMn").style.display="block";
    document.getElementById("mmn_l").value=resultL;
    document.getElementById("mmn_lq").value=resultLq;
    document.getElementById("mmn_ro").value=resultRo;
    document.getElementById("mmn_p0").value=resultP0;
    document.getElementById("mmn_w").value=resultW;
    document.getElementById("mmn_wq").value=resultWq;
   
    
    
}

function cleanMMn(){
    document.getElementById("tbMMn").style.display="none";
    document.getElementById("mmn_1").value="";
    document.getElementById("mmn_2").value="";
    document.getElementById("mmn_3").value="";
    document.getElementById("mmn_4").value="";
    document.getElementById("mmn_l").value="";
    document.getElementById("mmn_lq").value="";
    document.getElementById("mmn_ro").value="";
    document.getElementById("mmn_p0").value="";
    document.getElementById("mmn_w").value="";
    document.getElementById("mmn_wq").value="";
    
}

/** MD1 */

function calcMD1(){
    var resultL, resultW, resultLq, resultWq = 0;
    var mu = document.getElementById("md1_1").value;
    var lambda = document.getElementById("md1_2").value;
    
    resultLq = ((Math.pow(lambda,2))/((2*mu)*(mu-lambda)));
    console.log(resultLq);
    resultWq = (lambda/((2*mu)*(mu-lambda)));
    console.log(resultWq);
    resultL = (resultLq+(lambda/mu));
    console.log(resultL);
    resultW = (resultWq+(1/mu));
    console.log(resultW);
    
    
    document.getElementById("tbMD1").style.display="block";
    document.getElementById("md1_l").value=resultL;
    document.getElementById("md1_lq").value=resultLq;
    document.getElementById("md1_w").value=resultW;
    document.getElementById("md1_wq").value=resultWq;   
    
}

function cleanMD1(){
    document.getElementById("tbMD1").style.display="none";
    document.getElementById("md1_1").value="";
    document.getElementById("md1_2").value="";
    document.getElementById("md1_l").value="";
    document.getElementById("md1_lq").value="";
    document.getElementById("md1_ro").value="";
    document.getElementById("md1_p0").value="";
    document.getElementById("md1_w").value="";
    document.getElementById("md1_wq").value="";
    
}