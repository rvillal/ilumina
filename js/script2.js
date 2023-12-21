
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square2 = entry.target.querySelector('.circular-progress2');

    if (entry.isIntersecting) {
	    let circularProgress = document.querySelector(".circular-progress2"),
	    progressValue = document.querySelector(".progress-value2");
		let progressStartValue = 0,    
		    progressEndValue = 91,    
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
    square2.classList.remove('circular-progress2');
  });
});


observer2.observe(document.querySelector('.circular-progress2'));




