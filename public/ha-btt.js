/*
- Define variable
- Calculate the document height and set offset to a quayter of that value
- Add event listeners for scroll and click
*/


var btt = document.getElementById("back-to-top"),
	body = document.body,
	docElem = document.documentElement,
	offset = 100,
	scrollPos, docHeight,
	//isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

//Calculate document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != 'undefined'){
	offset = docHeight / 4;
}


//Add scroll event listerner
window.addEventListener("scroll", function(event){
	scrollPos = body.scrollTop || docElem.scrollTop;
	
	btt.className = ( scrollPos > offset) ? "visible" : "";
	
	});


/*Add click event listners
	btt.addEventListener("click", function(event){
		event.preventDefault();
		
		if (isFirefox){
			docElem.scrollTop = 0;
		}else{
			body.scrollTop = 0;
		}
		
	});
	*/
	

	function setup(){
			var location = window.location;
			if(location.indexOf('?') != -1){
				var paramString = location.substring(location.indexOf('?')+1, location.length);
				var timeoutMins = paramString.split('=');
				var timeoutMinsFirstTwoDigits = timeoutMins[1].substring(0,2).match(/^\d+$/);
				if(timeoutMinsFirstTwoDigits == null){
					document.getElementById('timeoutMins').innerHTML = '';
				} else {
					document.getElementById('timeoutMins').innerHTML = timeoutMinsFirstTwoDigits;
				}
			}	
		}
	