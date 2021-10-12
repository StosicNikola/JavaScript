function Nesto()
{
	this.crtaj = function()
	{
		var c = document.createElement("input");
		c.type = "checkbox";
		document.body.appendChild(c);
		c.checked = true;
		
		var r = document.createElement("input");
		r.type = "radio";
		r.name = "nesto";
		document.body.appendChild(r);
		
		var r1 = document.createElement("input");
		r1.type = "radio";
		r1.name = "nesto";
		document.body.appendChild(r1);
		
		var s = document.createElement("select");
		document.body.appendChild(s);
		var o = document.createElement("option");
		o.text = "Ines";
		s.appendChild(o);
		var o = document.createElement("option");
		o.text = "Vladan";
		o.selected = true;
		s.appendChild(o);
		
		var t = document.createElement("input");
		t.type = "text";
		document.body.appendChild(t);
	}
}