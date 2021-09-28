# LaCure Demo

# To Do...

-   Prettier
    -   Consider adding to linter. Note official docs say ["generally not recommended"](https://prettier.io/docs/en/integrating-with-linters.html) and that it's best to [run it in your editor](https://prettier.io/docs/en/editors.html)
    -   ✅ Consider [pre-commit](https://prettier.io/docs/en/precommit.html) hook to ensure prettier is run regardless of developer coding environment
-   Set up `typescript-eslint` linter
-   How much typing?
-   More fleshed out `styled-components` patterns fitting project component library, like typography. How are variants defined, used, extended.
-   [Fleshed out apollo + next.js state management example with SSR, stale/revalidate](#apollo)
-   [Consider phase 2+ features: authenticated experience, e-commerce](#phase-2)
-   Hosting. Likely not using Vercel, so need plan for deployment, staging environments, builds for PRs, ideally github hooks

## Apollo

Apollo is a GraphQL client, but much more, and as such, we will likely want to create a demo fully integrated with `next.js` and flesh out patterns.

Explore `apollo` for..

-   Local `GraphQL` client
-   State management library
    -   Especially local data statically generated + fetch/revalidate
-   Mocking
-   API explorer? https://studio.apollographql.com/sandbox/explorer/

## Consider phase 2+ requirements

<a id="phase-2"></a>

The application is being validated against phase 1 requirements, but consider that phase 2+ involves a lot of likely complexities.

-   E-commerce
-   Authenticated experience

That said, Next.js is a great stack for "Static + Client Side Auth" experiences due to its SPA-like `next/link` routing, which negates usual page-load flashes of unstyled content with this pattern, and React + data fetching patterns should handle arbitrary state readiness and query data as needed.

We can always use SSR for authenticated experiences, and unless traffic is exceptional, there shouldn't be too many problems scaling this out.

# Commands

-   `prettier` - checks all files against current prettier config
-   `prettier-fix` - applies prettier against all files

# Stack overview

-   next.js
-   typescript
-   storybook
-   chromatic
-   redux toolkit
-   styled-components

# Structure

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

`./types`
Types that aren't colocated

-   in file e.g. type X = {}
-   in component dir e.g. types.ts
-   in least common ancestor dir e.g. /folder-with-child-components/types.ts
-   in global types dir e.g. /types/\*.ts

# Connected Services, Continous Integration

**Github Actions > Chromatic Publish**
Chromatic receives latest commits for PR and integrates with Github for design process control

**Vercel** Vercel host publishes static site for every commit and integrates with Github
