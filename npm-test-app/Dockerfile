FROM node:14

WORKDIR /usr/src/app

# ENV NODE_ENV production

# copy the package.json
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 8080

# command to run on container start
CMD [ "npm", "start" ]
