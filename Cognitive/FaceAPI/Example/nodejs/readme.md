# Getting started

You need to restore all node modules

```cli
npm install
```

or with yarn

```cli
yarn install
```

In the main.js file you need to set the your API key for the Face API.
Look for the line:

```javascript
let facesApi = faces("<insert your api key here>");
```

See below for how to setup the Faces API in Azure and get the key.
Once you've setup the Faces API in Azure and put in the key, you can run it
from CLI by running:

```cli
node main.js
```

Then you can navigate your browser to [http://localhost:3000](http://localhost:3000)


## Azure

Create a new resource in Azure by clicking the `+`sign:

![Azure New](images/azure_new.png)

Then search for `Cognitive Services API``

![Azure Marketplace Search](images/azure_marketplace_search.png)

Then select the `Cognitive Services APIs` and click `Create`

![Azure Marketplace Create](images/azure_marketplace_create.png)

Fill out all the details about the service; Account Name, Type (Face API), Location, Pricing, Resource Group and then click Create.

![Azure Resource Create](images/azure_resource_create.png)

Once resource is created open it and open the Keys and copy the `Key 1`into the JavaScript code in `main.js`

![Azure Keys](images/azure_keys.png)