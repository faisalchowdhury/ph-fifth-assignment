// Dashboard Time 

let date = new Date().toDateString();
date = date.split(' ');

let dashboardDate = document.getElementById('dashboard-date');

dashboardDate.innerHTML = `

<p class="text-lg text-[#00303C]">${date[0]} ,</p>
<h2 class="text-md font-semibold text-[#00303C]">${date[1]}  ${date[2]} ${date[3]}</h2>
`


// completed Button 

let completedBtns = document.querySelectorAll('.completed');

let assignedTask = completedBtns.length;
document.getElementById('task-assigned').innerText = assignedTask;


for (let btn of completedBtns) {


    btn.addEventListener('click', function (event) {

        event.target.setAttribute('disabled', true)

        // assigning to the regular task
        assignedTask = assignedTask - 1
        document.getElementById('task-assigned').innerText = assignedTask;


        // assigning to the total task
        let totalTask = parseInt(document.getElementById('total-task').innerText);

        totalTask = totalTask + 1

        document.getElementById('total-task').innerText = totalTask


        // Real Updation notification with time and title 

        // time
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()
        let seconds = new Date().getSeconds()
        let amOrPm = hours > 12 ? 'PM' : 'AM';

        let time = `${hours} : ${minutes} : ${seconds} ${amOrPm}`
 

        //Fetching title

        let getTitlePath = event.target.parentNode.parentNode.getElementsByTagName('h1');
        const getTitle = getTitlePath[0].innerHTML;

        
        // notification 

        let notificationsDiv = document.getElementById('notifications');

        let div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'p-3', 'rounded-md');

        div.innerHTML = `
    
    <p class="text-sm">You have Complete The Task <span class="bg-yellow-400"> ${getTitle}</span> at ${time}</p>
  
   `
        notificationsDiv.appendChild(div)





        // Alert

        alert('Board Updated Successfully')

        if (assignedTask === 0) {
            alert('Congress!!! You have completed all the task ')
        }

    })



}



