# cypress-intro

Hi Team!

This is my first attempt at test automation using Cypress and Applitools to visually test an application.

## Installation - Cypress

1. Install Cypress
Follow these instructions to install Cypress.

2. Fork this repo
If you want to experiment with running this project in Continuous Integration, you'll need to fork it first.

After forking this project in Github, run these commands:

## Clone this repo to a local directory
git clone https://github.com/brittanybstewart/cypress-intro.git

## cd into the cloned repo
cd cypress-intro

## Install the node_modules
npm install

## Start the local webserver
npm star

3. Add the project to Cypress
Follow these instructions to add the project to Cypress.

Eyes-Cypress
## Installation - Applitools Eyes SDK for Cypress

Installation
Install npm package
Install Eyes-Cypress as a local dev dependency in your tested project:

npm i -D @applitools/eyes-cypress
Configure plugin and commands
Automatic configuration
Run the following command in your terminal:

npx eyes-setup
The above command will add the necessary imports to your cypress pluginsFile and supportFile (and create the TypeScript definitions file), as described in the manual configuration below.

Manual configuration
1. Configure Eyes-Cypress plugin
Eyes-Cypress acts as a Cypress plugin, so it should be configured as such. Unfortunately there's no easy way to do this automatically, so you need to manually add the following code to your pluginsFile:

Important: add this code after the definition of module.exports:

require('@applitools/eyes-cypress')(module)
Normally, this is cypress/plugins/index.js. You can read more about it in Cypress' docs here.

2. Configure custom commands
Eyes-Cypress exposes new commands to your tests. This means that more methods will be available on the cy object. To enable this, it's required to configure these custom commands. As with the plugin, there's no automatic way to configure this in cypress, so you need to manually add the following code to your supportFile:

import '@applitools/eyes-cypress/commands'
Normally, this is cypress/support/index.js. You can read more about it in Cypress' docs here.

3. (Optional) TypeScript configuration
Eyes-Cypress ships with official type declarations for TypeScript. This allows you to add eyes commands to your TypeScript tests.

Add this file to your project with either:

Adding the path to your tsconfig file:
{
  "files": ["./node_modules/@applitools/eyes-cypress/eyes-index.d.ts"],
  ...
}
Copying the file to to your cypress/support/ dir:
cp node_modules/@applitools/eyes-cypress/eyes-index.d.ts ./cypress/support/    
Applitools API key
In order to authenticate via the Applitools server, you need to supply the Eyes-Cypress SDK with the API key you got from Applitools. Read more about how to obtain the API key here.

To to this, set the environment variable APPLITOOLS_API_KEY to the API key before running your tests. For example, on Linux/Mac:

export APPLITOOLS_API_KEY=<your_key>
npx cypress open
And on Windows:

set APPLITOOLS_API_KEY=<your_key>
npx cypress open
It's also possible to specify the API key in the applitools.config.js file. The property name is apiKey. For example:

module.exports = {
  apiKey: 'YOUR_API_KEY',
  ...
}
See the Advanced configuration section below for more information on using the config file.


## Usage
After completing the configuration (either automatic or manual) and defining the API key, you will be able to use commands from Eyes-Cypress in your cypress tests to take screenshots and use Applitools Eyes to manage them:

Example
describe('Hello world', () => {
  it('works', () => {
    cy.visit('https://applitools.com/helloworld');
    cy.eyesOpen({
      appName: 'Hello World!',
      testName: 'My first JavaScript test!',
      browser: { width: 800, height: 600 },
    });
    cy.eyesCheckWindow('Main Page');
    cy.get('button').click();
    cy.eyesCheckWindow('Click!');
    cy.eyesClose();
  });
});

For more information: 
https://github.com/applitools/eyes.sdk.javascript1/tree/master/packages/eyes-cypress

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
