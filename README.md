Demonstrate how skygear-cms does not work with other plugins

1. `$ docker-compose build`
2. `$ docker-compose up`
3. skygear-server panic with `panic: http: multiple registrations for /static/`

1. `$ git apply it_works_without_other_plugins.patch`
2. `$ docker-compose build && docker-compose down`
3. The cms works fine if it is the only plugin
