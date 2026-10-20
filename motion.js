const progress=document.createElement('div');progress.className='scroll-progress';document.body.append(progress);
const orb=document.createElement('div');orb.className='cursor-orb';document.body.append(orb);
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('in-view',entry.isIntersecting)),{threshold:.18});
document.documentElement.classList.add('motion-ready');
const observeMotion=()=>document.querySelectorAll('.catalogue,.custom,.about,.section-head,.product,.custom-content,.about-grid').forEach(el=>observer.observe(el));
observeMotion();
const productsEl=document.querySelector('#products');
if(productsEl)new MutationObserver(observeMotion).observe(productsEl,{childList:true});
let ticking=false;
function scrollMotion(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=`${max?window.scrollY/max*100:0}%`;document.querySelectorAll('.product-image img').forEach(img=>{const rect=img.parentElement.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight)img.style.transform=`translateY(${(rect.top-innerHeight/2)*-.035}px) scale(1.04)`});ticking=false}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(scrollMotion);ticking=true}},{passive:true});
document.addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',`${e.clientX}px`);document.documentElement.style.setProperty('--my',`${e.clientY}px`);document.querySelector('.hero')?.style.setProperty('--parallax-x',`${(e.clientX-innerWidth/2)*-.018}px`);document.querySelector('.hero')?.style.setProperty('--parallax-y',`${(e.clientY-innerHeight/2)*-.018}px`);document.querySelector('.custom-word')?.style.setProperty('transform',`translate(${(e.clientX-innerWidth/2)*.018}px,${(e.clientY-innerHeight/2)*.018}px`)});
scrollMotion();
