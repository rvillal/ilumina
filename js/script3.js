
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square3 = entry.target.querySelector('.circular-progress3');

    if (entry.isIntersecting) {
	    let circularProgress = document.querySelector(".circular-progress3"),
	    progressValue = document.querySelector(".progress-value3");
		let progressStartValue = 0,    
		    progressEndValue = 72,    
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
    square3.classList.remove('circular-progress3');
  });
});


observer3.observe(document.querySelector('.circular-progress3'));




