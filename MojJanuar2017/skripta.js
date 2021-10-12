function porudzbina(vrsta, adresa, poruka)
{
	var that = this;
	
	this.vrsta=vrsta;
	this.adresa=adresa;
	this.poruka=poruka;
}

function listaPorudzbina()
{
	var that = this;
	
	this.niz = [];
	
	this.dodaj = function(porudzbina)
	{
		that.niz.push(porudzbina);
	}
	
	this.crtaj = function(main)
	{
		if(main == null) throw "greska";
		
		
		var levi = document.createElement("div");
		levi.className="levi";
		main.appendChild(levi);
		
		var desni = document.createElement("div");
		desni.className="desni";
		main.appendChild(desni);
		var unutar = document.createElement("div");
		unutar.className="unutar";
		desni.appendChild(unutar);
		
		var d1 = document.createElement("div");
				unutar.appendChild(d1);
				d1.className="stub";
				d1.style.width = "0px";
		var d2 = document.createElement("div");
				unutar.appendChild(d2);
				d2.className="stub";
				d2.style.width = "0px";
		var d3 = document.createElement("div");
				unutar.appendChild(d3);
				d3.className="stub";
				d3.style.width = "0px";
		
		var labela = document.createElement("div");
		labela.innerHTML = "info o porudzbini";
		levi.appendChild(labela);
		
		var divCheck = document.createElement("div");
		divCheck.innerHTML ="Buket";
		levi.appendChild(divCheck);
		var check1 = document.createElement("input");
		check1.type="checkbox";
		check1.value="buket";
		divCheck.appendChild(check1);
		
		var divCheck2 = document.createElement("div");
		divCheck2.innerHTML ="Cvece";
		levi.appendChild(divCheck2);
		var check2 = document.createElement("input");
		check2.type="checkbox";
		check2.value="cvece";
		divCheck2.appendChild(check2);
		
		var divCheck3 = document.createElement("div");
		divCheck3.innerHTML ="Bombonjera";
		levi.appendChild(divCheck3);
		var check3 = document.createElement("input");
		check3.type="checkbox";
		check3.value="bombonjera";
		divCheck3.appendChild(check3);
		
		var adresa = document.createElement("input");
		adresa.type="text";
		levi.appendChild(adresa);
		
		
		var poruka = document.createElement("input");
		poruka.type="text";
		levi.appendChild(poruka);
	
		var btn = document.createElement("button");
		btn.innerHTML ="Poruci";
		levi.appendChild(btn);
		
		btn.onclick = function()
		{
			var svi = levi.querySelectorAll("input[type=checkbox]");
			var t = null;
			for (var i = 0; i<3; i++)
				if (svi[i].checked == true)
					t=svi[i];
				if (t == null)
					alert("checkiraj nesto");
				
			var P = new porudzbina(t.value, adresa.innerText, poruka.innerText); //nece innerText
			that.dodaj(P);
			var b =0; //broj buketa
			var c =0;//broj cveca
			var bo=0;
			for (var i = 0; i<that.niz.length; i++)
			{
				if (that.niz[i].vrsta == "buket")
				{
					++b;
					d1.style.width = b*50 + "px";
				}
				else
				if (that.niz[i].vrsta=="cvece")
				{
					d2.style.width = c*50 + "px";
					++c;
				}
				else
				{
					d1.style.width == b*50 + "px";
					++bo;
				}
			}
			
			// if (desni.childElementCount > 0)stooo neceee
				// do {
					// desni.removeChild(firstChild);
				// }
				// while (desni.childElementCount == 0);
			
				
				
			
				
				
				
				
				d3.style.width = bo*50 + "px";
				
				for (var i =0; i<3; i++)
				{
					svi[i].checked = false;
				}
				
				
				
			
				
			
			
		}
		
	
	}
}