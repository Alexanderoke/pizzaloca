function yes(){
  var yes=document.getElementById("yes");
var no=document.getElementById("no");
  if (yes) {
    var x=document.getElementById("size").value;
var y=document.getElementById("num").value;
var z=document.getElementById("adress").value;
alert("your order will be delivered at"+" "+z+" "+" "+"total price "+"ksh"+" "+x*y);
  } else {
    alert("Your order is ready for pick up")
    
  }
}


