FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update \
	&& apt install -y curl wget git lsb-release \
	&& curl https://raw.githubusercontent.com/P3TCH/minimize-dental-clinic/main/install.sh -o install.sh && sudo chmod +x install.sh && bash install.sh


