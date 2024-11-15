/*
	Name = name (duh) example: "Potato"
	Plural = name + s or es or whatever example: "Potatoes"
	Icon = icon (DUHHHH) example: potato.png
	
	Count = initial count when you start the game (that shows up as a header, for example "Bruh x345") example: 213
	Amount = How many lols that this meme generates (on the progress bar) when you start the game
	initialCost = INitial coSt1! example: 6
	Speed = how fast it takes for the progress bar to reach 100% (in seconds)
*/

var memeList = [];
var priceNumberThingy = 1.4;
var amountNumberThingy = 1.1;

class Meme {
	constructor(name, plural, icon, count, initialCost, amount, speed) {
		this.name = name;
		this.plural = plural;
		this.icon = icon;

		// these won't change
		this.initialCount = count;
		this.initialCost = initialCost;
		this.initialAmount = amount;

		// these will
		this.count = count;
		this.cost = initialCost;
		this.amount = amount;

		this.speed = speed;
		this.moving = false; // if progress bar is moving
		this.autoMoving = false; // if you bought a manager

		this.amountMultiplier = 1;
		this.speedMultiplier = 1;

		this.percent = 0;

		this.canAfford = 0; // for the buy max thing

		// Create elements
		/*
		<div>
			<h3>Bob x123</h3>
			<img src="lol_laugh.png" height="69" class="meme-icon">
			<button class="btn btn-secondary">Buy x1 (123<img src="lol_laugh.png" alt="&#128514;" width="16">)</button>
			<div class="myProgress">
				<div class="myBar">123 billion</div>
			</div>
			<hr>
		</div>
		*/
		var memeDiv = document.createElement("DIV");

		var header = document.createElement("H3");
		header.innerHTML = name + " x" + this.count;
		memeDiv.appendChild(header);

		var memeIcon = document.createElement("IMG");
		memeIcon.src = this.icon;
		memeIcon.height = 69;
		memeIcon.classList.add("meme-icon");
		memeDiv.appendChild(memeIcon);

		var actuallyThis = this;

		memeIcon.onclick = function() {
			if (actuallyThis.count > 0) {
				if (actuallyThis.percent > 0) {
					actuallyThis.percent += (1 / (actuallyThis.speed * actuallyThis.speedMultiplier)) * 5; // if you click fast you can boost it by a very small amount
				}
				actuallyThis.moving = true;
			}
		};

		var button = document.createElement("BUTTON");
		button.innerHTML = "Buy x1 (" + formatNumberz(this.initialCost) + "<img src=\"lol_laugh.png\" alt=\"&#128514;\" width=\"16\">)";
		button.classList.add("btn");
		button.classList.add("btn-secondary");

		if (money < this.cost) {
			button.disabled = true;
		}

		memeDiv.appendChild(button);

		button.onclick = function() { // Buty theh thi gn
			if (money >= actuallyThis.cost) {
				money -= actuallyThis.cost;
				updateMoney();

				actuallyThis.count++;
				header.innerHTML = name + " x" + formatNumberz(actuallyThis.count);

				actuallyThis.cost = Math.round(Math.pow(priceNumberThingy, actuallyThis.count) * actuallyThis.initialCost);
				button.innerHTML = "Buy x1 (" + formatNumberz(actuallyThis.cost) + "<img src=\"lol_laugh.png\" alt=\"&#128514;\" width=\"16\">)";

				actuallyThis.amount = actuallyThis.count * actuallyThis.initialAmount;
				progressBar.innerHTML = formatNumberz(actuallyThis.amount * actuallyThis.amountMultiplier);

				updateButtons();
			}
		};

		var buyMax = document.createElement("BUTTON");
		buyMax.innerHTML = "Buy MAX x0 (0<img src=\"lol_laugh.png\" alt=\"&#128514;\" width=\"16\">)";
		buyMax.classList.add("btn");
		buyMax.classList.add("btn-warning");
		buyMax.disabled = true;
		memeDiv.appendChild(buyMax);

		buyMax.onclick = function() {
			var banana = actuallyThis.canAfford;
			for (var i = 0; i < banana; i++) {
				button.onclick();
			}
		};

		var progress = document.createElement("DIV");
		progress.classList.add("myProgress");

		var progressBar = document.createElement("DIV");
		progressBar.classList.add("myBar");

		if (this.initialCount > 0) {
			progressBar.innerHTML = this.amount * this.amountMultiplier;
		} else {
			progressBar.innerHTML = 0;
		}

		progress.appendChild(progressBar);
		memeDiv.appendChild(progress);

		this.progressBar = progressBar;
		this.button = button;
		this.buyMax = buyMax;

		var brrr = document.createElement("HR");
		memeDiv.appendChild(brrr);

		$("#home")[0].appendChild(memeDiv);
		memeList.push(this);
	}

	updateAmount() {
		if (this.count > 0) {
			this.progressBar.innerHTML = formatNumberz(this.amount * this.amountMultiplier);
		}
	}
}
