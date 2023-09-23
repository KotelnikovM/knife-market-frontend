FROM node:18.12.1

# set working directory
WORKDIR /knife-market
COPY ./package.json ./
RUN npm install

EXPOSE 5173
