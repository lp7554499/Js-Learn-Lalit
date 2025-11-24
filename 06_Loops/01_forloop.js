const username = "Lalit"

for(let i = 0; i<=10; i++){
    console.log(`Outer Loop value : ${i}`)
    for(let j = 0; j<=10; j++){
        console.log(`Table Is : ${i} * ${j} = ${i*j}`)
    }
}