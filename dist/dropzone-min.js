angular.module("ui.dropzone",[]).value("utils",{closest:function(e,n){if(!e)return null;for(var t=e;t.parentNode&&!t.matches(n);)t=t.parentNode;return t.parentNode?t:!1}}).run(["utils",function(e){var n,t,r,d,o=e.closest;document.addEventListener("drag",function(e){if(r){if(d.top+d.height/2<e.pageY){if(r.classList.remove("dropzone-displaced"),r.nextElementSibling===t)return;return r=r.nextElementSibling||null,d=r&&r.getBoundingClientRect()||null,r&&r.classList.add("dropzone-displaced")}r.classList.add("dropzone-displaced")}}),document.addEventListener("dragstart",function(e){t=e.target}),document.addEventListener("dragend",function(){}),document.addEventListener("dragover",function(e){e.preventDefault()}),document.addEventListener("dragenter",function(e){var i,l,a,s=o(e.target,"[dropzone]"),c=s.querySelectorAll("[droppable]");for(r&&!s.contains(r)&&(r.classList.remove("dropzone-displaced"),r=d=null),a=0;a<c.length;a++)if(i=c[a],i!==t){if(l=i.getBoundingClientRect(),l.bottom>e.pageY){r=i,d=i.getBoundingClientRect(),r.classList.add("dropzone-displaced");break}r=null}n=s}),document.addEventListener("dragleave",function(e){for(var n=o(e.target,"[dropzone]").querySelectorAll("[droppable]"),t=0;t<n.length;t++)n[t].classList.remove("dropzone-displaced")}),document.addEventListener("drop",function(){r?(o(r,"[dropzone]").insertBefore(t,r),r.classList.remove("dropzone-displaced")):n.appendChild(t),n=r=d=t=null})}]).directive("droppable",["utils",function(e){return{restrict:"A",link:function(n,t){t[0];t.attr("draggable",!0),t[0]._dropzone=e.closest(t[0],"[dropzone]")}}}]).directive("dropzone",["utils",function(){return{restrict:"A",link:function(e,n){n[0]}}}]);