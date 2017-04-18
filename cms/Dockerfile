FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY skygear-cms/package.json /usr/src/app/
RUN npm install
RUN npm install skygear@'^0.21.0'

COPY ./skygear-cms /usr/src/app
COPY cms-config.js /usr/src/app/

CMD ["node_modules/.bin/skygear-node"]
