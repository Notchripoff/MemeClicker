function resizeStuff() {
	$('#home').height(window.innerHeight - ($('#whateverthisis').height()) - 20 + 'px');
	$('#profile').height(window.innerHeight - ($('#whateverthisis').height()) - 20 + 'px');
	$('#contact').height(window.innerHeight - ($('#whateverthisis').height()) - 20 + 'px');
}

resizeStuff();

console.log("I like memes");

window.onresize = resizeStuff;

// Game loop
setInterval(function() {
	memeList.forEach(function(m) {
		if (m.count > 0) {
			if (m.autoMoving) {
				m.moving = true;
			}

			if (m.moving) {
				if (m.percent + 1 > 100) {
					m.percent = 0;
					if (!m.autoMoving) {
						m.moving = false;
					}
					money += m.amount * m.amountMultiplier;
					updateMoney();
					updateButtons();
				} else {
					m.percent += (10/6) / (m.speed / m.speedMultiplier); // Cool Math Stuff(TM) that's hard to explain
				}

				m.progressBar.style.width = m.percent + "%";
			}
		}
	});
}, 1/60*1000); // 60 times a second

function updateMoney() {
	$('#moneyz').html(formatNumberz(money));
}

function updateButtons() {
	memeList.forEach(function(m) {
		if (money < m.cost) {
			m.button.disabled = true;
		} else {
			m.button.disabled = false;
		}

		var canAfford = 0;
		var pay = m.cost;
		var muneez = money;

		while (muneez >= 0) {
			if (m.count + canAfford == 1) {
				pay = m.initialCost;
			} else {
				pay = Math.round(Math.pow(priceNumberThingy, m.count + canAfford) * m.initialCost);
			}
			muneez -= pay;
			canAfford++;
		}

		muneez += pay;
		canAfford -= 1;

		m.canAfford = canAfford;

		m.buyMax.innerHTML = "Buy MAX x" + canAfford + " (" + formatNumberz(money - muneez) + "<img src=\"lol_laugh.png\" alt=\"&#128514;\" width=\"16\">)";

		if (canAfford > 0) {
			m.buyMax.disabled = false;
		} else {
			m.buyMax.disabled = true;
		}
	});

	managerList.forEach(function(m) {
		if (money < m.cost) {
			m.button.disabled = true;
		} else {
			m.button.disabled = false;
		}
	});

	upgradeList.forEach(function(m) {
		if (money < m.cost) {
			m.button.disabled = true;
		} else {
			m.button.disabled = false;
		}
	});
}

// M E M E S
var doge = new Meme("Doge", "Doges", "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg", 1, 2, 4, 1);
var trollFace = new Meme("Troll Face", "Troll Faces", "https://i.kym-cdn.com/entries/icons/facebook/000/000/091/TrollFace.jpg", 0, 69, 123, 2);
var dab = new Meme("Dab", "Dabs", "https://i.ytimg.com/vi/ULkWbEAv46o/maxresdefault.jpg", 0, 420, 1337, 4);
var yeet = new Meme("Yeet", "Yeets", "https://res.cloudinary.com/teepublic/image/private/s--5v1WQL6U--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:38/co_ffffff,e_outline:inner_fill:38/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1526650608/production/designs/2700034_0.jpg", 0, 12042, 18990, 5);
var glob = new Meme("Globglogabgalab", "Globglogabgalabs", "https://i.ytimg.com/vi/dtER80sOjX4/maxresdefault.jpg", 0, 69420, 100712, 6);
var E = new Meme("E", "E's", "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg", 0, 111111, 333333, 8);
var bruh = new Meme("Bruh", "Bruhs", "", 0, 5175416, 8161234, 10);
var bigBrain = new Meme("Big Brain", "Big Brains", "BIGBRAIN.png", 0, 54321234, 76545675, 11);
var creeper = new Meme("Creeper, Aw Man", "Creeper, Aw Mans", "https://i.ytimg.com/vi/e9B0KWM4r_s/maxresdefault.jpg", 0, 343987694, 450000000, 13);
var stinky = new Meme("Uh Oh", "Uh Ohs", "https://i.kym-cdn.com/entries/icons/mobile/000/020/633/le_monke.jpg", 0, 6666666666, 10000000000, 15);

// Managers
var dogeManager = new Manager("Doge", doge, 50000);		
var lawl = new Manager("Trololo Guy", trollFace, 100000);
var dumb = new Manager("HaterDabber42", dab, 250000);
var yoink = new Manager("The Yeeter&trade;", yeet, 1000000);
var blab = new Manager("The Shwabble-dabble-wabble-gabble-flibba-blabba-blab", glob, 10000000);
var a = new Manager("A", E, 25000000);
var bruhMoment = new Manager("Bruh M. Oment", bruh, 50000000);
var yourBrain = new Manager("Your Brain (roasted?)", bigBrain, 100000000);
var mineDiamonds = new Manager("Diamond Pickaxe", creeper, 250000000);
var uhOh = new Manager("Le Monke", stinky, 10e9);

// Upgrades
var dogeUpgrade = new Upgrade("more funny", 2, doge, 100000);
var lolUpgrade = new Upgrade("TROLOLOLOL", 2, trollFace, 250000);
var dabUpgrade = new Upgrade("Dab on the Haters", 2, dab, 500000);
var yeetUpgrade = new Upgrade("Ya Yeet", 2, yeet, 750000);
var globUpgrade = new Upgrade("More Books", 2, glob, 1000000);
var eUpgrade = new Upgrade("F", 2, E, 10000000);
var bruhUpgrade = new Upgrade("Bruh Sound Effects", 2, bruh, 100000000);
var bigBrainUpgrade = new Upgrade("Bigger Brains", 2, bigBrain, 500000000);
var creeperUpgrade = new Upgrade("So We Back in the Mine", 2, creeper, 750000000);
var lemonkeUpgrade = new Upgrade("Poopy Funny", 2, stinky, 1000000000);
var everyUpgrade = new Upgrade("Pro Memer", 2, "everything", 5000000000);

var dogeupgrade2 = new Upgrade("such laugh", 5, doge, 75e8);
var lolupgrade2 = new Upgrade("Ecks Dee", 5, trollFace, 10e9);
var dabupgrade2 = new Upgrade("&lt;o/", 5, dab, 25e9);
var yeetupgrade2 = new Upgrade("Throwing Items at a High Velocity", 5, yeet, 50e9);
var globupgrade2 = new Upgrade("Yeast of Thoughts and Mind", 5, glob, 1e11);
var eupgrade2 = new Upgrade("G", 5, E, 2.5e11);
var bruhUpgrade2 = new Upgrade("Bruh Moments", 5, bruh, 5e11);
var bigbrainupgrade2 = new Upgrade("Expanding Brain", 5, bigBrain, 7.5e11);
var creeperupgrade2 = new Upgrade("Got Our Pickaxe Swinging", 5, creeper, 1e12);
var lemonkeupgrade2 = new Upgrade("Terrible Jokes", 5, stinky, 5e12);
var everyupgrade2 = new Upgrade("I Gotta Count Up, Count Up, Count Up", 5, "everything", 1e13);
