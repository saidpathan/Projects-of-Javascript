let arr = [ 
    {
        dp:"https://images.unsplash.com/photo-1601158935942-52255782d322?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3N8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZ29zfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1574630340198-0252cea163da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxvZ29zfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGxvZ29zfGVufDB8fDB8fHww"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1675083923190-387d05e8fe12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGxvZ29zfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1583509505885-04ece063f0b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxsb2dvc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1593287073863-c992914cb3e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWRpZGFzfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1621665422246-fde75fb7e7f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D"
    },
]
let storiyan = document.querySelector("#storiyan")
let clutter = ""
arr.forEach(function(elem,idx){
    clutter +=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
storiyan.innerHTML=clutter;
storiyan.addEventListener("click",function(dets){
   document.querySelector("#full-screen").style.display="block";
   document.querySelector("#full-screen").style.backgroundImage =`url(${arr[dets.target.id].story})`  
   setTimeout(function(){
    document.querySelector("#full-screen").style.display="none";

},3000)
});
