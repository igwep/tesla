import { menu } from "./menu.js";
const linkHead = document.querySelector('.link-head');
const linkMenu = document.querySelector('.links-menu');
let linksMenuHtml = '';
menu.forEach((menuItem) =>{
    linksMenuHtml += `
    <div class="flex flex-col items-center">
                    <div class="w-44">
                        <img src="${menuItem.image}" alt="" class="w-full">
                    </div>
                    <div class="text-center">
                        <div><p>${menuItem.name}</p></div>
                        <div class="flex gap-3 underline text-gray-400">
                            <a href="">Learn</a>
                            <a href="">Order</a>
                        </div>
                    </div>
                </div>
    `;

});
linkMenu.innerHTML = linksMenuHtml;

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