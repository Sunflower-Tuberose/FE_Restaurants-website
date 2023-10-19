// JavaScript Document
/***********************************************
* Local Time script- By Dynamic Drive (http://www.dynamicdrive.com)
* Please keep this notice intact
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/


function showLocalTime(container, zoneString, formatString){
	var thisobj=this
	this.container=document.getElementById(container)
	this.localtime = moment.tz(new Date(), zoneString)
	this.formatString = formatString
	this.container.innerHTML = this.localtime.format( this.formatString )
	setInterval(function(){thisobj.updateContainer()}, 1000) //update container every second
}

showLocalTime.prototype.updateContainer=function(){
	this.localtime.second(this.localtime.seconds() + 1 )
	this.container.innerHTML = this.localtime.format( this.formatString )
}

