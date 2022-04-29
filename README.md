# Fizzbuzz

Some libraries were used in this project:

- [Express](https://www.npmjs.com/package/express)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/) 

The logic distribution of this api is like this

```mermaid
graph TD;
    ExplorerService-->ExplorerController;
    Reader-->ExplorerController;
    FizzbuzzService-->ExplorerController
    ExplorerController-->Server
```

These are the available endpoints
| Endpoint |
|---|
| `localhost:3000/v1/explorers/:mission`|
| `localhost:3000/v1/explorers/amount/:mission`|
| `localhost:3000/v1/explorers/usernames/:mission` | 
| `localhost:3000/v1/fizzbuzz/:score` |