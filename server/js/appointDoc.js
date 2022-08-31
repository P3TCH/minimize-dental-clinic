function load(){
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

                var load_firstname = data_get.firstname;
                var load_lastname = data_get.lastname;
                var load_email = data_get.email;
                var load_userid = data_get.userid;
                var load_tel = data_get.tel;
                var load_birthday = data_get.birthday;
                var load_gender = data_get.gender;
                var load_citizenid = data_get.citizenid;
                var load_type = data_get.type;

            } else {
                localStorage.removeItem('token');
                alert("ERROR!");
                window.location.href = '/login';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        loaddoc()
}

function loaddoc(){
    const token = localStorage.getItem('token');

    fetch('/getdoc_db', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then(data_get => {
            if (data_get.status == 'ok') {

                let lengths = data_get.userid.length;

                document.getElementById('app_doctor').innerHTML = '';
                for (let i = 0; i < lengths; i++) {
                    let el = document.createElement("option");
                    el.textContent = `${data_get.userid[i].firstname} ${data_get.userid[i].lastname}`;
                    el.value = `${data_get.userid[i].userid}`;
                    document.getElementById('app_doctor').appendChild(el);
                }
                

            } else {
                localStorage.removeItem('token');
                alert("ERROR!");
                window.location.href = '/login';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function addapp(){
    let userid = document.getElementById("app_id").value;
    let date = document.getElementById("app_date").value;
    let time = document.getElementById("app_time").value;
    let docid = document.getElementById("app_doctor").value;
    let treatment = document.getElementById("app_arkarn").value;

    data = {userid: userid, docid: docid, treatmentinfo: treatment, time: time, date: date, status: 'open'}

    if(userid === '' || date === '' || time === '' || docid === '' || treatment === ''){
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
    else{

        fetch('/appointment_db', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                alert('ทำการจองเรียบร้อยแล้ว')
                location.reload();
            }else{
                alert('ERROR!');
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

async function show_appointment(){
    const token = localStorage.getItem('token');

    fetch('/all_app', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    .then(response => response.json())
    .then((data_get) => {
        if (data_get.status == 'ok') {
            console.log('asd')
            console.log(data_get)

            fetch('/getdoc_db', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            })
            .then(response => response.json())
            .then(doc_get => {
            if (data_get.status == 'ok') {
                console.log('doc_get')
                console.log(doc_get);
                var index_doc;

                document.getElementById('pointed').innerHTML = '';
                for (let i = 0; i < data_get.userid.length ; i++) {
                    if(data_get.userid[i].status === 'open'){
                        for(let j = 0 ; j < doc_get.userid.length ; j++) {
                            if(data_get.userid[i].docid == doc_get.userid[j].userid) {
                                index_doc = j;
                            }
                        }
                        console.log(index_doc);
                        let p = document.createElement("p");
                        p.textContent = `หมายเลขเคส : ${data_get.userid[i].appid} ชื่อหมอ : ${doc_get.userid[index_doc].firstname} ${doc_get.userid[index_doc].lastname} วันที่ : ${data_get.userid[i].date} เวลา : ${data_get.userid[i].time} อาการ : ${data_get.userid[i].treatmentinfo} สถานะ : ${data_get.userid[i].status}`;
                        document.getElementById('pointed').appendChild(p);
                    }
                    if(data_get.userid[i].status === 'close'){
                        for(let j = 0 ; j < doc_get.userid.length ; j++) {
                            if(data_get.userid[i].docid == doc_get.userid[j].userid) {
                                index_doc = j;
                            }
                        }
                        console.log(index_doc);
                        let p = document.createElement("p");
                        p.textContent = `หมายเลขเคส : ${data_get.userid[i].appid} ชื่อหมอ : ${doc_get.userid[index_doc].firstname} ${doc_get.userid[index_doc].lastname} วันที่ : ${data_get.userid[i].date} เวลา : ${data_get.userid[i].time} รายละเอียดการตรวจ : ${data_get.userid[i].treatmentinfo}`;
                        document.getElementById('closed').appendChild(p);
                    }
                }
            }
            });
        }
        else {

        }
        console.log('Success:', data_get);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

///////////// CHANGE TO CLOSE /////////////

function change(){
    const token = localStorage.getItem('token');

    let caseid = document.getElementById("caseid_z").value;
    let info = document.getElementById("info_z").value;
    let price = document.getElementById("price_z").value;
    let date = new Date();
    let mount = date.getMonth();
    let aDay = date.getDate();

    if(mount < 10){
        mount = `0${mount}`;
    }
    if(aDay < 10){
        aDay = `0${aDay}`;
    }
    let realdate = `${date.getFullYear()}-${mount}-${aDay}`;

    let data = {info: info, caseid: caseid, price: price, date: realdate};

    if(caseid === "" || info === "" || price === ""){
        alert('กรุณากรอกข้อมูลการตรวจให้ครบถ้วน');
    }
    else{
        fetch('/doc_tocheck', {
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
                alert("อัพเดดข้อมูลเรียบร้อย");
                window.location.href = './appointmentDoc';
            } else {
                alert('ERROR!');
                window.location.href = './appointmentDoc';
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

function loadcaseid(){
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

            document.getElementById('caseid').innerHTML = '';
            for (let i = 0; i < lengths; i++) {
                if(data_get.userid[i].status === 'open'){
                    let el = document.createElement("option");
                    el.textContent = `${data_get.userid[i].appid}`;
                    el.value = `${data_get.userid[i].appid}`;
                    document.getElementById('caseid').appendChild(el);
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

function delapp(){
    const token = localStorage.getItem('token');
    let appid = document.getElementById("caseid").value;

    data = {appid: appid};
    
    fetch('/delete_app', {
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
                alert('ลบข้อมูลเสร็จสิ้น');
                location.reload();
            } else {
                alert("ERROR!");
            }
            console.log('Success:', data_get);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}