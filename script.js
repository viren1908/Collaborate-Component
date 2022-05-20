const boxes = document.querySelectorAll(".section__card-box");


  window.addEventListener('scroll',checkBoxes); 


  function checkBoxes(){
        // setting trigger point  
       const triggerBottom = window.innerHeight/5 * 4;
       boxes.forEach(box =>{
           const boxTop = box.getBoundingClientRect().top;

           if(boxTop < triggerBottom) {
               box.classList.add('show');
           } else {
               box.classList.remove("show");
           }
       })

  }


