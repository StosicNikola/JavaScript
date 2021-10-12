window.onload = function()
{
	var e = new Parcela();

	for(var i=0; i<2; i++)
	{
		for(var j=0; j<6; j++)
			e.dodaj(i,j, new Biljka("suncokret","S","yellow",1));
	}
	for(var u=2; u<4; u++)
	{
		for(var s=0; s<6; s++)
			e.dodaj(u,s,new Biljka("cvece","C","red",4));
	}
	e.crtaj(document.getElementById("main"));
}