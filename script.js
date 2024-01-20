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

