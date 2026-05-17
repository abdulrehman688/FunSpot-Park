let http = new XMLHttpRequest();
http.open('get', 'Json/characters.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
         <div class="card">
         <div class="imgbx">
             <img src="${item.image}" alt="">
         </div>
         <div class="content">
             <h2>${item.title}</h2>
             <p>${item.description}</p>
         </div>
         </div>

         `;
      }
      document.querySelector(".container").innerHTML = output;
      
    }
}