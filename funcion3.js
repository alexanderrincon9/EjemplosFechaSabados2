/*let tem1=1
let tem2=8
let tem3=50
let tem4=80


let temperaturaMaxima
if (tem1>tem2 && tem1>tem3 && tem1>tem4){

    temperaturaMaxima=tem1  
} else if (tem2>tem1 && tem2>tem3 && tem2>tem4){
    temperaturaMaxima=tem2
}else if(tem3>tem1 && tem3>tem2 && tem3>tem4){
    temperaturaMaxima=tem3
}
else temperaturaMaxima= tem4

   
console.log(temperaturaMaxima)

*/
function temperaturaMaxima (tem1,tem2,tem3,tem4){
    return(Math.max(tem1,tem2,tem3,tem4))

}
function temperaturaMin(tem1,tem2,tem3,tem4){
    return(Math.min(tem1,tem2,tem3,tem4))

}
console.log (temperaturaMaxima(1,8,50,80))
console.log (temperaturaMin(1,8,50,80))
