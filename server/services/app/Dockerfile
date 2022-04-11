FROM node:16.14.2

WORKDIR /app

ENV PORT=4002

ENV DATABASE_URL = postgres://rxdoqiwmcfkbla:3b3487ee5efdfba7ea4344babadb3d05ba3d9db465fdc4fcfdcd1625d4d4a771@ec2-52-203-118-49.compute-1.amazonaws.com:5432/dbaf1f5gd1gi8n

COPY package.json package-lock.json /app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm","run","start"]
