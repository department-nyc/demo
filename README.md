# LaCure Demo

# To Do...

-   ✅ Prettier [(more details...)](#prettier)
-   ✅ Git hooks fallback for prettier [(more details...)](#git-hooks)
-   Set up `typescript-eslint` linter
-   How much typing?
-   More fleshed out `styled-components` patterns fitting project component library, like typography. How are variants defined, used, extended.
-   Fleshed out apollo + next.js state management example with SSR, stale/revalidate [(more details...)](#apollo)
-   Consider phase 2+ features: authenticated experience, e-commerce [(more details...)](#phase-2)
-   Hosting. Likely not using Vercel, so need plan for deployment, staging environments, builds for PRs, ideally github hooks

## Prettier

Prettier should be enabled directly in developers code editors.

> To get the most out of Prettier, it’s recommended to run it from your editor. [(Source)](https://prettier.io/docs/en/editors.html)

Note: It was suggested to add `prettier` as a linter, but it isn't recommended today due to high editor support today.

> -   You end up with a lot of red squiggly lines in your editor, which gets annoying. Prettier is supposed to make you forget about formatting – and not be in your face about it!
> -   They are slower than running Prettier directly.
> -   They’re yet one layer of indirection where things may break.
>     [(Source)](https://prettier.io/docs/en/integrating-with-linters.html)

Prettier is also run on the `pre-commit` git hook against staged files (via `lint-staged`) to ensure dev environments that aren't set up properly or edits via terminal are guaranteed to be formatted.

## Git hooks

Git hooks are managed by the `husky` lib which provides a simple pattern & enables team sharing better than manually managing and distributing `.git/hooks`

Hooks are shared in `.husky/` and committed to the repo.

The new hooks directory is enabled by using `npm/yarn` `prepare` post install scripts.

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
