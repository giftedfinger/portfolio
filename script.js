
const icon = document.querySelectorAll('.icon')
const sideBar = document.querySelector('.side_bar')

for ( icons of icon){
    icons.addEventListener('click', () =>{
        sideBar.style.transition="all 6s";
    sideBar.classList.toggle('sideBar-toggle')
  

})
}

let list = document.querySelectorAll('sideBar-item');
let no = [1,2,3,4,5,6,3,]
for (let i=0;i<list.length; i++) {
    list[i].addEventListener('click',()=>{
if(list[i]%2==0){
    list.style.border='1px solid #ccc'
}
    })
if([i] % 2===0){
         console.log(no[i])
    }
    
}

// bottom nav
let bottomsNav = document.querySelectorAll('.nav-b')

// bottomsNav.forEach( nav =>{
for(let i =0; i<bottomsNav.length;i++){
    bottomsNav[i].addEventListener('click',()=>{
        bottomsNav[i].style.backgroud='red'
        console.log('yes')
    })
}



