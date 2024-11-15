/*
	Let me speak to your manager!!1
	Name = name - ex: Bob Joe
	Run = what to run (variable) - ex: cows
	Cost = moneyz! - ex: 1000
*/

var managerList = [];

class Manager {
	constructor(name, run, cost) {
		this.name = name;
		this.run = run;
		this.cost = cost;
		this.bought = false;

		// Create elements
		var memeDiv = document.createElement("DIV");

		var header = document.createElement("H3");
		header.innerHTML = this.name;
		memeDiv.appendChild(header);

		var subHeader = document.createElement("H4");
		subHeader.innerHTML = "Runs " + this.run.plural;
		memeDiv.appendChild(subHeader);

		var memeIcon = document.createElement("IMG");
		memeIcon.src = this.run.icon;
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
				actuallyThis.run.autoMoving = true;
				updateMoney();
				$(memeDiv).fadeOut();
				updateButtons();
			}
		};

		this.button = button;

		memeIcon.onclick = button.onclick;

		var brrr = document.createElement("HR");
		memeDiv.appendChild(brrr);

		$("#profile")[0].appendChild(memeDiv);
		managerList.push(this);
	}
}
