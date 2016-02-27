FROM node:4

ADD . /app

WORKDIR /app

CMD "node index.js"
