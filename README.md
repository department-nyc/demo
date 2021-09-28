# LaCure Demo

# To Do...

-   ✅ Prettier [(details)](#prettier)
-   ✅ Git hooks fallback for prettier [(details)](#git-hooks)
-   Deployment process outline [(details)](#deployment-process)
-   Testing details [(details)](#testing)

    -   As needed testing dictated by complexity & risk
    -   Consider broad remote integration testing using puppeteer and live / develop environments

-   Set up `typescript-eslint` linter
    -   How much typing?
-   More fleshed out `styled-components` patterns fitting project component library, like typography. How are variants defined, used, extended.
-   Fleshed out apollo + next.js state management example with SSR, stale/revalidate [(details)](#apollo)
-   Consider phase 2+ features: authenticated experience, e-commerce [(details)](#phase-2)
-   Hosting. Probably not using Vercel, so need plan for deployment, staging environments, builds for PRs, ideally github hooks / links in interface

## Prettier

Prettier should be enabled directly in developers code editors.

> To get the most out of Prettier, it’s recommended to run it from your editor. [(Source)](https://prettier.io/docs/en/editors.html)

Note: we considered adding `prettier` as a linter, but it isn't recommended today due to high editor support today.

> \- You end up with a lot of red squiggly lines in your editor, which gets annoying. Prettier is supposed to make you forget about formatting – and not be in your face about it!  
> \- They are slower than running Prettier directly.  
> \- They’re yet one layer of indirection where things may break.
> [(Source)](https://prettier.io/docs/en/integrating-with-linters.html)

Prettier is also run on the `pre-commit` git hook against staged files (via `lint-staged`) to ensure dev environments that aren't set up properly or edits via terminal are guaranteed to be formatted.

## Git hooks via Husky <span id="git-hooks"></span>

Git hooks are managed by the `husky` lib which provides a simple pattern & enables team sharing better than manually managing and distributing `.git/hooks`

Hooks are stored in `.husky/` and committed to the repo.

The new hooks directory is enabled by using `npm/yarn` `prepare` post install scripts automatically.

## Apollo

Apollo is a GraphQL client, but much more, and as such, we will likely want to create a demo fully integrated with `next.js` and flesh out patterns.

Explore Apollo for..

-   Local `GraphQL` client
-   State management library
    -   Especially local data statically generated + fetch/revalidate
-   Mocking
-   API explorer? https://studio.apollographql.com/sandbox/explorer/

## Consider phase 2+ requirements <span id="phase-2"></span>

The application is being validated against phase 1 requirements, but consider that phase 2+ involves a lot of likely complexities.

-   E-commerce
-   Authenticated experience

That said, Next.js is a great stack for "Static + Client Side Auth" experiences due to its SPA-like `next/link` routing, which negates usual page-load flashes of unstyled content with this pattern, and React + data fetching patterns should handle arbitrary state readiness and query data as needed.

We can always use SSR for authenticated experiences, and unless traffic is exceptional, there shouldn't be too many problems scaling this out.

# Stack overview

-   next.js
-   typescript
-   storybook
-   chromatic
-   redux toolkit? (maybe replaced by apollo)
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

-   In file e.g. type X = {}
-   In component dir e.g. types.ts
-   In least common ancestor dir e.g. /folder-with-child-components/types.ts
-   In global types dir e.g. /types/\*.ts

# Development/deployment process <span id="deployment-process"></span>

## Branching pattern

Let's use an ultra-light [GitHub Flow](https://guides.github.com/introduction/flow/) branching process.

> There's only one rule: anything in the main branch is always deployable.

A note on Git Flow in 2020:

> If your team is doing continuous delivery of software, I would suggest to adopt a much simpler workflow (like GitHub flow) instead of trying to shoehorn git-flow into your team. [(Source)](https://nvie.com/posts/a-successful-git-branching-model/)

## Individual developer

-   Create new branch
-   Submit pull request against `develop`
-   Review CI Chromatic storybook deployment
-   Review CI Chromatic pixel snapshot diffs
-   Review CI Next.js build (OOTB Vercel, manual implementation self hosted)

## Production deployments

-   Ensure rollback process defined and ready
-   Run tests (human or automated) against `develop` CD branch & site
-   Automated remote integration tests should be run on `main` and `develop` site
-   Merge `develop` to `main` when approved triggering production build

# Testing

## TDD

TDD is not a requirement, but testing should be leveraged for maximum bang for the buck.

## Unit testing/integration testing

On a case by case basis, unit testing via `jest` and integration testing via `testing library` should be used.

## Remote browser testing

Puppeteer remote testing on the production and develop site is likely worthwhile using broad strokes to ensure tests are not fragile and provide maximum coverage with the lowest time investment in implementation and maintenance.

Every targeted element in a test should have a `test-` prefix in the DOM, communicating to the developer/user there is a test dependency, and ensuring no arbitrary selectors are used in remote testing (reducing confidence).
