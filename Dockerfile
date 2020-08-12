# D file

FROM node:12

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install
RUN sed -i '/.*devServer\.close.*/i console.log("close console");' /app/src/node_modules/react-scripts/scripts/start.js

RUN sed -i '/.*process\.env\.CI.*/a console.log("a jun zui shuai");' /app/src/node_modules/react-scripts/scripts/start.js
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
# ENTRYPOINT [ "npm", "start" ]