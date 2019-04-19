FROM node:8-alpine

WORKDIR /Egg_DEMO

COPY ./ /Egg_DEMO

RUN npm install
EXPOSE 7001
CMD [ "npm", "run", "dev" ]
