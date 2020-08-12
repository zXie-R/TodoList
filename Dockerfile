# D file

FROM node:12

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
# ENTRYPOINT [ "npm", "start" ]