# Naluri Coding Challenge

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

This project aims to calculate PI value in increasing accuracy manner. The more the process is run, the value of PI is calculated more accurately.

## 🏁 Getting Started <a name = "getting_started"></a>

The project provides a web page to show:
1. PI Value (the value will be more accurate as you press on the 'Improve PI Value' button)
2. Sun circumference (the circumference is tied to the latest and most accurate value of PI)

### Prerequisites

To run this project in your computer, you need to have these software installed:
1. Docker (for mysql)
2. Nodejs (preferrably v16 - for client side and server side)

### Installing

Disclaimer:
You will see a docker-compose.yml that is still WIP. The script will not work yet.
You will also find and deployer_script.sh which is also WIP. The script is meant to ease deployment, but it does not work yet.

From here, we have to use quite manual steps to start-up the project.

Firstly, make sure you have docker installed and running.
Secondly, make sure that you can run npm commands from your preferred terminal.

So, let us begin.

1. Unzip the source code to a folder using an unzipper software. 
2. Open a terminal and use this command to change directory to mysql and build the mysql container:
```
cd mysql
docker build -t pisunsql . && docker run -p 3306:3306 -d pisunsql;
```
3. You will see that docker starts creating a mysql container.
4. Now when the docker is done with the process, open a new terminal at the root of project.
5. Now, change directory to the server-side:
```
cd ../server-side; 
```
6. Let's install and run the server-side code of the project:
```
npm install && npm run start
```
7. Now let's open another terminal for the client-side. Start the terminal at the root of the project.
8. Now you need to install and run the client-side just like the server-side:
```
cd client-side
npm install && npm run start
```
9. A browser should be automatically opened for you and navigates to localhost:3000
10. But if that does not happen automatically, you should open your preferred browser and go to http://localhost:3000
11. Now you can enjoy what this project has done for you. 
12. Have fun!

## 🎈 Usage <a name="usage"></a>

![alt text](https://github.com/asfwan/PiSunCalculationEngine/blob/main/Screenshot_PiSun.png?raw=true)

1. To improve the PI Value, press the "Improve PI Value" button.
2. To fetch latest value of the Sun Circumference, press on the "Fetch Latest Value" button.

## ⛏️ Built Using <a name = "built_using"></a>

- [MySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
