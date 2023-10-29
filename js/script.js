let countValue = 0;

function decrementCounter() {
  if(countValue >0){
  countValue--;
  }
  updateCounter();
}

function incrementCounter() {
  countValue++;
  updateCounter();
  // countElement.classList.add('count');
}

function updateCounter() {
  const countElement = document.getElementById('count');
  countElement.innerText = countValue;
}

// ==================checkbox===========================================================
	  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('checked');
    });
  });


// ========================types of services===============================

    document.getElementById('section2').style.display = 'none';
     document.getElementById('section3').style.display = 'none';
 
        function linkthree() {
         var sectionone = document.getElementById('section1');   
        var sectiontwo = document.getElementById('section2');
        var sectionthree = document.getElementById('section3');
        sectionthree.style.display = "flex";
        sectionone.style.display= 'none';
        sectiontwo.style.display= 'none';
      }

        function linkone() {
         var sectionone = document.getElementById('section1');   
        var sectiontwo = document.getElementById('section2');
        var sectionthree = document.getElementById('section3');
        sectionone.style.display = "flex";
        sectiontwo.style.display= 'none';
        sectionthree.style.display= 'none';
        // alert('hello');
        
        }
       
        function linktwo() {
         var sectionone = document.getElementById('section1');   
        var sectiontwo = document.getElementById('section2');
        var sectionthree = document.getElementById('section3');
        sectiontwo.style.display = "flex";
        sectionone.style.display= 'none';
        sectionthree.style.display= 'none';
        // alert('hello');
        
        }

        // ===========================================moving div=========================

        const row = document.querySelector('moving-divs');

          function adjustRowWidth() {
            const sectionWidth = row.offsetWidth / 5;
            row.style.width = sectionWidth * 12 + 'px';
          }

          window.addEventListener('resize', adjustRowWidth);
          adjustRowWidth();