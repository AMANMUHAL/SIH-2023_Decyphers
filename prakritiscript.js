const vitab=document.querySelector(".vita");
const pittab=document.querySelector(".pitta");
const kaphab=document.querySelector(".kapha");

const vitainfo=document.querySelector(".vitainfo");
const pittainfo=document.querySelector(".pittainfo");
const kaphainfo=document.querySelector(".kaphainfo");

vitab.addEventListener('click',function(){
    vitab.classList.add('dark');
    pittab.classList.remove('dark');
    kaphab.classList.remove('dark');

    vitainfo.style.display="block";
    pittainfo.style.display="none";
    kaphainfo.style.display="none";
})

pittab.addEventListener('click',function(){
    vitab.classList.remove('dark');
    pittab.classList.add('dark');
    kaphab.classList.remove('dark');

    vitainfo.style.display="none";
    pittainfo.style.display="block";
    kaphainfo.style.display="none";
})

kaphab.addEventListener('click',function(){
    vitab.classList.remove('dark');
    pittab.classList.remove('dark');
    kaphab.classList.add('dark');

    vitainfo.style.display="none";
    pittainfo.style.display="none";
    kaphainfo.style.display="block";
})