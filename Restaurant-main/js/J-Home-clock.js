/***********************************************
* 3D Cube Countdown script- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* Please keep this notice intact
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for this script and 100s more
***********************************************/
jQuery(function($){ // on DOM load
	var christmasday = new Date( new Date().getFullYear(), 11, 25) // construct future date string dynamically
	var christmascountdown = new cubecountdown({
		containerid: 'dynamicfuturedate',
		targetdate: christmasday,
		unit: ['days']
	})
	christmascountdown.onEnd = function(){ // when target date has arrived
		$('#dynamicfuturedate').html('<b>Christmas has arrived!</b>')
	}
})
//************************************************************/
// JS for text animation 
  var text1 = document.getElementById('textani');
        var newDom = '';
        var animationDelay = 6;
        for(let i = 0; i < text1.innerText.length; i++)        {
            newDom += '<span class="char">' + (text1.innerText[i] == ' ' ? '&nbsp;' : text1.innerText[i])+ '</span>';
        }
        text1.innerHTML = newDom;
        var length = text1.children.length;
        for(let i = 0; i < length; i++)        {
            text1.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }