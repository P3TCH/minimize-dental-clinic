# minimize dental clinic
This project for TU! CS360

##### build with
frontend => html, css, bootstrap 5, Javascript__
backend => nodejs : express, mysql2, bcrypt, cors, path, process, jsonwebtoken, body-parser__
database => mariaDB (You can use mysql instead but recommended mariaDB)__
backend automated test => jest, supertest__
frontend automated test => protractor, mocha__

# setup guide
#### enviroment setup
== if you not have git install git first ==__
- centOS, Amazon Linux
```shell
sudo yum update && sudo yum install git
```
- RedHat
```shell
sudo dnf update && sudo dnf install git
```
- Ubuntu, Debian
```shell
sudo apt update && sudo apt install git
```
- MacOS (Using homebrew)
```shell
brew install git
```

1. clone this project

```shell
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic/server
```
3. install node (Recommended version 16 and above.), you can install with nvm (recommended)
https://github.com/nvm-sh/nvm
```shell
git clone https://github.com/nvm-sh/nvm.git
sudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
sudo nvm install 16
```
4. install mariadb
- centOS, Amazon Linux
```shell
sudo yum update
sudo yum install mariadb-server
sudo mysql_secure_installation
sudo systemctl enable mariadb.service //To auto-start MariaDB Server
```
- RedHat
```shell
sudo dnf update
sudo dnf install mariadb-server
sudo mysql_secure_installation
sudo systemctl enable mariadb.service //To auto-start MariaDB Server
```
- Ubuntu, Debian
```shell
sudo apt update
sudo apt install mariadb-server
sudo mysql_secure_installation
sudo systemctl enable mariadb.service //To auto-start MariaDB Server
```
- MacOS (Using homebrew)
```shell
brew install mariadb
mysql.server start
brew services start mariadb //To auto-start MariaDB Server
```

5. import table to mariadb (dentist.sql)
```shell
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic
sudo mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
CREATE DATABASE dentist;
[Exit mysql]
mysql -u root -p dentist < dentist.sql
```

6. Run node server
```shell
cd minimize-dental-clinic/server
npm install
node app.js
```

7. Website run at port 8080 (You can change port in file app.js)
```shell
http://localhost:8080
```

## Current Function
- [x] login with email and password
- [x] register new user
- [x] register new doctor and administrator
- [x] encryption password
#### user manage page
- [x] add new  appointment
- [x] see all doctor name list 
- [x] treatment history
#### doctor manage page
- [x] confirm appointment
- [x] Examine the patient, add details of the examination.
- [x] delete appointment
- [x] list treatment history
- [x] see all doctor name list
- [x] see all adminstrator list
#### administrator manage page
- [x] add new appointment for user
- [x] delete appointment
- [x] see all doctor name list
- [x] see all adminstrator list
- [x] add new doctor account
- [x] add new adminstrator account
- [ ] list treatment history (BUG!!)

## Sprint 1
| To Do | Doing | Done | Automate Tested |
|-------|-------|------|-----------------|
|-|-|เพิมเมนูของแพทย์ ให้สามารถดูข้อมูลหมอ และ บุคลากรได้| ✓ |
|-|-|ฟังชั่นคอมเฟิร์มคนไข้ของหมอ ก่อนที่จะตรวจ| ✗ |
|-|-|แสดงนัดหมายที่รอยืนยันจากแพทย์ ในหน้าตารางนัดหมายของหมอ| ✗ |
|-|-|แก้ไข Backend เวลาเพิ่มนัดหมาย ให้แสดงสถานะเป็น รอยืนยัน| ✗ |
|-|-|กด Enter แล้ว Login ได้| ✗ |


## Sprint 2
| To Do | Doing | Done | Automate Tested |
|-------|-------|------|-----------------|
|แยกรายการที่ตรวจแล้วเป็นหน้าใหม่|-|-| ✗ |
|แยกหน้าการตรวจเป็นหน้าใหม่|-|-| ✗ |
|แก้ไข แสดงผลนัดหมายคนไข้ ให้เป็นตาราง|-|-| ✗ |
|เพิ่มกล่องแจ้งเตือนเวลายกเลิกนัดหมายของหมอ|-|-| ✗ |
|เพิ่มกล่องแจ้งเตือนเวลายกเลิกนัดหมายของพนักงาน|-|-| ✗ |
|เพิ่มคอมเฟิร์มนัดหมายของคนไข้ สำหรับหน้าบุคลากร|-|-| ✗ |
|การให้คะแนนความพึงพอใจหมอฟัน สำหรับคนไข้|-|-| ✗ |


## log
5 Oct 2022 XX:XX => Create automated test for backend api (with jest & supertest)__
7 Oct 2022 21:00 => Fix bug hyperlink homep.html (user pages)__
7 Oct 2022 22:30 => Update Setup Guide__
