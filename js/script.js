
    let skraldespande = [
      { navn: "Restaffald – Hovedindgang", top: "45%", left: "34%" },
      { navn: "Restaffald – Bygning A", top: "38%", left: "60%" },
      { navn: "Restaffald – Bygning B", top: "52%", left: "67%" },
      { navn: "Restaffald – Bygning C", top: "48%", left: "116%" },
      { navn: "Restaffald – Bygning D", top: "34%", left: "138%" },
      { navn: "Restaffald - Bygning D", top: "34%", left: "143%" },
	  { navn: "Container (Pap/papir) - Affaldsgård 1 ", top: "17%", left: "97%" },
	  { navn: "Container (Grøntaffald)- Affaldsgård 2 ", top: "17%", left: "94%" },
	  { navn: "Container (Metal og plastik) - Affaldsgård 3 ", top: "17%", left: "91%" },
	  { navn: "Container (Restaffald) - Affaldsgård 4 ", top: "17%", left: "80%" },
	  { navn: "Restaffald - Bygning D", top: "34%", left: "151%" },
	 { navn: "Restaffald - Bygning D", top: "63%", left: "151%" },
	     { navn: "Restaffald - Bygning D", top: "63%", left: "138%" },
	     { navn: "Restaffald - Bygning D", top: "63%", left: "142%" },
	  
    ];

    let container = document.getElementById("container");
    let tooltip = document.getElementById("tooltip");

    skraldespande.forEach(spand => {
      let el = document.createElement("div");
      el.className = "markør";
      el.style.top = spand.top;
      el.style.left = spand.left;
      el.innerText = "▲"; 

      el.addEventListener("mouseenter", (e) => {
        tooltip.innerText = spand.navn;
        tooltip.style.display = "block";
        tooltip.style.top = `calc(${spand.top} - 30px)`;
        tooltip.style.left = spand.left;
      });

      el.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });

      container.appendChild(el);
    });

