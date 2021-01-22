










// ১. kilometerToMeter:


function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}
var result = kilometerToMeter(160);
console.log(result);












// ২. budgetCalculator:


function budgetCalculator(watch, phone, laptop) {
  var watchPrice = watch * 50;
  var phonePrice = phone * 100;
  var laptopPrice = laptop * 500;
  var totalPrice = watchPrice + phonePrice + laptopPrice;
  return totalPrice;
}
var count = budgetCalculator(2, 3, 4);
console.log(count);











// ৩. hotelCost:


function hotelCost(day) {
  var taka = 0;
  if (day <= 10) {
    taka = day * 100;
  }
  else if (day <= 20) {
    var firstPart = 10 * 100;
    var remaining = day - 10;
    var secondPart = remaining * 80;
    taka = firstPart + secondPart;
  }
  else {
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = day - 20;
    var thirdPart = remaining * 50;
    taka = firstPart + secondPart + thirdPart;
  }
  return taka;
}
var count = hotelCost(71);
console.log(count);












// ৪. megaFriend:


function megaFriend(friends) {
  var longestWord = friends[0];

  for (var i = 0; i < friends.length; i++) {
    var words = friends[i];
    if (words.length > longestWord.length) {
      longestWord = words;
    }
  }
  return longestWord;
}
var friends = ['Fahim', 'Tanvir', 'Najia', 'Imran', 'Ayesa', 'Abdullah'];
var result = megaFriend(friends);
console.log(result);










