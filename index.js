// console.log(fetch('https://www.shutterstock.com/image-photo/beautiful-wonderful-cute-kitten-wallpaper-600nw-2435308283.jpg')
// .then(response=>{
//     // console.log(response)
//     return response.blob();
// })
// .then(blob=>{
//     // console.log(blob)
//     document.querySelector('#cute-cat').src=URL.createObjectURL(blob)
// })
// .catch(error=>{
//     console.log(error)
// })

// )

//id selector
const content = document.querySelector("#content")
//loading page
window.addEventListener("load", ()=>{
    getUser();
})

function getUser(){
    //define html variable
    let html=""
    fetch("http://localhost:5000/api/members", {mode: "cors"})
    .then(response=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element)=>{
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })
        content.innerHTML = html
    })
    .catch((error)=>{
        console.log(error)
    })
}
