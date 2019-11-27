var tabal =document.getElementById("tabal");
var firstName =document.getElementById("first_name");
var lastName =document.getElementById("last_name");
var grade =document.getElementById("grade");
var button =document.getElementById("button");
var errorMassage =document.getElementById("error");

var  array =[] ;
button.addEventListener("click" , function(){
fn = firstName.value ;
ln = lastName.value;
g =grade.value ;
console.log(fn , ln , g );
 const my = new Headers();
my.append('Content-Type', 'application/json');
 fetch('http://localhost:5000/student',{
        method:'POST',
       //  headers : my , 
        body:JSON.stringify({
           first_name :fn ,
           last_name :ln,
              gender :g
        })
    })
    .then( response=>response.json())
    .then((data) => {
     array= data,
     console.log(fn , ln , g );
      console.log(array);
      if(array==''){
         errorMassage.innerHTML ='THIS IS PAGE IS EMPTY';
         errorMassage.style='background: white';
      }else{
        errorMassage.innerHTML ='DONE';
        errorMassage.style='background: white';
      }
     
    });
});



