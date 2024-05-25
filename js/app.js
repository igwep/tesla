const linkHead = document.querySelector('.link-head');
document.querySelectorAll('.links').forEach((link)=>{
    link.addEventListener('mouseover', () =>{
        linkHead.classList.add('links-toggle');
       
    })
    linkHead.addEventListener('mouseleave', () =>{
        linkHead.classList.remove('links-toggle')
    })
})