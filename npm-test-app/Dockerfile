# FROM node:16

# RUN mkdir /usr/src/app && chown node:node /usr/src/app

# WORKDIR /usr/src/app

# USER node
# COPY --chown=node:node package.json package-lock.json* ./

# # ENV NODE_ENV production

# # copy the package.json
# # COPY package.json /usr/src/app/
# RUN npm install

# COPY --chown=node:node . .

# # COPY . /usr/src/app

# EXPOSE 8080

# # command to run on container start
# CMD [ "npm", "start" ]

# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]