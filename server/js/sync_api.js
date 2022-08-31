function authen() {
    const token = localStorage.getItem('token');

    fetch('/authen_db', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then(data_authen => {
            if (data_authen.status == 'ok') {
                //pass
            } else {
                localStorage.removeItem('token');
                alert('กรุณาเข้าสู่ระบบก่อน');
                window.location.href = '/login';
            }
            console.log('Success:', data_authen);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function checktoken() {
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
                if(data_get.type === 'patient'){
                    window.location = '/homep'
                }
                else if(data_get.type == 'doctor'){
                    window.location = '/homed'
                }
                else{
                    window.location = '/homea'
                }
            } else {
                localStorage.removeItem('token');
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function redirect_from() {
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
                if(data_get.type === 'patient'){
                    window.location = '/homep'
                }
                else if(data_get.type == 'doctor'){
                    window.location = '/homed'
                }
                else{
                    window.location = '/homea'
                }
            } else {
                localStorage.removeItem('token');
                window.location = '/login'
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function register() {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let date = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let citizenid = document.getElementById("citizenid").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    let rePassword = document.getElementById("RepeatPassword").value;

    let housenumber = document.getElementById("homenumber").value;
    let street = document.getElementById("street").value;
    let district = document.getElementById("district").value;
    let province = document.getElementById("province").value;
    let zipcode = document.getElementById("zipcode").value;

    let data = { email: email, password: password, tel: tel, birthday:date, age:'1' ,firstname:fname ,lastname: lname,gender:gender, citizenid:citizenid, type:'patient' };
    let addressdata = { housenumber: housenumber, street: street, district: district, province: province, zipcode: zipcode };

    console.log(data);
    if(fname === "" || lname === "" || date === "" || gender === "" || citizenid === "" || tel === "" || email === "" || password === "" || rePassword ==="" || housenumber ==="" || street === "" || district === "" || province === "" || zipcode === "" ){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(password !== rePassword){
        alert("password ไม่ตรงกัน");
        return;
    }
    else{
        console.log("res")
        fetch('/register_db', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                alert('ทำการสมัครสมาชิกเรียบร้อยแล้ว')
            }else{
                alert('register fail');
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        
        fetch('/register_address', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(addressdata),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                console.log('register address success')
                window.location.href = '/login';
            }else{
                console.log('register address fail');
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

function registerDoc() {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let date = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let citizenid = document.getElementById("citizenid").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    let rePassword = document.getElementById("RepeatPassword").value;

    let housenumber = document.getElementById("homenumber").value;
    let street = document.getElementById("street").value;
    let district = document.getElementById("district").value;
    let province = document.getElementById("province").value;
    let zipcode = document.getElementById("zipcode").value;

    let data = { email: email, password: password, tel: tel, birthday:date, age:'1' ,firstname:fname ,lastname: lname,gender:gender, citizenid:citizenid, type:'doctor' };
    let addressdata = { housenumber: housenumber, street: street, district: district, province: province, zipcode: zipcode };

    console.log(data);
    if(fname === "" || lname === "" || date === "" || gender === "" || citizenid === "" || tel === "" || email === "" || password === "" || rePassword ==="" || housenumber ==="" || street === "" || district === "" || province === "" || zipcode === "" ){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(password !== rePassword){
        alert("password ไม่ตรงกัน");
        return;
    }
    else{
        console.log("res")
        fetch('/register_db', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                alert('เพิ่มข้อมูลหมอเรียบร้อย')
            }else{
                alert('ERROR!');
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        
        fetch('/register_address', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(addressdata),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                console.log('register address success')
                window.location.href = './';
            }else{
                console.log('ERROR!');
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

function registerAdmin() {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let date = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let citizenid = document.getElementById("citizenid").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    let rePassword = document.getElementById("RepeatPassword").value;

    let housenumber = document.getElementById("homenumber").value;
    let street = document.getElementById("street").value;
    let district = document.getElementById("district").value;
    let province = document.getElementById("province").value;
    let zipcode = document.getElementById("zipcode").value;

    let data = { email: email, password: password, tel: tel, birthday:date, age:'1' ,firstname:fname ,lastname: lname,gender:gender, citizenid:citizenid, type:'admin' };
    let addressdata = { housenumber: housenumber, street: street, district: district, province: province, zipcode: zipcode };

    console.log(data);
    if(fname === "" || lname === "" || date === "" || gender === "" || citizenid === "" || tel === "" || email === "" || password === "" || rePassword ==="" || housenumber ==="" || street === "" || district === "" || province === "" || zipcode === "" ){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else if(password !== rePassword){
        alert("password ไม่ตรงกัน");
        return;
    }
    else{
        console.log("res")
        fetch('/register_db', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                alert('เพิ่มข้อมูลผู้ดูแลเรียบร้อย')
            }else{
                alert('ERROR!');
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        
        fetch('/register_address', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(addressdata),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                console.log('register address success')
                window.location.href = './';
            }else{
                console.log('ERROR!');
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = { email: email, password: password };

    fetch('/login_db', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if (data.status == 'ok') {
                localStorage.setItem('token', data.token);
                console.log(data);

                if(data.type === 'patient'){
                    window.location = '/homep'
                }
                else if(data.type == 'doctor'){
                    window.location = '/homed'
                }
                else{
                    window.location = '/homea'
                }
                
            } else {
                alert('อีเมลหรือรหัสผ่านผิด !!');
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
}

function getinfo() {
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
                let load_email = data_get.email;
                let load_userid = data_get.userid;
                let load_tel = data_get.tel;
                let load_birthday = data_get.birthday;
                let load_gender = data_get.gender;
                let load_citizenid = data_get.citizenid;
                let load_type = data_get.type;
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

function docinfo() {
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
                let load_email = data_get.email;
                let load_userid = data_get.userid;
                let load_tel = data_get.tel;
                let load_birthday = data_get.birthday;
                let load_gender = data_get.gender;
                let load_citizenid = data_get.citizenid;
                let load_type = data_get.type;

                document.getElementById("showdoclicens").value = load_citizenid;
                document.getElementById("showemailD").value = load_email;
                document.getElementById("showtelD").value = load_tel;
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