# Nodesignskills

## Setting up a pre-commit hook :

Pre-commit hooks help enforce code quality by running checks before allowing commits.

### 🛠 Step 1: Install Husky

Husky is a tool that makes it easy to manage Git hooks in JavaScript projects.

```sh
npm install husky --save-dev
```

Then, initialize Husky:

```sh
npx husky-init && npm install
```

This command creates a `.husky` directory and sets up a `pre-commit` hook with a default example.

---

### 🎯 Step 2: Configure ESLint and Prettier

To prevent conflicts between ESLint and Prettier, install the required dependencies:

```sh
npm install --dev prettier eslint-plugin-prettier eslint-config-prettier
```

Then, update your `.eslintrc.json` configuration:

```json
{
  "extends": ["next", "next/core-web-vitals", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "warn",
    "no-console": "warn"
  }
}
```

You can also add a `.prettierrc` file for formatting preferences:

```json
{
  "singleQuote": true,
  "trailingComma": "none",
  "quoteProps": "as-needed",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "tabWidth": 2
}
```

---

### ✅ Step 3: Add a Pre-Commit Hook

Now, create a **pre-commit** hook that runs ESLint:

```sh
npx husky add .husky/pre-commit "npm run lint"
```

This creates a `.husky/pre-commit` file with the command to lint your code before every commit.

---

### 🔧 Step 4: Optimize with lint-staged (Recommended)

To optimize performance, run linting and formatting only on modified files using **lint-staged**:

```sh
npm install lint-staged --save-dev
```

Add a `lint-staged` configuration in `package.json`:

```json
{
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": "eslint --fix",
    "**/*.{json,md,css,scss}": "prettier --write"
  }
}
```

Modify the Husky pre-commit hook:

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

🔹 **What this does:**

- Runs `eslint --fix` on changed JavaScript/TypeScript files.
- Runs `prettier --write` on changed JSON, Markdown, CSS, and SCSS files.

---

### 🏁 Step 5: Test the Hook

1. Modify a file with a linting issue.
2. Try committing:

   ```sh
   git add .
   git commit -m "Test pre-commit hook"
   ```

If the hook is working, Git will prevent the commit if there are linting issues.

---

### 🔍 Step 6: Add Additional Checks

You can extend the pre-commit hook with:

- **Unit tests before commit:**
  ```sh
  npx husky add .husky/pre-commit "npm test"
  ```
- **TypeScript type checking:**
  ```sh
  npx husky add .husky/pre-commit "tsc --noEmit"
  ```

If you get an error about a missing test script, add this to your `package.json`:

```json
{
  "scripts": {
    "test": "echo \"No tests yet\" && exit 0"
  }
}
```

Alternatively, remove `npm test` from the pre-commit hook:

```sh
npx husky set .husky/pre-commit "npx lint-staged"
```

---

## Deploy on Vercel :

Different examples manually

- Manually

```
npm i -g vercel
vercel login
vercel build && vercel deploy --prebuilt
```