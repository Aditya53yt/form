 var submit=document.getElementById("entry")
 var  displayTable=document.getElementById('display')
 var formData=document.getElementById('form')
var newRow=displayTable.insertRow(row)
var btn=document.getElementById('button')
submit.addEventListener("click",displaylist)
   var row=1
function displaylist(e){
    e.preventDefault()
  var Fname=document.getElementById("Inputf").value
    var  lname=document.getElementById("Inputl").value
     var address=document.getElementById("InputA").value
   var  address2=document.getElementById("InputA2").value
   var city=document.getElementById("InputC").value
   var state=document.getElementById("InputS").value

if(!Fname||!lname||!address||!address2||!city||!state){
    alert("plz fill all the boxes")
    return;
}


  var cell1=newRow.insertCell(0)
var  cell2=newRow.insertCell(1)
var  cell3=newRow.insertCell(2)
var cell4=newRow.insertCell(3)
 var cell5=newRow.insertCell(4)
 var cell6=newRow.insertCell(5)
 var cell7=newRow.insertCell(6)

 cell1.innerHTML=Fname
 cell2.innerHTML=lname
 cell3.innerHTML=address
 cell4.innerHTML=address2
 cell5.innerHTML=city
 cell6.innerHTML=state

 row++;

 cell7.appendChild(dltbtn)

 

}


var dltbtn = document.createElement('button')

 dltbtn.className = " btn btn-danger float-end "
 dltbtn.innerText = " DEL"

dltbtn.addEventListener('click' , removelist)


function removelist(e){

    if(e.target.className.includes("btn-danger")){

        dltbtn= e.target.parentElement
      newRow.remove()




    }




}
