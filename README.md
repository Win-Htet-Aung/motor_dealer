# Motor Dealers
Full stack project assignment from Issara. (Django + React)

## Setting up backend
```
docker compose up -d api --build  # build and up the container for api
docker compose exec api python manage.py createsuperuser  # create a superuser account
docker compose exec api python manage.py create_dump_data_dealers --count 200  # seed db with dummy data
```

## Setting up frontend
```
cp md_ui/.env.example md_ui/.env  # prepare .env file
# set VITE_API="http://0.0.0.0:8000"
docker compose exec api python manage.py drf_create_token {username}  # use the username of created superuser
# copy the generated token and set it to VITE_API_TOKEN="{token}"
docker compose up -d web --build  # build and up the container for web
```

*access the web ui at http://localhost:3000*
