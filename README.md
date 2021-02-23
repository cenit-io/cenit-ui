
## Cenit UI

This is a ready to deploy code (_beta version_) of the new Cenit UI.

### How to use

Checkout at the file [config.js](config.js) to customize your deploy.

```javascript
window.appConfig = {
    useEnvironmentConfig: false,
    localhost: 'http://cenit-admin.s3-website-us-west-2.amazonaws.com',
    cenitHost: 'http://ec2-18-208-253-0.compute-1.amazonaws.com',
    timeoutSpan: 300000,
    appIdentifier: 'admin'
};
```

Make sure the `localhost` config option is pointing to the URL where this code is going to be deployed
(an AWS S3 bucket maybe). That URL should also be included in the _Admin App_ `redirect_uris`. To ensure that
include the following entry in the Cenit configuration file (`config/application.yml`):

```yaml
'Cenit::Admin:default_uri': my-custom-cenit-ui-url
```
 
The `cenitHost` option should point to the Cenit instance (backend).

The _Admin App_ identifier is set by default as `admin`.

Feel free to carrie out other configurations like the [favicon.ico](favicon.ico) or the [manifest.json](manifest.json). 
