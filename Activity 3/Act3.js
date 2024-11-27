const getData = async()=>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()
    return data
}

console.log(1)
console.log(2)
getData().then(data =>{
    console.log(data)
}).catch(err =>{
    console.log(err)
})

console.log(3)
console.log(4)
console.log(5)