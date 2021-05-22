# Kubernetes Cloud Dashboard extension
The project explores an approach for easily accessing the summary report of the Kubernetes clusters based on the kube configuration file via Chrome/Edge extension. The project has been developed using React tech stack and TypeScript support. 

Our approach provides easy-to-use | no-login | no-server | local-edge-storage interface for the dashboard. To achieve this, it involves uploading a kube config file in the extension to fetch the relavant details and store the config file in cookies and browser's local storage for future access to save user's time to access the dashboard.

We have explored different ways to store the config file locally but have been faced with some challenges:
1. Storing the config file in browser's Cookies is not feasible because of the storage limits of Cookies in the browsers (~5 MB) while a typical config can take more space. 
2. Storing in browser's local storage has the required storage capacity but it does not seem to be fully secure because local storage can be accessed via javascript injection.
3. A mix of both worlds, by storing encrypted version of the config file in local storage and corresponding encryption key in the cookies.
4. Since, the extension is fully client-side and browsers don't allow filesystem access, thus accessing key and certificate from local Minikube cluster posses a difficulty.

Thus, facing these challenges and due to other commitments, we are not actively maintaining the project for now. We have made it open-source so that if anyone would like to continue working on the project can fork the repository, add any features and create a pull request (PR). We would be very happy to collaborate.


## Maintainers
Geetesh Gupta - [geetesh-gupta](https://github.com/geetesh-gupta)

Anshul Ahuja - [anshulahuja98](https://github.com/anshulahuja98)

## Getting started

Navigate to the project directory and install the dependencies.

```
$ npm install
```

To build the extension, and rebuild it when the files are changed, run

```
$ npm start
```

After the project has been built, a directory named `dist` has been created. You have to add this directory to your Chrome browser:

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable _Developer mode_.
4. Click _Load unpacked_.
5. Select the `dist` directory.
6. To view the console, click on `Background page` in extension details

NOTE:- Remember to reload the extension from extensions page.

For APIs:-

1. To run the minikube with access to CORS,

```bash
minikube start --extra-config "apiserver.cors-allowed-origins=["http://\*"]"
```

2. To access API, run

```bash
kubectl proxy
```
