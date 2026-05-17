let http = new XMLHttpRequest();
http.open('get', 'Json/WhatsUp.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
         <div class="event">
         <div class="event-left">
           <div class="event-date">
               <div class="date">${item.date}</div>
               <div class="month">${item.month}</div>
           </div>
         </div>
         <div class="event-right">
           <h3 class="event-title">${item.title}</h3>

           <div class="event-description">
           ${item.description}
           </div>

           <div class="event-timing">
               <i class="fa-solid fa-clock"></i> ${item.timing}
           </div>
         </div>
     </div>
         `;
      }
      document.querySelector(".card").innerHTML = output;
      
    }
}