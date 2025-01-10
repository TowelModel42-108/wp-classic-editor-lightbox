// handle the lightbox
function customGalleryLightbox(){

  //check for the lightbox
  let lightboxClass= 'custom-gallery-lightbox'
  

  let galleryClass='custom-gallery';
  let galleries = document.getElementsByClassName(galleryClass);

  //for managing controls
  let controlsClass= lightboxClass+'-controls'

  let prevClass = 'prev'
  let nextClass ='next'

  let counterClass = 'counter'
  let currentItemIndexClass ='current-item'
  let totalItemsClass='total-items'
  

  //pull the lightbox object
  let lightbox = document.getElementsByClassName( lightboxClass );

  //if there is no lightbox AND there are gallries
  //	setup lightbox, prepare the front-end, setup the state
  if (lightbox.length == 0 && galleries.length != 0){
	

	//setup lightbox
	let frag = document.createDocumentFragment()
	let temp = document.createElement('div')

	//add the parent class
	temp.className = lightboxClass

	//setup image element
	let imageEl = '<img />' 


	//build the controls
	//arrows from dashicons
	let arrowLeft  = '<span class="' + prevClass + ' dashicons dashicons-arrow-left-alt"></span>'
	let arrowRight = '<span class="' + nextClass +  'dashicons dashicons-arrow-right-alt"></span>'

	//build the counter
	let counter  = '<div class="' + counterClass + '"> <span class="' + currentItemIndexClass + '"></span> / <span class="' + totalItemsClass + '"></span></div>'

	//setup control in wrapper
	let controls = '<div class="' + controlsClass + '">' + arrowLeft + counter + arrowRight + '</div>'

	//put it all together as DOM object
	temp.innerHTML =  imageEl + controls 
	console.log(temp)
	
	//append it to the fragment and append it to the top of the DOM
	frag.appendChild(temp);
   	document.body.insertBefore(frag, document.body.childNodes[0]);






   	//setup the gallery latout for interaction
   	//interact with the galleries
   	for(let g = 0; g < galleries.length; g++){

	images = galleries[g].children;
	console.log(images);

      //individual photo tasks loop
      for(let i = 0; i < images.length; i++){


      	console.log('item')
      	item = images[i];

      	
      	link = item.children[0]
      	caption = item.children[1]

		// make a not clickable to avoid browsing to origin file
		link.classList.add('no-click'); 
		console.log(item)
		
		// on click listered with open lightbox function
       item.addEventListener('click', 
	   		function(e){
	     		console.log('open lightbox')
	   		}
		)


	}
}



	





 } else {
 //if lightbox is present and there are galleries

// go to next image
// go to previous
// on last image, remove the "next" button and x it out

//setup the lighbox when gallery-item loads


 }
}
  




customGalleryLightbox()
