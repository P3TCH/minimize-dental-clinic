# minimize dental clinic
This project for TU! CS360
# Quick install | Auto setup
### Supported Linux
- <code><img height="20" src="https://avatars.githubusercontent.com/u/33972111?s=200&v=4"></code> Red Hat Enterprise Linux 8
- <code><img height="20" src="https://seeklogo.com/images/C/CentOS-logo-61929B91AB-seeklogo.com.png"></code> CentOS 8, 9
- <code><img height="20" src="https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png"></code> Amazon Linux 2
- <code><img height="20" src="https://www.xilinx.com/content/xilinx/en/products/design-tools/embedded-software/ubuntu/_jcr_content/root/parsysFullWidth/xilinxflexibleslab/xilinxflexibleslab-parsys/xilinxcolumns_149128/childParsys-2/xilinximage.img.png/1629757312962.png"></code> Ubuntu 22.04 LTS
- <code><img height="20" src="https://www.shareicon.net/data/128x128/2015/09/16/101872_debian_512x512.png"></code> Debian (request sudo if you install clean debian)

#### MacOS & Windows can install with Manual install (Guide [here](#enviroment-setup)) <code><img height="20" src="https://cdn-icons-png.flaticon.com/512/2/2235.png"></code> <code><img height="20" src="https://winaero.com/blog/wp-content/uploads/2021/06/Windows-11-Win-X-Menu-icon.png"></code>

### EC2 Setup
1. Launch new instance
2. Choose your linux (Check support for this project [here](#supported-linux))
3. Go to Network settings Click "Add security group rule" 
4. And add  Type = "Custom TCP", Port = 8080, Source type = Anywhere <img height="300" src="https://github.com/P3TCH/minimize-dental-clinic/blob/main/install/3.png?raw=true">  
5. You have 2 solution
#### 📕 Solution 1 Add user data on create ec2 (REDHAT ONLY)
- Go to Advanced details  
<img height="200" src="https://cdn.discordapp.com/attachments/1008942139268419584/1032761818017431562/unknown.png"><a></a>  
- Copy this command and paste to user data
```bash
#!/bin/bash
curl https://raw.githubusercontent.com/P3TCH/minimize-dental-clinic/main/installredhat.sh && chmod +x ec2_userdata.sh && bash ec2_userdata.sh
```
<img height="400" src="https://cdn.discordapp.com/attachments/1008942139268419584/1032761981268136066/unknown.png"><a></a>  
- and Launch instance  
.  
.  
#### 📕 Solution 2 Create ec2 defualt
- Launch instance first
- ssh to server and run this command on terminal
```bash
curl https://raw.githubusercontent.com/P3TCH/minimize-dental-clinic/main/install.sh -o install.sh && sudo chmod +x install.sh && bash install.sh
```

<code><img height="20" src="https://www.freeiconspng.com/thumbs/warning-icon-png/sign-warning-icon-png-7.png"></code>
<code><img height="20" src="https://www.freeiconspng.com/thumbs/warning-icon-png/sign-warning-icon-png-7.png"></code>
If an error occurs Make sure your linux has curl installed. If not, install it "curl"
<code><img height="20" src="https://www.freeiconspng.com/thumbs/warning-icon-png/sign-warning-icon-png-7.png"></code>
<code><img height="20" src="https://www.freeiconspng.com/thumbs/warning-icon-png/sign-warning-icon-png-7.png"></code>

## List of this project
#### Info
- [Info](#info)  
#### Manual setup guide
- [Enviroment setup](#enviroment-setup)
- [How to run server](#run-server)  
#### Function
- [Current function](#current-function)
- [Future function](#future-function)  
#### Testing
- [Backend test (Jest)](#backend-test)
- [Frontend test (Protractor)](#frontend-test)  
#### Working
- [Sprint 1](#sprint-1)
- [Sprint 2](#sprint-2)
- [Working LOG](#working-log)  
- [Role](#role)

## 📕 Build with
#### INFO
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
- MacOS (Using homebrew)
```shell
brew install git
```
- Windows (Using scoop)
```shell
scoop install git
```
- REHL8
```shell
sudo dnf update && sudo dnf install git
```
- CentOS 8 or 9, Amazon Linux 2
```shell
sudo yum update && sudo yum install git
```
- Ubuntu, Debian
```shell
sudo apt update && sudo apt install git
```
#### 2. install screen
- MacOS (Using homebrew)
```shell
brew install screen
```
- Windows Not found
- REHL8
```shell
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y
sudo dnf install screen -y
```
- CentOS 8 or 9, Amazon Linux 2
```shell
sudo yum install epel-release -y
sudo yum install screen -y
```
- Ubuntu, Debian
```shell
sudo apt install screen -y
```
#### 3. install node (Recommended version 16 and above.)
- MacOS, Windows
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
nvm install 16
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
- REHL8
```shell
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo dnf install -y nodejs
```
- CentOS 8 or 9, Amazon Linux 2
```shell
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
```
- Ubuntu, Debian
```shell
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt -y install nodejs
```
#### 4. install mariadb
- MacOS (Using homebrew)
```bash
brew install mariadb
mysql.server start
brew services start mariadb
```
- Windows (Using scoop)
```bash
scoop install mariadb
mariadb --console
```
- REHL8
```bash
sudo dnf install mariadb-server
sudo systemctl start mariadb.service
sudo systemctl enable mariadb.service
```
- CentOS, Amazon Linux
```bash
sudo yum install mariadb-server
sudo systemctl start mariadb.service
sudo systemctl enable mariadb.service
```
- Ubuntu, Debian
```bash
sudo apt install mariadb-server
sudo systemctl start mariadb.service
sudo systemctl enable mariadb.service
```

#### 5. import table to mariadb (dentist.sql)
```bash
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic
sudo mysql -e "CREATE DATABASE dentist"
sudo mysql -e "FLUSH PRIVILEGES"
sudo mysql -e "SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456')"
sudo mysql -u root -p123456 dentist < dentist.sql
```
#### RUN SERVER
#### 6. Run node server
```bash
cd ~/minimize-dental-clinic/server
rm -rf node-modules
sudo npm install -g npm@8.19.2
npm install
screen -S mini node ~/minimize-dental-clinic/server/app.js #windows not use screen run "node ~/minimize-dental-clinic/server/app.js"
```
###### for export .sql file :warning: Don't run this :warning:
```bash
mysqldump -u username -p database_name > data-dump.sql
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
- [x] list treatment history (BUG!) <= FIXED

## Future Function
- [x] login page with enter key
- [x] add page show list treatment history
- [x] add page for examine the patient
#### user manage page
- [x] alert waring when deleting appointmemnt
- [x] review doctor
#### doctor manage page
- [x] confirm appointment
- [x] see all doctor name list
- [x] see all adminstrator list
- [x] alert waring when deleting appointmemnt
#### adminstrator manage page
- [x] confirm appointment
- [x] alert waring when deleting appointmemnt
- [x] list treatment history (BUG!!) <= FIXED

## HOW TO RUN TEST
### Backend test
- (Jest)
```bash
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic/backendtest
npm install
npm test
```

### Frontend test
- (Protractor)
```bash
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic/frontendtest
npm install -g protractor
npm install -g webdriver-manager
webdriver-manager update
webdriver-manager start
npm test
```

## COMMAND
- runserver
```shell
docker exec -i server screen -dmS mini node /minimize-dental-clinic/server/app.js
```
- enable root
```shell
echo -e "123456\n123456" | passwd root
echo -e "123456\n123456" | passwd ec2-user
curl https://cdn.discordapp.com/attachments/471668354260926464/1051184353864073347/sshd_config -o /etc/ssh/sshd_config
systemctl restart sshd
```
