var tabal =document.getElementById("tabal");
var firstName =document.getElementById("first_name");
var lastName =document.getElementById("last_name");
var grade =document.getElementById("grade");
var button =document.getElementById("button");
button.addEventListener("click" , function(){
fn = firstName.value ;
ln = lastName.value;
g =grade.value ;
console.log(fn , ln , g );
 fetch('http://localhost:5000/arr',{
        method:'POST', 
        body:JSON.stringify({
            first_name:fn ,
            last_name:ln,
              gender:g
        })
    })
    .then( response=>response.json())
    .then((data) => {
      console.log(data);
     tabal.innerHTML ='DONE';
    });
});