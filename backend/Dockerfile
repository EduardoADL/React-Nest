FROM node:18-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]