(()=>{"use strict";const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),d=document.getElementById("content"),o=document.createElement("div");o.classList.add("navBar");const c=document.createElement("button");c.textContent="Home",c.setAttribute("id","homeBtn"),o.appendChild(c);const a=document.createElement("button");a.textContent="Menu",a.setAttribute("id","menuBtn"),o.appendChild(a);const s=document.createElement("button");s.textContent="Contact",s.setAttribute("id","contactBtn"),o.appendChild(s),d.appendChild(o),function(){const t=document.getElementById("content");e.classList.add("homePageContent");const n=document.createElement("h1");n.textContent="The Atlannuh";const d=document.createElement("img");d.src="restaurant-pic.jpg";const o=document.createElement("div");o.classList.add("description"),o.textContent="This restaurant's menu is inspired by all things Atlanta. From the food and drinks, even down to the name (this is how local's pronounce the city's name). Come to enjoy not only a great meal but also a true Atlanta experience!",e.appendChild(n),e.appendChild(d),e.appendChild(o),t.appendChild(e)}(),e.classList.remove("hidden"),function(){const e=document.getElementById("content");t.classList.add("menuContent");const n=document.createElement("div");n.classList.add("menuNav");const d=document.createElement("button");d.textContent="Food",n.appendChild(d);const o=document.createElement("button");o.textContent="Drinks",n.appendChild(o),t.appendChild(n),e.appendChild(t),function(){const e=document.createElement("div");e.classList.add("foodContent");const n=document.createElement("div");n.classList.add("breakfastFood"),n.textContent="Breakfast";const d=document.createElement("div");d.setAttribute("id","allStar");const o=document.createElement("img");o.src="allstar.jpg";const c=document.createElement("div");c.classList.add("allStarDescription"),c.textContent="Straight from the mind's of WaHo: Waffle (chocolate chip or regular), 2 Eggs (how you like 'em), your choice of: bacon, ham or sausage and your choice of: grits, or hashbrowns. $8.50",d.appendChild(o),d.appendChild(c),n.appendChild(d),e.appendChild(n),t.appendChild(e)}()}(),function(){const e=document.getElementById("content");n.classList.add("contactContent");const t=document.createElement("div");t.classList.add("hours");const d=document.createElement("h2");d.textContent="Atlannuh Hours",t.appendChild(d),n.appendChild(t),e.appendChild(n)}();const i=document.querySelector(".homePageContent"),l=document.querySelector(".menuContent"),m=document.querySelector(".contactContent");window.addEventListener("load",(()=>{l.classList.add("hidden"),m.classList.add("hidden"),i.classList.remove("hidden")})),document.querySelector("#homeBtn").addEventListener("click",(()=>{l.classList.add("hidden"),m.classList.add("hidden"),i.classList.remove("hidden")})),document.querySelector("#menuBtn").addEventListener("click",(()=>{i.classList.add("hidden"),m.classList.add("hidden"),l.classList.remove("hidden")})),document.querySelector("#contactBtn").addEventListener("click",(()=>{i.classList.add("hidden"),l.classList.add("hidden"),m.classList.remove("hidden")}))})();