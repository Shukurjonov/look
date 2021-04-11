let usersList = document.querySelector(".users-list");
let nameInput = document.querySelector(".name-input");
let telInput = document.querySelector(".tel-input");
let addUser = document.querySelector(".add-user");
let addFoods = document.querySelector(".add-orders-item");
let userOrders = document.querySelector(".user-orders");
let selectFoods = document.querySelector(".foods");
let foodCount = document.querySelector(".foods-count");
let nameHeader = document.querySelector(".user-name-haeader");
let usersArray = document.querySelectorAll(".user-item");

function selectRenderer(foods){
    for (el of foods){
        let option = document.createElement("option");
        option.value = el.foods_id;
        option.innerText = el.name;
        
        selectFoods.appendChild(option);
    }
}

function renderer(list){
    usersList.innerHTML = null;
    for (element of list){
        let elLI = document.createElement("li")
        elLI.classList.add("user-item")
        
        let elBtn = document.createElement("button")
        elBtn.classList.add("user-button")
        
        let elName = document.createElement("span");
        elName.classList.add("user-name");
        elName.textContent = element.name;
        
        let elTel = document.createElement("span");
        elTel.classList.add("user-phone-number");
        elTel.textContent = element.phone;
        
        
        elBtn.appendChild(elName)
        elBtn.appendChild(elTel)
        
        elLI.appendChild(elBtn);
        
        usersList.appendChild(elLI);  
    }

    usersArray = document.querySelectorAll(".user-item");
    windowRenderer(usersArray);
}


addUser.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let name = nameInput.value;
    let phone = telInput.value;
    let id = users.length;
    let object = {user_id: id + 1, name, phone};
    
    users.push(object);
    renderer(users)
    
    nameInput.value = null;
    telInput.value = null;
})
let user_id;

function windowRenderer(usersArray){
    for(let user of usersArray) {
        user.onclick = () => {
            let userName = (user.childNodes[0].childNodes[0].textContent);
            let userPhone = (user.childNodes[0].childNodes[1].textContent);
    
            nameHeader.textContent = userName;
            let userObject = users.filter(a => a.name === userName && a.phone === userPhone);
            
            user_id = userObject.map(a => a.user_id)[0];

            array = orders.filter(a => a.user_id === user_id);
        
            ordersRenderer(array);
        }
    }        
}
 
addFoods.addEventListener("submit", (event) => {
    event.preventDefault();

    let foods_id = selectFoods.value;
    let count = foodCount.value;
    
    let object = {user_id, foods_id, count};
    
    orders.push(object);
    
    array = orders.filter(a => a.user_id === user_id);
    ordersRenderer(array);
    
    count.value = null;
})


function ordersRenderer(array){
    userOrders.innerHTML = null;
   
    for (let item of array){
        let liEl = document.createElement("li");
        liEl.classList.add("order-item");
    
        let div = document.createElement("image");
        div.classList.add("image");
    
        let img = document.createElement("img");

        let food = foods.filter(a => a.foods_id == item.foods_id)
        
        img.src = food[0].url;

        let count = document.createElement("div");
        count.classList.add("order-count");
        count.innerText = item.count;

        div.appendChild(img);

        liEl.appendChild(div);
        liEl.appendChild(count);

        userOrders.appendChild(liEl);
    }
}

selectRenderer(foods);
renderer(users);
windowRenderer(usersArray);