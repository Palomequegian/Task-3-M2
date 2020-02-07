alays()
Strings()
function alays() {
	let alumnos=[{nombre:"eri",edad:20},{nombre: "teo",edad: 19},{nombre: "nico",edad: 20},{nombre:"nahuel", edad: 17},{nombre: "pingu",edad: 18},{nombre: "alan",edad: 18},{nombre: "mati",edad: 23},{nombre: "diego",edad: 24},{nombre: "agustin", edad: 20},{nombre: "nahuel2",edad: 17},{nombre: "meji",edad: 20},{nombre:"leandro", edad:18},{nombre:"lucas",edad:20},{nombre:"roman",edad: 23},{nombre:"ezequiel",edad:19},{nombre:"gabi",edad:22},{nombre:"lucio", edad:20},{nombre:"ivan", edad:20},{nombre:"elias",edad:17},{nombre:"nicoF",edad:20},{nombre:"luca",edad:23},{nombre:"edu",edad:25},{nombre:"josé",edad:19},{nombre:"ariel",edad:24},{nombre:"rodri",edad:26},{nombre:"branko",edad:32}]
	alumnos.sort(function (a, b) {
					  if (a.nombre > b.nombre) {
					    return 1;
					  }
					  if (a.nombre < b.nombre) {
					    return -1;
					  }
					  // a must be equal to b
					  return 0;
                      })
		for (let i = 0; i < alumnos.length; i++) {
			console.log(alumnos[i])
		}
		console.log("loop for age" )
		for (let i = 0; i < alumnos.length; i++) {
		    if (alumnos[i].edad %2 == 0) {
		    	console.log(alumnos[i].edad)
		    }

		}
	        console.log("next loop for age")
	let i=0
	while (i<alumnos.length){
		console.log(alumnos[i].edad)
		i++
	}

	let edades=[17,19,20,23,17,20,19,20,20,18,24,20,22,20,19,20,20,17,20,23,25,24,19,23,26,32]
    minus(alumnos)
    index(alumnos, 5)
    repetidos(edades)
    repetidos2(edades)
    juntar (["asd","dwq","rqwe","asdw","asd"])




function minus(arrays)
   {
			let max=arrays[0].edad
			let min=arrays[0].edad
				for (let i = arrays.length - 1; i >= 0; i--) 
	{

				    if (arrays[i].edad>max) {
				    	max=arrays[i].edad
				    }
				    if (arrays[i].edad<min) {
				    	min=arrays[i].edad
				    }

	}
		    console.log(min+"min")
		    console.log(max+"max")
	}
function index(array, num)
{
     console.log(array[num])
}
function repetidos(arrays)
{
	let iguales = arrays.filter((e,index,array)=> array.indexOf(e,index + 1) !=-1)	
	console.log(iguales)
}
function repetidos2(arrays)
{
	let rep=[]
	for (var j = 0; j<arrays.length; j++) {

		for (var i = j+1; i < arrays.length; i++) {

			if (arrays[j]==arrays[i] && rep.indexOf(arrays[j]) == -1) {

				rep.push(arrays[j])

			}
			
		}
	}
	console.log(rep)
}
function juntar(array)
		{
		let juntado=[]
		juntado= array.join()
		console.log(juntado)
		}
}


function Strings()
{
let numerito="1221221"
let textt="watagatapitusberryftsensato"
let text="asereje ja deje tejebe tude jebere sebiunouba majabi an de bugui an de buididipi"
danzaKuduro(numerito)
mueveLaCabeza(textt)
estoSoloEmpieza(text)
goteo(text)
	 function danzaKuduro(string)
	 {
	 	let numeritito=string.split("").reverse().join("")
	 	console.log(numeritito)
	 }

     function mueveLaCabeza(abcdario)
     {
      let mostrar=abcdario.split("").sort().join("")
      console.log(mostrar)
     }
     function estoSoloEmpieza(string)
     {
       console.log(string.toString().replace(/\b\w/g, l => l.toUpperCase()))
     }
     function goteo(array){
     	let splittedArray=array.split(" ")
     	let auxiliar=[]
     	auxiliar[0] = splittedArray [0] 
     	let longerito = auxiliar[0]
     	for (let i=1; i<splittedArray.length; i++) {
            if (splittedArray[i].length>longerito.length){
              longerito=splittedArray[i]
            }
            auxiliar.push(longerito)            
     		}
     	for (let i=1; i<splittedArray.length; i++){
               if (splittedArray[i].length==longerito.length && auxiliar.indexOf(splittedArray[i]==-1)) {
               	auxiliar.push(splittedArray[i])
               }
     	       }
     	console.log(auxiliar)
     	}

     	}
     

