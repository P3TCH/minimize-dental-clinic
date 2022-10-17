function loadcaseid_new(){
    const token = localStorage.getItem('token');

    fetch('/all_app', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    .then(response => response.json())
    .then(data_get => {
        if (data_get.status == 'ok') {
            console.log(data_get)
            let lengths = data_get.userid.length;

            document.getElementById('caseid_z').innerHTML = '';
            for (let i = 0; i < lengths; i++) {
                if(data_get.userid[i].status === 'open'){
                    let el = document.createElement("option");
                    el.textContent = `${data_get.userid[i].appid}`;
                    el.value = `${data_get.userid[i].appid}`;
                    document.getElementById('caseid_z').appendChild(el);
                }
            }
        } else {
            console.log('Error');
        }
        console.log('Success:', data_get);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    loaddoc()
}
