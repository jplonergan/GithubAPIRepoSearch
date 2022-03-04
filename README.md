# Github Repository Search with redux and saga

Simple Github repository search. Search by name/description and language.


### Usage

The app can make up to 60 requests without Personal Access Token.
To use Personal Access Token creat a Personal Access Token add your Personal Access Token to the /constants/genaric.js file

[Create Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

```
export const GITHUB_API_KEY = 'YOUR_TOKEN';
```

Run Project:

```
npm install
npm start
```

## Test Commands

```

 npm test
 npm run test:watch
 npm run test:coverage
```
