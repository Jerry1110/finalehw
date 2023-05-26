function load(){
	document.body.addEventListener("wheel", zoomShortcut); //add the event
  }
  
  function zoomShortcut(e){
	if(e.ctrlKey){            //[ctrl] pressed?
	  event.preventDefault();  //prevent zoom
	  if(e.deltaY<0){        //scrolling up?
							  //do something..
		return false;
	  }
	  if(e.deltaY>0){        //scrolling down?
							  //do something..
		return false;
	  }
	}
  }