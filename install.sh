#!/bin/bash

if type dnf; then
	printf "\e[1;32m=== INSTALLING GIT ===\n \e[0m"
    sudo dnf update -y
	sudo dnf install git -y
	sudo dnf install wget -y
	printf "\e[1;32m=== INSTALLING SCREEN ===\n \e[0m"
	sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y
	sudo dnf install screen -y

	#install nodejs
	printf "\e[1;32m=== INSTALLING NODEJS ===\n \e[0m"
	curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
	sudo dnf install -y nodejs

	#install mariadb
	printf "\e[1;32m=== INSTALLING MARIADB ===\n \e[0m"
	sudo dnf install mariadb-server -y

elif type yum; then
    printf "\e[1;32m=== INSTALLING GIT ===\n \e[0m"
    sudo yum update -y
	sudo yum install git -y
	sudo yum install wget -y
	printf "\e[1;32m=== INSTALLING SCREEN ===\n \e[0m"
	sudo yum install epel-release -y
	sudo yum install screen -y

	#install nodejs
	printf "\e[1;32m=== INSTALLING NODEJS ===\n \e[0m"
	curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
	sudo yum install -y nodejs

	#install mariadb
	printf "\e[1;32m=== INSTALLING MARIADB ===\n \e[0m"
	sudo yum install mariadb-server -y
elif type apt; then
    printf "\e[1;32m=== INSTALLING GIT ===\n \e[0m"
    sudo apt update -y
	sudo apt install git -y
	sudo apt install wget -y
	printf "\e[1;32m=== INSTALLING SCREEN ===\n \e[0m"
	sudo apt install screen -y

	#install nodejs
	printf "\e[1;32m=== INSTALLING NODEJS ===\n \e[0m"
	curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
	sudo apt -y install nodejs

	#install mariadb
	printf "\e[1;32m=== INSTALLING MARIADB ===\n \e[0m"
	sudo apt install mariadb-server -y
else
    echo "Please use RHEL8, AWS, Ubuntu, Debian linux"
    exit 1
fi

#install mariadb
sudo systemctl enable mariadb.service
sudo systemctl start mariadb.service
sudo systemctl status mariadb.service | grep Active

#install server
printf "\e[1;32m=== SETTING UP DATABASE ===\n \e[0m"
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic
sudo mysql -e "CREATE DATABASE dentist"
#sudo mysql -e "UPDATE mysql.user SET Password = PASSWORD('123456') WHERE User = 'root'"
sudo mysql -e "FLUSH PRIVILEGES"
sudo mysql -e "SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456')"
sudo mysql -u root -p123456 dentist < dentist.sql

#run server
printf "\e[1;32m=== STARTING SERVER ===\n \e[0m"
cd ~/minimize-dental-clinic/server

FOLDER_ROOT=${1:-.} # default to current directory

echo "---- Check Folders -----";
if [[ $(find ${FOLDER_ROOT} -name "node_modules" -type d -prune | wc -l) -eq 0 ]]; then
	echo "No node_modules found!"
else
	find ${FOLDER_ROOT} -name "node_modules" -type d -prune -print | xargs du -chs
	find ${FOLDER_ROOT} -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
fi

sudo npm install -g npm@8.19.2
npm install
screen -S mini node ~/minimize-dental-clinic/server/app.js
