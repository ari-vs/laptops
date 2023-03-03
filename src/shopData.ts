import { laptops } from "./shop";

export class LaptopComponent {
  data: Laptop;
 
  constructor(data: Laptop) {
    this.data = data;
    // TODO: Render component now, or keep parent for later rendering
  }

  // update(data: LaptopData) {
    // TODO: Update data and re-render if needed
  // }
 
  render(parent: HTMLElement) {
    // TODO: Render component - add its elements to parent
    if (this.data.showing == true){
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", this.data.image);
    imageElement.setAttribute("class", "modelImage")
    parent.appendChild(imageElement);
    const laptopName = document.createElement("p");
    laptopName.setAttribute("class", "modelName");
    const nameText = document.createTextNode(this.data.modelName);
    laptopName.appendChild(nameText);
    parent.appendChild(laptopName);
    const description = document.createElement("p");
    const specs = document.createElement("ul");
    const brand = document.createElement("li");
    const brandText = document.createTextNode("Brand: "+this.data.brand+",");
    brand.appendChild(brandText);
    specs.appendChild(brand);
    const processor = document.createElement("li");
    const processorText = document.createTextNode("Processor: "+ this.data.processor+",");
    processor.appendChild(processorText);
    specs.appendChild(processor);
    const ram = document.createElement("li");
    const ramText = document.createTextNode("RAM: "+this.data.ram+",");
    ram.appendChild(ramText);
    specs.appendChild(ram);
    const storage = document.createElement("li");
    const storageText = document.createTextNode("Storage: "+this.data.storage+",");
    storage.appendChild(storageText);
    specs.appendChild(storage);
    const screenSize = document.createElement("li");
    const screenSizeText = document.createTextNode("Screen Size: "+this.data.screenSize+'"'+",");
    screenSize.appendChild(screenSizeText);
    specs.appendChild(screenSize);
    const gpu = document.createElement("li");
    const gpuText = document.createTextNode("GPU: "+this.data.gpu+",");
    gpu.appendChild(gpuText);
    specs.appendChild(gpu);
    const os = document.createElement("li");
    const osText = document.createTextNode("OS: "+this.data.os);
    os.appendChild(osText);
    specs.appendChild(os);
    description.appendChild(specs);
    parent.appendChild(description);
    const price = document.createElement("p");
    price.setAttribute("class", "price")
    const priceText = document.createTextNode(this.data.price+ "ILS");
    price.appendChild(priceText);
    parent.appendChild(price);
    const logoImage = document.createElement("img");
    logoImage.setAttribute("src", this.data.logo);
    logoImage.setAttribute("class", "logo")
    parent.appendChild(logoImage);
    }else parent.innerHTML = "";
  }
}

export interface Laptop {
  id: number,
  image: string,
  modelName: string,
  brand: string,
  processor: string,
  ram: string,
  storage: string,
  screenSize: number,
  gpu: string,
  os: string,
  price: number,
  logo: string,
  showing: boolean
}

const laptop1: Laptop= {
  id: 1,
  image: "./laptop1.png",
  modelName: "Apple MacBook Pro 14 Late 2021 M1 Pro Space Grey US Keyboard Layout Z15G-US",
  brand: "Apple",
  processor: "Apple M1 Pro chip",
  ram: "16GB",
  storage: "512GB",
  screenSize: 14.2,
  gpu: "Apple 14-core GPU",
  os: "macOS",
  price: 7890,
  logo: "./apple.png",
  showing: true
};

const laptop2: Laptop = {
  id: 2,
  image: "./laptop2.png",
  modelName: "Apple MacBook Pro 14 Late 2021 M1 Pro Space Grey (32GB) Z15H-32-HB",
  brand: "Apple",
  processor: "Apple M1 Pro chip",
  ram: "32GB",
  storage: "1TB",
  screenSize: 14.2,
  gpu: "Apple 16-core GPU",
  os: "macOS",
  price: 11390,
  logo: "./apple.png",
  showing: true
};

const laptop3: Laptop = {
  id: 3,
  image: "./laptop3.png",
  modelName: "Lenovo IdeaPad Gaming 3 15-IHU6 82K100K5IV",
  brand: "Lenovo",
  processor: "Intel Core i7-11370H",
  ram: "16GB",
  storage:"1TB",
  screenSize: 15.6,
  gpu: "NVIDIA GeForce GTX 1650 4GB GDDR6",
  os: "Windows 11 Home",
  price: 4949,
  logo: "./lenovo.png",
  showing: true
};

const laptop4: Laptop = {
  id: 4,
  image: "./laptop4.png",
  modelName: "Dell Latitude 9520 2-in-1 Touch",
  brand: "Dell",
  processor: "Intel Core i7-1185G7",
  ram: "32GB",
  storage: "1TB",
  screenSize: 15.6,
  gpu: "Intel HD Graphics",
  os: "Windows 10 Pro",
  price: 8790,
  logo: "./dell.png",
  showing: true
};

const laptop5: Laptop = {
  id: 5,
  image: "./laptop5.png",
  modelName: "Dell Latitude 5421 Laptop 14 i7-11850H 16GB 512GB MX450 (W11P) 3YR",
  brand: "Dell",
  processor: "Intel Core™ i7-11850H",
  ram: "16GB",
  storage: "512GB",
  screenSize: 14.0,
  gpu: "NVIDIA Geforce MX450 2GB",
  os: "Windows 11 Pro",
  price: 6649,
  logo: "./dell.png",
  showing: true
};

const laptop6: Laptop = {
  id: 6,
  image: "./laptop6.png",
  modelName: "Dell Vostro 15 5510 Laptop V5510-5710",
  brand: "Dell",
  processor: "Intel Core i5-11320H",
  ram: "8GB",
  storage: "512GB",
  screenSize: 15.6,
  gpu: "Intel Iris Xe Graphics",
  os: "Windows 11 Home",
  price: 3275,
  logo: "./dell.png",
  showing: true
};

const laptop7: Laptop = {
  id: 7,
  image: "./laptop7.png",
  modelName: "Lenovo ThinkPad E14 Gen 2 20TA00F5IV",
  brand: "Lenovo",
  processor: "Intel Core i5-1135G7",
  ram: "16GB",
  storage: "512GB",
  screenSize: 14.0,
  gpu: "Intel Iris Xe Graphics",
  os: "Windows 11 Pro",
  price: 3890,
  logo: "./lenovo.png",
  showing: true
};

const laptop8: Laptop = {
  id: 8,
  image: "./laptop8.png",
  modelName: "Dell Latitude 7520 Business",
  brand: "Dell",
  processor: "Intel Core i7-1185G7",
  ram: "16GB",
  storage: "512GB",
  screenSize: 15.6,
  gpu: "Intel Iris Xe Graphics",
  os: "Windows 10 Pro",
  price: 5090,
  logo: "./dell.png",
  showing: true
};

const laptop9: Laptop = {
  id: 9,
  image: "./laptop9.png",
  modelName: "Lenovo IdeaPad Flex 5",
  brand: "Lenovo",
  processor: "Intel Core i7-1165G7",
  ram: "16GB",
  storage: "1TB",
  screenSize: 15.6,
  gpu: "Intel Iris Xe Graphics",
  os: "Windows 11 Home",
  price: 4410,
  logo: "./lenovo.png",
  showing: true
};

const laptop10: Laptop = {
  id: 10,
  image: "./laptop10.png",
  modelName: "Dell Precision 3561 Workstation Laptop M3561-7355",
  brand: "Dell",
  processor: "Intel Core i7-11800H",
  ram: "16GB",
  storage: "512GB",
  screenSize: 15.6,
  gpu: "NVIDIA T600 4GB GDDR6",
  os: "Windows 10 Pro",
  price: 6090,
  logo: "./dell.png",
  showing: true
};

const laptop11: Laptop = {
  id: 11,
  image: "./laptop11.png",
  modelName: "Apple MacBook Pro 13 M1 2020 Touch Bar Space Gray MYD82HB/A",
  brand: "Apple",
  processor: "Apple M1 chip",
  ram: "8GB",
  storage: "256GB",
  screenSize: 13.3,
  gpu: "None",
  os: "macOS",
  price: 4990,
  logo: "./apple.png",
  showing: true
};

const laptop12: Laptop = {
  id: 12,
  image: "./laptop12.png",
  modelName: "Apple MacBook Air 13 M1 2020 GPU 8C MGNA3HB/A Silver",
  brand: "Apple",
  processor: "8-core CPU with 4 performance cores and 4 efficiency cores", 
  ram: "8GB",
  storage: "512GB",
  screenSize: 13.3,
  gpu: "8-core GPU 16-core Neural Engine",
  os: "macOS",
  price: 4890,
  logo: "./apple.png",
  showing: true
};

const laptop13: Laptop = {
  id: 13,
  image: "./laptop13.png",
  modelName: "Lenovo IdeaPad Flex 5-15ITL 4K Multi-touch 82HT002RIV",
  brand: "Lenovo",
  processor: "Intel Core i7-1165G7",
  ram: "16GB",
  storage: "1TB",
  screenSize: 15.6,
  gpu: "NVIDIA GeForce MX450 2GB GDDR6",
  os: "Windows 10 Pro",
  price: 5390,
  logo: "./lenovo.png",
  showing: true
};

const laptop14: Laptop = {
  id: 14,
  image: "./laptop14.png",
  modelName: "Lenovo ThinkPad P14s Gen 2 20VX0059IV 400nits (32GB)",
  brand: "Lenovo",
  processor: "Intel Core i7-1165G7",
  ram: "32GB",
  storage: "1TB",
  screenSize: 14.0,
  gpu: "NVIDIA Quadro T500 4GB GDDR6",
  os: "Windows 10 Pro",
  price: 6990,
  logo: "./lenovo.png",
  showing: true
};

const laptop15: Laptop = {
  id: 15,
  image: "./laptop15.png",
  modelName: "Lenovo ThinkPad X1 Carbon 9th Gen 20XW008EIV 4G LTE",
  brand: "Lenovo",
  processor: "Intel Core i7-1165G7",
  ram: "16GB",
  storage: "1TB",
  screenSize: 14.0,
  gpu: "Intel Iris Xe Graphics",
  os: "Windows 10 Pro",
  price: 8990,
  logo: "./lenovo.png",
  showing: true
};

const laptop16: Laptop = {
  id: 16,
  image: "./laptop16.png",
  modelName: "Dell Vostro 14 5410 Laptop V5410-7451",
  brand: "Dell",
  processor: "Intel Core i7-11390H",
  ram: "16GB",
  storage: "512GB",
  screenSize: 14.0,
  gpu: "Intel Iris Xe Graphics",
  os: "Windows 11 Pro",
  price: 4490,
  logo: "./dell.png",
  showing: true
};

const laptop17: Laptop = {
  id: 17,
  image: "./laptop17.png",
  modelName: "Dell Latitude 7420 Business 14 Non-Touch L7420-8418",
  brand: "Dell",
  processor: "Intel Core i7-1165G7",
  ram: "16GB",
  storage: "512GB",
  screenSize: 14.0,
  gpu: "Intel Iris Xe Graphics",
  os: "Windows 10 Pro",
  price: 5690,
  logo: "./dell.png",
  showing: true
};

const laptop18: Laptop = {
  id: 18,
  image: "./laptop18.png",
  modelName: "Apple MacBook Pro 16 Late 2021 M1 Max Space Grey (32GB) US Keyboard Layout Z14V-MAX24-US",
  brand: "Apple",
  processor: "Apple M1 Max chip",
  ram: "32GB",
  storage: "512GB",
  screenSize: 16.2,
  gpu: "Apple 24-core GPU",
  os: "macOS",
  price: 12190,
  logo: "./apple.png",
  showing: true
  };

const laptop19: Laptop = {
  id: 19,
  image: "./laptop19.png",
  modelName: "Lenovo ThinkPad X1 Titanium Yoga 2-in-1 laptop Gen 1 Multi-touch 20QA001VIV 4G LT",
  brand: "Lenovo",
  processor: "Intel Core i7-1160G7",
  ram: "16GB",
  storage: "1TB",
  screenSize: 13.5,
  gpu: "Intel Iris Xe Graphics",
  os: "Windows 10 Pro",
  price: 11650,
  logo: "./lenovo.png",
  showing: true
};

const laptop20: Laptop = {
  id: 20,
  image: "./laptop20.png",
  modelName: "Lenovo Legion 5 Pro 16-IAH7H 82RF0082IV",
  brand: "Lenovo",
  processor: "Intel Core i7-12700H",
  ram: "16GB",
  storage: "1TB",
  screenSize: 16.0,
  gpu: "NVIDIA GeForce RTX 3070 Ti 8GB GDDR6",
  os: "Windows 11 Home",
  price: 9890,
  logo: "./lenovo.png",
  showing: true
};

export function initialLaptops(){
  for (let i = 1; i <= 20; i++) {
  let laptop = new LaptopComponent(eval("laptop" + i));
  laptops.push(laptop);
}}