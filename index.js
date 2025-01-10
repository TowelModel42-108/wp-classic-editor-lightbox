
console.log("SCRIPTS WORK");

let galleryClass='custom-gallery';
let galleries = document.getElementsByClassName(galleryClass);


//individual photo tasks loop

let images;
let image;
let link;

// console.log(galleries)
//select the galleries
for(let g = 0; g < galleries.length; g++){
   
	// console.log("in gallery")

	images = galleries[g].children;
	console.log(images);


      for(let i = 0; i < images.length; i++){


      	console.log('item')
      	item = images[i];

      	
      	link = item.children[0]
      	caption = item.children[1]

		// make href not clickable
		link.classList.add('no-click'); 
		console.log(item)
		
		// on click listered with open lightbox function

       item.addEventListener('click', 
	   		function(e){
	     		console.log('click')
	   		}
		)


	}
}


//carousel controls

// setup state with array of gallery arrays

// updatelightbox	
function n2sLightbox(src, caption){

  //check for the lightbox

  let lightBoxClass= 'n2a-lightbox'
  let lightbox = document.getElementByClassName( lightboxClass );

   


  //if there is no lightbox
  if (lightbox.length == 0){
	

	//create it as a fragment and insert it to the top of the body
	let frag = document.createDocumentFragment()
	let temp = document.createElement('div')

	let wrapperHTML = ' <div class="' + lightboxClass + '">  </div> '
	let imageEl = '<img />' 

	let controlsClass= lightboxClass+'-controls'
	let controlsWrapper = '<div class="' + controlsClass + '"> </div> '

	let arrowLeft = '<span class="dashicons dashicons-arrow-left-alt"></span>'
	let arrowRight = '<span class="dashicons dashicons-arrow-right-alt"></span>'

	temp.innerHTML = 



	while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }

	//
	





  }
  

  




}
// go to next image
// go to previous
// on last image, remove the "next" button and x it out

//setup the lighbox when gallery-item loads




