var _ = {}; // The Derpy(TM) Object(TM) TM(TM) Lol(TM)

// Get the Thingy of THe Id Blhablhalh
// Stuff = ID or class or whatever tag
// N = # of thingybob like if you had 2 divs with the class "banana" you could pick which one or whatever
// If there's no n then it picks the 1st one
// Also it starts with 0
_ = function(idOrWhatever, n) {
	var thingy = 0;
	if (document.querySelector(idOrWhatever) === null) {
		 thingy == 0;
	} else {
		if (n === undefined) {
			thingy = document.querySelector(idOrWhatever);
		} else {
			thingy = document.querySelectorAll(idOrWhatever)[n];
		}
	}
	
	// Add to text
	thingy.a = function(t) {
		thingy.innerHTML = thingy.innerHTML + t; 
	};
	
	// Edit text
	thingy.e = function(t) {
		thingy.innerHTML = t; 
	};
	
	// Add numbers to the text
	thingy.inc = function(n) {
		if (n === undefined) {
			n = 1;
		}
		if (parseFloat(thingy.innerHTML) + n !== NaN) {
			thingy.innerHTML = parseFloat(thingy.innerHTML) + n;
		} else {
			thingy.innerHTML = 0;
		}
	};
	
	thingy.event = function(eventName, func) {
		thingy.addEventListener(eventName, func);
	};
	
	thingy.c = thingy.innerHTML;
	
	thingy.t = thingy.innerText;
	
	thingy.add = thingy.inc;
	thingy.append = thingy.a;
	thingy.edit = thingy.e;
	thingy.code = thingy.c;
	thingy.html = thingy.e;
	thingy.text = thingy.t;
	
	return thingy;
};

// Count how many elements have the class or tag name
_.c = function(thingy) {
	return document.querySelectorAll(thingy).length;
};

// Write to the body (it's like document.write but better)
_.w = function(t) {
	document.body.innerHTML = document.body.innerHTML + t; 
};

// Import a JavaScript file
_.import = function(url, integrity, crossorigin) {
	var script = document.createElement("script");
	script.src = url;
	if (integrity !== undefined && crossorigin !== undefined) {
		script.integrity = integrity;
		script.crossOrigin = crossorigin;
	}
	document.body.appendChild(script);
};

_.i = _.import;

_.require = _.import;



_.num = {}; // Derpy Numbers(TM)

_.num.withCommas = function(x) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
};

_.num.formatNumber = function(n, digits) {
	var d = digits;
	if (d === undefined) {
		d = 3;
	}
	var ranges = [
	  {divider: 1e24, suffix: 'Y'},
	  {divider: 1e21, suffix: 'Z'},
	  {divider: 1e18, suffix: 'E'},
	  {divider: 1e15, suffix: 'P'},
	  {divider: 1e12, suffix: 'T'},
	  {divider: 1e9, suffix: 'B'},
	  {divider: 1e6, suffix: 'M'}
	];
	for (var i = 0; i < ranges.length; i++) {
		if (n >= ranges[i].divider) {
			return parseFloat((n / ranges[i].divider).toFixed(d)).toString() + ranges[i].suffix;
		}
	}
	return n.toString();
};

_.num.ranges = [
	{divider: 1e132, suffix: 'trequadragintillion'},
	{divider: 1e129, suffix: 'duoquadragintillion'},
	{divider: 1e126, suffix: 'unquadragintillion'},
	{divider: 1e123, suffix: 'quadragintillion'},
	{divider: 1e120, suffix: 'novemtrigintillion'},
	{divider: 1e117, suffix: 'octotrigintillion'},
	{divider: 1e114, suffix: 'septentrigintillion'},
	{divider: 1e111, suffix: 'sextrigintillion'},
	{divider: 1e108, suffix: 'quinquatrigintillion'},
	{divider: 1e105, suffix: 'quattuortrigintillion'},
	{divider: 1e102, suffix: 'tretrigintillion'},
	{divider: 1e99, suffix: 'duotrigintillion'},
	{divider: 1e96, suffix: 'untrigintillion'},
	{divider: 1e93, suffix: 'trigintillion'},
	{divider: 1e90, suffix: 'novemvigintillion'},
	{divider: 1e87, suffix: 'octovigintillion'},
	{divider: 1e84, suffix: 'septenvigintillion'},
	{divider: 1e81, suffix: 'sexvigintillion'},
	{divider: 1e78, suffix: 'quinquavigintillion'},
	{divider: 1e75, suffix: 'quattuorvigintillion'},
	{divider: 1e72, suffix: 'tresvigintillion'},
	{divider: 1e69, suffix: 'duovigintillion'},
	{divider: 1e66, suffix: 'unvigintillion'},
	{divider: 1e63, suffix: 'vigintillion'},
	{divider: 1e60, suffix: 'novemdecillion'},
	{divider: 1e57, suffix: 'octodecillion'},
	{divider: 1e54, suffix: 'septendecillion'},
	{divider: 1e51, suffix: 'sexdecillion'},
	{divider: 1e48, suffix: 'quindecillion'},
	{divider: 1e45, suffix: 'quattuordecillion'},
	{divider: 1e42, suffix: 'tredecillion'},
	{divider: 1e39, suffix: 'duodecillion'},
	{divider: 1e36, suffix: 'undecillion'},
	{divider: 1e33, suffix: 'decillion'},
	{divider: 1e30, suffix: 'nonillion'},
	{divider: 1e27, suffix: 'octillion'},
	{divider: 1e24, suffix: 'septillion'},
	{divider: 1e21, suffix: 'sextillion'},
	{divider: 1e18, suffix: 'quintillion'},
	{divider: 1e15, suffix: 'quadrillion'},
	{divider: 1e12, suffix: 'trillion'},
	{divider: 1e9, suffix: 'billion'},
	{divider: 1e6, suffix: 'million'}
];

_.num.formatNumberWords = function(n, digits) {
	var d = digits;
	if (d === undefined) {
		d = 3;
	}
	for (var i = 0; i < _.num.ranges.length; i++) {
		if (n >= _.num.ranges[i].divider) {
			return parseFloat((n / _.num.ranges[i].divider).toFixed(d)).toString() + ' ' + _.num.ranges[i].suffix;
		}
	}
	return n.toString();
};

_.num.parse = function(n) {
	var num = n;
	if (typeof n == 'number') {
		num = num.toString();
	}
	var ranges = [
	  {divider: 1e24, suffix: 'Y'},
	  {divider: 1e21, suffix: 'S'},
	  {divider: 1e21, suffix: 'Z'},
	  {divider: 1e18, suffix: 'E'},
	  {divider: 1e15, suffix: 'Q'},
	  {divider: 1e15, suffix: 'P'},
	  {divider: 1e12, suffix: 'T'},
	  {divider: 1e9, suffix: 'G'},
	  {divider: 1e9, suffix: 'B'},
	  {divider: 1e6, suffix: 'M'}
	];
	var potato = num.match(/[0-9]|\./g).join("");
	for (var i = 0; i < ranges.length; i++) {
		if (num[num.length - 1] == ranges[i].suffix) {
			potato = potato * ranges[i].divider;
		}
	}
	return parseFloat(potato);
};

_.num.parseWords = function(n) {
	var num = n;
	if (typeof n == 'number') {
		num = num.toString();
	}
	var potato = num.match(/[0-9]|\./g).join("");
	for (var i = 0; i < _.num.ranges.length; i++) {
		if (_.text.lastWord(num) == _.num.ranges[i].suffix) {
			potato = potato * _.num.ranges[i].divider;
		}
	}
	return parseFloat(potato);
};

_.text = {}; // Derpy Text

_.text.replaceAt = function(text, index, replacement) {
	return text.substr(0, index) + replacement + text.substr(index + replacement.length);
};

_.text.lastWord = function(t) {
	return String(t.split(" ").splice(-1));
};

var DerpyThingy = _;
