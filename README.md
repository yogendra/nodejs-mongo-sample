# NODE MONGO K8s
Source: https://yasharma06.medium.com/deploy-locally-nodejs-and-mongodb-application-locally-c1bad2308d11



## Local Testing

### Start App
```bash
npm run start
```

### Test API
```bash

# List data
curl http://localhost:8080/data

# Add data
curl http://localhost:8080/data/1 -H content-type:application/json '{"name":"yogi"}'

# Get data with id
curl http://localhost:8080/data/1
```
