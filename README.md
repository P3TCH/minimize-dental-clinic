# minimize dental clinic
This project for TU! CS360

## 📕 Build with
<code><img height="20" height="20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" ></code> 
frontend => html, css, bootstrap 5, Javascript  

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code> 
backend => nodejs : express, mysql2, bcrypt, cors, path, process, jsonwebtoken, body-parser  

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"></code> 
database => mariaDB (You can use mysql instead but recommended mariaDB)  

<code><img height="20" src="https://www.jetbrains.com/webstorm/guide/static/5fffc5841d0abba2e6684f13fe6d003f/jest.svg"></code> 
backend automated test => jest, supertest  

<code><img height="20" src="https://res.cloudinary.com/practicaldev/image/fetch/s--qnATlt1V--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://thepracticaldev.s3.amazonaws.com/i/9tp05j5fpbghqa3f9whz.png"></code> 
frontend automated test => protractor, mocha  

## 🗒 Setup guide
#### ENVIROMENT SETUP
#### 1. if you not have git install git first
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
#### 2. install node (Recommended version 16 and above.), you can install with nvm (recommended)
https://github.com/nvm-sh/nvm
```shell
git clone https://github.com/nvm-sh/nvm.git
sudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
sudo nvm install 16
```
#### 3. install mariadb
- centOS, Amazon Linux
```bash
sudo yum update
sudo yum install mariadb-server
sudo mysql_secure_installation
sudo systemctl enable mariadb.service
```
- RedHat
```bash
sudo dnf update
sudo dnf install mariadb-server
sudo mysql_secure_installation
sudo systemctl enable mariadb.service
```
- Ubuntu, Debian
```bash
sudo apt update
sudo apt install mariadb-server
sudo mysql_secure_installation
sudo systemctl enable mariadb.service
```
- MacOS (Using homebrew)
```bash
brew install mariadb
mysql.server start
brew services start mariadb
```

#### 5. import table to mariadb (dentist.sql)
```bash
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic
sudo mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
CREATE DATABASE dentist;
#exit mysql (press ctrl+c)
mysql -u root -p dentist < dentist.sql
```
#### RUN SERVER
#### 6. Run node server
```bash
cd ~/minimize-dental-clinic/server
npm install
node app.js
```

#### 7. Website run at port 8080 (You can change port in file app.js)
```bash
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
- [x] Examine the patient, add details of the examination.
- [x] delete appointment
- [x] list treatment history
#### administrator manage page
- [x] add new appointment for user
- [x] delete appointment
- [x] see all doctor name list
- [x] see all adminstrator list
- [x] add new doctor account
- [x] add new adminstrator account
- [ ] list treatment history (BUG!!)

## Future Function
- [x] login page with enter key
- [ ] add page show list treatment history
- [ ] add page for examine the patient
- [ ] redesign appointment list to table
#### user manage page
- [ ] alert waring when deleting appointmemnt
- [ ] review doctor
#### doctor manage page
- [x] confirm appointment
- [x] see all doctor name list
- [x] see all adminstrator list
- [ ] alert waring when deleting appointmemnt
#### adminstrator manage page
- [x] confirm appointment
- [ ] alert waring when deleting appointmemnt
- [ ] list treatment history (BUG!!)

## 📝 SPRINT 1
| To Do | Doing | Done | Automate Tested |
|-------|-------|------|-----------------|
|-|-|เพิมเมนูของแพทย์ ให้สามารถดูข้อมูลหมอ และ บุคลากรได้| ✓ |
|-|-|ฟังชั่นคอมเฟิร์มคนไข้ของหมอ ก่อนที่จะตรวจ| ✗ |
|-|-|แสดงนัดหมายที่รอยืนยันจากแพทย์ ในหน้าตารางนัดหมายของหมอ| ✗ |
|-|-|แก้ไข Backend เวลาเพิ่มนัดหมาย ให้แสดงสถานะเป็น รอยืนยัน| ✗ |
|-|-|กด Enter แล้ว Login ได้| ✗ |


## 📝 SPRINT 2
| To Do | Doing | Done | Automate Tested |
|-------|-------|------|-----------------|
|-|แยกรายการที่ตรวจแล้วเป็นหน้าใหม่ (ของหมอ)|-| ✗ |
|-|แยกรายการที่ตรวจแล้วเป็นหน้าใหม่ (ของผู้ดูแลระบบ)|-| ✗ |
|แยกหน้าการตรวจเป็นหน้าใหม่|-|-| ✗ |
|แก้ไข แสดงผลนัดหมายคนไข้ ให้เป็นตาราง|-|-| ✗ |
|เพิ่มกล่องแจ้งเตือนเวลายกเลิกนัดหมายของหมอ|-|-| ✗ |
|เพิ่มกล่องแจ้งเตือนเวลายกเลิกนัดหมายของพนักงาน|-|-| ✗ |
|เพิ่มคอมเฟิร์มนัดหมายของคนไข้ สำหรับหน้าบุคลากร|-|-| ✗ |
|การให้คะแนนความพึงพอใจหมอฟัน สำหรับคนไข้|-|-| ✗ |

## 🧾 WORK LOG
5 Oct 2022 XX:XX => Create automated test for backend api (with jest & supertest)  
7 Oct 2022 21:00 => Fix bug hyperlink homep.html (user pages)  
7 Oct 2022 22:30 => Update Setup Guide  
