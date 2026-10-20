const showcase=document.querySelector('.hero-products');
if(showcase){
  const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>showcase.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.25});
  reveal.observe(showcase);
  document.addEventListener('pointermove',event=>{const x=(event.clientX-innerWidth/2)*.012,y=(event.clientY-innerHeight/2)*.008;showcase.style.setProperty('--stage-x',`${x}px`);showcase.style.setProperty('--stage-y',`${y}px`)});
}
