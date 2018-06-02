function calcular() {
	var h, c1, c2;
	c1=formu.ca1.value;
	c2=formu.ca2.value;

	c1=parseFloat(c1);
	c2=parseFloat(c2);
	h=parseFloat(h);

	h=((c1*c1) + (c2*c2));
	h=Math.sqrt(h);
	h = parseFloat(h.toFixed(2));
	formu.resu.value= "Área= "+h;
}