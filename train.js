/*
Masalani izohi
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.


*/

//masalani yechimi:

function InWord(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        count++;
      }
    }
    return count;
  }
  
  console.log(InWord('a', 'banana')); // natija => 3



















//⭐️Callback functions

const list = [
"yahshi talaba boling", // 0-20
"togri boshliq tanlang va koproq hato qiling", // 20-30
"uzingizga ishlashingizni boshlang", // 30-40
"siz kuchli bolgan narsalarni qiling", // 40-50
"yoshlarga investitsiya qiling", // 50-60
"endi dam oling, foydasi yog endi", // 60
];  

function maslahatBering(a, callback) {
    if(typeof a !== "number") callback("insert a number", null);
    else if(a <= 2) callback(null, list[0]);
    else if(a > 2 && a <= 3) callback(null, list[1]);
    else if(a > 3 && a <= 4) callback(null, list[2]);
    else if(a > 4 && a <= 5) callback(null, list[3]);
    else if(a > 5 && a <= 6) callback(null, list[4]);
    else {
        // callback(null, list[5]);
        setTimeout( () => {
            callback(null, list[5]); 
        },5000);
    }
}


console.log("passed here 0")
maslahatBering(7, (err, data) => {
    if(err) console.log("ERROR:", err);
    else{
        console.log("javob:", data);
    }
});
console.log("passed here 1")

maslahatBering("salom", (err, data) => {
    if(err) console.log("ERROR:", err);
    else{
        console.log("javob:", data);
    }
});

// //=======================

//⭐️Callback functions

// const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yog endi", // 60
// ];  

// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if(a <= 2) callback(null, list[0]);
//     else if(a > 2 && a <= 3) callback(null, list[1]);
//     else if(a > 3 && a <= 4) callback(null, list[2]);
//     else if(a > 4 && a <= 5) callback(null, list[3]);
//     else if(a > 5 && a <= 6) callback(null, list[4]);
//     else {
//         setInterval( () => {
//             callback(null, list[5]); 
//         },5000);
//     }
// }


// console.log("passed here 0")
// maslahatBering(7, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else{ 
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1")



//=======================


//⭐️Asychronos functions

// const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yog endi", // 60
// ];  

// async function maslahatBering(a, ) {
//     if(typeof a !== "number") throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//         resolve (list[5]);
//             },5000);
//         }); 
//     }
// }

//=======================
//then .catch
// console.log("passed here 0")
// maslahatBering(26).then(data => {
//      console.log("javob:", data);
//     }).catch(err => {
//         console.log("ERROR:", err);
//         });
// console.log("passed here 1")



//async await
// async function run() {
// let javob = await maslahatBering(25);
// console.log(javob);
// javob = await maslahatBering(70);
// console.log(javob);
// javob = await maslahatBering(41);
// console.log(javob);

// }
// run();