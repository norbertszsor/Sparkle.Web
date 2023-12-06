# Sparkle.Web

Sparkle.Web is a part of the Sparkle project and serves as a web-based interface for forecasting energy usage. It's built using Angular, featuring technologies like fxFlex, RxJS, and Material Angular, and provides users with graphical representations of forecasts and essential settings for accurate predictions.

![sparklewebsample](https://github.com/norbertszsor/Sparkle.Web/assets/47736350/2987befb-4428-4261-b7b5-40169ec944e8)

## Key Features

- **Modern User Interface:** Sparkle.Web offers a modern web-based interface for energy usage forecasting.
- **Angular Technology:** Built using Angular, fxFlex, RxJS, and Material Angular for a robust user experience.
- **Forecasting Capabilities:** Users can choose forecasting methods, models, and data sources for comparative and predictive forecasting.

## Getting Started

### Prerequisites

Before getting started, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/) (v18.17.1 recommended)
- [Angular CLI](https://angular.io/cli) (v16.2.1 recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sparkle-web.git
   ```

2. Change into the project directory:

   ```bash
   cd sparkle-web
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the local development server:

   ```bash
   ng serve
   ```

   Access the application at [http://localhost:4200/](http://localhost:4200/).

2. Use the interface to perform energy usage forecasting based on provided data.

## Deployment

To deploy Sparkle.Web manually, follow these steps:

Configure the API address for Sparkle.Core in the environment.prod.ts file located at src/environments/environment.prod.ts. Update the apiUrl field with the valid API address:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-sparkle-core-api-address.com/api',
};
```

This step is essential for the live version to communicate with the Sparkle.Core API.

1. Build the Angular application using the Angular CLI:

   ```bash
   ng build --prod
   ```

   This will create a production-ready build of your application in the `dist/` directory.

2. Deploy the contents of the `dist/` directory to your web server or hosting platform of choice.

3. Ensure that your web server is properly configured to serve the static files from the `dist/` directory.

4. Once deployed, users can access the live version of Sparkle.Web at the appropriate URL.

Remember to configure your web server or hosting platform to handle any server-side routing necessary for your Angular application.

For more advanced deployment options, consider automating the build and deployment process using CI/CD pipelines.

## Live Version

Access the live version of Sparkle.Web at [https://sparkle-web.onrender.com/](https://sparkle-web.onrender.com/).

## Version

The current version of Sparkle Web can be found there [https://github.com/norbertszsor/Sparkle.Web/releases](https://github.com/norbertszsor/Sparkle.Web/releases)
