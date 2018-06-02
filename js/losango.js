function calcular() {
	var dma, dme, a;
	dma = form.ma.value;
	dme = form.me.value;
	
	a =(dma * dme)/2; 
	a = parseFloat(a.toFixed(2));
	form.res.value ="Área="+ a;
}