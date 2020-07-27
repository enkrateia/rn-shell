# Todo App Project

This Git repository contains a **docker-compose** file which if executed will create an architecture based on **3 docker images**:

 - A MongoDB Database for store TODO's
 - A Node/Express that expose a TODO API
 - A Vue Web App that comunicates with Node

All the projects will run **locally** inside docker containers

## Project setup

### Docker Compose

You must first install Docker from [here](https://docs.docker.com/get-docker/).

If you are a macOS or Windows user **Docker Compose** is already packaged:

> On desktop systems like **Docker Desktop for Mac and Windows**, Docker
> Compose is **included** as part of those desktop installs.

In other cases visit [these](https://docs.docker.com/compose/install/).

It is important to have these ports free: **8080, 8082, 27017** the containers will use those ports to communicate.

Once you have **Docker**  and **Docker Compose** you should run in the terminal at the root of this repository  (where the **docker-compose.yml** file is).

	docker-compose -up -d

After **Docker** downloads and runs all the containers, you will see:

	Creating todo_db_1 ... done
	Creating todo_node_1 ... done
	Creating todo_vue_1  ... done

Then you will be able to play with **VUE app** in port **8080**.

### React Native

Once having docker-compose up and running you just need to run the code in this repository.

	npm install

To activate **CocoaPods** you will need to move to **/ios** directory

	cd ios
then

	pod install
then go to the root and run

	npx react-native run-ios
to run the iOS emulator.

You will see the iOS emulator running Vue application inside a **WebView**.

**To stop the containers run**

	docker-compose stop
**To remove all the containers from your system run**

	docker system prune -a -f

**This project is still in development.**