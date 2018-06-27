FROM node:10.5

WORKDIR /tmp/_build
COPY package.json yarn.lock ./
RUN yarn

WORKDIR /app
RUN cp -R /tmp/_build/node_modules ./
COPY . .

RUN yarn build

EXPOSE 9090

CMD ["yarn", "serve"]