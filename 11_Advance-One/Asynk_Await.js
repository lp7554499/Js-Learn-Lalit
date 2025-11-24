async function harry(params) {
    let delhiWhether = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("47 Degree")
        },1000)

    })

    let bangloreWhether = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("41 Degree")
        },5000)
    })
    // delhiWhether.then(alert)
    // bangloreWhether.then(alert)

    console.log("Delhi Whether is Prcessing...")
     let delhiW = await delhiWhether
     console.log("Delhi Whether is "+delhiW)
     console.log("Banglore Whether is processing...")
     let bangloreW = await bangloreWhether
     console.log("Banglore Whether is : "+bangloreW)

     return [delhiW,bangloreW]


}
harry()
