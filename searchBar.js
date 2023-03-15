const filFun = () =>{

let inputData = document.getElementById('inp').value.toUpperCase();
let table = document.getElementById('myTable');
let tr = table.getElementsByTagName('tr');

for(let i=1; i<tr.length; i++){

	let td = tr[i].getElementsByTagName('td')[0];

	if(td){

			let textvalue = td.textContent || td.innerHTML;

		if(textvalue.toUpperCase().indexOf(inputData) > -1){

			tr[i].style.display = "";

		}else{
			
			tr[i].style.display = "none";

			} 

		}
	}

}
