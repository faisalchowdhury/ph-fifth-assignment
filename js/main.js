// Dashboard Time 

let date = new Date().toDateString();
date = date.split(' ');

let dashboardDate = document.getElementById('dashboard-date');

dashboardDate.innerHTML = `

<p class="text-lg text-[#00303C]">${date[0]} ,</p>
<h2 class="text-md font-semibold text-[#00303C]">${date[1]}  ${date[2]} ${date[3]}</h2>
`


// completed Button 

let completedBtns =  document.querySelectorAll('.completed');

let assignedTask = completedBtns.length;
document.getElementById('task-assigned').innerText = assignedTask  ;


for(let btn of completedBtns){
 
    
 btn.addEventListener('click' , function(event){
   
   event.target.setAttribute('disabled' , true)
    
   // assigning to the regular task
   assignedTask = assignedTask - 1
   document.getElementById('task-assigned').innerText = assignedTask;
   

   // assigning to the total task
   let totalTask = parseInt(document.getElementById('total-task').innerText);

   totalTask = totalTask + 1

   document.getElementById('total-task').innerText =  totalTask



   


   alert('Board Updated Successfully')

   if(assignedTask === 0){
    alert('Congress!!! You have completed all the task ')
   }

 })



}



