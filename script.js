// small JS to add subtle parallax on mouse move and interactive ripple on click
    (function(){
      const hero = document.querySelector('.hero');
      document.addEventListener('mousemove', e => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        hero.style.transform = `translate(${x}px, ${y}px)`;
      });

      // ripple effect on cards when clicked
      document.querySelectorAll('.card, .hero').forEach(el=>{
        el.addEventListener('click', function(ev){
          const r = document.createElement('span');
          r.style.position='absolute'; r.style.borderRadius='50%'; r.style.transform='translate(-50%,-50%)';
          r.style.width = r.style.height = '20px'; r.style.left = ev.offsetX + 'px'; r.style.top = ev.offsetY + 'px';
          r.style.background = 'rgba(255,255,255,0.06)'; r.style.pointerEvents='none';
          r.style.transition='all 600ms ease-out';
          this.appendChild(r);
          requestAnimationFrame(()=>{ r.style.width='420px'; r.style.height='420px'; r.style.opacity='0'; });
          setTimeout(()=>r.remove(),700);
        })
      })

    })();
    
document.querySelectorAll(".circle").forEach(circle => {
    let percent = parseInt(circle.dataset.percentage);  // درصد هدف
    let progress = circle.querySelector(".progress");
    let number = circle.querySelector(".number");

    let radius = 35;
    let circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    let current = 0; // شروع از صفر

    let animation = setInterval(() => {
        current++;

        if (current > percent) {
            current = percent;
            clearInterval(animation);
        }

        let offset = circumference - (current / 100) * circumference;
        progress.style.strokeDashoffset = offset;

        number1.textContent = current ;
        number2.textContent = current ;

        number3.textContent = current +"%" ;


    }, 15); // سرعت انیمیشن
});