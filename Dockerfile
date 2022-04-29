
FROM debian:latest

LABEL MAINTAINER="Damien Graux" \
      MAINTAINER_MAIL=damien.graux@inria.fr

RUN apt-get update ; \
    apt-get upgrade -y ; \
    apt-get install -y git curl ; \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - ; \
    apt-get install -y nodejs

# The current versions are node version 16 and npm version 8.

RUN git clone "https://github.com/m477301/KnowledgeGraphVerbalizer.git"
RUN cd /KnowledgeGraphVerbalizer/website ; npm install
RUN cd /KnowledgeGraphVerbalizer/rosae-server ; npm install

EXPOSE 3000
EXPOSE 3500

RUN echo "cd /KnowledgeGraphVerbalizer/website/ ; npm start & sleep 13 ; cd /KnowledgeGraphVerbalizer/rosae-server/ ; npm start" > launching_script.sh

ENTRYPOINT [ "bash" , "launching_script.sh" ]
