Dockerized WordPress
====================

The latest WordPress running in Docker.

Instructions
------------
You must have Docker installed on your local computer (or server). Run `docker-compose up` to launch. The `app` and `data` directories will be created at this time. The WordPress themes, plugins, and uploads folders, as well as the database, are all mapped to these local volumes which means they will remain persistent even in the container is stopped.

Example: Develop a Theme
--------------------------
Here are the steps to use this project to develop a WordPress theme:

1. Clone the repo and enter the folder in a terminal
2. Run `docker-compose up`
3. Go to `localhost` in you browser and complete the basic WordPress installation steps
4. In the `app/themes` folder, clone or copy your theme code
5. In the WordPress admin interface, switch to your new theme
6. When you're done, it's safe to run `docker-compose down` without losing your work

TODO
----
1. And gulp integration for SASS compilation, browserSync, JS minification, etc.
