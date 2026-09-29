"use client";

import { useEffect } from "react";

export function MotionEffects(){
 useEffect(()=>{
  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduce)return;
  document.documentElement.classList.add("motion-ready");

  const targets=Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], main section:not(:first-of-type) > .container-shell, main article"));
  targets.forEach((el,index)=>{
   el.classList.add("scroll-reveal");
   if(el.tagName==="ARTICLE")el.style.setProperty("--reveal-delay",`${(index%4)*70}ms`);
  });

  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}
   });
  },{threshold:.12,rootMargin:"0px 0px -7% 0px"});
  targets.forEach(el=>observer.observe(el));

  const parallax=Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
  let ticking=false;
  const update=()=>{
   parallax.forEach(el=>{
    const section=el.parentElement?.getBoundingClientRect();
    if(!section)return;
    const offset=Math.max(-60,Math.min(60,-section.top*.08));
    el.style.setProperty("--parallax-y",`${offset}px`);
   });
   ticking=false;
  };
  const onScroll=()=>{if(!ticking){requestAnimationFrame(update);ticking=true}};
  update();window.addEventListener("scroll",onScroll,{passive:true});
  return()=>{observer.disconnect();window.removeEventListener("scroll",onScroll);document.documentElement.classList.remove("motion-ready")};
 },[]);
 return null;
}
