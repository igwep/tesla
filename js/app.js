import { menu } from "./menu.js";
const linkHead = document.querySelector('.link-head');
const linkMenu = document.querySelector('.links-menu');
const linksLinks =  document.querySelector('.links-links');
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
if(LinkID === 'Discover'){
    linkMenu.classList.remove('border-r-2');
    linkMenu.classList.remove('link-menu-view');
    linksLinks.classList.add('hidden');
    linkMenu.classList.add('link-discover-view');
    



    linksMenuHtml += ` <div class="w-full p-8">
    <div class="flex items-center text-start w-full justify-center  ">
        <div class="flex justify-center w-full gap-20 mt-6">
            <div class="p-2 w-28 flex flex-col text-nowrap">
                <a href="" class="p-1 mb-4 text-gray-500 hover:underline"> Resources</a>
                <a href="" class="p-1 hover:underline">Customer Stories</a>
                <a href="" class="p-1 hover:underline">Demo Drive</a>
                <a href="" class="p-1 hover:underline">Insurance</a>
                <a href="" class="p-1 hover:underline">Video Guides</a>
                <a href="" class="p-1 hover:underline">Customer Stories</a>
            </div>
           <div class="p-2 w-28 flex flex-col text-nowrap ">
            <a href="" class="p-1 mb-4 text-gray-500 hover:underline">Location services</a>
            <a href="" class="p-1 hover:underline">Events</a>
            <a href="" class="p-1 hover:underline">Find Us</a>
            <a href="" class="p-1 hover:underline">Find a collision Center</a>
           </div>
           <div class="p-2 w-28 flex flex-col text-nowrap">
            <a href="" class="p-1 mb-4 text-gray-500 hover:underline">Find a collision</a>
            <a href="" class="p-1 hover:underline">Find a Certified Installer</a>
            <a href="" class="p-1 hover:underline">About</a>
            <a href="" class="p-1 hover:underline">Investor Relations</a>
           </div>
        </div>
        
    </div>
</div>
    `
}


else{
menu.forEach((menuItem) =>{
    const menucategory = menuItem.category;
    console.log(menucategory);
    
    if(LinkID.trim() === menucategory.trim()){
        linksLinks.classList.remove('hidden');
        linkMenu.classList.add('border-r-2');
        linkMenu.classList.add('link-menu-view');
        linkMenu.classList.remove('link-discover-view');

        
        matching = menuItem;
        linksMenuHtml += `
    <div class="flex flex-col gap-3 items-center w-[45%]  p-2">
                    <div class="w-full">
                        <img src="${matching.image}" alt="" class="w-full">
                    </div>
                    <div class="text-center text-gray-500">
                        <div><p>${matching.name}</p></div>
                        <div class="flex gap-3 underline  text-gray-700">
                            <a href="" class="text-blue-400">Learn</a>
                            <a href="">Order</a>
                        </div>
                    </div>
                </div>
    `;
    }
});
}
linkMenu.innerHTML = linksMenuHtml;


}
