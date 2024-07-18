const button =
 document.querySelector('.button');
 const submit = 
 document.querySelector('.submit');

 function toggleClass () {
    this.classList.toggle('active');
 }

 function addClass () {
    this.classList.add('finished');
 }

 button.addEventListener('click' , toggleClass);

 button.addEventListener('transitionend' , toggleClass);

 button.addEventListener('transitionend' , addClass);

 const show = document.getElementById('show');
 const hidden = document.getElementById('hidden');

 const animationFlow = button.onclick = () => {
    show.style.visibility = `hidden` , setInterval(() => {
        hidden.style.visibility = `visible`;
    }, 400);
         clearInterval();
}
