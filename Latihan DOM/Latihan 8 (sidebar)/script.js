document.addEventListener('DOMContentLoaded',function(){
    const sideBar = document.querySelector(".sideBar");
    const tombolSideBar=document.querySelector("#tombolSideBar");
    
    tombolSideBar.addEventListener('click',function(){
        sideBar.classList.toggle('active');
})
})