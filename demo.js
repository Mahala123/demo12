var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
form.addEventListener("submit", addItem);
function addItem(e) {
  e.preventDefault();
  var newItem1 = document.getElementById("s1").value;
  var newItem1 = document.getElementById("s2").value;
  var newItem1 = document.getElementById("s3").value;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem1 - newItem2 - newItem3));
  itemList.appendChild("li");
}
