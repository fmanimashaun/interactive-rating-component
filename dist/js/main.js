"use strict";(self.webpackChunkinteractive_rating_component=self.webpackChunkinteractive_rating_component||[]).push([[179],{723:(t,e,n)=>{const c=n.p+"img/Online payment_Two.svg",a=document.querySelector(".js-rating"),s=document.querySelector(".js-submit");a.addEventListener("click",(t=>{t.target.matches("button")&&!t.target.classList.contains("active")&&(a.querySelectorAll("button").forEach((t=>{t.classList.remove("active")})),t.target.classList.add("active"),s.disabled=!1)})),s.addEventListener("click",(()=>{let t;a.querySelectorAll("button").forEach((e=>{e.classList.contains("active")&&(t=e.innerText)})),(t=>{const e=document.querySelector(".js-card-content"),n=`\n    <div class="rate-card__content-icon submit">\n      <img src="${c}" alt="payment icon" class="rate-card__content-icon-img"\n      aria-hidden='true'>\n    </div>\n\n    <p class="rate-card__content-submit-text">You selected ${t} out of 5</p>\n\n    <h2 class="rate-card__content-title submit">Thank you!</h2>\n\n    <p class="rate-card__content-msg submit">\n    We appreciate you taking the time to give a rating. If you ever need more\n    support, don’t hesitate to get in touch!</p>\n  `;e.innerHTML=n})(t)}))}},t=>{t(t.s=723)}]);