import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const n=(e,r)=>{try{localStorage.setItem(e,JSON.stringify(r))}catch(l){console.error("Error saving to localStorage",l)}},s=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(r){return console.error("Error reading from localStorage",r),null}};let t={email:"",message:""};const a=document.querySelector(".feedback-form"),o="feedback-form-state";a.addEventListener("input",c);a.addEventListener("submit",i);m();function m(){const e=s(o);e!==null&&(t=e,a.elements.email.value=e.email,a.elements.message.value=e.message)}function c(e){const r=e.target;t[r.name]=r.value,n(o,t)}function i(e){if(e.preventDefault(),t.email===""||t.message===""){alert("Fill please all fields");return}console.log(t),t={email:"",message:""},a.reset(),localStorage.removeItem(o)}
//# sourceMappingURL=2-form.js.map
