function editprofiles(){
    let firstname = document.getElementById("name").value;
    let lastname = document.getElementById("Surname").value;
    let tel = document.getElementById("mobile number").value;

    let housenumber = document.getElementById("housenumber").value;
    let street = document.getElementById("street").value;
    let district = document.getElementById("district").value;
    let province = document.getElementById("province").value;
    let zipcode = document.getElementById("postcode").value;

    if(firstname === "" || lastname === "" || tel === "" || housenumber === "" || street === "" || district === "" || province === "" || zipcode == ""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        data = {firstname: firstname, lastname: lastname, tel: tel}

        const token = localStorage.getItem('token');
        fetch('/editprofile_db', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data_get => {
            if (data_get.status == 'ok') {
                console.log(data_get);
            } else {
                alert('ERROR!');
                window.location.href = './';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        //address

        let data_address = {housenumber: housenumber, street: street, district: district, province: province, zipcode: zipcode}
        fetch('/editaddress_db', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data_address),
        })
        .then(response => response.json())
        .then(data_get => {
            if (data_get.status == 'ok') {
                console.log(data_get);
                alert("อัพเดดข้อมูลเรียบร้อย");
                window.location.href = './';
            } else {
                alert('ERROR!');
                window.location.href = './';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

function loaddata() {
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
                let load_firstname = data_get.firstname;
                let load_lastname = data_get.lastname;
                let load_tel = data_get.tel;

                document.getElementById("name").value = load_firstname;
                document.getElementById("Surname").value = load_lastname;
                document.getElementById("mobile number").value = load_tel;
            } else {
                localStorage.removeItem('token');
                alert('ERROR!');
                window.location.href = '/login';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        loadadd();
}

function loadadd() {
    const token = localStorage.getItem('token');

    fetch('/address_db', {
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
                
                document.getElementById("housenumber").value = data_get.userid.housenumber;
                document.getElementById("street").value = data_get.userid.street;
                document.getElementById("district").value = data_get.userid.district;
                document.getElementById("province").value = data_get.userid.province;
                document.getElementById("postcode").value = data_get.userid.zipcode;
            } else {
                localStorage.removeItem('token');
                alert('ERROR!');
                window.location.href = '/login';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}