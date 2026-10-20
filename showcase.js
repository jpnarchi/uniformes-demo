const showcase=document.querySelector('.catalogue .hero-products');
if(showcase){
  let visible=false;
  const update=()=>{const box=showcase.getBoundingClientRect();const next=box.top<innerHeight*.82&&box.bottom>innerHeight*.12;if(next!==visible){visible=next;showcase.classList.toggle('is-visible',visible)}};
  update();
  addEventListener('scroll',update,{passive:true});
  addEventListener('resize',update,{passive:true});
  document.addEventListener('pointermove',event=>{const x=(event.clientX-innerWidth/2)*.012,y=(event.clientY-innerHeight/2)*.008;showcase.style.setProperty('--stage-x',`${x}px`);showcase.style.setProperty('--stage-y',`${y}px`)});
}
