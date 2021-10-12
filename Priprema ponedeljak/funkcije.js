function Radnik(ime,prezime)
{
	this.ime = ime;
	this.prezime = prezime;
	this.niz = [];
	
	var that = this;
	
	(function()
	{
		if(that.ime == null)
			that.ime = "Ines";
	})();
	
	this.dodaj = function(el)
	{
			that.niz.push(el);
		
	}
	
		this.crtaj = function()
	{
		var m = document.createElement("div");
		document.body.appendChild(m);

		var y = document.createElement("div");
		y.className = "brojke";
		m.appendChild(y);
		
		var x = document.createElement("label");
		x.className = "nula";
		x.innerHTML = "0";
		y.appendChild(x);
		
		var z = document.createElement("label");
		z.className = "dvesta";
		z.innerHTML = "250";
		y.appendChild(z);
		
		for(var i=0; i<that.niz.length; i++)
		{
			
		var n = document.createElement("div");
		n.className = "kon";
	
	
				if(i==3)
				{
					n.className = "kon1";
				}
		
			m.appendChild(n);
		
			var el = document.createElement("div");
			el.style.height = that.niz[i].plata + "px";
			el.style.backgroundColor = "blue";
			el.className = "blok";
			n.appendChild(el);
			
			
			var l = document.createElement("label");
			l.innerHTML = "jan";
			l.className = "labelica";
			n.appendChild(l);
		}
	}
}

function Izvestaj(m,g,p)
{
	this.mesec = m;
	this.godina = g;
	this.plata = p;
	

}