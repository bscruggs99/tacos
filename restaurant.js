let apps = document.querySelector("#apps-button");
let entrees = document.querySelector("#entrees-button");
let sides = document.querySelector("#sides-button");
let entreesText = document.querySelector("#entrees-modal-text");
let appsText = document.querySelector("#apps-modal-text");
let sidesText = document.querySelector("#sides-modal-text");

let close = document.createElement("button");
            close.className = "close";
            close.innerText = "Close";

apps.addEventListener("click", showApps);
entrees.addEventListener("click", showEntrees);
sides.addEventListener("click", showSides);

function showApps() {
    document.querySelector(".apps-modal").style.display = "block";
    appsText.innerHTML = "";
    fetch('menu.json')
        .then((response) => response.json())
        .then(data => {
            let closeDiv = document.createElement("div");
            closeDiv.className = "close-div";
            
            closeDiv.appendChild(close);
            appsText.appendChild(closeDiv);
            let scroll = document.createElement("div");
            scroll.className = "scroll";
            for (let i = 0; i < data.apps.length; i++) {

                let menuItem = document.createElement("div");
                let header = document.createElement("div");
                let main = document.createElement("div");
                let name = document.createElement("div");
                let price = document.createElement("div");

                menuItem.className = "menu-item";
                header.className = "entrees-header";
                main.className = "menu-description";
                header.appendChild(name);
                header.appendChild(price);

                name.innerHTML = `${data.apps[i].name}`;
                price.innerHTML = `${data.apps[i].price}`;
                main.innerHTML = `${data.apps[i].description}`;
                let options = document.createElement("ul");
                if (data.apps[i].options) {
                    for (let j = 0; j < data.apps[i].options.length; j++) {
                        let li = document.createElement("li");
                        li.innerHTML = `${data.apps[i].options[j]}`;
                        options.appendChild(li);
                    }
                    main.appendChild(options);

                }

                menuItem.id = `${data.entrees[i].type}`;
                menuItem.appendChild(header);
                menuItem.appendChild(main);
                scroll.appendChild(menuItem);
                appsText.appendChild(scroll);

}
        });

    }

function showSides() {
    document.querySelector(".entrees-modal").style.display = "block";
    entreesText.innerHTML = "";
    fetch('menu.json')
        .then((response) => response.json())
        .then(data => {
            let closeDiv = document.createElement("div");
            closeDiv.className = "close-div";
            
            closeDiv.appendChild(close);
            entreesText.appendChild(closeDiv);
            let scroll = document.createElement("div");
            scroll.className = "scroll";
            for (let i = 0; i < data.entrees.length; i++) {

                let menuItem = document.createElement("div");
                let header = document.createElement("div");
                let main = document.createElement("div");
                let name = document.createElement("div");
                let price = document.createElement("div");

                menuItem.className = "menu-item";
                header.className = "entrees-header";
                main.className = "menu-description";
                header.appendChild(name);
                header.appendChild(price);


                name.innerHTML = `${data.entrees[i].name}`;
                price.innerHTML = `${data.entrees[i].price}`;
                main.innerHTML = `${data.entrees[i].description}`;
                let options = document.createElement("ul");
                if (data.entrees[i].options) {
                    for (let j = 0; j < data.entrees[i].options.length; j++) {
                        let li = document.createElement("li");
                        li.innerHTML = `${data.entrees[i].options[j]}`;
                        options.appendChild(li);
                    }
                    main.appendChild(options);

                }

                menuItem.id = `${data.entrees[i].type}`;
                menuItem.appendChild(header);
                menuItem.appendChild(main);
                scroll.appendChild(menuItem);
                entreesText.appendChild(scroll);

}
});

}

function showEntrees() {
    document.querySelector(".entrees-modal").style.display = "block";
    entreesText.innerHTML = "";
    fetch('menu.json')
        .then((response) => response.json())
        .then(data => {
            let closeDiv = document.createElement("div");
            closeDiv.className = "close-div";
            
            closeDiv.appendChild(close);
            entreesText.appendChild(closeDiv);
            let scroll = document.createElement("div");
            scroll.className = "scroll";
            for (let i = 0; i < data.entrees.length; i++) {

                let menuItem = document.createElement("div");
                let header = document.createElement("div");
                let main = document.createElement("div");
                let name = document.createElement("div");
                let price = document.createElement("div");

                menuItem.className = "menu-item";
                header.className = "entrees-header";
                main.className = "menu-description";
                header.appendChild(name);
                header.appendChild(price);

                name.innerHTML = `${data.entrees[i].name}`;
                price.innerHTML = `${data.entrees[i].price}`;
                main.innerHTML = `${data.entrees[i].description}`;
                let options = document.createElement("ul");
                if (data.entrees[i].options) {
                    for (let j = 0; j < data.entrees[i].options.length; j++) {
                        let li = document.createElement("li");
                        li.innerHTML = `${data.entrees[i].options[j]}`;
                        options.appendChild(li);
                    }
                    main.appendChild(options);

                }

                menuItem.id = `${data.entrees[i].type}`;
                menuItem.appendChild(header);
                menuItem.appendChild(main);
                scroll.appendChild(menuItem);
                entreesText.appendChild(scroll);
            }     
    } );
}

close.addEventListener("click",() => {
    document.querySelector(".entrees-modal").style.display = "none";
    document.querySelector(".apps-modal").style.display = "none";
    document.querySelector(".sides-modal").style.display = "none";
 });

 let review1 = document.querySelector("#review1");
 let review2 = document.querySelector("#review2");
 let review3 = document.querySelector("#review3");
 let author1 = document.querySelector("#review1-author");
 let author2 = document.querySelector("#review2-author");
 let author3 = document.querySelector("#review3-author");

 fetch('menu.json')
    .then((response) => response.json())
    .then(data => {
let numbers = []
        for(let i = 0; i < 3; i++) {
      
        numbers.push(Math.floor(Math.random() * data.reviews.length));   
// random1 = ;
        
        
        }
       review1.innerHTML =`\"${ data.reviews[numbers[0]].text}\"`;
       author1.innerHTML = `- ${data.reviews[numbers[0]].author}`;
       review2.innerHTML =`\"${ data.reviews[numbers[1]].text}\"`;
       author2.innerHTML = `- ${data.reviews[numbers[1]].author}`;
       review3.innerHTML =`\"${ data.reviews[numbers[2]].text}\"`;
       author3.innerHTML = `- ${data.reviews[numbers[2]].author}`;
// review1.innerText = data.reviews[i].text;
//         author1.innerText = data.reviews[i].author;

    });