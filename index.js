// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(text) {
  
// var path = require('path');

// var filename = path.basename(text);

let pathSplit= text.split("/");
let dosyaAdi = pathSplit[pathSplit.length-1];


return dosyaAdi;
}

console.log('Gorev 1 Dosya Adini Bul - ',dosyaAdiniBul('C:/Users/johnsmith/Music/Beethoven_5.mp3'));


/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(numArray) {
  
  let hesap;
  if(numArray.length===0){
    hesap = null;
  } else{
    hesap = numArray.reduce((total,num)=>{
    return total+num;},0)/numArray.length
  }
return hesap;
}
console.log('Gorev 2 Ortalama Bul - ',ortalamaBul([50, -26, 153, 7]))

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(numArr,functionCb) {
  
  let ortalama = functionCb(numArr);
  let ortalamadanBuyukNum;
  if(numArr.length===0){
    ortalamadanBuyukNum = null;
  }else{
    ortalamadanBuyukNum = numArr.filter(ortalamaBuyuk =>
    ortalamaBuyuk>ortalama);
  }
return ortalamadanBuyukNum;
}

console.log('Gorev 3 Ortalamadan Buyukleri Bul -',ortalamadanBuyukleriBul([50, -26, 153, 7],ortalamaBul));


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
