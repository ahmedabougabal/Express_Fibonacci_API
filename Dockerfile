#* docker file is a script file that runs all cmds needed
#* to assemble an image which i can build a container from
#========================================================
FROM node:14-alpine
# used a lightweight node version 14 image alpine distro based

WORKDIR /usr/src/app 
#(RUN mkdir + RUN cd (2 in 1))

RUN npm install

RUN npm install express

COPY . .

# informs Docker that the container listens to the port 8080 at runtime
EXPOSE 8080  
#! sudo docker run -p 8080:8080 exp-fib-app

CMD ["node", "app.js"]