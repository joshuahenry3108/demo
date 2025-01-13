FROM node:18
RUN mkdir node
COPY . ./node
WORKDIR ./node/
RUN npm install 
EXPOSE 8080
CMD npm start
