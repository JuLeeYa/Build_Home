 $(function(){



  var json = $.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function(data){
    var arr = data;



// 1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту;

var skillsArr = (_.uniq(_.flattenDeep(_.map(arr, "skills")))).sort(function sortFunction(a, b){
  if( a.toLowerCase() <  b.toLowerCase())
     return -1 // Или любое число, меньшее нуля
   if(a.toLowerCase()> b.toLowerCase() )
     return 1  // Или любое число, большее нуля
  // в случае а = b вернуть 0
  return 0
});
console.log('1. Массив скиллов:  ',skillsArr)


//  2. Массив имен (поле name) людей, отсортированных в зависимости от 
// количества их друзей (friends); 
var friends = _.sortBy(arr, "friends.length");
var nameArr = (_.map(friends, "name"));

console.log('2. Массив имен: ', nameArr)

//  3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей

var friendsArr = _.flattenDeep(_.map(arr, "friends"));
var newFriendsArr = new Array();
for (var i = 0; i < friendsArr.length; i++) {
  newFriendsArr[i] = _.nth(friendsArr, i).name;
}

var usersFriends = _.uniq(newFriendsArr)
console.log('3. Массив друзей:  ', usersFriends)

})










  

});