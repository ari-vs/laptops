"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laptops = void 0;
exports.laptops = [];
const shopData_1 = require("./shopData");
const shopData_2 = require("./shopData");
function popularity() {
    exports.laptops.sort((a, b) => {
        return a.data.id - b.data.id;
    });
    saveLaptops();
    for (let i = 0; i <= 19; i++) {
        if (exports.laptops[i] !== undefined) {
            let productData = exports.laptops[i];
            let parent = document.getElementById("div" + i);
            parent.innerHTML = "";
            if (productData !== undefined)
                productData.render(parent);
        }
    }
    ;
}
;
function priceLow() {
    exports.laptops.sort((a, b) => {
        return a.data.price - b.data.price;
    });
    saveLaptops();
    for (let i = 0; i <= 19; i++) {
        if (exports.laptops[i] !== undefined) {
            let productData = exports.laptops[i];
            let parent = document.getElementById("div" + i);
            parent.innerHTML = "";
            productData.render(parent);
        }
        ;
    }
    ;
}
;
function priceHigh() {
    exports.laptops.sort((a, b) => {
        return b.data.price - a.data.price;
    });
    saveLaptops();
    for (let i = 0; i <= 19; i++) {
        if (exports.laptops[i] !== undefined) {
            let productData = exports.laptops[i];
            let parent = document.getElementById("div" + i);
            parent.innerHTML = "";
            productData.render(parent);
        }
        ;
    }
    ;
}
;
function brand() {
    exports.laptops.sort((a, b) => {
        return b.data.brand.localeCompare(a.data.brand);
    });
    saveLaptops();
    for (let i = 0; i <= 19; i++) {
        if (exports.laptops[i] !== undefined) {
            let productData = exports.laptops[i];
            let parent = document.getElementById("div" + i);
            parent.innerHTML = "";
            productData.render(parent);
        }
        ;
    }
    ;
}
;
function remove() {
    let toDelete = +document.getElementById("toDelete").value - 1;
    let divIdentifier = "div" + toDelete;
    let deletedDiv = document.getElementById(divIdentifier);
    console.log(toDelete);
    console.log(deletedDiv);
    if (deletedDiv !== undefined) {
        exports.laptops.splice(toDelete, 1);
        console.log(exports.laptops);
        deletedDiv.innerHTML = "";
        saveLaptops();
        loadLaptops();
    }
}
function saveLaptops() {
    localStorage.clear();
    for (let i = 0; i <= exports.laptops.length - 1; i++) {
        if (exports.laptops[i] !== undefined) {
            localStorage.setItem("Laptops" + i, JSON.stringify(exports.laptops[i].data));
        }
    }
    ;
}
function loadLaptops() {
    exports.laptops = [];
    for (let i = 0; i <= 19; i++) {
        let Divi = "div" + i;
        let Laptopi = "Laptops" + i;
        let parent = document.getElementById(Divi);
        parent.innerHTML = "";
        if (JSON.parse(window.localStorage.getItem(Laptopi)) !== null) {
            console.log(Laptopi);
            exports.laptops.push(new shopData_2.LaptopComponent(JSON.parse(window.localStorage.getItem(Laptopi))));
            let productData = exports.laptops[i];
            productData.render(parent);
        }
        ;
    }
    ;
}
window.addEventListener("load", () => {
    if (localStorage.length == 0) {
        (0, shopData_1.initialLaptops)();
        console.log(exports.laptops);
        saveLaptops();
    }
    ;
    exports.laptops = [];
    loadLaptops();
    console.log(exports.laptops);
    popularity();
    document.getElementById("popularity").onclick = popularity;
    document.getElementById("priceLow").onclick = priceLow;
    document.getElementById("priceHigh").onclick = priceHigh;
    document.getElementById("brand").onclick = brand;
    if (document.location.href.includes("admin.html")) {
        document.getElementById("deleteButton").onclick = remove;
    }
});
//# sourceMappingURL=shop.js.map