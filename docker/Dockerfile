FROM ubuntu:22.04

RUN apt update -y \
&& apt install -y curl git screen sudo \
&& curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - \
&& apt install -y nodejs \
&& git clone https://github.com/P3TCH/minimize-dental-clinic.git \
&& cd /minimize-dental-clinic/server \
&& npm install -g npm@8.19.2 \
&& npm install \
&& npm start
