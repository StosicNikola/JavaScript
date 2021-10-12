window.onload = function()
{
	var r = new Radnik("ines","ilickovic");
	var i = new Izvestaj(1,2017,123);
	var g = new Izvestaj(2,2017,80);
	var k = new Izvestaj(3,2017,100);
	var t = new Izvestaj(2,2017,80);
	var o = new Izvestaj(2,2017,80);
	var p = new Izvestaj(3,2017,100);
	r.dodaj(i);
	r.dodaj(g);
    r.dodaj(k);
	r.dodaj(t);
	r.dodaj(o);
    r.dodaj(p);

	r.crtaj();
}