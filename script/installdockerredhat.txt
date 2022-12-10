#!/bin/bash

sudo dnf update -y
sudo dnf install git -y
sudo dnf install docker -y

git clone https://github.com/P3TCH/minimize-dental-clinic.git
cd minimize-dental-clinic/

#start mariadb
docker network create --subnet=10.2.0.0/16 server
docker run --network server --ip 10.2.0.2 -e MYSQL_ROOT_PASSWORD=123456 --name mydb -d docker.io/library/mariadb:latest
docker exec -i mydb mysql -e "CREATE DATABASE dentist" -p123456
docker exec -i mydb mysql -e "FLUSH PRIVILEGES" -p123456
docker exec -i mydb mysql -u root -p123456 dentist < dentist.sql

#start server
docker run -it --network server --ip 10.2.0.3 -p 8080:8080 --name server docker.io/petchuser/server:latest bash
docker start server
docker exec -i server screen -dmS mini node /minimize-dental-clinic/server/app.js
