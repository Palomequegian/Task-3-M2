const app= new Vue({
	el: '#app',
	data:{
		url: "https://api.propublica.org/congress/v1/113/senate/members.json",

		init: {
			method: 'GET',
			headers:{
				"X-API-Key":"94nN9yzCknveRBRndwiUUP1kUKvIH4lJh7oYTJPu"
			}
		},
		members:[],
		totales:{
			democrats:{total:0,porcentage:0},
			republican:{total:0,porcentage:0},
			independents:{total:0,porcentage:0},
			totals:{total:0}
		},
		most:[],
		worse:[],
		most_attendance:[],
		worse_attendance:[]

	},

	created(){
		fetch(this.url, this.init)
		.then(function(res){
			if (res.ok) {
				return res.json();
			}
			else {
				throw new error(res.status)
			}  	
		})
		.then(function(json){
			app.members=json.results[0].members
			app.totall()
			app.most = app.ten(app.members,"votes_with_party_pct",true)
			app.worse = app.ten(app.members,"votes_with_party_pct",false)
			app.most_attendance= app.ten(app.members,"missed_votes_pct",false)
			app.worse_attendance= app.ten(app.members,"missed_votes_pct",true)
		}) 
		.catch(function(error){
			console.log(error)
		})
	},
	methods:{
		totall(){
			for (let i = app.members.length - 1; i >= 0; i--) {
				if (app.members[i].party=="D") {
					app.totales.democrats.total++
					app.totales.democrats.porcentage+=app.members[i].votes_with_party_pct  
				}
				if (app.members[i].party=="R") {
					app.totales.republican.total++
					app.totales.republican.porcentage+=app.members[i].votes_with_party_pct  
				}
				if (app.members[i].party=="I") {
					app.totales.independents.total++
					app.totales.independents.porcentage+=app.members[i].votes_with_party_pct  
				}
				app.totales.totals.total++
			}
			app.totales.republican.porcentage != 0 ? app.totales.republican.porcentage=parseFloat((app.totales.republican.porcentage/app.totales.republican.total).toFixed(2)): app.totales.republican.porcentage=0
			app.totales.independents.porcentage != 0 ? app.totales.independents.porcentage=parseFloat((app.totales.independents.porcentage/app.totales.independents.total).toFixed(2)) : app.totales.independents.porcentage=0
			app.totales.democrats.porcentage != 0 ? app.totales.democrats.porcentage=parseFloat((app.totales.democrats.porcentage/app.totales.democrats.total).toFixed(2)) : app.totales.democrats.porcentage=0
		},
		ten(memberpct, data, boolean){
			let array = memberpct.filter(e => e.total_votes>0)
			                     .sort(function (a, b) {
				return a[data] - b[data]
			})

			let porc = Math.round(array.length*0.1)

			if (boolean){
				array.reverse()
			}

			let result = array.slice(0,porc)

			while (array[porc][data]==array[porc+1][data]){
				porc+=1
				result.push(array[porc])
			}

			return result
		}    
	}
})