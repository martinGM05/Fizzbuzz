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
    ExplorerController-->ServerServer
```

These are the available endpoints
| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/1` | `{score: 1, trick: 1}` |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/3` | `{score: 3, trick: "Fizzz"}` |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/5` | `{score: 5, trick: "Buzz"}` |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/15` | `{score: 15, trick: "Fizzbuzz"}` |