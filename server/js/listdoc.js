function loadlistdoc(){
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
                console.log( data_get.userid)

                let lengths = data_get.userid.length;


                for (let i = 0; i < lengths; i++) {
                    let tr = document.createElement("tr");
                    tr.innerHTML = `<td><input type="text" style="margin: 10px 0px 10px 0px;" class="form-control inputTable" disabled id="numSub" value="${ data_get.userid[i].userid}"></td>
                    <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="Sub" value="${ data_get.userid[i].firstname} ${ data_get.userid[i].lastname}"></td>
                    <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="secSub" value="${ data_get.userid[i].citizenid}"></td>
                    <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="datetime" value="${ data_get.userid[i].tel}"></td>
                    <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="datetime" value="${ data_get.userid[i].email}"></td>`;
                    document.getElementById('tables').appendChild(tr);
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

function loadlistadmin(){
    const token = localStorage.getItem('token');

    fetch('/getadmin_db', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then(data_get => {
            if (data_get.status == 'ok') {
                console.log( data_get.userid)

                let lengths = data_get.userid.length;
                let sex;



                for (let i = 0; i < lengths; i++) {
                    if(data_get.userid[i].gender == 'M'){
                        sex = 'เพศชาย'
                    }
                    else if(data_get.userid[i].gender == 'F'){
                        sex = 'เพศหญิง'
                    }
                    else{
                        sex = 'ไม่ระบุ'
                    }
                    let tr = document.createElement("tr");
                    tr.innerHTML = `<td><input type="text" style="margin: 10px 0px 10px 0px;" class="form-control inputTable" disabled id="numSub" value="${ data_get.userid[i].userid}"></td>
                    <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="Sub" value="${ data_get.userid[i].firstname} ${ data_get.userid[i].lastname}"></td>
                    <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="secSub" value="${sex}"></td>
                    <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="datetime" value="${ data_get.userid[i].tel}"></td>
                    <td><input type="text" style="margin: 10px 0px 10px 0px;"class="form-control inputTable" disabled id="datetime" value="${ data_get.userid[i].email}"></td>`;
                    document.getElementById('tables').appendChild(tr);
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
