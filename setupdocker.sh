docker exec -i mydb mysql -e "CREATE DATABASE dentist" -p123456
docker exec -i mydb mysql -e "FLUSH PRIVILEGES" -p123456
docker exec -i mydb mysql -u root -p123456 dentist < /home/ec2-user/minimize-dental-clinic/dentist.sql

docker exec -i server screen -dmS mini node /minimize-dental-clinic/server/app.js
