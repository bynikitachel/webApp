var n,e,t,r,o,i={552:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"body {\r\n  margin: 0;\r\n  background: #202020;\r\n  height: 100vh;\r\n  /* overflow: auto; */\r\n}\r\n\r\n.container {\r\n  background: #333333;\r\n  /* height: calc(100% - 263px); */\r\n  /* height: 100vh; */\r\n  height: calc(100% - 80px);\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  /* padding-bottom: 10px; */\r\n  padding: 40px 0 40px 0;\r\n  /* overflow: auto; */\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 103px;\r\n}\r\n\r\n.navigationList {\r\n  display: flex;\r\n  list-style: none;\r\n  font-size: 20px;\r\n  margin: 0 0 0 50px;\r\n  /* margin: 0; */\r\n  padding: 0;\r\n  background: #e6e6fa;\r\n}\r\n\r\na:active,\r\n.exit:hover {\r\n  background: #9370db;\r\n  color: #000;\r\n}\r\n\r\n.exit {\r\n  padding: 40px;\r\n  background: #483d8b;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  margin-right: 50px;\r\n}\r\n\r\na {\r\n  padding: 40px;\r\n  display: block;\r\n  text-decoration: none;\r\n  color: rgb(87, 86, 86);\r\n}\r\n\r\n.navigation .active a {\r\n  color: #000;\r\n  background: #fff;\r\n}\r\n\r\n.navigation-content {\r\n  display: none;\r\n}\r\n\r\n.navigation-content.active {\r\n  padding: 0 40px 0 40px;\r\n  display: block;\r\n  background: #fff;\r\n  /* margin: 0 50px 50px 50px; */\r\n  /* margin: 0 auto; */\r\n  /* min-height: calc(100% - 103px); */\r\n  /* height: 80vh; */\r\n  /* height: calc(100% - 183px); */\r\n  overflow: auto;\r\n  height: 100%;\r\n}\r\n#clients {\r\n  height: auto;\r\n}\r\n#map {\r\n  overflow: hidden;\r\n}\r\n\r\n.table-head {\r\n  background: #bcebdd;\r\n  border-style: solid;\r\n  border-width: 0 1px 1px 0 !important;\r\n  border-color: white;\r\n  padding: 10px !important;\r\n}\r\n\r\n.cell {\r\n  border-style: solid;\r\n  border-width: 0 1px 1px 0;\r\n  border-color: white;\r\n  background: #f8e391;\r\n  padding: 10px;\r\n}\r\n\r\n.go-up,\r\n.del-row-button-ok,\r\n.del-row-button-no {\r\n  border: none;\r\n  background: #4682b4;\r\n  padding: 10px;\r\n  color: #fff;\r\n  margin-top: 20px;\r\n  /* margin: 0 auto; */\r\n  /* margin-top: 10px; */\r\n}\r\n\r\n.go-up:active {\r\n  background: #5f9ea0;\r\n}\r\n\r\n.go-up:hover {\r\n  background: #000;\r\n  color: #fff;\r\n}\r\n\r\ntd.cell-button {\r\n  background: #fff !important;\r\n}\r\n\r\nbutton.content-button {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  /* padding: 5px; */\r\n}\r\n\r\nbutton.content-button:active {\r\n  background: rgb(160, 153, 153) !important;\r\n}\r\n\r\n.info {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  background: #fff;\r\n  padding: 20px;\r\n  box-shadow: 0 0 10px #000;\r\n}\r\n",""]);const i=o},996:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'.container-login {\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(71, 71, 71);\r\n    /* background-color: rgba(0, 0, 0, 0.4); */\r\n    overflow: hidden;\r\n    display: flex;\r\n}\r\n\r\n.login-form,\r\n.login-done,\r\n.info {\r\n    position: relative;\r\n    margin: auto;\r\n    width: 400px;\r\n    background: #fff;\r\n    padding: 30px;\r\n}\r\n\r\n.login-done {\r\n    z-index: 2;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 300px;\r\n    box-shadow: 0 0 10px #000;\r\n}\r\n\r\n.info {\r\n    width: 15%;\r\n}\r\n\r\n.Form {\r\n    background: #ba55d3;\r\n    padding: 20px;\r\n    /* border-radius: 20px; */\r\n    display: block;\r\n    /* width: 100%; */\r\n}\r\n\r\n.close-login,\r\n.close-info {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    width: 32px;\r\n    height: 32px;\r\n    opacity: 0.3;\r\n}\r\n\r\n\r\n/* .close-info {\r\n    width: 10px;\r\n    height: 10px;\r\n} */\r\n\r\n.close-login:hover,\r\n.close-info:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.close-login:before,\r\n.close-login:after,\r\n.close-info:before,\r\n.close-info:after {\r\n    position: absolute;\r\n    left: 15px;\r\n    content: " ";\r\n    height: 33px;\r\n    width: 2px;\r\n    background-color: #333;\r\n}\r\n\r\n.close-login:before,\r\n.close-info:before {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.close-login:after,\r\n.close-info:after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.description-login {\r\n    /* padding: 10px 0 10px 0; */\r\n    text-align: center;\r\n    /* text-indent: 20px; */\r\n    font-size: 20px;\r\n}\r\n\r\n.description-form {\r\n    padding: 10px 0 10px 0;\r\n    color: #fff;\r\n}\r\n\r\ninput {\r\n    display: block;\r\n    /* border-radius: 20px; */\r\n    border: none;\r\n    height: 30px;\r\n    padding: 0 4% 0 4%;\r\n    width: 92%;\r\n    outline: none;\r\n    background: #dda0dd;\r\n}\r\n\r\n.btn-login {\r\n    margin-top: 20px;\r\n    /* border-radius: 20px; */\r\n    border: none;\r\n    /* border-top-left-radius: 10px; */\r\n    /* border-bottom-left-radius: 10px; */\r\n    height: 25px;\r\n    padding: 5px;\r\n    /* display: block; */\r\n    /* width: 100%; */\r\n}\r\n\r\n.btn-sign {\r\n    /* border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px; */\r\n    border: none;\r\n    height: 25px;\r\n    padding: 5px;\r\n}\r\n\r\n.btn-sign:hover,\r\n.btn-login:hover {\r\n    background: #ff00ff;\r\n    color: #fff;\r\n}\r\n\r\n.cats {\r\n    width: 200px;\r\n    height: 190px;\r\n    margin-left: 30px;\r\n    /* border-radius: 20px; */\r\n}\r\n\r\n.format-mail-error-window,\r\n.invalid-data-message {\r\n    color: #FFFF00;\r\n    display: none;\r\n    margin-top: 10px;\r\n}',""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},376:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(552);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},793:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(996);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],o=0;o<n.length;o++){var l=n[o],c=e.base?l[0]+e.base:l[0],d=t[c]||0,s="".concat(c," ").concat(d);t[c]=d+1;var p=a(s),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:s,updater:g(u,e),references:1}),r.push(s)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,s=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function u(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,f=0;function g(n,e){var t,r,o;if(e.singleton){var i=f++;t=m||(m=c(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=c(e),r=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=l(n,e),d=0;d<t.length;d++){var s=a(t[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=c}}}},755:(n,e,t)=>{t.a(n,(async n=>{t(768),t(793),t(376);let e=document.createElement("div");e.classList="container",document.body.append(e);let r=document.createElement("div");r.classList="navigation",r.id="navigation",e.append(r);let o=document.createElement("ul");o.classList="navigationList",r.append(o);let i=document.createElement("div");i.style.height="calc(100% - 183px)",i.style.background="#fff",i.style.margin="0 50px 0px 50px",i.style.padding="40px 0 40px 0",e.append(i);for(let n=0;n<3;n++){let e=["Главная","Клиенты","Карта"],t=["#main","#clients","#map"],r=["navigation-list-item active","navigation-list-item","navigation-list-item"],a=document.createElement("li");1===n&&(a.id="item-cients");let l=document.createElement("a");l.innerHTML=e[n],l.href=t[n],a.classList=r[n],o.append(a),a.append(l);let c=document.createElement("div"),d=["navigation-content active","navigation-content","navigation-content"],s=["main","clients","map"];c.classList=d[n],c.id=s[n],i.append(c)}!function(n,t,r){let o=[...document.querySelectorAll(".navigation-list-item")],i=[...document.querySelectorAll(".navigation-content")];document.getElementById("navigation").addEventListener("click",(function(n){n.preventDefault();let t=o.filter((e=>e===n.target.parentElement));if(n.target.parentElement===t[0]){let t=o.indexOf(n.target.parentElement);o.map((n=>n.classList.remove("active"))),o[t].classList.add("active"),i.map((n=>n.classList.remove("active"))),i[t].classList.add("active"),"item-cients"===o[t].id?(document.body.style.height="initial",e.style.height="initial"):(document.body.style.height="100vh",e.style.height="calc(100% - 80px)")}}))}();let a=document.createElement("div");a.innerHTML="Выход",a.classList="exit",r.append(a);let l,c=await fetch("https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json"),d=await c.json(),s=null,p=null,u=null,m=null,f=[],g=0,b=0,h=0,y=[],v=[];d.forEach((n=>{s=n.name,p=n.company,u=n.email,m=n.phone,f.push(n.balance)}));let x=document.querySelector("#main");x.innerHTML="Добро пожаловать на ...!)";let k=document.createElement("div");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?k.innerHTML="Вы вошли через мобильное устройство":k.innerHTML="Вы вошли через компьютер",x.append(k);let w=document.querySelector("#clients"),E=document.createElement("ul");E.classList="statistic",E.innerHTML="Некоторая статистика по клиентам:",w.append(E);for(let n=0;n<f.length;n++)l=f[n].split(""),l.splice(0,1),l.splice(1,1),y=l.join(""),v.push(y),h=Math.max.apply(null,v);let L=["Номер п/п","Имя","Компания","Email","Телефон","Баланс","Дата регистрации"];const S=["numbers","name","company","email","phone","balance","registered","button"];!function(n){const e=document.createElement("table");e.style.width="100%",e.style.margin="0 auto";const t=document.createElement("tbody"),r=document.createElement("tr");for(let n=0;n<L.length;n++){const e=document.createElement("td");e.classList="table-head";const t=document.createTextNode(L[n]);e.appendChild(t),r.appendChild(e)}e.appendChild(r),n.forEach(((n,e)=>{let r=document.createElement("tr");r.id=e,"male"===n.gender?g++:"female"===n.gender&&b++;for(let t=0;t<S.length;t++){let o,i=document.createElement("td");if(i.classList="cell",!1===n.isActive&&(i.style.background="gray",i.style.color="#fff"),"numbers"===S[t]&&i.append(e+1),"registered"===S[t]){const e=n[S[t]].split(/\s/).join(""),r=new Date(`${e}`);o=document.createTextNode(`${r.getDate()}/${r.getMonth()}/${r.getFullYear()}`)}else"button"===S[t]?(i.classList="cell cell-button",i.style.height="100%",o=document.createElement("button"),o.innerHTML="x",o.className=`remove-row-${e} content-button`,"gray"===r.lastChild.style.background?o.style.background="gray":o.style.background="#f8e391",o.addEventListener("click",(()=>{let t=document.createElement("div");t.classList="login",document.body.append(t);let r=document.createElement("div");r.classList="login-form",r.innerHTML="Вы действительно хотите удалить информацию о пользователе "+n.name+"?",t.append(r);let o=document.createElement("div");r.append(o);for(let n=0;n<2;n++){let r=document.createElement("button");0===n?(r.innerHTML="Подтвердить",r.classList="del-row-button-ok",r.onclick=function(){document.getElementById(e).remove(),t.style.display="none";let n=document.createElement("div");n.innerHTML="Данные о пользователе удалены",n.classList="info";let r=document.createElement("span");r.classList="close-info",n.append(r),w.append(n),setTimeout((function(){n.style.display="none"}),2e3)}):1===n&&(r.innerHTML="Отмена",r.classList="del-row-button-no",r.onclick=function(){t.style.display="none"}),o.append(r)}window.onclick=function(n){n.target===t&&(t.style.display="none")}}))):o=document.createTextNode(n[S[t]]);"numbers"===S[t]||i.appendChild(o),r.appendChild(i)}t.appendChild(r)})),e.appendChild(t),w.appendChild(e)}(d);let M=document.createElement("button");M.innerHTML="К началу страницы",M.classList="go-up",w.append(M),M.onclick=function(){window.scrollTo(0,0)};for(let n=0;n<3;n++){let e=document.createElement("li");e.innerHTML=0===n?"Мужчин: "+g:1===n?"Женщин: "+b:"Наибольший баланс: $"+h,E.append(e)}let T=document.querySelector("#map"),A=document.createElement("iframe");A.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63252.14515962143!2d27.59535414597395!3d53.90292384772611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1624611767122!5m2!1sru!2sby"),A.setAttribute("width","100%"),A.setAttribute("height","100%"),A.style.border="none",T.append(A);let C=document.createElement("script");C.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=AIzaSyDfkRDgZsgxKYS5UNpB_zUnKIKR3oHkPuM&callback=initMap&libraries=&v=weekly"),C.setAttribute("async",""),T.append(C),n()}),1)},768:()=>{window.onload=function(n){let e;function t(n,e,t,r,o,i){let a=document.getElementsByTagName("BODY")[0],l=document.createElement(n);if(e)for(key in e)"class"==key?l.className=e[key]:"id"==key?l.id=e[key]:l.setAttribute(key,e[key]);if(t)for(key in t)l.style[key]=t[key];if(r&&l.appendChild(document.createTextNode(r)),a.appendChild(l),o){let n=document.getElementById(o);"before"==i?a.insertBefore(l,n):"after"==i&&n.append(l)}}n.preventDefault(),t("div",{class:"container-login",id:"container-login"},e,e,"body","after"),t("div",{class:"login-form",id:"login-form"},e,e,"container-login","after"),t("span",{class:"close-login"},{display:"none"},e,"login-form","after"),t("p",{class:"description-login"},e,"Прежде, чем получить доступ к сайту, вам нужно авторизироваться!","login-form","after"),t("form",{class:"Form",id:"Form"},e,e,"login-form","after"),t("div",{class:"description-form"},e,"Введите ваш E-mail:","Form","after"),t("input",{class:"input-mail",placeholder:"Почта",required:"1"},e,e,"Form","after");let r=document.createElement("div");r.innerHTML="Неверный формат Email",r.classList="format-mail-error-window",Form.append(r),t("div",{class:"description-form"},e,"Введите ваш пароль:","Form","after"),t("input",{class:"input-pass",placeholder:"Пароль",required:"1",type:"password"},e,e,"Form","after");let o=document.createElement("div");o.innerHTML="Неверный логин или пароль",o.classList="invalid-data-message",Form.append(o),t("button",{class:"btn-login",type:"submit",disabled:"true"},e,"Войти","Form","after"),t("button",{class:"btn-sign",type:"submit",disabled:"true"},e,"Зарегистрироваться","Form","after");let i=document.querySelector(".login-form"),a=document.querySelector(".close-login"),l=document.querySelector(".container-login"),c=document.querySelector(".btn-login"),d=document.querySelector(".btn-sign"),s=document.querySelector(".input-mail"),p=document.querySelector(".input-pass");for(let n=0;n<document.querySelectorAll("input").length;n++)document.querySelectorAll("input")[n].onkeyup=function(){""===s.value||""===p.value?(d.setAttribute("disabled",!0),c.setAttribute("disabled",!0)):(d.removeAttribute("disabled"),c.removeAttribute("disabled"),o.style.display="none",r.style.display="none")};function u(){if(n=s.value,!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase()))return r.style.display="block",0;var n}let m=document.createElement("div");d.onclick=function(n){if(n.preventDefault(),u(),0===u())return;const e={mail:this.mail,pass:this.pass};e.mail=s.value,e.pass=p.value;let t=[];t=JSON.parse(localStorage.getItem("RegisteredUsers")),t?(t.push(e),localStorage.setItem("RegisteredUsers",JSON.stringify(t))):(t=[e],localStorage.setItem("RegisteredUsers",JSON.stringify(t))),m.innerHTML="Вы успешно зарегистрировались!",m.classList="login-done",l.append(m),a.style.display="block",m.append(a),a.onclick=function(){m.style.display="none"}},c.onclick=function(n){n.preventDefault();let e=JSON.parse(localStorage.getItem("RegisteredUsers"));console.log(e),e.find((n=>n.mail===s.value&&n.pass===p.value))?(localStorage.setItem("loggedIn",!0),i.style.display="none",m.innerHTML="Вы успешно вошли!",m.classList="login-done",l.append(m),a.style.display="block",m.append(a)):o.style.display="block",localStorage.getItem("loggedIn"),a.onclick=function(){l.style.display="none"}}}}},a={};function l(n){var e=a[n];if(void 0!==e)return e.exports;var t=a[n]={id:n,exports:{}};return i[n](t,t.exports,l),t.exports}n="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t=n=>{n&&(n.forEach((n=>n.r--)),n.forEach((n=>n.r--?n.r++:n())))},r=n=>!--n.r&&n(),o=(n,e)=>n?n.push(e):r(e),l.a=(i,a,l)=>{var c,d,s,p=l&&[],u=i.exports,m=!0,f=!1,g=(e,t,r)=>{f||(f=!0,t.r+=e.length,e.map(((e,o)=>e[n](t,r))),f=!1)},b=new Promise(((n,e)=>{s=e,d=()=>(n(u),t(p),p=0)}));b[e]=u,b[n]=(n,e)=>{if(m)return r(n);c&&g(c,n,e),o(p,n),b.catch(e)},i.exports=b,a((i=>{if(!i)return d();var a,l;c=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[n])return i;if(i.then){var a=[];i.then((n=>{l[e]=n,t(a),a=0}));var l={[n]:(n,e)=>(o(a,n),i.catch(e))};return l}}return{[n]:n=>r(n),[e]:i}})))(i);var s=new Promise(((n,t)=>{(a=()=>n(l=c.map((n=>n[e])))).r=0,g(c,a,t)}));return a.r?s:l})).then(d,s),m=!1},l.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return l.d(e,{a:e}),e},l.d=(n,e)=>{for(var t in e)l.o(e,t)&&!l.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},l.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),l(755);