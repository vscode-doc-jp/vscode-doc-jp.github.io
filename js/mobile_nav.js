!function(){"use strict";var e=document.getElementsByTagName("body")[0],t=document.getElementById("mobile-nav-toggle"),n=(document.getElementById("container"),document.getElementById("mobile-nav-dimmer"));t&&(t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),e.classList.toggle("mobile-nav-on")}),n.addEventListener("click",function(t){e.classList.contains("mobile-nav-on")&&(t.preventDefault(),e.classList.remove("mobile-nav-on"))}))}();