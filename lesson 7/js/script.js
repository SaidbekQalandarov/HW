// String
// \n - pastga tushirish
// \t - tab/surish
// \"frontend\"
// ${2 + 2} - js amal

// console.log(30 + 10);
// console.log(30 - 10);
// console.log(50 * 30);
// console.log(40 / 20);
// console.log(9 ** 4);
// console.log(5 / 2);
// console.log(30 % 4);
// let num = 5
// console.log( num + num )
// console.log(typeof [])
// console.log( ++2)


// let film = {
//     movie_name:prompt('Movie name: '),
//     movie_genre:prompt('Movie janri: '),
//     movie_date:prompt('Movie date: '),
//     hero:prompt('The main character: '),
//     movie_reating:prompt('Movie rating: 1...10')
// }
// console.log(film)


// let user = {
//     name:'islom',
//     age:'35',
//     pet: {
//         petname:prompt('name1'),
//         petage:'5',
//     }
// }
// let user2 = {
//     name:'King',
//     age:'25',
//     pet: {
//         petname:prompt('name2'),
//         petage:'5',
//     }
// }
// if(user.pet.petname > user2.pet.petname){
//     alert(`${user.pet.petname} katta ${user2.pet.petname} dan`)
// }
// else{
//     alert(`${user.pet.petname}'kichik'${user2.pet.petname}'dan'`) 
// }
//console.log(typeof)


// let user = prompt('sonni kiriting')
// if(user == 0){
//     console.log('dushanba');
// }
// else if(user == 1){
//     console.log('seshanba');
// }
// else if(user == 2){
//     console.log('chorshanba');
// }
// else if(user == 3){
//     console.log('payshanba');
// }
// else if(user == 4){
//     console.log('juma');
// }
// else if(user == 5){
//     console.log('shanba');
// }
// else if(user == 6){
//     console.log('yakshanba');
// }
// else{
//     console.log('no');
// }


// let num = prompt('meva nomini kiriting')
// switch(num){
//     case 'olma' : console.log('bu yashil olma');
//     break;
//     case 'anor' : console.log('bu qizil anor');
//     break;
//     case "o'rik" : console.log("bu sariq o'rik");
//     break;
//     case 'nok' : console.log('bu olovrang nok');
//     break;
//     case 'olcha' : console.log('bu qizil olcha');
//     break;
// }

// let day = prompt("number")
// switch(day){
//     case "0": console.log("Monday");
//     break;
//     case "1": console.log("Tuesday");
//     break;
//     case "2": console.log("Wednesday");
//     break;
//     case "3": console.log("Thursday");
//     break;
//     case"4": console.log("Friday");
//     break;
//     case"5": console.log("Saturday");
//     break;
//     case "6": console.log("Sunday");
//     break;
//     default:console.log("no day")
// }

// console.log("dark" && 35 && "sdfh" && false && true && null) 
// console.log("stri")  

// console.log(!!5)


// let a = prompt("sonni kiriting")
//  if( a % 2 == 0){
//     console.log("juft son")
// }
// else if(a != Number){
//     console.log("bu son emas")
// }
// else{
//     console.log("toq son")
// }

// let a = +prompt("birinchi sonni kiriting")
// let num = +prompt("belgini kiriting")
// let b = +prompt("ikkinchi sonni kiriting")

// if(a-b){
//     console.log
// }


// let num = +prompt("sonni kiriting")
// if(num > 2 && num < 7){
//     console.log("bogcha bolasi")
// }
// else if(num > 7 && num < 16){
//     console.log("maktab uquvchisi")
// }
// else if(num > 16){
//     console.log("maktab tugatgan")
// }
// else{
//     console.log("error")
// }


//1-Masala
// let a = +prompt("matematika fanidan balingizni kiriting")
// let b = +prompt("ona tili fanidan balingizni kiriting")
// let c = +prompt("Tarix tili fanidan balingizni kiriting")
// let total = (a + b + c) / 3
// if(total <= 10 && total > 9){
//     console.log("A'lo")
// }
// else if(total <= 9 && total > 7){
//     console.log("Yaxshi")
// }
// else if(total <= 7 && total > 5){
//     console.log("Qoniqarli")
// }
// else if(total <= 5 && total > 1 ){
//     console.log("Qoniqarsiz")
// }
// else if(total <= 0){
//     console.log("Siz yiqildinggiz")
// }
// else if(total > 10){
//     console.log("Qaytadan kiriting")
// }
// else{
//     console.log("bunday son mavjud emas")
// }
 

//2-Masala
// let lok = prompt("1dan 24gacha bo'lgan vaqtni kiriting")
// if(lok >= 6 && lok <= 12){
//     console.log("Hayrli tong")
// }
// else if(lok > 12 && lok <= 18){
//     console.log("Hayrli kun")
// }
// else if(lok > 18 && lok <= 24){
//     console.log("Hayrli kech")
// }
// else if(lok < 0 && lok > 6){
//     console.log("Hayrli tun")
// }
// else{
//     console.log("Bunday vaqt mavjud emas")
// }

//3-Masala
// let day = +prompt("1-dan 7-gacha son kiriting")
// switch(day){
//     case "1": console.log("Monday");
//     break;
//     case "2": console.log("Tuesday");
//     break;
//     case "3": console.log("Wednesday");
//     break;
//     case "4": console.log("Thursday");
//     break;
//     case "5": console.log("Friday");
//     break;
//     case "6": console.log("Saturday");
//     break;
//     case "7": console.log("Sunday");
//     break;
//     default:console.log("Raqam faqat 1-7 orasida bo'lishi shart")
// }

//Mavzu for while

// let str = "Saidbek"
// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// let num = [2, 4, 5, 7, 15, 0, 9, 12, 34]
// for(let i = 0; i < num.length; i++){
//     if(i % 2 !== 0){
//     continue
//     }
// console.log(num[i])
// }

// Uyga vazifa
// let i = 0
// while(i < 51){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i)
//     }
//     i++;
// }

// Uyga vazifa 2
// let firstname = "Saidbek"
// let i = 0
// while(i < firstname.length){
//     console.log(firstname[i])
//     i++
// }


// let name = "Saidbek"
// let b = 0
// do{
//     console.log(name[b]);
//     name++;
// }while(b < name.length)


// let name1 =  ["Apple","Banana","Kiwi","Strawberry","Watermelon"]
// let i = 0
// while(i < fruit.length){
//     console.log(name1[i]);
// i++;
// }

// let name1 =  ["Apple","Banana","Kiwi","Strawberry","Watermelon"]
// let i = 0
// do{
//     console.log(name1[i]);
//     i++;
// }
// while(i < fruit.length){
// }




// let student = {
//     name: "Abdusamad",
//     age:15,
//     pet: true,
// }
// let friend = {
//     name: "Isroil",
//     age:15,
//     pet: true,
// }
// let student2 = {
//     name: "Abdulxayrxon",
//     age:15,
//     pet: false,
// }
// studentPet(student)
// studentPet(friend)
// studentPet(student2)
// function studentPet(studentData){
//     if(studentData.pet === true){
//         console.log(studentData.name + "da uy hayvoni bor")
//     }else{
//         console.log(studentData.name + "da uy hayvoni yoq")
//     }
// }


// function calc(x, y, operator){
//     if(operator === "-"){
//         console.log(x - y)
//     }
//     else if(operator === "+"){
//         console.log(x + y)
//     }
//     else if(operator === "*"){
//         console.log(x * y)
//     }
//     else if(operator === "/"){
//         console.log(x / y)
//     }
//     else if(operator === "**"){
//         console.log(x ** y)
//     }
// }
// calc(5,6,"+")
// calc(12,10,"*")
// calc(30,6,"/")
// calc(5,2,"-")
// calc(5,6,"**")

// Declaration
// Expression
// arrow function

// function getNumber(num){
//     let i = 0
//     while(i <= num){
//         console.log(i)
//         i++
//     }
// }
// getNumber(50)
// function getNumber(from, to){
//     while(from <= to){
//         console.log(from)
//         from++
//     }
// }
// getNumber(50, 100)

// function showMessage(name, surname, age,){
//     return{
//     name:name,
//     surname:surname,
//     age:age,
//     }
// }
// let str = showMessage("Saidbek", "Qalandarov",15)
// console.log(str)
// let nums = [1,10,15,15,20,39]
// function getSum(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]   
//     }
//     return sum
// }
// let result = getSum(nums)
// console.log(result)

// Uyga vazifa: 1 -----------------------------------------------------------------------------------------------
// let number = [1, 23, 45, 34, 91, 26, 2, 8, 5, 7]
// function getSum(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//           continue   
//         }
//         console.log(arr[i])
//         sum += arr[i]    
//     }
//     return sum
// }
// let result = getSum(number)
// console.log(result)

// Uyga vazifa: 2 ------------------------------------------------------------------------------------------------
// let numbers = [1, 23, 45, 34, 91, 26, 2, 8, 5, 7]
// function getSum(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//           continue   
//         }
//         console.log(arr[i])
//         sum += arr[i]    
//     }
//     return sum
// }
// let result2 = getSum(numbers)
// console.log(result2)
// ----------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------
// function getRandomNumber(from, to){
//     let number = Math.floor(Math.random() * from) + from
//     return number
// }
// let num = getRandomNumber(50, 100)
// console.log(num)


// function getNumber(array, number)
//     { for (let i = 0; i < array[i]; i++){ 
//     if(array[i] === number){
//     console.log(i)
//     break
//     }
//     }
//     }
//     getNumber([1,4,6,7,8,12,34,56], 4)
// -----------------------------------------------------------------------------------------------------------------


// let name = "Saidbek"
// let resultName = ""
// for(let i = 0;i < name.length;i--)
// if(i === 0){
//     resultName += name[i]
// }
// console.log(resultName)


// ------------------------------------------------------------------------------------------------------------------

// function getNumber(num){
//     let i = 0
//     while(i <= num){
//         console.log(num)
//         num--
//     }
// }
// getNumber(10)

// function getNumber(from, to){
//     while(from <= to){
//         console.log(to)
//         to--
//     }
// }
// getNumber(5, 10)

//--------------------------------------------------------------------------------------------------------------------

// let getString = (str, str1) => {
//     for(let i = 0; i < str.length; i++){
//         if (str[i] === 'a') {
//             str1 += '$'
//         }
//         else if(str[i] === 'A'){
//             str1 += '$'
//         }
//         else if(str[i] === 'o'){
//             str1 += '$'
//         }
//         else if(str[i] === 'O'){
//             str1 += '$'
//         }
//         else if(str[i] === 'i'){
//             str1 += '$'
//         }
//         else if(str[i] === 'I'){
//             str1 += '$'
//         } 
//         else if(str[i] === 'u'){
//             str1 += '$'
//         } 
//         else if(str[i] === 'U'){
//             str1 += '$'
//         }
//         else if(str[i] === "o'"){
//             str1 += '$'
//         }
//         else if(str[i] === 'O'){
//             str1 += '$'
//         }
//         else if(str[i] === 'e'){
//             str1 += '$'
//         }
//         else if(str[i] === 'E'){
//             str1 += '$'
//         }
//         else{
//             str1 += str[i]
//         }
//     }
//     console.log(str1)
// }
// getString("aoieuo'", '')

// --------------------------------------------------------------------------------------------------------------------------

// let str = "Saidbek_Qalandarov"
// function KebabCase(Case){
//     let name = Case.split("_")
//     console.log(name.join('-'))
// }
// KebabCase(str)

// let test = "saidbek qalandarov"
// function Case(num){
//     let number = num.split(" ")
//     console.log(number)
//     for(let i = 0;i < number.length;i++){
//         number(i) = number[0].slice(0, 1)
//     }


// }
// Case(test)

// ------------------------------------------------------------------------------------------------------------------------------

// function toCapitalize(str){
//     let number = str.split(" ")
//     console.log(number)
//     for(let i = 0; i < number.length; i++){
//         let str2 = number[i] = number[0].slice(0, 1).toUpperCase() + number[0].slice(1) 
//         let str3 = number[i] = number[1].slice(0, 1).toUpperCase() + number[1].slice(1) 
//         let str4 = number[i] = number[2].slice(0, 1).toUpperCase() + number[2].slice(1) 
//         let str5 = number[i] = number[3].slice(0, 1).toUpperCase() + number[3].slice(1) 
//         let str6 = number[i] = number[4].slice(0, 1).toUpperCase() + number[4].slice(1)
//         console.log(str2 + str3 + str4 + str5 + str6)
//     }
// }
// toCapitalize('Front-end dasturchilar yaxshi pul topadi')

// function toCapitalize(str){
//     let number = str.split(" ")
//     // console.log(number)
//     for(let i = 0; i < number.length; i++){
//         let str2 = number[i] = number[0].slice(0, 1).toUpperCase() + number[0].slice(1) 
//         let str3 = number[i] = number[1].slice(0, 1).toUpperCase() + number[1].slice(1) 
//         let str4 = number[i] = number[2].slice(0, 1).toUpperCase() + number[2].slice(1) 
//         let str5 = number[i] = number[3].slice(0, 1).toUpperCase() + number[3].slice(1) 
//         let str6 = number[i] = number[4].slice(0, 1).toUpperCase() + number[4].slice(1)
//         let str7 = number[i] = number[5].slice(0, 1).toUpperCase() + number[5].slice(1)
//         console.log(str2 + str3 + str4 + str5 + str6 + str7)
//     }
// }
// toCapitalize("Backend o'rganish uchun Frontend bilish kerak")

// --------------------------------------------------------------------------------------------------------------------------------------------

// function KebabCase(Case){
//     let newStr = ""
//     let name = Case.split("_")
//     for(let i = 0; i < name.length; i++){
//         newStr += (name[i].slice(0, 1).toUpperCase() + name[i].slice(1))
//     }
//     let case2 = newStr.charAt().toLowerCase() + newStr.slice(1)
//     console.log(case2)
// }
// KebabCase('get_something_data')
// function KebabCase(Case){
//     let newArr = ""
//     let name = Case.split("-")
//     for(let i = 0; i < name.length; i++){
//         newArr += (name[i].slice(0, 1).toUpperCase() + name[i].slice(1))
//     }
//     let case2 = newArr.charAt().toLowerCase() + newArr.slice(1)
//     console.log(case2)
// }
// KebabCase('get-something-data')

// ---------------------------------------------------------------------------------------------------------------------------------------------

// function getStrStatus(str){
//     for(let i = 0; i < str.length; i++){
//         if(str[i].startsWith("O")){
//             console.log("true")
//             break
//         }else{
//             console.log("false")
//         }
// }
// }

//--------------------------------------------------------------------------------------------------------------------------

// getStrStatus('Open Web Academy') 
// function getStrStatus(str){
//  if(str.startsWith("O")){
//     console.log("true")
//  }
//  else{
//     console.log("false")
//  }
// }
// getStrStatus('Open Web Academy')

// -----------------------------------------------------------------------------------------------------------------------
//slice qilib kesib olamiz bosh va oxirgi

// function strText(str, num) {
//         if (num < 1) {
//         return "";
//       } else if (str.length < num || num < 4) {
//         return str.slice(0, num);
//       } else {
//         return str.slice(0, num - 3) + "...";
//       }
//     }
//     console.log(strText("Hello world", 4));

//---------------------------------------------------------------------------------------------------------------------------

// let getCardNumber = (cardNumber) => {
//   if (cardNumber.length !== 16 || isNaN(cardNumber)) {
//     console.log("Noto'g'ri Karta");
//     return;
//   }else if (cardNumber.startsWith("8600")) {
//     console.log("Bu Uzcard karta");
//   } else if (cardNumber.startsWith("9860")) {
//     console.log("Bu Humo karta");
//   } else if (cardNumber.startsWith("5")) {
//     console.log("Bu Master card");
//   } else {
//     console.log("Bunday karta mavjud emas");
//     return;
//   }
//   let maskedCardNumber = cardNumber.slice(0, 4) +"********" + cardNumber.slice(12);
//   console.log(maskedCardNumber);
// }
// getCardNumber("5400120482501113");

//---------------------------------------------------------------------------------------------------------------------------

//1
// function formatMoney(amount){
//     if(amount !== isNaN(amount)){
//         return ("$" + amount.slice(0))
//     }
// }
// console.log(formatMoney("39.99"))

//2
// function noSpace(x){
//     let name = x.split(" ")
//     console.log(name.join(''))
// }
// noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')
// noSpace('8aaaaa dddd r     ')

//4
// function abbrevName(name){
//     let num = name.split(" ")
//     for(let i = 0; i < num.length; i++){
//     num[i] = num[i].slice(0, 1).toUpperCase()+num[i, 1].slice(0, 1).toUpperCase()
//     let nom = num[i].split("")
//     return nom.join(".")
//     }
// }
// console.log(abbrevName("Qalandarov saidbek"))
// function formatMoney(amount){
//         let money = amount.toFixed(2);
//   return "$" + money
// }
// console.log(formatMoney(39.99))

//--------------------------------------------------------------------------------------------------------------------

// let arr = ["Front-end", "back-end", "it-kids", "English"]

// for (let value in arr){
//     console.log(value)
// }
// for (let key of arr){
//     console.log(key)
// }

// //--------------------------+

// let arry = ["Maxim", "Alex", "Mirabror", "Yusuf", "Abbos"]
// function getUser(name){
//     let smallid = 0
//     for(let i = 0; i < name.length; i++){
//         if(name[smallid].length <= name[i].length){
//             smallid = i
//         }
//     }
//     return smallid
// }
// console.log(getUser(arry))

// arry = ["Maxim", "Alex", "Mirabror", "Yusuf", "Abbos"]
// function sliceArr(arrArg, number){
//     let slice = []
//     for(let i = 0; i < arrArg.length; i++){
//         if(arrArg[i].length == number){
//             console.log(slice.push(arrArg[i])) 
//         }
//     }

// }
// sliceArr(arry, 4)

//--------------------------------------------------------------------------------------------------------------------

// let countries  = ["Monaco",
//     "Grenada",
//     "Romania",
//     "Malaysia",
//     "Chile",
//     "Marshall Islands",
//     "Burkina Faso",
//     "Malawi",
//     "Kuwait",
//     "Iceland",
//     "Bahamas",
//     "Sao Tome and Principe",
//     "Serbia",
//     "Vincent",
//     "Portugal",
//     "Syria",
//     "India",
//     "Tajikistan",
//     "Angola",
//     "Rwanda",
//     "Fiji",
//     "Costa Rica",
//     "Mauritius",
//     "Estonia",
//     "Saudi Arabia",
//     "Mexico",
//     "Afghanistan",
//     "Brunei",
//     "Vietnam",
//     "Nigeria",
//     "China",
//     "Guatemala",
//     "Croatia",
//     "Netherlands",
//     "Benin",
//     "Madagascar",
//   ]
// function sliceCountries(countriesArr, num){
//     let smallerCountries = []
//     let biggestCountries = []
//     for(let i = 0; i < countriesArr.length; i++){
//         if (countriesArr[i].length <= num) {
//             smallerCountries.push(countriesArr[i])
//         }
//         else{
//             biggestCountries.push(countriesArr[i])
//         }
//     }
//     console.log(smallerCountries)
//     console.log(biggestCountries);
// }
// sliceCountries(countries, 8)

//-----------------------------------------------------------------------------------------------------
//reverse 1234 - 4321
//sort adsc - acds

// let num = [1, 2, 3, 4, 5, "t", 6, 7, 8, 9]
// num .forEach(function(item, index, arr){
//     console.log(item)
// }) 

// let num = [1, -5, 8, -9, 10]
// function getNumber(arr){
//     let nums = []
//     arr.forEach(function(item, index, arr){
//         if(item < 0){
//             nums.push(item)
//         } 
//     });
//     console.log(nums)
// }
// getNumber(num)

//-------------------------------------------------------------------------------------------------------

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [,6, 7, 8, 9, 10]
// function combinedArrys(arr3, arr4){
//     let num = arr3 + arr4
//     console.log(num.split(","))
// }
// combinedArrys(arr1, arr2)

 
//let number = [1, 12, -2, 45, -4, 7, 13, -89]
// let arr = ["Front-end", "Back-end", "Android", "IT-kids", "Foundation"]

// function getRandomItem(arr1){
//     let random = arr1[(Math.floor(Math.random() * (arr1.length)))]
// console.log(random)
// }
// getRandomItem(arr)
// getRandomItem(number)


// let number = [1, 12, -2, 45, -4, 7, 13, -89]
// let arr = ["Front-end", "Back-end", "Android", "IT-kids", "Foundation"]
// function removeItem(arr, item){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length === item){
//             arr[i].length.splice(item)
//         }
//     }
//     console.log(arr[i])
//     //     if(arr.length !== item){
//     //         console.log("noto'g'ri")
//     //     }
//     //     arr.length.splic(item)
//     // console.log(arr)
// }
// removeItem(number, -4)

//---------------------------------------------------------------------------------------------------

// function doubleChar(str) {
//     let doubleChar = ""
//     for(let i = 0; i < str.length; i++){
//       console.log(doubleChar += str[i] + str[i])
//     }
//   }
//   doubleChar("abcd")

//   function smash (words) {
//     let str = words.join(" ")
//      return str
//   };
//   console.log(smash(num))

// function uefaEuro2016(teams, scores){
//   let str = "At match "+teams[0]+"-"+teams[1]+", ";
//   if(scores[0] === scores[1]){
//     return str + "teams played draw."
//   }
//   else if(scores[0] > scores[1]){
//     return str + teams[0] + " won!"
//   }
//   else if(scores[0] < scores[1]){
//     return str + teams[1] + " won!"
//   }
// }
// console.log(uefaEuro2016(["Portugal", "Fiji"], [0, 1]))

//---------------------------------------------------------------------------------------------------------------------------------------------------


// function positiveSum(arr) {
//   for(let i = 0; i < arr.length; i++){
//     let num = arr[i] + arr[i]
//   }
//   return num
// }
// console.log(positiveSum(1, 2, 3, 4))

//banjo
function areYouPlayingBanjo(name) {
  if(name[0] === "R"){
    return name + " plays banjo"
  }
  else if(name[0] === "r"){
    return name + " plays banjo"
  }
  else{
    return name + " does not plays banjo"
  }
}
console.log(areYouPlayingBanjo("Adam"))

//sum
function sum (numbers) {
  let num = 0
    for(let i = 0; i < numbers.length; i++){
      num  += numbers[i]
    }
    return num
}

//calculate average
function findAverage(array) {
  let num = 0
  for(let i = 0; i < array.length; i++){
    num += array[i]
  }
  return num / array.length
}

function solution(str){
  return str.split("").reverse().join("")
}

//number
function findMultiples(integer, limit){   
  let num = []
  let number = 1
  while(number * integer <= limit){
    num.push(number * integer)
    number++
  }
 console.log(num) 
}
findMultiples(5, 25)
//--------------------------------------------------------

function invert(array) {
  let num = array.join("")
  for(let i = 0; i < num.length; i++){
  return ("-" + num[i])
  }
}
console.log(invert([1,2,3,4,5]))

function quadrant(x, y) {
  if(0 < x && y > 0){
     return 1
}
if(0 > x && y > 0){
  return 2
}
if(0 > x && y < 0){
  return 3
}
if(0 < x && y < 0){
  return 4
}
}
console.log(quadrant(5, -5,))


function sortArray(array) {
  return array.sort()
}
console.log(sortArray([5, 3, 2, 8, 1, 4]))

//---------------------------------------------------------------------------------------------------------

// function digitalRoot(n) {
//     let arr = String(n).split("")//.join(',')
//     console.log(arr)
//     let newarr = 0
//     for(let i = 0; i < arr.length; i++){   ??????????????????????????????
//     newarr += arr[i]
//     return(newarr)
//   }
//   }
//   console.log(digitalRoot(16))

//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

//----------------------------------------------------------------------------------------------------------

// function toCsvText(array) {
//    return array.join(['\n']).split(' ')
// }
// console.log(toCsvText([
//   [ -25, 21, 2, -33, 48 ],
//   [ 30,31,-32,33,-34 ]
//  ]))
 //https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

//----------------------------------------------------------------------------------------------------------

