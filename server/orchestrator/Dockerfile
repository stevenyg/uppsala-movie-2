FROM node:16.14.2

WORKDIR /app

ENV PORT=4000

COPY package.json package-lock.json /app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm","run","start"]
