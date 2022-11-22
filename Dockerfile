FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update \
	&& apt install -y curl wget git lsb-release \
	&& curl https://raw.githubusercontent.com/P3TCH/minimize-dental-clinic/main/installtest.sh -o installtest.sh && sudo chmod +x installtest.sh && bash installtest.sh

ENTRYPOINT ["/bin/bash"]


