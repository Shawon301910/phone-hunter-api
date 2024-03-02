const loadPhones = async (searchText, isShowAllClick) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const phoneItem = await response.json();
    const phoneItemArr = phoneItem.data;
    displayPhone(phoneItemArr, isShowAllClick);
}

loadPhones("iphone");

const displayPhone = (phoneItem, isShowAllClick) => {
    const phoneItemContainer = document.getElementById("phone-item-container");
    phoneItemContainer.innerHTML = "";
    const showAllBtn = document.getElementById("show-all");
    if (phoneItem.length > 15 && !isShowAllClick) {
        showAllBtn.classList.remove("hidden")
    } else {
        showAllBtn.classList.add("hidden")
    }

    if (!isShowAllClick) {
        phoneItem = phoneItem.slice(0, 15)
    }



    phoneItem.forEach((phone) => {
        const div = document.createElement("div");
        div.classList = `card border-2 rounded-md`;
        div.innerHTML = `<figure class="p-0 lg:p-0 mt-5">
                            <img src="${phone.image}" alt="error" class="rounded-md" />
                        </figure>
                        <div class="card-body items-center text-center p-5 space-y-1 lg:space-y-3">
                            <h2 class="text-2xl lg:text-3xl font-bold">${phone.phone_name}</h2>
                            <p class="text-xm lg:text-base text-gray-500">There are many variations of passages of available, but the majority have suffered</p>
                            <h4 class="text-2xl lg:text-3xl font-bold">$999</h4>
                            <div class="card-actions">
                                <button onclick="showDetails('${phone.slug}')" class="bg-blue-500 text-xs lg:text-lg text-white font-bold px-3 lg:px-7 py-1 lg:py-3 rounded-lg">Show Details</button>
                            </div>
                        </div>`
        phoneItemContainer.appendChild(div);
    })

    loading(false);
}

const search = (isShowAllClick) => {
    loading(true);
    const searchText = document.getElementById("search-text").value;
    loadPhones(searchText, isShowAllClick)
}

document.getElementById("show-all").addEventListener("click", function () {
    search(true);
})

const loading = (isLoading) => {
    const UpSpinning = document.getElementById("up-spinner");
    const downSpinning = document.getElementById("down-spinner");
    if (isLoading) {
        UpSpinning.classList.remove("hidden");
        downSpinning.classList.remove("hidden");
    } else {
        UpSpinning.classList.add("hidden");
        downSpinning.classList.add("hidden");
    }
}

const showDetails = async (phoneId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`);
    const details = await response.json();
    const detailsData = details.data;
    showPhoneDetails(detailsData);
}

const showPhoneDetails = (phone) => {
    const setImg = document.getElementById("set-img");
    setImg.setAttribute("src", `${phone.image}`)
    const title = document.getElementById("phone-title");
    title.innerText = `${phone.name}`;
    const storage = document.getElementById("storage");
    storage.innerText = `${phone.mainFeatures?.storage}`;
    const display = document.getElementById("display");
    display.innerText = `${phone.mainFeatures?.displaySize}`;
    const chipset = document.getElementById("chipset");
    chipset.innerText = `${phone.mainFeatures?.chipSet}`
    const memory = document.getElementById("memory");
    memory.innerText = `${phone.mainFeatures?.memory};`
    const slug = document.getElementById("slug");
    slug.innerText = `${phone.slug}`;
    const release = document.getElementById("release");
    release.innerText = `${phone.releaseDate}`
    const brand = document.getElementById("brand");
    brand.innerText = `${phone.brand}`
    const gps = document.getElementById("gps");
    gps.innerText = `${phone.others?.GPS ? phone.others.GPS : "No GPS"}`
    my_modal_3.showModal()
}