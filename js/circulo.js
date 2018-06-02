function calcular(){
	var r,re;
	r=formu.rai.value;

	r=parseFloat(r);
	re=parseFloat(re);

	re=((3.14) * (r*r));
	re = parseFloat(re.toFixed(2));
	formu.res.value= "Área= "+re;
}