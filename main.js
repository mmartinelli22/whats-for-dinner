var dishName = document.querySelector('.Main-Dish');
var sideName = document.querySelector('.Side');
var dessertName = document.querySelector('.Dessert');
var randomMealButton = document.querySelector("#mealChoice2");
var letsCook = document.getElementById('Cook-Button');
var hideCookIcon = document.getElementById('Trashcan');
var makeMeal = document.getElementById('mealChoice2');
var makeSide = document.getElementById('mealChoice1');
var makeDessert = document.getElementById('mealChoice3');




var meals = ["Smokehouse Burger" , "Bacon Cheeseburger" ,"Mushroom Burger" , "Bleu Ribbon Burger" , "Ribeye" , "Sirloin" ,
"filet", "New York Strip" , "Hangar Steak","Chuck Steak"]
var sides = ["Soup" , "Baked Potato" , "Mashed Potato" , "Asparagus" , "Broccoli" , "Garden Salad", "Green Beans"]
var desserts = ["Cake" , "Apple Pie" , "Cheesecake" , "Crem Brulee",]

// .addEventListener('click', getRandomSide);
letsCook.addEventListener('click' ,weCook)

function hide(element) {
document.getElementById('Trashcan').style.display = 'none';
}
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
//`You should make ${theDish}!`
function weCook() {
  var randomDish = meals[getRandomIndex(meals)];
  var randomSide = sides[getRandomIndex(sides)];
  var randomDessert = desserts[getRandomIndex(desserts)]
   var radioButtons = document.querySelectorAll('input[type="radio"]');
  if(!dishName.checked){
    meals.push(randomDish)
  }
  if (!sideName.checked) {
    sides.push(randomSide)
  }
  if (!dessertName.checked) {
    desserts.push(randomDessert)
  }
  if (!radioButtons.checked){
    hide(hideCookIcon)
  }

}
