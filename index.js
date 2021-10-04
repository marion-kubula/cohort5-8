function callName(name ,age){
    
    let person=`  ${name} ${age} `
    console.log(person)
}
callName('marion',27)
callName('Halima',25);
callName('viky',19)
callName("mubarak",29)
callName("rafik",6)
callName('zaria',7);


function parentFunction(paremeterFunction){
    return paremeterFunction()
}


const arrowFunction = (parameter1, parameter2)=>{
    const result = parameter1 + parameter2
    console.log(result)

}
arrowFunction(1,2);

for(let i=0; i<=19;i++){
    console.log( 'I love uganda ' + i);
}
