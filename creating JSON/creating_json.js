// function getTodos(callback) {

//     const request = new XMLHttpRequest(); // state: 0

//     request.open('GET', 'song.json');// state: 1
//     request.send(); // state: 2

//     request.addEventListener('readystatechange', ()=> {
//         if(request.readyState == 4 && request.status == 200) {

//             const data = JSON.parse(request.responseText);

//             callback(undefined, data);
//         }
//         else if(request.readyState == 4) {
//             callback(request.status, undefined);
//         }
// });

// }

// getTodos( (err, data)=>{
//     if(data) {
//         console.log(data);
//     }
//     else {
//         console.log(err);
//     }
// });





function getData(){
    return new Promise((resolve,reject)=>{

    const request = new XMLHttpRequest(); // state: 0

    request.open('GET', url);// state: 1
    request.send(); // state: 2

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if (request.readyState == 4) {
            reject(request.status);
        }
    });

    })
}

getData("song.json").then((data) => {
console.log(data);
}).catch((error) =>{
console.log(error);
})