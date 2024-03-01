const displayPhone = (phoneItem) => {
    const phoneItemContainer = document.getElementById("phone-item-container");

    phoneItem.forEach((phone) => {
        const div = document.createElement("div");
        div.classList = `card border-2 rounded-md`;
        div.innerHTML = `<figure class="p-5 mt-5">
                            <img src="${phone.image}" alt="error" class="rounded-md" />
                        </figure>
                        <div class="card-body items-center text-center p-5 space-y-3">
                            <h2 class="text-3xl font-bold">${phone.phone_name}</h2>
                            <p class="text-gray-500">There are many variations of passages of available, but the majority have suffered</p>
                            <h4 class="text-3xl font-bold">$999</h4>
                            <div class="card-actions">
                                <button class="bg-blue-500 text-lg text-white font-bold px-7 py-3 rounded-lg">Show Details</button>
                            </div>
                        </div>`
        phoneItemContainer.appendChild(div);
    })
}

const search = () => {
    const searchText = document.getElementById("search-text").value;
    loadPhones(searchText)
}