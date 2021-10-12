function Biljka(ime,oznaka,boja,berba)
{
	this.ime=ime;
	this.oznaka=oznaka;
	this.boja=boja;
	this.berba=berba;
	
}

function Parcela()
{	

	
	var that = this;
	 this.matrica = [];
	
	for (var i = 0; i<4 ; i++)
		that.matrica[i] = [];
	
	this.dodaj = function(i,j,el)
	{
		that.matrica[i][j]=el;
	}
	
	this.crtaj = function(main)
	{
		var osn = document.createElement("div");
		document.body.appendChild(osn);
		for(var i=0; i<4; i++)
		{
			for(var j=0; j<6; j++)
			{
				var p = document.createElement("div");		
				osn.appendChild(p);
				p.className = "kocka";
				p.ref = that.matrica[i][j];
				p.style.backgroundColor = that.matrica[i][j].boja;
				var l = document.createElement("label");
				p.appendChild(l);
				l.innerHTML = that.matrica[i][j].oznaka;
				
				p.onclick = function()
				{
				var b = this.ref;
				if(b.berba > 0)
				{
					b.berba--;
					console.log(b.berba);
				}
				}
				
			}
			for(var y=0; y<3; y++)
			{
			var br = document.createElement("br");
			osn.appendChild(br);
			}
			
		}
		
		
		
	}
}

