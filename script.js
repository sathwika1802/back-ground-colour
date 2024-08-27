

async function create() {
  var url = `https://x-colors.yurace.pro/api/random?number=20`;
  let data = await fetch(url);
  let res = await data.json();
  console.log(res);
  var length = res.length;
  console.log(length);
  var id = Math.floor(Math.random() * length);
  console.log(res[id].hex);
  var hex = res[id].hex;
  console.log(hex);
  document.getElementById("myDIV").style.backgroundColor = hex;
  
}



  var div = document.createElement("div");
  div.classList.add("cont");
  div.innerHTML = `<div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Rndom background colour</h5>
    <div id="myDIV" class="border backgroud"></div>
    <a onClick="create()" href="#" class="btn btn-primary mt-3">Change Colour</a>
  </div>
</div>`;
  document.body.append(div);


