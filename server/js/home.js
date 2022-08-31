function loadnamehome(){
    const token = localStorage.getItem('token');

    fetch('/getinfo_db', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then(data_get => {
            if (data_get.status == 'ok') {
                //alert('info ok')
                console.log(data_get);

                var load_firstname = data_get.firstname;
                var load_lastname = data_get.lastname;
                var load_email = data_get.email;
                var load_userid = data_get.userid;
                var load_tel = data_get.tel;
                var load_birthday = data_get.birthday;
                var load_gender = data_get.gender;
                var load_citizenid = data_get.citizenid;
                var load_type = data_get.type;
                document.getElementById("namehome").innerHTML = `${load_firstname} ${load_lastname}`;
            } else {
                localStorage.removeItem('token');
                //window.location.href = '/login';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function profile(){
    window.location.href = '/profileP'
}