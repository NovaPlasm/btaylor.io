# btaylor.io - a resume

## Setup

Clone the repository on your machine.

Make sure you have npm or yarn installed, then run:


```bash
npm install
```
or
```bash
yarn install
```

## Running

To run the webpage, we have a few options:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "pm2 start -f ./server.sh --name btaylor.io"
  },
}
```

`yarn/npm run start` deploys the development version of the app on the default port `3000`

`yarn/npm run build` builds the production version of the app in the `build` directory

`yarn/npm run deploy` uses pm2 to create or update an instance of the production-quality minified file generated using `yarn run build`, and creates the server on port `5000`