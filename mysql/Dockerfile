FROM mysql:latest

ENV MYSQL_DATABASE=pi_sun \
    MYSQL_ROOT_PASSWORD=MYSQL_PASSWORD \
    MYSQL_USER=MYSQL_USER \
    MYSQL_PASSWORD=MYSQL_PASSWORD 

ADD setup.sql /docker-entrypoint-initdb.d

EXPOSE 3306