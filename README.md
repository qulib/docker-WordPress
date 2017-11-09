Dockerized WordPress
====================
The latest WordPress running in Docker.

Instructions
------------
Run `docker-compose up` to launch. The `app` and `data` directories will be created at this time. The WordPress code and database are mapped to these local volumes which means they will remain persistent even in the container is stopped.

Example: Develop a Theme
------------------------
Here are the steps to use this project to develop a WordPress theme:

1. Clone the repo and enter the folder in a terminal
2. Run `docker-compose up`
3. Go to `localhost` in you browser and complete the basic WordPress installation steps
4. Clone or copy your theme code to `app/wp-content/themes`
5. In the WordPress admin interface, switch to your new theme
6. When you're done, it's safe to run `docker-compose down` without losing your work
