angular.module("ui.dropzone",[]).value("utils",{closest:function(e,n){if(!e)return null;for(var t=e;t.parentNode&&!t.matches(n);)t=t.parentNode;return t.parentNode?t:!1}}).run(function(e){var n,t,r,d,o=e.closest;document.addEventListener("drag",function(e){if(r){if(d.top+d.height/2<e.pageY){if(r.classList.remove("dropzone-displaced"),r.nextElementSibling===t)return;return r=r.nextElementSibling||null,d=r&&r.getBoundingClientRect()||null,r&&r.classList.add("dropzone-displaced")}r.classList.add("dropzone-displaced")}}),document.addEventListener("dragstart",function(e){t=e.target}),document.addEventListener("dragend",function(){}),document.addEventListener("dragover",function(e){e.preventDefault()}),document.addEventListener("dragenter",function(e){var i,a,l,c=o(e.target,"[dropzone]"),s=c.querySelectorAll("[droppable]");for(r&&!c.contains(r)&&(r.classList.remove("dropzone-displaced"),r=d=null),l=0;l<s.length;l++)if(i=s[l],i!==t){if(a=i.getBoundingClientRect(),a.bottom>e.pageY){r=i,d=i.getBoundingClientRect(),r.classList.add("dropzone-displaced");break}r=null}n=c}),document.addEventListener("dragleave",function(e){for(var n=o(e.target,"[dropzone]").querySelectorAll("[droppable]"),t=0;t<n.length;t++)n[t].classList.remove("dropzone-displaced")}),document.addEventListener("drop",function(){r?(o(r,"[dropzone]").insertBefore(t,r),r.classList.remove("dropzone-displaced")):n.appendChild(t),n=r=d=t=null})}).directive("droppable",function(e){return{restrict:"A",link:function(n,t){t[0];t.attr("draggable",!0),t[0]._dropzone=e.closest(t[0],"[dropzone]")}}}).directive("dropzone",function(){return{restrict:"A",link:function(e,n){n[0]}}});