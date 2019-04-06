 window.onload = function(){
		   loadWether();
	   }

function loadWether(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			afficheWether(this.responseText);
		}
	};
	xhttp.open("POST", "php/weather.php", true);
	xhttp.send();
	setTimeout(loadWether, 10000);
}

function loadArticle(url) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			afficheArticle(this.responseText);
			}
	};
	xhttp.open("GET", "php/article.php?xmlUrl="+url, true);
	xhttp.send();
}

function afficheArticle(contenu){
	document.getElementById("Article").innerHTML = contenu;
}

function afficheWether(txtJSON){
	var objJSON = JSON.parse(txtJSON);
	var 	contenu="<img src=\""+objJSON.icon+"\" alt=\"wether icon\">";
	contenu+="<p>"+objJSON.cityname+" ("+objJSON.today+")</p>";
	contenu+="<p>"+objJSON.temp+" &deg;C</p>";
	document.getElementById("weather").innerHTML=contenu;
}

