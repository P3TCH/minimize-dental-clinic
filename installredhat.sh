#!/bin/bash

dnf update -y
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y
dnf install screen -y
dnf install git -y
dnf install docker -y
dnf install mariadb-server -y
systemctl enable mariadb.service
systemctl start mariadb.service
systemctl enable mysql
systemctl start mysql
service mysql start

groupadd docker
gpasswd -a ec2-user docker
gpasswd -a root docker

cd /home/ec2-user
git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic

docker network create --subnet=10.2.0.0/16 server
docker run --network server --ip 10.2.0.2 -e MYSQL_ROOT_PASSWORD=123456 --name mydb -d docker.io/library/mariadb:latest

docker run -itd --network server --ip 10.2.0.3 -p 8080:8080 --name server docker.io/petchuser/server:latest bash
docker start server

bash /home/ec2-user/minimize-dental-clinic/setupdocker.sh
