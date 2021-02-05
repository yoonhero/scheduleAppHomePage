var date = new Date();
var startTime = date.getMinutes();
var nowTime = date.getMinutes();
var category = [];
var categoryAnimal = 0;
var categoryRobot = 0;
var categoryGift = 0;
var categorySpecial = 0;
var categoryAnother = 0;

//post time
function time() {
  var posttime = nowTime - startTime;
  document.getElementById('post1-time').innerHTML = posttime + ' minutes';
}

//post category
function cate(){
  category.unshift(prompt('what is category'));
  document.getElementById('post1-category').innerHTML = category;
  console.log(category);

  //category count system
  if (category == 'animal') {
    categoryAnimal += 1;
    console.log(categoryAnimal);
    document.getElementById('categoryAnimal').innerHTML = '(' + categoryAnimal + ')';
  } else if(category == 'robot'){
    categoryRobot += 1;
    console.log(categoryRobot);
    document.getElementById('categoryRobot').innerHTML = '(' + categoryRobot + ')';
  } else if(category == 'gift'){
    categoryGift += 1;
    console.log(categoryGift);
    document.getElementById('categoryGift').innerHTML = '(' + categoryGift + ')';
  } else if(category == 'special'){
    categorySpecial += 1;
    console.log(categorySpecial);
    document.getElementById('categorySpecial').innerHTML = '(' + categorySpecial + ')';
  } else if(category == 'another'){
    categoryAnother += 1;
    console.log(categoryGift);
    document.getElementById('categoryAnother').innerHTML = '(' + categoryAnother + ')';
  }
}



time();
cate();
