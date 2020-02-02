var money_spent=0;
var g=0;
var o=0;
var r=0;
var e=0;
var rng=0;
function getLoot(){
  let rate=Math.random()*100
  if (rate<0.5){
    document.getElementById("result").innerHTML="Got Pray RNGesus Drop! How.........";
    money_spent+=50000;
    document.getElementById("money-spent").innerHTML="Money Spent: "+money_spent;
    rng+=1
    document.getElementById("rng").innerHTML="Pray RNGesus Drop(s): "+rng;
    
  }
  if (rate<1 && rate>0.5){
    document.getElementById("result").innerHTML="Got Extraordinary Drop! Wow!";
    money_spent+=50000;
    document.getElementById("money-spent").innerHTML="Money Spent: "+money_spent;
    e+=1
    document.getElementById("ext").innerHTML="Extraordinary Drop(s): "+e;
  }
  if (rate<6 && rate>1){
    
    document.getElementById("result").innerHTML="Got Rare Drop! Nice!";
    money_spent+=50000;
    document.getElementById("money-spent").innerHTML="Money Spent: "+money_spent;
    r+=1
    document.getElementById("rare").innerHTML="Rare Drop(s): "+r;
  }
  if (rate<26 && rate>6){
    document.getElementById("result").innerHTML="Got Occasional Drop";
    money_spent+=50000;
    document.getElementById("money-spent").innerHTML="Money Spent: "+money_spent;
    o+=1
    document.getElementById("occ").innerHTML="Occasional Drop(s): "+o;
    
  }
  else if (rate>26){
    document.getElementById("result").innerHTML="Only Got Guaranteed Drop. OOF";
    money_spent+=50000;
    document.getElementById("money-spent").innerHTML="Money Spent: "+money_spent;
    g+=1
    document.getElementById("gua").innerHTML="Guaranteed Drop(s): "+g;
    
  }
}

