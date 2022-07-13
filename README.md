# Education Horizons coding challenge submission by Eric Murano

This is my submission for the coding challenged offered by Event Horizons.

## Running the application

I have provided two ways to run the application.

### Run the application using nvm / node / yarn

1. Ensure that you have node 18 installed

```shell
nvm use 18
```

2. Install yarn

```shell
npm install --global yarn
```

3. Run the application

```shell
yarn start
```

### Run the application using Docker

1. Build the docker image

```shell
docker build -t ericmurano .
```

2. Run the docker image

This will run the application on port 8080

```shell
docker run -p 8080:80 ericmurano
```

3. Access the site through http://localhost:8080


## Notes

I added tests around the dimensions form at the top of the page, but I didn't add tests for the rest of the application. I had trouble determining would I could test, plus I was pressed for time.

I couldn't think of an interesting or pleasing image to generate, so I just included the colours stepping up from dark to light.