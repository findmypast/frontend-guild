# Codewars

[Codewars](https://www.codewars.com/) is a place where you can train on code
katas. You solve small problems that range in difficulty from very easy to very
difficult. The idea is to repeatedly practice on toy problems and analyse
solutions to hone your coding skills.

Once you create an account, please join the `Findmypast` clan to join your fellow coworkers.

## Creating a kata

You'll need 75+ honor points to create a kata. If you don't have sufficient points, solve some basic katas first.

Codewars has docs on [how to create a kata](https://github.com/Codewars/codewars.com/wiki/Tutorial%3A-Create-Your-First-Kata).

Select a JS version for the kata that includes Babel, so that JSX (which is used by React) can be transpiled.  
At the time of writing, the only Node option with Babel is `Node v6.11.0/Babel`.

## Writing tests

We recommend TDD when creating the kata. Writing many small tests with descriptive feedback helps the user solve the problem.

The Codewars wiki describes what's available with JS: https://github.com/Codewars/codewars.com/wiki/Language-JavaScript

Their wiki may be out of date. To see what dependencies are actually available, [view their package.json instead](https://github.com/Codewars/codewars-runner-cli/blob/master/package.json).

### JS test framework

Codewars has its own testing framework. See their wiki for the docs:

https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework

Note their docs may be outdated. You can [check the source of their test framework to see the actual API](https://github.com/Codewars/codewars-runner-cli/blob/master/frameworks/javascript/cw-2.js).

## Publishing a kata

After you've published the kata, add it to this repository.

The suggested directory structure is to organise by the publisher, then the kata name, then its contents.

```
codewars/
├── README.md
├── dideler
│   └── some-kata
│       ├── initial.js
│       ├── initial.spec.js
│       ├── complete.js
│       ├── complete.spec.js
│       ├── preloaded.js
│       └── README.md
└── rkotze
    └── another-kata
        ├── index.js
        ├── index.spec.js
        └── README.md
```


## Published katas

1. [Easter egg list in ReactJS](https://www.codewars.com/kata/easter-egg-list-in-reactjs)
1. [United State of React](https://www.codewars.com/kata/united-state-of-react)
1. [Managing Events in React JS](https://www.codewars.com/kata/managing-events-in-react-js)
1. [Controlled components in React JS (Control the Beast)](https://www.codewars.com/kata/control-the-beast)
1. [Santa wish list form in ReactJS](https://www.codewars.com/kata/santa-wish-list-form-in-reactjs)
1. [PC upgrade specs using HOC in ReactJS](https://www.codewars.com/kata/pc-upgrade-specs-using-hoc-in-reactjs)
1. [Truncate paragraph using higher-order component in React JS](https://www.codewars.com/kata/truncate-paragraph-using-higher-order-component-in-react-js)

Rob (@sultanhq) maintains a collection of React katas:

https://www.codewars.com/collections/reactjs

Contact him to have new katas added to the collection.
