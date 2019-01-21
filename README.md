# letsGetChecked UI

## Pre-requiert

- nodejs v8.11.3 with npm v5.6.0 (https://nodejs.org/en/blog/release/v8.11.3/)

## UI Technologies

- Angular6 LTS
- Scss + Bootstrap v4.0.0 + Material
- Webpack server (Development)

## Getting Started

### Dependencies installation

```
npm install
```

### Test

```
npm test
```

### Start

```
npm start
```

## Discussions

### Fonctionnalities

- Blog posts sorted by date.
- View individual blog posts in a separate page.
- View comments for a blog post.
- Add/Update a comment to a blog post.

### CSS design

Basically, implementing a fancy UI design wasn't the main concern of this project.
Communicating with the REST API and the interactions between components were the focus of the development.

### Tests

Integration Tests has been implemented for REST API back-end integration.
Components logics are simple so extra unit tests hasn't been added

### Weaknesses

- No production configuration mode (environment.prod.ts, using Angular Universal server could be a plus)
- No HTTPS support
- No sessions so anyone can write / update comments with another person name
- No e2e tests configuration