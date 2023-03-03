export let laptops: LaptopComponent[] = [];
import { initialLaptops } from "./shopData";
import { LaptopComponent } from "./shopData";


function popularity() {
  laptops.sort((a, b) => {
    return a.data.id - b.data.id;
  })
  saveLaptops();
  for (let i = 0; i <= 19; i++) {
    if (laptops[i] !== undefined) {
      let productData = laptops[i];
      let parent = document.getElementById("div" + i) as HTMLElement;
      parent.innerHTML = "";
      if (productData !== undefined) productData.render(parent);
    }
  };
};

function priceLow() {
  laptops.sort((a, b) => {
    return a.data.price - b.data.price;
  })
  saveLaptops();
  for (let i = 0; i <= 19; i++) {
    if (laptops[i] !== undefined) {
      let productData = laptops[i];
      let parent = document.getElementById("div" + i) as HTMLElement;
      parent.innerHTML = "";
      productData.render(parent);
    };
  };
};

function priceHigh() {
  laptops.sort((a, b) => {
    return b.data.price - a.data.price;
  })
  saveLaptops();
  for (let i = 0; i <= 19; i++) {
    if (laptops[i] !== undefined) {
      let productData = laptops[i];
      let parent = document.getElementById("div" + i) as HTMLElement;
      parent.innerHTML = "";
      productData.render(parent);
    };
  };
};

function brand() {
  laptops.sort((a, b) => {
    return b.data.brand.localeCompare(a.data.brand);
  })
  saveLaptops();
  for (let i = 0; i <= 19; i++) {
    if (laptops[i] !== undefined) {
      let productData = laptops[i];
      let parent = document.getElementById("div" + i) as HTMLElement;
      parent.innerHTML = "";
      productData.render(parent);
    };
  };
};

function remove(){
  let toDelete: number = +(<HTMLInputElement>document.getElementById("toDelete")).value-1;
  let divIdentifier: string = "div"+toDelete;
  let deletedDiv = document.getElementById(divIdentifier);
  console.log(toDelete);
  console.log(deletedDiv);
  if(deletedDiv !== undefined){
    laptops.splice(toDelete, 1);
    console.log(laptops);
    deletedDiv!.innerHTML = "";
    saveLaptops();
    loadLaptops();
  }
}

function saveLaptops(){
  localStorage.clear();
  for (let i = 0; i <= laptops.length - 1; i++) {
    if(laptops[i] !== undefined) {localStorage.setItem("Laptops" + i, JSON.stringify(laptops[i].data));}
  };
}

function loadLaptops(){
  laptops = [];
  for (let i = 0; i <= 19; i++) {
    let Divi: string = "div" + i;
    let Laptopi: string = "Laptops" + i;
    let parent = document.getElementById(Divi);
    parent!.innerHTML = "";
    if (JSON.parse(window.localStorage.getItem(Laptopi)!) !== null) {
      console.log(Laptopi)
      laptops.push(new LaptopComponent(JSON.parse(window.localStorage.getItem(Laptopi)!)))
      let productData = laptops[i];
      productData.render(parent!);
    };
  };
}

window.addEventListener("load", () => {
  if (localStorage.length == 0) {
    initialLaptops();
    console.log(laptops);
    saveLaptops();
  };
  laptops = [];
  loadLaptops();
  console.log(laptops);
  popularity();
  document.getElementById("popularity")!.onclick = popularity;
  document.getElementById("priceLow")!.onclick = priceLow;
  document.getElementById("priceHigh")!.onclick = priceHigh;
  document.getElementById("brand")!.onclick = brand;
  if (document.location.href.includes("admin.html")){
    document.getElementById("deleteButton")!.onclick = remove;
  }
})
