FROM node:18.1-alpine

WORKDIR /home/app

COPY . /home/app

RUN npm install

ENV PORT 3001

EXPOSE 3000

CMD [ "npm", "start"]