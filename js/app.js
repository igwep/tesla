const linkHead = document.querySelector('.link-head');
document.querySelectorAll('.links').forEach((link)=>{
    link.addEventListener('mouseover', () =>{
        linkHead.classList.add('links-toggle');
       document.querySelector('.example').classList.remove('hidden');
    })
    linkHead.addEventListener('mouseleave', () =>{
        linkHead.classList.remove('links-toggle')
        document.querySelector('.example').classList.add('hidden');
    })
})