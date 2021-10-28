FROM node:14

RUN npm install -g --unsafe-perm prisma
RUN npm i -D typescript ts-node @types/node

RUN mkdir /app
WORKDIR /app

# COPY package*.json ./
COPY ./ ./prisma


RUN npm install

CMD [ "prisma", "studio"]