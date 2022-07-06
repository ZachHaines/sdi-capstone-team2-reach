FROM node:alpine 

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

# CMD ["npm", "start"]
# CMD ["npm", "run", "build"]
RUN npm run build
CMD ["serve", "-s", "build"]