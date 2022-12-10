var express = require('express');
const path = require('path')
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { emitWarning } = require('process');
const { application } = require('express');

var port = 8080;
const secret = 'i here too';


app.use(cors())

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

const connection = mysql.createConnection({
    host: '10.2.0.2',
    user: 'root',
    password: '123456',
    database: 'dentist'
});

//========================== FOR HTML =================================//

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/redirect.html');
})

app.get('/check', function (req, res, next){
    res.sendFile(__dirname + '/check.html');
})

app.get('/logout', function (req, res, next){
    res.sendFile(__dirname + '/logout.html');
})

app.get('/login', function (req, res, next) {
    res.sendFile(__dirname + '/login.html');
})

app.get('/historylist', function(req, res, next) {
    res.sendFile(__dirname + '/historylist.html');
})

app.get('/signup', function(req, res){
    res.sendFile(__dirname + '/signup.html');
})

app.get('/homea', function(req, res){
    res.sendFile(__dirname + '/homea.html');
})

app.get('/homed', function(req, res){
    res.sendFile(__dirname + '/homed.html');
})

app.get('/homep', function(req, res){
    res.sendFile(__dirname + '/homep.html');
})

app.get('/edituser', function(req, res){
    res.sendFile(__dirname + '/edituser.html');
})

app.get('/editdoc', function(req, res){
    res.sendFile(__dirname + '/editdoc.html');
})

app.get('/appointment', function(req, res){
    res.sendFile(__dirname + '/appointment.html');
})

app.get('/profileDoc', function(req, res){
    res.sendFile(__dirname + '/profileDoc.html');
})

app.get('/profileP', function(req, res){
    res.sendFile(__dirname + '/profileP.html');
})

app.get('/treatmenthistory', function(req, res){
    res.sendFile(__dirname + '/treatmenthistory.html');
})

app.get('/listDoctor', function(req, res){
    res.sendFile(__dirname + '/listDoctor.html');
})

app.get('/listEmployee', function(req, res){
    res.sendFile(__dirname + '/listEmployee.html');
})

app.get('/appointmentDoc', function(req, res){
    res.sendFile(__dirname + '/appointmentDoc.html');
})

app.get('/signupDoc', function(req, res){
    res.sendFile(__dirname + '/signupDoc.html');
})

app.get('/signupAdmin', function(req, res){
    res.sendFile(__dirname + '/signupAdmin.html');
})

app.get('/appointmentEmp', function(req, res){
    res.sendFile(__dirname + '/appointmentEmp.html');
})

app.post('/register_db', jsonParser , function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds).then(function(hash) { //Hash password
        connection.execute(
        'INSERT INTO users (email, password, tel, birthday, age, firstname, lastname, gender, citizenid, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [req.body.email, hash, req.body.tel, req.body.birthday, req.body.age, req.body.firstname, req.body.lastname, req.body.gender, req.body.citizenid , req.body.type],

        function(err, results, fields) {
            if(err) {
                res.json({status: 'error' , message: err});
                return 0;
            }else{
                res.json({status: 'ok'});
                console.log('Registed')
            }
        }
        );
    });
})

app.post('/register_address', jsonParser , function (req, res, next) {
    connection.execute(
        'INSERT INTO address (housenumber, street, district, province, zipcode) VALUES (?, ?, ?, ?, ?)',
        [req.body.housenumber, req.body.street, req.body.district, req.body.province, req.body.zipcode  ],

        function(err, results, fields) {
            if(err) {
                res.json({status: 'error' , message: err});
                return 0;
            }else{
                res.json({status: 'ok'});
                console.log('Registed Address')
            }
        }
    );
})

app.post('/appointment_db', jsonParser , function (req, res, next) {
    connection.execute(
        'INSERT INTO appointment (appid, userid, docid, treatmentinfo, price, time, date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [0, req.body.userid, req.body.docid, req.body.treatmentinfo, 0 , req.body.time, req.body.date, req.body.status],

        function(err, results, fields) {
            if(err) {
                res.json({status: 'error' , message: err});
                return 0;
            }else{
                res.json({status: 'ok'});
                console.log('Add appointment')
            }
        }
    );
})

app.post('/login_db', jsonParser , function (req, res, next) {
    connection.execute(
        'SELECT * FROM users WHERE email=?',
        [req.body.email],

        function(err, users, fields) {
            if(err) {
                res.json({status: 'error' , message: err});
                console.log("Login Error")
                return 0;
            }else if(users.length == 0){
                res.json({status: 'error' , message: 'no user found'});
                console.log("Login Error : no user found")
                return 0;
            }else{
                bcrypt.compare(req.body.password, users[0].password).then(function(isLogin) { //decode password
                    if (isLogin === true){
                        var token = jwt.sign({ userid: users[0].userid }, secret , { expiresIn: '1h'}); //create token
                        res.json({status: 'ok' , message: 'login success', type: users[0].type, token });
                        console.log(`Logined from ${req.body.email}`);
                        return 0;
                    }else{
                        res.json({status: 'error' , message: 'wrong password'});
                        return 0;
                    }
                });
            }
        }
    );
})

app.post('/authen_db', jsonParser , function (req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        res.json({status:'ok', decoded});
    } catch(err){
        res.json({status:'error', message: err.message});
    }

})

/////////////////////////////////////// get data ///////////////////////////////////////

app.post('/doc_tocheck', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;
        connection.execute(
            `UPDATE appointment SET treatmentinfo = '${req.body.info}', price = '${req.body.price}', status = 'close', date = '${req.body.date}' WHERE appid = ${req.body.caseid};`,

            function(err, results, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else{
                    console.log(req.body)
                    res.json({status: 'ok'});
                    console.log('Edit Dentis')
                }
            }
            );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/confirm_app', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;
        connection.execute(
            `UPDATE appointment SET status = 'open' WHERE appid = ${req.body.appid};`,

            function(err, results, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else{
                    console.log(req.body)
                    res.json({status: 'ok'});
                    console.log('Edit Dentis')
                }
            }
            );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/editprofile_db', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;
        connection.execute(
            `UPDATE users SET firstname = '${req.body.firstname}', lastname = '${req.body.lastname}', tel = '${req.body.tel}' WHERE userid = ${userid_check};`,

            function(err, results, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else{
                    res.json({status: 'ok'});
                    console.log('edited')
                }
            }
            );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/editaddress_db', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;
        connection.execute(
            `UPDATE address SET housenumber = '${req.body.housenumber}', street = '${req.body.street}', district = '${req.body.district}', province = '${req.body.province}', zipcode = '${req.body.zipcode}' WHERE userid = ${userid_check};`,

            function(err, results, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else{
                    res.json({status: 'ok'});
                    console.log('edited')
                }
            }
            );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/getinfo_db', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;
        connection.execute(
            'SELECT * FROM users WHERE userid=?',
            [userid_check],

            function(err, users, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else if(users.length == 0){
                    res.json({status: 'error' , message: 'no user found'});
                    return 0;
                }else{
                    res.json({status: 'ok' , userid: users[0].userid, email: users[0].email, tel: users[0].tel, birthday: users[0].birthday, firstname: users[0].firstname, lastname: users[0].lastname, gender: users[0].gender, citizenid: users[0].citizenid, type: users[0].type});
                }
            }
        );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/getalluser', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;
        connection.execute(
            'SELECT * FROM users',
            [userid_check],

            function(err, users, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else if(users.length == 0){
                    res.json({status: 'error' , message: 'no user found'});
                    return 0;
                }else{
                    res.json({status: 'ok' , users: users});
                }
            }
        );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/address_db', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;

        connection.execute(
            'SELECT * FROM address WHERE userid=?',
            [userid_check],

            function(err, users, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else if(users.length == 0){
                    res.json({status: 'error' , message: 'no user found'});
                    return 0;
                }else{
                    res.json({status: 'ok' , userid: users[0]});
                }
            }
        );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/delete_app', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;

        connection.execute(
            `DELETE FROM appointment WHERE appid = ${req.body.appid}`,

            function(err, users, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else if(users.length == 0){
                    res.json({status: 'error' , message: 'no user found'});
                    return 0;
                }else{
                    res.json({status: 'ok'});
                }
            }
        );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/getdoc_db', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;

        connection.execute(
            'SELECT * FROM users WHERE type=?',
            ['doctor'],

            function(err, users, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else if(users.length == 0){
                    res.json({status: 'error' , message: 'no user found'});
                    return 0;
                }else{
                    res.json({status: 'ok' , userid: users});
                }
            }
        );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/getadmin_db', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;

        connection.execute(
            'SELECT * FROM users WHERE type=?',
            ['admin'],

            function(err, users, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else if(users.length == 0){
                    res.json({status: 'error' , message: 'no user found'});
                    return 0;
                }else{
                    res.json({status: 'ok' , userid: users});
                }
            }
        );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/get_appointment', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;

        connection.execute(
            'SELECT * FROM appointment WHERE userid=?',
            [userid_check],

            function(err, users, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else if(users.length == 0){
                    res.json({status: 'error' , message: 'no user found'});
                    return 0;
                }else{
                    res.json({status: 'ok' , userid: users});
                }
            }
        );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.post('/all_app', jsonParser , function(req, res, next) {
    try {
        var checktoken = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(checktoken, secret);
        let userid_check = decoded.userid;

        connection.execute(
            'SELECT * FROM appointment',

            function(err, users, fields) {
                if(err) {
                    res.json({status: 'error' , message: err});
                    return 0;
                }else if(users.length == 0){
                    res.json({status: 'error' , message: 'no user found'});
                    return 0;
                }else{
                    res.json({status: 'ok' , userid: users});
                }
            }
        );
    } catch(err){
        res.json({status:'error', message: err.message});
    }
});

app.listen(port, function () {
    console.log(`Hello,`)
    console.log(`Server made by Sorawit Namseetan!`)
    console.log(`web server listening on port ${port}`)
})
