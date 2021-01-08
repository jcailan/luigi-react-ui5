# Create an Application with the Luigi Micro Frontend Framework

This repository hosts the solution for the SAP Tutorial [Create an Application with the Luigi Micro Frontend Framework](https://developers.sap.com/group.luigi-app.html).

Use the Luigi micro-frontend framework to create a web shopping application written with two different technologies (React and UI5) and configure additional features such as localization.

## Getting Started

### Luigi Core App

- `react-core-mf` folder contains the Luigi Core app that uses React.js

```shell
> npm start
```

### UI5 Micro Frontend

- `ui5-mf` folder contains the UI5 micro frontend app

```shell
> npm start
```

## Node Modules

- Local
	- @luigi-project/core 
	- @luigi-project/client 
	- fundamental-styles 
	- fundamental-react 
	- @sap-theming/theming-base-content 
	- react-router-dom
- Development
	- copy-webpack-plugin 
	- webpack 
	- webpack-cli
	- @babel/core
	- @babel/preset-env
	- babel-loader