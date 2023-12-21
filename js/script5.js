
const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square5 = entry.target.querySelector('.circular-progress5');

    if (entry.isIntersecting) {
	    let circularProgress = document.querySelector(".circular-progress5"),
	    progressValue = document.querySelector(".progress-value5");
		let progressStartValue = 0,    
		    progressEndValue = 86,    
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
    square5.classList.remove('circular-progress5');
  });
});


observer5.observe(document.querySelector('.circular-progress5'));




