function calcular(){
	var a, b, c, p, sp, re;
	a = formu.va.value;
	b = formu.vb.value;
	c = formu.vc.value;

	a = parseFloat(a);
	b = parseFloat(b); 
	c = parseFloat(c); 
	p=parseFloat(p);
	sp=parseFloat(sp);
	re=parseFloat(re);

	p =a+b+c ;
	formu.peri.value = "Perímetro= "+p;

	sp = (p/2);
	formu.semi.value= "Semi Perímetro= "+sp;

	re = ((sp - a) * (sp - b) * (sp - c)) * sp; 
	re = Math.sqrt(re);
	re = parseFloat(re.toFixed(2));
	formu.res.value = "Área= "+re;
}