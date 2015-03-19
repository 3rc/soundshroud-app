window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1pzN0ca63q3V9cgWUh9eSAYFhCVK3yEyENHWvpk4CQiQ/pubhtml';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } )
}

function showInfo(data, tabletop) {
	console.log("Google Spreadsheet processed")
	console.log(data);
	for(i = 0; data.length > i; i++) {
		$(".song-urls").append("<li class='sc-url'><a href='https://soundcloud.com" + data[i].permahideurl.toString() + "'>" + data[i].permahidetitle + "</a></li>")
	}
}