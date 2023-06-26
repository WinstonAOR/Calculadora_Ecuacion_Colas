
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
    resultW = ((1)/(mu-lambda));
    resultLq = ((Math.pow(lambda,2))/(mu*(mu-lambda)));
    resultWq = ((lambda)/(mu*(mu-lambda)));
    resultP0 = ((1)-(lambda/mu))*100;
    resultRo = (lambda/mu)*100;
    pnk1 = lambda/mu;
    pnk2 = parseInt(ka)+1;
    resultPnk = (Math.pow(pnk1, pnk2))*100;
    document.getElementById("tbMM1").style.display="block";
    document.getElementById("mm1_l").value=resultL.toFixed(4);
    document.getElementById("mm1_lq").value=resultLq.toFixed(4);
    document.getElementById("mm1_ro").value=resultRo.toFixed(4) + "%";
    document.getElementById("mm1_pnk").value=resultPnk.toFixed(4) + "%";
    document.getElementById("mm1_p0").value=resultP0.toFixed(4) + "%";
    document.getElementById("mm1_w").value=resultW.toFixed(4);
    document.getElementById("mm1_wq").value=resultWq.toFixed(4);
    console.log("Cs = Costo de servicio");
    console.log("Cw= Costo de espera");
    console.log("Costo total de espera = (lambda*Wq)*Tiempolaboral*Cw");
    console.log("Costo total de servicio = m * Cs * Tiempolaboral");
    console.log("Costo total = C_espera + C_servicio");
    
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
    resultL = (((((lambda*mu)*(Math.pow(lambda/mu, m)))/((factorial(m-1))*(Math.pow(((m*mu)-lambda),2))))*resultP0)+(lambda/mu));
    resultW = (resultL/lambda);
    resultLq = (resultL-(lambda/mu));
    resultWq = (resultLq/lambda);
    resultRo = (lambda/(m*mu));
    document.getElementById("tbMMn").style.display="block";
    document.getElementById("mmn_l").value=resultL.toFixed(4);
    document.getElementById("mmn_lq").value=resultLq.toFixed(4);
    document.getElementById("mmn_ro").value=resultRo.toFixed(4);
    document.getElementById("mmn_p0").value=resultP0.toFixed(4);
    document.getElementById("mmn_w").value=resultW.toFixed(4);
    document.getElementById("mmn_wq").value=resultWq.toFixed(4);
   
    
    
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
    resultWq = (lambda/((2*mu)*(mu-lambda)));
    resultL = (resultLq+(lambda/mu));
    resultW = (resultWq+(1/mu));
    
    
    document.getElementById("tbMD1").style.display="block";
    document.getElementById("md1_l").value=resultL.toFixed(4);
    document.getElementById("md1_lq").value=resultLq.toFixed(4);
    document.getElementById("md1_w").value=resultW.toFixed(4);
    document.getElementById("md1_wq").value=resultWq.toFixed(4);   
    
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

/**Sumatoria */

function SumatoriaMM1I(g, division){
    var  result = 0;
    for (j=0; j<=g; j++) {
        result += ((factorial(g)/((factorial(g-j))))*(Math.pow(division,j)));
    }
    return result;
}

/** MM1I */

function calcMM1I(){
    var resultL, resultP0, resultLq, resultWq = 0;
    var mu = document.getElementById("mm1i_1").value;
    var lambda = document.getElementById("mm1i_2").value;
    var n = document.getElementById("mm1i_3").value;
    resultP0 = (1/SumatoriaMM1I(n,lambda/mu));
    resultLq = (n-((parseFloat(lambda)+parseFloat(mu))/lambda)*(1-resultP0));
    resultL = (resultLq+(1-resultP0));
    resultWq = (resultLq/((n-resultL)*lambda));
    
    
    document.getElementById("tbMM1I").style.display="block";
    document.getElementById("mm1i_l").value=resultL.toFixed(4);
    document.getElementById("mm1i_lq").value=resultLq.toFixed(4);
    document.getElementById("mm1i_p0").value=resultP0.toFixed(4);
    document.getElementById("mm1i_wq").value=resultWq.toFixed(4);   
    
}

function cleanMM1I(){
    document.getElementById("tbMM1I").style.display="none";
    document.getElementById("mm1i_1").value="";
    document.getElementById("mm1i_2").value="";
    document.getElementById("mm1i_3").value="";
    document.getElementById("mm1i_l").value="";
    document.getElementById("mm1i_lq").value="";
    document.getElementById("mm1i_p0").value="";
    document.getElementById("mm1i_wq").value="";
    
}