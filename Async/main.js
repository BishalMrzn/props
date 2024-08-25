async function a(){
    let p= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // alert("This is set timeout of p1")
            resolve("This is resolve 1")
        },1000)
    })
    let p2= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // alert("This is set timeout of p2")
            resolve("this is weather 2")
        },5000)
    })
    // p.then((alert))
    // p2.then((alert))
    console.log("1")
    let res1=await p2
    console.log("2")
    console.log("3"    )
    let res2=await p
    console.log("4")
    return[res1,res2]

}
console.log("testing")
let b=a()
b.then((value)=>{
    console.log(value)
})