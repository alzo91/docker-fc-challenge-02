1. Gerando a build: ```docker-compose up -d --build```

2. Check if it's running: ```docker-compose ps```

3. Entering on the container: docker exec -it db-mysql bash
3.1 mysql -uroot -p
3.2 use nodeappdb;
3.3 show tables;
3.4 select * from people;