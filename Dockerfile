FROM node:18.17.1

# set working directory
WORKDIR /knife-market
COPY ./knife-market/package.json ./
RUN npm install

EXPOSE 5173
