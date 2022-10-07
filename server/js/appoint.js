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

                document.getElementById("app_id").value = load_userid;
            } else {
                console.log('error:');
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
                console.log('error:');
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

    data = {userid: userid, docid: docid, treatmentinfo: treatment, time: time, date: date, status: 'waitting'}

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
                console.log('error:');
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
                            let p = document.createElement("p");
                            p.innerHTML = `หมายเลขเคส : ${data_get.userid[i].appid} ชื่อหมอ : ${doc_get.userid[index_doc].firstname} ${doc_get.userid[index_doc].lastname} วันที่ : ${data_get.userid[i].date} เวลา : ${data_get.userid[i].time} อาการ : ${data_get.userid[i].treatmentinfo}`;
                            document.getElementById('pointed').appendChild(p);
                        }
                    }


                } else {

                }
                console.log('Success:', data_get);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {

        }
        console.log('Success:', data_get);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function loadcaseid(){
    const token = localStorage.getItem('token');

    fetch('/get_appointment', {
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
            console.log('testaaa')
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

var stringaa;

function getname_by_id(tr, input_id){
    const token = localStorage.getItem('token');

    fetch('/getalluser', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    .then(response => response.json())
    .then(data_get => {
        if (data_get.status == 'ok') {
            for (let i = 0; i < data_get.users.length; i++) {
                if (data_get.users[i].userid == input_id) {
                    console.log("MATH " + data_get.users[i].firstname + " " + data_get.users[i].lastname);
                    tr.innerHTML += `<td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="docname" value="${data_get.users[i].firstname} ${data_get.users[i].lastname}"></td>`;
                }
            }
        } else {
        }
        console.log('Success:', data_get);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function show_appointment_new(){
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
            fetch('/getalluser', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            })
            .then(response => response.json())
            .then(user_get => {
                if (user_get.status == 'ok') {
                    //fetch done
                    for (let i = 0; i < data_get.userid.length; i++) {
                        let tr = document.createElement("tr");
                        if(data_get.userid[i].status === 'close'){
                            console.log();
                            let docname = "";
                            let username = "";
                            let tel = "";
                            //get name
                            for (let j = 0; j < user_get.users.length; j++) {
                                if (user_get.users[j].userid == data_get.userid[i].docid) {
                                    docname = user_get.users[j].firstname + " " + user_get.users[j].lastname;
                                }
                                if (user_get.users[j].userid == data_get.userid[i].userid) {
                                    username = user_get.users[j].firstname + " " + user_get.users[j].lastname;
                                    tel = user_get.users[j].tel;
                                }
                            }

                            tr.innerHTML = `<td><input type="text" style="margin: 10px 0px 10px 0px;" class="form-control inputTable" disabled id="caseid" value="${data_get.userid[i].appid}"></td>
                            <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="docname" value="${docname}"></td>
                            <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="username" value="${username}"></td>
                            <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="date" value="${data_get.userid[i].date}"></td>
                            <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="time" value="${data_get.userid[i].time}"></td>
                            <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="phone" value="${tel}"></td>
                            <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="treatmentinfo" value="${ data_get.userid[i].treatmentinfo}"></td>`;
                            document.getElementById('tables').appendChild(tr);
                        }
                    }
                } else {
                }
                console.log('Success:', data_get);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        console.log('Success:');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
