// handle the lightbox
function customGalleryLightbox(){

  //check for the lightbox
  let lightboxClass= 'custom-gallery-lightbox'
  let galleryClass='custom-gallery';
  let noClickClass='no-click' //to prevent clicking
  let imageClass=lightboxClass + '-image'


  //for setting up controls UI
  let controlsClass = lightboxClass + '-controls'

  //arrows
  let arrowsClass = controlsClass + "-arrows"
  let prevClass = 'prev ' + arrowsClass
  let nextClass = 'next ' +  arrowsClass

  // counters/progress
  let counterClass = controlsClass +'-counter'
  let currentItemIndexClass = controlsClass +'-current-item'
  let totalItemsClass = controlsClass +'-total-items'

  //lightbox state
  let current;
  let totalItems;


	//pull gallery objects object
	// let lightbox = document.getElementsByClassName( lightboxClass );
	let galleries = document.getElementsByClassName( galleryClass );

  //if are galleries
  //setup lightbox, prepare the front-end, setup the state
  if (galleries.length > 0){
	

	//setup lightbox

	// image element
	let imageEl = '<img class="' + imageClass + '"/>'


	//build the controls

	//arrows from dashicons
	let arrowLeft  = '<span class="' + prevClass + ' dashicons dashicons-arrow-left-alt"></span>'
	let arrowRight = '<span class="' + nextClass + ' dashicons dashicons-arrow-right-alt"></span>'

	//build the counter
	let counter  = '<div class="' + counterClass + '"> <span class="' + currentItemIndexClass + '"></span> / <span class="' + totalItemsClass + '"></span></div>'

	//setup control in wrapper
	let controls = '<div class="' + controlsClass + '">' + arrowLeft + counter + arrowRight + '</div>'

	

	//put it all together as fragment to inject into the DOM
	let frag = document.createDocumentFragment()
	let temp = document.createElement('div')
	
	//add the parent class
	temp.className = lightboxClass
	
	//insert the HTML strings
	temp.innerHTML =  imageEl + controls 
	
	//append it to the fragment
	frag.appendChild(temp);

	//inject it into the HTMl
	document.body.insertBefore(frag, document.body.childNodes[0])


   	//arrow click handling  	
   	Array.from( document.querySelectorAll(arrowsClass) ).forEach( (element) => element.addEventListener('click', 
   		function(e){
   		
	   		let arrow = e.target.classList[0];

	   		if(arrow == prevClass){
	   			//index - 1
	   			console.log("back")

		   	}else if (arrow == nextClass){
		   		//index + 1
		   		console.log("next")

		   	}
		   	//update the lightbox with values


   		})
   	);
   	

   	





   	//setup the gallery layout for interaction
   	//interact with the galleries

   	let item;
   	let link;
   	let src;
   	let caption;

   	for(let g = 0; g < galleries.length; g++){

	images = galleries[g].children;

      //individual photo tasks loop
      for(let i = 0; i < images.length; i++){

      	item = images[i];
      	link = item.children[0]
      	

		// make a not clickable to avoid browsing to origin file
		link.classList.add(noClickClass); 
		
		// on click listered with open lightbox function
       item.addEventListener('click', 
	   		function(e){
	     	  // current = e.target.parentNode.id;
	     	  	current = i; 
				totalItems = images.length;
		     	

	      		src = e.target.children[0].children[0].src
	      		caption = item.children[1]

				

				console.log(src);
				document.querySelector('.'+currentItemIndexClass).innerHTML = current + 1;
				document.querySelector('.'+totalItemsClass).innerHTML = totalItems + 1;
				document.querySelector('.'+imageClass).src = src;

				// document.querySelector(currentItemIndexClass).innerHTML = current;
				// document.querySelector(controlsClass + ' ' + counterClass + ' ' + totalItemsClass ).innerHTML = totalItems;


	   		}
		)


	}
}



	





 } else {
 //if lightbox is present and there are galleries

console.log("No galleries")
// go to next image
// go to previous
// on last image, remove the "next" button and x it out

//setup the lighbox when gallery-item loads


 }
}
  




customGalleryLightbox()
