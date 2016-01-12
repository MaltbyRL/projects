$(document).ready(function(){



var scoreArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];


// 0a,1b,2c
// 3d,4e,5f
// 6g,7h,8i

// Will be used as a reference to add points to the apporpriate scoreArr element.
var aaa = [0, 1, 2, 3, 4, 6, 8];
var bbb = [0, 1, 2, 4, 7];
var ccc = [0, 1, 2, 4, 5, 6, 8];
var ddd = [0, 3, 4, 5, 6];
var eee = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var fff = [2, 3, 4, 5, 8];
var ggg = [0, 2, 3, 4, 6, 7, 8];
var hhh = [1, 4, 6, 7, 8];
var iii = [0, 2, 4, 5, 6, 7, 8];
var dType = "";
var clickCount = 0
var $data = "";


// function init(){

  $(".col-lg-4").on('click', function(){
    console.log(this);
    // dType = $('.col-lg-4[data]').data("type");
    $data = $(this).attr('data');
    console.log("data:", $data)
    player($data);
  });



  //player 1 add 10 to scoreArr, player 2 add 1 to score.
  function player(val){
    // console.log("this:", this);
    clickCount = clickCount + 1
    console.log("val:", val);

    if (clickCount % 2 !== 0){
      for(var i = 0; i < val.length; i++){
        var index = val[i]
        console.log(val)
        scoreArr[index] += 10;
        console.log("score:",scoreArr);
        $data.html('X')
      }
    }else{
      for(var i = 0; i < val.length; i++){
        scoreArr[val[i]] += 1;
        $data.html('O')
      }
    }
    checkWin();
  };

  function checkWin(){
  var checkW = [];
    for (var n = 0; n < scoreArr.length; n++){
      checkW = checkW.concat(scoreArr);
      if(checkW[n] === 30 || checkW[n] === 3){
        console.log("Congratulations you win!!!");
      }
    }
  }
// }
})
