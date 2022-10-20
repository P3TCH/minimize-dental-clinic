#!/bin/bash

if type dnf; then
	dnf update -y
	dnf install git -y
	dnf install wget -y
	dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y
	dnf install screen -y

	#install nodejs
	curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
	dnf install -y nodejs

	#install mariadb
	dnf install mariadb-server -y

elif type yum; then
	yum update -y
	yum install git -y
	yum install wget -y
	yum install epel-release -y
	yum install screen -y

	#install nodejs
	curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
	yum install -y nodejs

	#install mariadb
	yum install mariadb-server -y
elif type apt; then
	apt update -y
	apt install git -y
	apt install wget -y
	apt install screen -y

	#install nodejs
	curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
	apt -y install nodejs

	#install mariadb
	apt install mariadb-server -y
else
	echo "Please use RHEL8, AWS, Ubuntu, Debian linux"
	exit 1
fi

#install mariadb
systemctl enable mariadb.service
systemctl start mariadb.service
systemctl status mariadb.service | grep Active

#install server
cd /home/ec2-user
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic
mysql -e "CREATE DATABASE dentist"
mysql -e "FLUSH PRIVILEGES"
mysql -e "SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456')"
mysql -u root -p123456 dentist < dentist.sql

#run server
cd /home/ec2-user/minimize-dental-clinic/server

FOLDER_ROOT=${1:-.} # default to current directory

echo "---- Check Folders -----";
if [[ $(find ${FOLDER_ROOT} -name "node_modules" -type d -prune | wc -l) -eq 0 ]]; then
	echo "No node_modules found!"
else
	find ${FOLDER_ROOT} -name "node_modules" -type d -prune -print | xargs du -chs
	find ${FOLDER_ROOT} -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
fi

npm install -g npm@8.19.2
npm install
runuser -l ec2-user -c 'screen -dmS "mini" node /home/ec2-user/minimize-dental-clinic/server/app.js'

