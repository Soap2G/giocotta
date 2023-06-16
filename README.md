# Giocotta [![pages-build-deployment](https://github.com/Soap2G/giocotta/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Soap2G/giocotta/actions/workflows/pages/pages-build-deployment)

https://soap2g.github.io/giocotta

## A very good excuse to build a simple website in React
You don't normally need to get married to get started in react, but this was it for me; below there are some guidelines if you want to experiment on this project :D

### Getting the code
To download the repository, execute
```
git clone https://github.com/Soap2G/giocotta.git
```

### Compile it locally with Docker
As soon as you have docker installed, you can just do 
```
docker-compose up -d --build
```
To have the website pointing to [``](http://localhost:3000/)http://localhost:3000/.

### Compile it locally without Docker
You need to install `npm`, you can get started from [this page](https://nodejs.org/en/download).
Then install `yarn` with:
```
npm install --global yarn
```
And build the website using 
```
yarn install
yarn start
```
