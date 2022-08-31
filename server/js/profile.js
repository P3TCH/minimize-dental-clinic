function loadprofile(){
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
                
                document.getElementById("showbirtday").value = load_birthday;

                if(load_gender == 'M'){
                    document.getElementById("showgender").value = 'ผู้ชาย'
                }
                else if(load_gender == 'F'){
                    document.getElementById("showgender").value = 'ผู้หญิง'
                }
                else{
                    document.getElementById("showgender").value = 'ไม่ระบุ'
                }
                const birth = load_birthday.split("-");
                let today = new Date();
                
                document.getElementById("showage").value = (today.getFullYear() - (birth[0]*1));
                document.getElementById("showcitizenid").value = load_citizenid;
                document.getElementById("showemailP").value = load_email;
                document.getElementById("showtelP").value = load_tel;

                
            } else {
                localStorage.removeItem('token');
                //window.location.href = '/login';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


        fetch('/address_db', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(address_get => {
                if (address_get.status == 'ok') {
                    console.log(address_get);
                    
                    document.getElementById("showehomenumber").value = address_get.userid.housenumber;
                    document.getElementById("showedistric").value = address_get.userid.district;
                    document.getElementById("showeprovince").value = address_get.userid.province;
                    document.getElementById("showezipcode").value = address_get.userid.zipcode;
                } else {
                    localStorage.removeItem('token');
                }
                console.log('Success:', address_get);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
}