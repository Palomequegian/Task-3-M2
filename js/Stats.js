function tablas(){
let members = data.results[0].members
let stats= {
	d_total: total("D").length,
	i_total: total("I").length,
	r_total: total("R").length,
    g_total: data.results[0].num_results,
    prom_d: parseFloat(promedio("D").toFixed(2)),
    prom_i: parseFloat(promedio("I").toFixed(2)),
    prom_r: parseFloat(promedio("R").toFixed(2)),
}

function total(val){
    return members.filter(total=> total.party==val)
}

function promedio(val) {
 let prom = total(val)
    return (prom.reduce((sum, member) => sum + member.votes_with_party_pct,0))/prom.length
}

function most(memberpct, data, boolean){
let array = memberpct.filter(e => e.total_votes>0)
 					.sort(function (a, b) {
					  return a[data] - b[data]})

const porc = Math.round(array.length*0.1)
 
if (boolean=true){
	array.reverse()
}

   let result = array.slice(0,porc)

    while (array[porc][data]==array[porc+1][data]){
     porc=+1
     result.push(array[porc])
   }

   return result
}
console.log(most(members,"votes_with_party_pct",true))
}
