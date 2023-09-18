# Sparkle.Web v1.0.0

Sparkle.Web is a part of the Sparkle project and serves as a web-based interface for forecasting energy usage. It's built using Angular, featuring technologies like fxFlex, RxJS, and Material Angular, and provides users with graphical representations of forecasts and essential settings for accurate predictions.

![sparkle.web sample](https://github.com/norbertszsor/Sparkle.Web/assets/47736350/3db91712-33cc-4854-b6f7-01de67744cb3)


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

The current version of Sparkle.Web is 1.0.0.

## License

This project is licensed under the [MIT](LICENSE.md). See the [LICENSE.md](LICENSE.md) file for details.

## Contribution

Contributions to Sparkle.Web are welcome! If you want to contribute, please follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch with a descriptive name for your feature or bug fix.

3. Make your changes and ensure that the code passes all tests.

4. Submit a pull request with a clear description of the changes you've made.

We appreciate your contributions to make Sparkle.Web even better! If you have any questions or need more information, feel free to reach out.

For more information or questions, please don't hesitate to contact us. Thank you for using Sparkle.Web!
