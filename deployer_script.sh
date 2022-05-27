#!/bin/bash

# docker network create -d bridge pisunnet;
cd mysql; docker build -t pisunsql . && docker run -p 3306:3306 -d pisunsql;
# cd ../server-side; docker build -t pisunserverside . && docker run --network="host" -p 3001:3001 -d pisunserverside;
# cd ../client-side; docker build -t pisunclientside . && docker run -p 3000:3000 -d pisunclientside;

cd ../server-side; npm i && npm run start &
cd ../client-side; npm i && npm run start &