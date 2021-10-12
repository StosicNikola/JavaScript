function Parcela()
{
	this.n = new Array(4);
	for(var i=0; i<4; i++)
	{
		this.n[i] = new Array(6);
	}
	
	var that= this;
	
	this.dodaj = function(i,j,el)
	{
		that.n[i][j] = el;

	}
	
	this.crtaj = function(main)
	{
		if(main == null) throw "Ne postoji element";
		
		var levi = document.createElement("div");
		levi.className = "levi";
		main.appendChild(levi);
		
		var d = document.createElement("div");
		levi.appendChild(d);
		
		for(var k=0; k<4; k++)
		{
			for(var j =0; j<6; j++)
			{
				var r = document.createElement("div");
				
				r.className = "kocka";
				r.ref = that.n[k][j];
				r.innerHTML = that.n[k][j].oznaka;
				r.style.backgroundColor = that.n[k][j].boja;
				
				r.onclick = function ()
				{
				var b = this.ref;
			
				if(b.berbe > 0)
				{
					b.berbe--;
					console.log(b.berbe);
				}
				if(b.berbe === 0)
				{
					this.ref=null;
							this.innerHTML="";
							this.style.backgroundColor="white";
				}
				
				var dd = document.createElement("label");
				dd.innerHTML = b.berbe;
				desni.appendChild(dd);
				}
				d.appendChild(r);
	
			}
		

			for(var t=0; t<6; t++)
			{
				var z = document.createElement("div");
				z.innerHTML = "<br>";
				d.appendChild(z);
			}
		}
		
		var desni = document.createElement("div");
		desni.className = "desni";
		main.appendChild(desni);

	
		
	}
}


function Biljka(ime,berbe,oznaka,boja,x,y)
{
	this.ime = ime;
	this.berbe = berbe;
	this.oznaka = oznaka;
	this.boja = boja;
	this.x = x;
	this.y = y;
}