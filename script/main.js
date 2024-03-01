const loadPhones = async(searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const phoneItem = await response.json();
    const phoneItemArr = phoneItem.data;
    displayPhone(phoneItemArr);
}

loadPhones("iphone")