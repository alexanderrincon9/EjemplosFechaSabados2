/*let codigoNave= "ARQ2555: Sara Bel-Sun"

let cajones= codigoNave.split(":")

console.log(cajones[1])
*/


function obtenerNombre (codigoNave){
     return(codigoNave.split(":"))

}
console.log (obtenerNombre("ARQ2555:Sara Bel-Sun")[1])