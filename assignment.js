// https://github.com/fahimfaysal2077/assignment.js










// ১. kilometerToMeter:


function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    var meter = "Unexpected input!";
  }
  else {
    var meter = kilometer * 1000;
  }
  return meter;
}
var count = kilometerToMeter(160);
console.log(count);












// ২. budgetCalculator:


function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    var totalCost = "Unexpected input!";
  }
  else {
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
  }
  return totalCost;
}
var count = budgetCalculator(2, 3, 4);
console.log(count);











// ৩. hotelCost:


function hotelCost(days) {
  var totalCost = 0;
  if(days < 0){
    var totalCost = "Unexpected input!";
  }
  else if (days <= 10) {
    var totalCost = days * 100;
  }
  else if (days > 10 && days <= 20) {
    var firstTenDaysCost = 10 * 100;
    var remainingDaysCost = days - 10;
    var secondTenDaysCost = remainingDaysCost * 80;
    var totalCost = firstTenDaysCost + secondTenDaysCost;
  }
  else {
    var firstTenDaysCost = 10 * 100;
    var secondTenDaysCost = 10 * 80;
    var remainingDaysCost = days - 20;
    var thirdExtraDaysCost = remainingDaysCost * 50;
    totalCost = firstTenDaysCost + secondTenDaysCost + thirdExtraDaysCost;
  }
  return totalCost;
}
var count = hotelCost(21);
console.log(count);












// ৪. megaFriend:


function megaFriend(friendsName) {
  var longestName = friendsName[0];
  if (friendsName.length == 0) {
    return "Please enter a valid array.";
  }
  for (var i = 0; i < friendsName.length; i++) {
    var name = friendsName[i];
    if (name.length > longestName.length) {
      longestName = name;
    }
  }
  return longestName;
}
var friends = ['Fahim', 'Tanvir', 'Najia', 'Imran', 'Ayesa', 'Abdullah'];
var result = megaFriend(friends);
console.log(result);










