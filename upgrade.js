/*
	Let me speak to your... upgrade?
	Name = name - ex: Bob Joe
	Multiplier - how much to upgrade by if you know what I mean
	Run = what to upgrade (variable) - ex: potatoes
	exception: type "everything" to upgrade everything
	Cost = moneyz! - ex: 1000
	Type = "money" or "speed" (default is money)
*/

var upgradeList = [];

class Upgrade {
	constructor(name, multiplier, run, cost, type) {
		this.name = name;
		this.multiplier = multiplier;
		this.run = run;
		this.cost = cost;
		this.type = type;
		this.bought = false;

		// Create elements
		var memeDiv = document.createElement("DIV");

		var header = document.createElement("H3");
		header.innerHTML = this.name;
		memeDiv.appendChild(header);

		var subHeader = document.createElement("H4");
		if (this.run == "everything") {
			if (this.type == "speed") {
				subHeader.innerHTML = "Speed of Everything x" + this.multiplier;
			} else {
				subHeader.innerHTML = "Profit of Everything x" + this.multiplier;
			}
		} else {
			if (this.type == "speed") {
				subHeader.innerHTML = "Speed of " + this.run.plural + " x" + this.multiplier;
			} else {
				subHeader.innerHTML = "Profit of " + this.run.plural + " x" + this.multiplier;
			}
		}
		memeDiv.appendChild(subHeader);

		var memeIcon = document.createElement("IMG");
		if (this.run == "everything") {
			memeIcon.src = "lol_laugh.png";
		} else {
			memeIcon.src = this.run.icon;
		}
		memeIcon.height = 69;
		memeIcon.classList.add("meme-icon");
		memeDiv.appendChild(memeIcon);

		var actuallyThis = this;

		var button = document.createElement("BUTTON");
		button.innerHTML = "Buy (" + formatNumberz(this.cost) + "<img src=\"lol_laugh.png\" alt=\"&#128514;\" width=\"16\">)";
		button.classList.add("btn");
		button.classList.add("btn-secondary");

		if (money < this.cost) {
			button.disabled = true;
		}

		memeDiv.appendChild(button);

		button.onclick = function() { // Buy the thing
			if (money >= actuallyThis.cost && actuallyThis.bought == false) {
				actuallyThis.bought = true;
				money -= actuallyThis.cost;
				$(memeDiv).fadeOut();
				
				if (actuallyThis.run == "everything") {
					if (actuallyThis.type == "speed") {
						memeList.forEach(function(m) {
							m.speedMultiplier *= actuallyThis.multiplier;
							m.updateAmount();
						});
					} else {
						memeList.forEach(function(m) {
							m.amountMultiplier *= actuallyThis.multiplier;
							m.updateAmount();
						});
					}
				} else {
					if (actuallyThis.type == "speed") {
						actuallyThis.run.speedMultiplier *= actuallyThis.multiplier;
					} else {
						actuallyThis.run.amountMultiplier *= actuallyThis.multiplier;
					}
					actuallyThis.run.updateAmount();
				}

				updateMoney();
				updateButtons();
			}
		};

		this.button = button;

		memeIcon.onclick = button.onclick;

		var brrr = document.createElement("HR");
		memeDiv.appendChild(brrr);

		$("#contact")[0].appendChild(memeDiv);
		upgradeList.push(this);
	}
}
