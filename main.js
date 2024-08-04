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

            for (let i = 0; i < cart.length; i++) {
                show.innerHTML += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${cart[i].athlete}</td>
                        <td>${cart[i].gender}</td>
                        <td>${cart[i].sport}</td>
                        <td>${cart[i].country}</td>
                        <td>
                            <button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-dark" onclick="editItem(${i})">Edit</button>
                        </td>
                    </tr>
                `;
            }
        }

        const deleteItem = (index) => {
            cart.splice(index, 1);
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