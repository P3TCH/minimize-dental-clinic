FROM ubuntu:22.04
RUN mkdir /root/server
WORKDIR /root/server
RUN apt update -y \
&& apt install -y curl git screen sudo \
&& curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - \
&& apt install -y nodejs \
&& cd /root/server \
&& git clone https://github.com/P3TCH/minimize-dental-clinic.git \
&& cd /root/server/minimize-dental-clinic/server \
&& npm install -g npm@8.19.2 \
&& npm install

EXPOSE 8080 3306

ENTRYPOINT [ "/bin/bash" ]
