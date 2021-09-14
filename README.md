# LaCure Demo

## Stack overview

- next.js
- typescript
- storybook
- chromatic
- redux toolkit
- styled-components

## Structure

`./storybook`
Storybook configs

`./components`
All React components 

`./graphql` 
GraphQL related apollo client, queries.

`./pages` 
Next.js pages dir

`./public`
Next.js public static dir

`./redux`
Redux toolkit store, reducers, etc.

`./stories`
Storybook stories that aren't colocated

`./styles`
Styles that aren't colocated

### ./types
Types that aren't colocated

- in file e.g. type X = {}
- in component dir e.g. types.ts
- in least common ancestor dir e.g. /folder-with-child-components/types.ts
- in global types dir e.g. /types/*.ts

