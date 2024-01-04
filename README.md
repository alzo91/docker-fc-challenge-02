###### To deal with docker composer

- [x] 1. Running | Executando 
* docker-compose up -d --build

- [x] 2. Checking services | Verificando os serviços
* docker-compose ps

- [x] 3. Calling some requests | Realizando requisições
* The request can be used on browser or some software like curl or postman
* 3.1 To create a name and list all subscribed: ```http://localhost:8080/app/``` or ```curl -X GET http://localhost:8080/app/```
* 3.2 Just listing all names: ```http://localhost:8080/app/all``` or ```curl -X GET http://localhost:8080/app/all```
* 3.3 This route uses a method like POST to create one name: ```curl -X POST http://localhost:8080/app/subscribe/alisson```

- [x] 4. Entering the containers
* 4.1 db-mysql: ```docker exec -it db-mysql bash```. After you can execute ```mysql -uroot -p``` and ```use nodeappdb```
* 4.2 app-node: ```docker exec -it app-node sh```
* 4.3 http-nginx: ```docker exec -it http-nginx bash``` after you can execute ```nginx -t``` it will be verify .configs

- [x] 5. Stopping | Parando os serviços
* 5.1 docker-compose down -v
