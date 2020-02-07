document.getElementById("dropdown").innerHTML=`<option value="ALL">ALL</option>`
 let checkbox=document.getElementsByTagName("input")
 for(let i=0; i<checkbox.length;i++){
 checkbox[i].addEventListener("click",tabla)
 }

dropdown.addEventListener("change",tabla)
 function tabla(){
 table=[] 
 let dropdown=document.getElementById("dropdown").value
document.getElementById("dropdown").innerHTML=`<option value="ALL">ALL</option>`
 let members = data.results[0].members
 const tbody = document.querySelector("tbody")
 tbody.innerHTML=""
 const thead = document.querySelector("thead")
 var table

table = members.filter(function(member)
  {
for (var i = checkbox.length - 1; i >= 0; i--) 

    {
	  	if (checkbox[i].checked==true && member.party==checkbox[i].name && (member.state==dropdown || dropdown=="ALL")){
    	  return member
	  	}
	}
  }
)

	 thead.innerHTML = `<td>Name</td><td>Party</td><td>State</td><td>Seniority</td><td>Percentage of votes</td>`
	table.forEach(table => {
		let row = tbody.insertRow(-1);
		let fullName =  `${table.first_name} ${table.middle_name || ""} ${table.last_name}`
		let anchor = table.url == "" ? fullName : `<a href="${table.url}">${fullName}</a>`

		row.innerHTML = `<td>${anchor}</td>
		                 <td>${table.party}</td>
		                 <td>${table.state}</td>
		                 <td>${table.seniority}</td>
		                 <td>${"%"+table.votes_with_party_pct}`
})
let unique = [...new Set(table.map(item => item.state))];
   for (var i = unique.length - 1; i >= 0; i--) {
      document.getElementById("dropdown").innerHTML += `<option value=${unique[i]}>${unique[i]}</option>`
		document.getElementById("dropdown").value = dropdown
}}
tabla()


