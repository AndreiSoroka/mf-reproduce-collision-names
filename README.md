
## Reproduced Bug

If two applications have components with the same name
then the second application will override the first component

![](./ezgif-2-29813dca47.gif)
### How to start:
```bash
cd service-a; npm run i; npm run serve; # port 8080
cd service-b1; npm run i; npm run serve; # port 8081
cd service-b2; npm run i; npm run serve; # port 8082
cd service-b3; npm run i; npm run serve; # port 8084
cd service-c; npm run i; npm run serve; # port 8083
```
and open http://localhost:8080
