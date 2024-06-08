import { menu } from "./menu.js";
const linkHead = document.querySelector('.link-head');
const linkMenu = document.querySelector('.links-menu');
const linksLinks = document.querySelector('.links-links');
let LinkID;
document.querySelectorAll('.links').forEach((link) => {
    link.addEventListener('mouseover', (e) => {
        linkHead.classList.add('links-toggle');
        document.querySelector('.example').classList.remove('hidden');
        LinkID = e.currentTarget.dataset.linkId;
        updateMenuContent(LinkID);
        const items = document.querySelectorAll('.item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 100); // Adjust the timing as needed
        });

    });
    linkHead.addEventListener('mouseleave', () => {
        linkHead.classList.remove('links-toggle');
        document.querySelector('.example').classList.add('hidden');
    });
});
function generateMenuContent(LinkID) {
    let linksMenuHtml = '';
    let matching;
    menu.forEach((menuItem) => {
        const menucategory = menuItem.category;
        if (LinkID.trim() === menucategory.trim()) {
            matching = menuItem;
            linksMenuHtml += `
                <div class="flex flex-col gap-3 items-center p-2 item">
                    <div class="w-44">
                        <img src="${matching.image}" alt="" class="w-full">
                    </div>
                    <div class="text-center">
                        <div class="font-semibold"><p>${matching.name}</p></div>
                        <div class="flex gap-3 underline text-gray-400">
                            <a href="" class="">Learn</a>
                            <a href="">Order</a>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    return linksMenuHtml;
}
function updateMenuContent(LinkID) {
    let linkslinksHtml = '';
    if (LinkID === 'Discover') {
        linkMenu.classList.remove('border-r-2');
        linkMenu.classList.remove('link-menu-view');
        linksLinks.classList.add('hidden');
        linkMenu.classList.add('link-discover-view');
        linkMenu.innerHTML = `
            <div class="w-full p-10">
                <div class="flex items-center text-start w-full justify-center">
                    <div class="flex justify-center w-full gap-20">
                        <div class="p-2 w-28 flex flex-col text-nowrap">
                            <a href="" class="p-1 mb-4 text-gray-500 hover:underline">Resources</a>
                            <a href="" class="p-1 hover:underline">Customer Stories</a>
                            <a href="" class="p-1 hover:underline">Demo Drive</a>
                            <a href="" class="p-1 hover:underline">Insurance</a>
                            <a href="" class="p-1 hover:underline">Video Guides</a>
                            <a href="" class="p-1 hover:underline">Customer Stories</a>
                        </div>
                        <div class="p-2 w-28 flex flex-col text-nowrap">
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
            </div>`;
    } else {
        linkMenu.classList.add('border-r-2');
        linkMenu.classList.add('link-menu-view');
        linkMenu.classList.remove('link-discover-view');
        linksLinks.classList.remove('hidden');
        linkMenu.innerHTML = generateMenuContent(LinkID);
        if (LinkID === 'Energy') {
            linkslinksHtml = `
                <div class="flex flex-col gap-3">
                    <a href="" class="hover:underline">Schedule a Consultation</a>
                    <a href="" class="hover:underline">Why Solar</a>
                    <a href="" class="hover:underline">Incentives</a>
                    <a href="" class="hover:underline">Support</a>
                    <a href="" class="hover:underline">Partner with Tesla</a>
                    <a href="" class="hover:underline">Commercial</a>
                    <a href="" class="hover:underline">Utilities</a>
                </div>`;
        } else if (LinkID === 'Charging'){
            linkslinksHtml = `
                <div class="flex flex-col gap-3">
                    <a href="" class="hover:underline">Help Me Charge</a>
                    <a href="" class="hover:underline">Charging Calculator</a>
                    <a href="" class="hover:underline">Charging With NACS</a>
                    <a href="" class="hover:underline">Supercharger Voting</a>
                    <a href="" class="hover:underline">Host a Supercharger</a>
                    <a href="" class="hover:underline">Commercial Charging</a>
                    <a href="" class="hover:underline">Host Wall Connectors</a>
                </div>`;
        } 
        else if(LinkID === 'Shop'){
            linkslinksHtml = '';
            linkMenu.classList.remove('border-r-2');
            linkMenu.classList.remove('link-menu-view');
            linksLinks.classList.add('hidden');
            linkMenu.classList.add('link-discover-view');
        }
        
        else {
            linkslinksHtml = `
                <div class="flex flex-col gap-3">
                    <a href="" class="hover:underline">Inventory</a>
                    <a href="" class="hover:underline">Used Cars</a>
                    <a href="" class="hover:underline">Demo Drive</a>
                    <a href="" class="hover:underline">Trade-in</a>
                    <a href="" class="hover:underline">Compare</a>
                    <a href="" class="hover:underline">Help Me Charging</a>
                    <a href="" class="hover:underline">Fleet</a>
                    <a href="" class="hover:underline">Semi</a>
                    <a href="" class="hover:underline">Roadster</a>
                </div>`;
        }
        linksLinks.innerHTML = linkslinksHtml;
    }
}
document.querySelector('.menu-btn').addEventListener('click', () => {
    const bodyContent = document.querySelector('.main-body');
    const mobileLink = document.querySelector('.mobile-link');

    // Remove the 'hidden' class to start the transition
    mobileLink.classList.remove('hidden');
    setTimeout(() => {
        mobileLink.classList.add('opacity-100');
    }, 10);  // Small delay to allow for class application before transition starts

    // Hide the main body content after the transition
    setTimeout(() => {
        bodyContent.classList.add('hidden');
    }, 300);  // Match this to the CSS transition duration
});

document.querySelector('.x-btn').addEventListener('click', () => {
    const bodyContent = document.querySelector('.main-body');
    const mobileLink = document.querySelector('.mobile-link');

    // Remove the 'opacity-100' class to start the transition
    mobileLink.classList.remove('opacity-100');

    // Show the main body content after the transition
    setTimeout(() => {
        bodyContent.classList.remove('hidden');
    }, 300);  // Match this to the CSS transition duration

    // Add the 'hidden' class after the transition completes
    setTimeout(() => {
        mobileLink.classList.add('hidden');
    }, 310);  // Slightly longer than the transition duration to ensure it completes
});






/* document.querySelector('.menu-btn').addEventListener('click', () =>{
    const bodyContent = document.querySelector('.main-body');
    const mobileLink = document.querySelector('.mobile-link');
    console.log('p')
    mobileLink.classList.toggle('opacity-100');
    if( mobileLink.classList.contains('hidden')){
        bodyContent.classList.add('hidden');
        mobileLink.classList.remove('hidden');
       
    }
});
document.querySelector('.x-btn').addEventListener('click', () =>{
    const bodyContent = document.querySelector('.main-body');
    const mobileLink = document.querySelector('.mobile-link');

    mobileLink.classList.toggle('opacity-100');
    if( !mobileLink.classList.contains('hidden')){
        bodyContent.classList.remove('hidden');
        console.log(bodyContent.classList)
        mobileLink.classList.add('hidden');
        
    }
}); */
