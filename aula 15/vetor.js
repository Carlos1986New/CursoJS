let valores = [5,4,6,8,7]
/*for (pos = 0; pos < valores.length; pos++){
  console.log(valores[pos])
  */

for (let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
