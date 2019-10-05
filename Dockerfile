FROM node:lts-alpine

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# update and install dependency
RUN apk update && apk upgrade

# copy the app, note .dockerignore
COPY . /usr/src/app/

# install dependencies and build 
RUN yarn && \
    yarn build

# expose 3000 on container
EXPOSE 3000

# set app service and port
ENV HOST=0.0.0.0
ENV PORT=3000

# start the app
CMD [ "yarn", "start" ]
