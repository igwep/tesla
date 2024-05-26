import { menu } from "./menu.js";
const linkHead = document.querySelector('.link-head');
const linkMenu = document.querySelector('.links-menu');

let LinkID;



document.querySelectorAll('.links').forEach((link)=>{
    link.addEventListener('mouseover', (e) =>{
        linkHead.classList.add('links-toggle');
       document.querySelector('.example').classList.remove('hidden');
       LinkID = e.currentTarget.dataset.linkId;
       updateMenuContent(LinkID)
        
    })
    linkHead.addEventListener('mouseleave', () =>{
        linkHead.classList.remove('links-toggle')
        document.querySelector('.example').classList.add('hidden');
    })
})
function updateMenuContent(LinkID){
    
let linksMenuHtml = '';
let matching;


menu.forEach((menuItem) =>{
    const menucategory = menuItem.category;
    console.log(menucategory);
    
    if(LinkID.trim() === menucategory.trim()){
        
        matching = menuItem;
        linksMenuHtml += `
    <div class="flex flex-col gap-5 items-center">
                    <div class="w-44">
                        <img src="${matching.image}" alt="" class="w-full">
                    </div>
                    <div class="text-center">
                        <div><p>${matching.name}</p></div>
                        <div class="flex gap-3 underline text-gray-400">
                            <a href="">Learn</a>
                            <a href="">Order</a>
                        </div>
                    </div>
                </div>
    `;
    }
});
linkMenu.innerHTML = linksMenuHtml;


}
