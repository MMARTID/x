class User {
    constructor(name, username, password, edad){
        this.id = User.generateId();
        this.name = name; 
        this.username = username;
        this.password = password;
        this.edad = edad;
    }
    
     // Método estático para generar un ID único
     static generateId() {
        return 'user_' + Math.random().toString(36).substr(2, 9); // Ejemplo: user_ab12cd34e
    }

}

document.getElementById('singUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    const name = document.getElementById("nameInput").value;
    const username = document.getElementById("userNameInput").value;
    const password = document.getElementById("passwordInput").value;
    const edad = parseInt(document.querySelector("#ageInput").value);

    const newUser = new User(name, username, password, edad);



    if ( !name || !username || !password|| isNaN(edad) || edad <= 0 ) {
        alert("Todos los campos son obligatorios");

        return;

    } else {
        
        localStorage.setItem("user_" + newUser.id, JSON.stringify(newUser));
        console.log(newUser); 
        

    }

});



/*function register() {
                        
    var formData = new FormData(event.target);
        var data = {};

        formData.forEach((value, key) => {
            data[key] = value;

        });


}*/
