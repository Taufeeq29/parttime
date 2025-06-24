 var b=document.getElementById("a")
          try{
            fetch("data.json")
            .then((res)=>res.json())
            .then((e)=>{
              e.a.map((i)=>{
                b.innerHTML+=`<div class="col">
                <img src="${i.img}" class="car"  style="display:block;">
                <b>Mahal :</b><p>${i.name}</p>
                <b>Salary :</b><p>${i.salary}</p>
                <b>Vacancies :</b><p>${i.Vacancies}</p>
                 <b>Place :</b><p>${i.place}</p>
                  <p> An amount of Rs.50 only Commission Fee</p>

                <button> Apply</button>
                </div>`

                
                  
                
              })
            })
          }
          catch(e){
            console.log(e);
          }