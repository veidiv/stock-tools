# UniApp + Vue3 Project Structure for A-Share Stock Tool

This document outlines a recommended project structure for building the A-share stock tool using UniApp with Vue3 and TypeScript (optional but recommended for larger projects). This structure aims for scalability, maintainability, and clear separation of concerns.

## 1. Root Directory

The root directory contains standard UniApp configuration and entry files:

```
/
├── main.js                 # Application entry point (Vue instance creation)
├── App.vue                   # Root Vue component (global styles, app lifecycle)
├── pages.json                # Page routing and global navigation bar configuration
├── manifest.json             # Application configuration (name, icons, permissions, appid, etc.)
├── uni.scss                  # Global SCSS variables and mixins accessible in all .vue files
├── vite.config.js            # Vite configuration (if using Vue3 + Vite)
├── tsconfig.json             # TypeScript configuration (if using TypeScript)
├── package.json              # Project dependencies and scripts
├── .gitignore                # Specifies intentionally untracked files that Git should ignore
├── static/                   # Static resources (see section 3)
└── src/                      # Main source code (see section 2)
```

-   **`main.js`**: Initializes the Vue app, registers global plugins, and sets up global error handling.
-   **`App.vue`**: The root Vue component. Global styles (not component-specific) can be defined here. Handles application lifecycle events (`onLaunch`, `onShow`, `onHide`).
-   **`pages.json`**: Crucial for UniApp. Defines:
    -   All pages in the application and their paths.
    -   Global style settings (navigation bar, background, window options).
    -   Tab bar configuration.
    -   Launch page and other navigation behaviors.
-   **`manifest.json`**: Configures app-specific details like app ID (for native builds), icons, splash screens, permissions required for different platforms (e.g., internet access for API calls, location for potential future features), and specific settings for H5, native apps, and mini-programs.
-   **`uni.scss`**: UniApp provides this file for global SCSS variables. You can define colors, font sizes, spacing units, etc., here, and they become available in all your Vue components' `<style lang="scss">` blocks without needing explicit imports.
-   **`vite.config.js`**: (For Vue3 projects) Configuration for Vite, the build tool. Used for setting up aliases, proxies (for H5 development), and other build-time customizations.
-   **`tsconfig.json`**: (If using TypeScript) Configuration for the TypeScript compiler, specifying options like target ECMAScript version, module system, strictness, and path aliases.

## 2. `src` Directory (Source Code)

This directory houses all the core application logic and UI elements.

```
src/
├── pages/                    # Application pages (views)
│   ├── dashboard/
│   │   └── DashboardPage.vue
│   ├── market/
│   │   └── MarketPage.vue
│   │   └── StockDetailPage.vue
│   ├── portfolio/
│   │   └── PortfolioPage.vue
│   │   └── AddTransactionPage.vue
│   ├── news/
│   │   └── NewsFeedPage.vue
│   │   └── ArticleDetailPage.vue
│   ├── alerts/
│   │   └── AlertsDashboardPage.vue
│   │   └── CreateAlertPage.vue
│   └── auth/
│       └── LoginPage.vue
│       └── RegisterPage.vue
│
├── components/               # Reusable Vue components
│   ├── global/               # Globally registered or very common components
│   │   ├── CustomButton.vue
│   │   ├── DataCard.vue
│   │   ├── LoadingSpinner.vue
│   │   └── ErrorMessage.vue
│   ├── layouts/              # Page layout components
│   │   ├── AppLayout.vue     # Main app structure (e.g. with sidebar/header)
│   │   ├── SidebarNav.vue
│   │   └── PageHeader.vue
│   ├── dashboard/            # Components specific to the dashboard
│   │   ├── MarketOverview.vue
│   │   └── WatchlistTable.vue
│   ├── charts/               # Charting specific components
│   │   ├── KLineChart.vue
│   │   ├── TimeframeSelector.vue
│   │   └── IndicatorSettingsModal.vue
│   ├── portfolio/            # Portfolio specific components
│   │   ├── PortfolioSummary.vue
│   │   └── HoldingsTable.vue
│   │   └── TransactionForm.vue
│   └── news/                 # News specific components
│       ├── NewsCard.vue
│       └── ArticleItem.vue
│
├── services/ (or api/)       # API interaction and data fetching
│   ├── baseService.js        # Base API client (e.g., Axios instance, error handling)
│   ├── stockService.js       # Functions for stock data (quotes, historical, etc.)
│   ├── newsService.js        # Functions for news and announcements
│   ├── portfolioService.js   # Functions for portfolio data
│   └── authService.js        # Functions for authentication
│
├── store/ (or pinia/)        # State management (e.g., Pinia)
│   ├── index.js              # Main store setup (Pinia instance)
│   └── modules/              # Store modules
│       ├── userStore.js
│       ├── portfolioStore.js
│       ├── marketDataStore.js
│       └── alertsStore.js
│
├── assets/                   # Static assets processed by the build tool
│   ├── images/
│   │   └── logo.png
│   │   └── placeholder.jpg
│   ├── icons/                # SVG icons (if not using an icon font/library)
│   └── fonts/                # Custom font files
│
├── styles/ (or css/)         # Global styles, variables, mixins
│   ├── _variables.scss       # Custom SCSS variables (complementary to uni.scss)
│   ├── _mixins.scss          # Custom SCSS mixins
│   ├── global.scss           # Other global styles, resets
│   └── themes/
│       ├── light.scss
│       └── dark.scss
│
├── utils/                    # Utility functions
│   ├── formatters.js         # Data formatting functions (dates, numbers, etc.)
│   ├── validators.js         # Input validation functions
│   ├── eventBus.js           # Simple event bus (if not using Pinia for all cross-component communication)
│   ├── helpers.js            # General helper functions
│   └── chartingUtils.js      # Specific utilities for chart data processing
│
├── router/                   # Routing (primarily managed by pages.json in UniApp)
│   └── index.js              # (Optional) For route guards or complex navigation logic
│
└── constants/                # Application-wide constants
    ├── eventNames.js         # Constants for event bus event names
    ├── apiEndpoints.js       # Centralized API endpoint URLs
    └── appConfig.js          # Other app-level constants
```

### Explanation of `src` Subdirectories:

-   **`pages`**:
    -   Contains the main views of the application. Each `.vue` file here typically represents a full page.
    -   UniApp's `pages.json` file in the root directory is used to register these pages and define their navigation paths, styles, and tab bar presence. For example:
        ```json
        // pages.json
        {
          "pages": [
            {
              "path": "pages/dashboard/DashboardPage", // Path to the .vue file (extension omitted)
              "style": {
                "navigationBarTitleText": "Dashboard"
              }
            },
            {
              "path": "pages/market/MarketPage",
              "style": {
                "navigationBarTitleText": "Market"
              }
            }
            // ... other pages
          ],
          "globalStyle": { /* ... */ },
          "tabBar": { /* ... */ }
        }
        ```
-   **`components`**:
    -   Houses reusable Vue components.
    -   **`global/`**: For components used very frequently across many unrelated pages (e.g., custom buttons, data cards, loading spinners). These might be registered globally in `main.js` or used on-demand.
    -   **`layouts/`**: Components that define the structural layout of pages (e.g., a standard app layout with a sidebar and header).
    -   **Feature-specific subfolders** (e.g., `dashboard/`, `charts/`, `portfolio/`): Components primarily used within a specific feature or section of the app. This helps in organizing and locating components easily.
-   **`services` (or `api`)**:
    -   Manages all interactions with external APIs.
    -   `baseService.js` can configure an HTTP client instance (e.g., Axios) with base URLs, interceptors for request/response handling (like adding auth tokens or handling global API errors).
    -   Each service file (`stockService.js`, `newsService.js`) exports functions that make specific API calls related to that domain (e.g., `fetchStockQuotes()`, `getLatestNews()`).
-   **`store` (or `pinia`)**:
    -   Manages global application state. Pinia is the current recommended state management library for Vue 3.
    -   `index.js` creates and exports the Pinia instance.
    -   `modules/` contains separate stores for different logical parts of the application (e.g., `userStore.js` for user authentication and profile, `portfolioStore.js` for portfolio data and management).
-   **`assets`**:
    -   Static assets that are part of the source code and will be processed by the build tool (Vite/Webpack).
    -   `images/`: Application logos, default user avatars, etc.
    -   `icons/`: Individual SVG icons if you're not using an icon font library like Font Awesome or a UniApp specific icon component.
    -   `fonts/`: Custom font files (e.g., `.woff2`, `.ttf`) that you want to embed in your application.
-   **`styles` (or `css`)**:
    -   Global stylesheets, SCSS variables, mixins, and potentially theme files.
    -   `_variables.scss`: For SCSS variables not fitting into `uni.scss` or for more project-specific theming.
    -   `_mixins.scss`: Reusable SCSS mixins.
    -   `global.scss`: Global style resets, utility classes, or base styling for HTML elements.
    -   `themes/`: If implementing light/dark themes, SCSS files defining theme-specific variables can go here.
-   **`utils`**:
    -   Utility functions that are pure, reusable, and not tied to a specific component or service.
    -   `formatters.js`: Functions for formatting dates, numbers, currency, etc.
    -   `validators.js`: Functions for validating user inputs (e.g., email format, required fields).
    -   `eventBus.js`: A simple global event bus for communication between components if not handled by the store. (Use sparingly, prefer Pinia for complex state).
    -   `helpers.js`: Other miscellaneous helper functions.
-   **`router`**:
    -   UniApp primarily uses `pages.json` for routing. A dedicated `router/` directory is less common unless you need to implement complex navigation guards or dynamic routing logic that `pages.json` cannot handle alone. For Vue3, this would involve `vue-router`, but its integration in UniApp needs careful consideration for platform compatibility.
    -   If used, `index.js` would configure `vue-router` and export the router instance. Route guards (`beforeEach`, `afterEach`) could be defined here.
-   **`constants`**:
    -   Stores application-wide constant values to avoid magic strings/numbers and improve maintainability.
    -   `eventNames.js`: Defines constant names for events used with an event bus.
    -   `apiEndpoints.js`: Centralizes all API endpoint paths.
    -   `appConfig.js`: Other static configuration values for the app.

## 3. `static` Directory (Root Level)

```
/static/
├── favicon.ico               # Favicon for H5 deployment
├── images/                   # Other images not processed by build
└── libs/                     # Third-party libraries not managed by npm
```

-   Files in the `static` directory are copied directly to the root of the built project (e.g., `dist/dev/h5/static/` or directly in `dist/dev/h5/` for some files depending on UniApp's build process).
-   Useful for:
    -   `favicon.ico` for web deployments.
    -   Global third-party libraries that are not imported via `npm` and need to be included as-is.
    -   Other static assets that don't require processing by the build system.

## Conclusion

This project structure provides a solid foundation for developing the A-share stock tool with UniApp and Vue3. It emphasizes modularity, separation of concerns, and scalability. Remember to adapt it based on the specific needs and complexity of your project. Consistent adherence to the structure will make the codebase easier to understand, maintain, and extend by the development team.
