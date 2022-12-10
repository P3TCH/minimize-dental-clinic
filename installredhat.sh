#!/bin/bash

runuser -l ec2-user -c 'sudo dnf update -y'
runuser -l ec2-user -c 'sudo dnf install git -y'
runuser -l ec2-user -c 'sudo dnf install docker -y'

runuser -l ec2-user -c 'cd /home/ec2-user'
runuser -l ec2-user -c 'git clone https://github.com/P3TCH/minimize-dental-clinic.git'
runuser -l ec2-user -c 'cd minimize-dental-clinic/'

#start mariadb
runuser -l ec2-user -c 'docker network create --subnet=10.2.0.0/16 server'
runuser -l ec2-user -c 'docker run --network server --ip 10.2.0.2 -e MYSQL_ROOT_PASSWORD=123456 --name mydb -d docker.io/library/mariadb:latest'
runuser -l ec2-user -c 'docker exec -i mydb mysql -e "CREATE DATABASE dentist" -p123456'
runuser -l ec2-user -c 'docker exec -i mydb mysql -e "FLUSH PRIVILEGES" -p123456'
runuser -l ec2-user -c 'docker exec -i mydb mysql -u root -p123456 dentist < dentist.sql'

#start server
runuser -l ec2-user -c 'docker run -it --network server --ip 10.2.0.3 -p 8080:8080 --name server docker.io/petchuser/server:latest bash'
runuser -l ec2-user -c 'docker start server'
runuser -l ec2-user -c 'docker exec -i server screen -dmS mini node /minimize-dental-clinic/server/app.js'
