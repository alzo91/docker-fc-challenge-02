FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN cd /usr/app && npm install

EXPOSE 3000

CMD ["node", "index.js"]