let mainele = document.getElementById("main-container")
async function getMenu(){
    let data =  await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json").then(response => response.json()) 
    console.log(data.length)
    console.log(typeof(data))
    renderMenu(data)

}
getMenu()

function renderMenu(data){
    data.forEach(element => {
        let nodeele = document.createElement('div')
        nodeele.innerHTML = `<div class="menu">
            <img src=${element.imgSrc}>
            <div>
                <p>${element.name}</p>
                <span class="price">$${element.price}</span>
                <span class="btn"><img src="static/add.png"></span>
            </div>
        </div>`
        mainele.appendChild(nodeele);
    });
}


function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        // Randomly choose 3 burgers for the order
        const order = {
          items: [
            { name: 'Burger1', price: 10 },
            { name: 'Burger2', price: 12 },
            { name: 'Burger3', price: 15 }
          ]
        };
        resolve(order);
      }, 2500);
    });
  }

  // Function to simulate order preparation
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }

  // Function to simulate paying the order
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }

  // Function to display a thank you message
  function thankYouFnc() {
    alert('Thank you for eating with us today!');
  }

  // Function to start the order process
  function startOrder() {
    getMenu()
      .then(() => takeOrder())
      .then(order => orderPrep(order))
      .then(orderStatus => payOrder(orderStatus))
      .then(thankYouFnc)
      .catch(error => console.error('Error:', error));
  }
  document.getElementById("login").addEventListener("click",startOrder())