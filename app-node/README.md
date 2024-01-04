- [x] Build the node image
1.2 ```docker build -t zotarelli/challenge-node:latest . -f Dockerfile```

- [x] Checking image
2.1 ```docker images```

- [x] Using the image that was created 
3.1 docker run --rm -it -p 3000:3000 --network challengenet -v ./:/usr/app zotarelli/challenge-node:latest sh


- [x] You can use curl or some software to use the requests
4.1 to create a name and list names : ```curl -X GET http://localhost:3000/```
4.2 it is possible to create: ```curl -X POST http://localhost:3000/subscribe/alisson```
4.3 getting infos about name, it is required id: ```curl -X GET http://localhost:3000/:id```