FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install -g serve
RUN npm install

COPY . .

RUN npm run build
# RUN sed -i '/.*devServer\.close.*/i console.log("close console");' /app/src/node_modules/react-scripts/scripts/start.js

# RUN sed -i '/.*process\.env\.CI.*/a console.log("a jun zui shuai");' /app/src/node_modules/react-scripts/scripts/start.js

COPY ./build ./build

EXPOSE 5000

# CMD ["npm", "start"]
CMD ["serve", "-s", "build"]