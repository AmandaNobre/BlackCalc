function calcular() {
	var h, bamaior, bamenor, res;
	 h = form.altura.value;
	 bamaior = form.bmaior.value;
	 bamenor = form.bmenor.value;
	 h = parseFloat(h);
	 bamaior = parseFloat(bamaior);
	 bamenor = parseFloat(bamenor);
	 res = parseFloat(res);

	 res = ((bamaior+bamenor)*h)/2;
	 res = parseFloat(res.toFixed(2));
	 form.res.value= "Área= "+ res;
}