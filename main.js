let cart = [];

        function register() {
            let athlete = document.getElementById('athlete').value;
            let gender = document.getElementById('gender').value;
            let sport = document.getElementById('sport').value;
            let country = document.getElementById('country').value;

            if (athlete === "" || gender === "" || sport === "" || country === "") {
                alert('All fields are required!');
            } else {
                let athleteObj = {
                    athlete,
                    gender,
                    sport,
                    country
                };

                
                cart.push(athleteObj);
                localStorage.setItem('athletes', JSON.stringify(cart) )

                results = JSON.parse(localStorage.getItem("athletes"))
                
                displayResult();
                clearInputs();
            }
        }

        const editItem = (index) => {
            const athleteObj = cart[index];
            document.getElementById('athlete').value = athleteObj.athlete;
            document.getElementById('gender').value = athleteObj.gender;
            document.getElementById('sport').value = athleteObj.sport;
            document.getElementById('country').value = athleteObj.country;

            // Remove the old item from the list
            cart.splice(index, 1 );
            localStorage.setItem('athletes', JSON.stringify(cart));
            displayResult();
        }

        const displayResult = () => {
            const show = document.getElementById('show');
            show.innerHTML = `
                <tr>
                    <th class="col">S/N</th>
                    <th class="col">Names</th>
                    <th class="col">Gender</th>
                    <th class="col">Sport</th>
                    <th class="col">Country</th>
                    <th class="col">Action</th>
                </tr>
            `;

            cart.map((item, i) => {
                show.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${item.athlete}</td>
                    <td>${item.gender}</td>
                    <td>${item.sport}</td>
                    <td>${item.country}</td>
                    <td>
                        <button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-dark" onclick="editItem(${i})">Edit</button>
                    </td>
                </tr>
                `;
            });

            


           
        }

        const deleteItem = (index) => {
            cart.splice(index, 1);
            localStorage.setItem('athletes', JSON.stringify(cart));
            displayResult();
        }

        function clearInputs() {
            document.getElementById('athlete').value = '';
            document.getElementById('gender').value = '';
            document.getElementById('sport').value = '';
            document.getElementById('country').value = '';
        }

        // Initialize display
        displayResult();




        // Initialize display
document.addEventListener("DOMContentLoaded", initialize )


function initialize() {
    const storedData = localStorage.getItem('athletes');
    if (storedData) {
        cart = JSON.parse(storedData);
    }
    displayResult();
}

// initialize();