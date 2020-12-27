# Next.js + Hasura Boilerplate

Boilerplate setup for Next.js / Now + Hasura + GraphQL Codegen + TypeScript + next-auth

## Getting started

- Run `yarn` from root
- Run `yarn setup` from root
- `cd app`
- Create .env from template
- Set up your schemas in Hasura cloud
  - For auth to work, add a data type `user` with `email` and `id`
- Add your graphql queries in `src/graphql/queries`
- Run `yarn start` to start the dev server, introspect the hasura graphql api and generate the sdk

## TODO

- i18n - https://github.com/isaachinman/next-i18next
- Testing - Testcafe / cypress
- Bundle analyse
- Metatags / SEO - https://github.com/garmeeh/next-seo
