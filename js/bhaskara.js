function calcular(){
	var a, b, c, del, x;
	a = formu.va.value;
	b = formu.vb.value;
	c = formu.vc.value;

	del = b * b - (4 * a * c);
	if(del < 0 ){
		formu.del.value = "Delta negativo";
	}
	else{	
		formu.del.value = "Delta = " + del;
					
	}
	x = Math.sqrt(del);
	formu.n1.value = "X 1 = " + (-b + x) / (a*2);
	formu.n2.value =  "x2 =" + (-b - x) / (a*2);
}