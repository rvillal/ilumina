
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square4 = entry.target.querySelector('.circular-progress4');

    if (entry.isIntersecting) {
	    let circularProgress = document.querySelector(".circular-progress4"),
	    progressValue = document.querySelector(".progress-value4");
		let progressStartValue = 0,    
		    progressEndValue = 62,    
		    speed = 20;
		    
		let progress = setInterval(() => {
		    progressStartValue++;
		    progressValue.textContent = `${progressStartValue}%`
		    circularProgress.style.background = `conic-gradient(#6B0A7A ${progressStartValue * 3.6}deg, #ededed 0deg)`
		    if(progressStartValue == progressEndValue){
		        clearInterval(progress);
		    }    
		}, speed);
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square4.classList.remove('circular-progress4');
  });
});


observer4.observe(document.querySelector('.circular-progress4'));




