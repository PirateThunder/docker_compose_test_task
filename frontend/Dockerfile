FROM node:lts-iron

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

COPY . /app
RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]