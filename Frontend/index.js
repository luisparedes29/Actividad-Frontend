let li = document.getElementsByClassName("nosotros__item");
let ul = document.getElementsByClassName('nosotros__item--oculto')
console.log(li);
for (let i = 0; i < li.length; i++) {
    li[i].onclick = () => {
        ul[i].classList.toggle('claseNose');
    }
}

const formElement = document.getElementById('suscripcion')

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    let datos={ nombre: nombre, email: email}
    let datosJson= JSON.stringify(datos);
    console.log(datosJson);

    fetch("http://localhost:3000",{
        method: 'Post',
        body: datosJson
    }).then(x=> console.log("hola"))

    formElement.reset();
})

