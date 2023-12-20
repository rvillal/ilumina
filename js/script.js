const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.circular-progress');

    if (entry.isIntersecting) {
	    let circularProgress = document.querySelector(".circular-progress"),
	    progressValue = document.querySelector(".progress-value");
		let progressStartValue = 0,    
		    progressEndValue = 50,    
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
    square.classList.remove('circular-progress');
  });
});

observer.observe(document.querySelector('.circular-progress'));

