function loadtreatment(){
    const token = localStorage.getItem('token');
    let count = 0;

    fetch('/get_appointment', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    .then(response => response.json())
    .then((data_get) => {
        if (data_get.status == 'ok') {
            console.log(data_get);
            for(let i = 0 ; i < data_get.userid.length ; i++){
                if(data_get.userid[i].status === 'close'){
                    console.log('test')
                    count++;
                    let tr = document.createElement("tr");
                    tr.innerHTML = `<tr>
                    <th scope="row">${count}</th>
                    <td>
                        <div class="input-group mb-3">
                            <input type="text" class="input-group-text" value="${data_get.userid[i].date}" disabled>
                        </div>
                    </td>
                    <td>
                        <div class="input-group mb-3">
                            <input type="text" class="input-group-text" value="${data_get.userid[i].treatmentinfo}" style="width:600px;" disabled>
                        </div>
                    </td>
                    <td>
                        <div class="input-group mb-3">
                            <input type="text" class="input-group-text" value="${data_get.userid[i].price}" disabled>
                        </div>
                    </td>
                    </tr>`
                    document.getElementById("tbody_info").appendChild(tr);
                }
            }
        } else {
            let tr = document.createElement("tr");
                    tr.innerHTML = `<tr>
                    <th scope="row">1</th>
                    <td>
                        <div class="input-group mb-3">
                            <input type="text" class="input-group-text" value="" disabled>
                        </div>
                    </td>
                    <td>
                        <div class="input-group mb-3">
                            <input type="text" class="input-group-text" value="" style="width:600px;" disabled>
                        </div>
                    </td>
                    <td>
                        <div class="input-group mb-3">
                            <input type="text" class="input-group-text" value="" disabled>
                        </div>
                    </td>
                    </tr>`
                    document.getElementById("tbody_info").appendChild(tr);
        }
        console.log('Success:', data_get);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}