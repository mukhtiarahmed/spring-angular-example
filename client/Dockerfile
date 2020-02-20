# base image
FROM node:12.2.0-alpine

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app


# Install app dependencies
COPY package.json .
COPY angular.json .
COPY tsconfig.app.json .
COPY tsconfig.json .
 
RUN npm i -g @angular/cli@8.3.25 && npm i --slient && npm i -g serve --slient 

# Bundle app source
COPY src ./src


# Build and optimize angular app
RUN ng build --prod
EXPOSE 4200

# defined in package.json
ENTRYPOINT serve  -s dist -l 4200