FROM node:14
WORKDIR /app
COPY /app/package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["node", "api.js"]
