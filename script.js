
const icon = document.querySelectorAll('.icon')
const sideBar = document.querySelector('.side_bar')

for ( icons of icon){
    icons.addEventListener('click', () =>{
        // sideBar.style.transition="all .6s";
    sideBar.classList.toggle('sideBar-toggle')
  

})

}

const projects=[{
    id:1,
    img:"rtrtyfg",
    title:'img/bg1.jpg',
    project:'wewew',
    bg:'#fb9405'

},

{
    id:2,
    img:"img/bg2.jpg",
    title:'title 1',
    project:'description',
bg:'#f0f2f8',
},

{
    id:3,
    img:"img/bg3.png",
    title:'title 2',
    project:'wewew',
    bg:'#192220'

},

{
    id:4,
    img:"img/1577481746612.jpg",
    title:'title 3',
    project:'im title 2 and ready',
    bg:'#192220'

}
]
;


const img= document.querySelector('.img-div');
const title= document.querySelector('.project-title');
const dis= document.querySelector('.project-dis');
const next= document.querySelector('.btn-next');
const previous = document.querySelector('.btn-pre')

// 
let currentProject=3;

window.addEventListener("DOMContentLoaded", ()=>{
    showProject()

    
})


function showProject(){

    const project= projects[currentProject]
    title.textContent =project.title;
    dis.textContent = project.project ;
    img.src= project.img;
}

next.addEventListener('click', ()=>{
    currentProject++;
    if(currentProject > projects.length-1){
        currentProject =0 
        
    }
    showProject()


})

previous.addEventListener('click', ()=>{
    currentProject--;
    if(currentProject <0 ){
        currentProject = projects.length-1;
    }
showProject()
})