FROM node:lts-alpine

LABEL authors="Yash sharma <yashsharma205@gmail.com>"

RUN mkdir /app
WORKDIR /app

COPY ["./package.json", "package-lock.json", "./"]
RUN npm install

COPY src ./src

EXPOSE 80

CMD ["node", "src"]
