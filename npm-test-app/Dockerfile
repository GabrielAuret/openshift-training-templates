FROM node:16

RUN mkdir /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node
COPY --chown=node:node package.json package-lock.json* ./

# ENV NODE_ENV production

# copy the package.json
# COPY package.json /usr/src/app/
RUN npm install

COPY --chown=node:node . .

# COPY . /usr/src/app

EXPOSE 8080

# command to run on container start
CMD [ "npm", "start" ]
