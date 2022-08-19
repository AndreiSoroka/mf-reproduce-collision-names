
## Concept

- `A` is loading `B1` and `B2`

- `B1` is loading `C`
- `B2` is loading `C`
```
       < Service A >
         |       |
< Service B1 >  < Service B2 >
         |       |
       < Service C >
 ```


### How to start:
```bash
cd service-a; npm run i; npm run serve; # port 8080
cd service-b1; npm run i; npm run serve; # port 8081
cd service-b2; npm run i; npm run serve; # port 8082
cd service-c; npm run i; npm run serve; # port 8083
```
