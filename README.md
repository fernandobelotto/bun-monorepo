# Bun Workspaces + Docker

Simple example of how to use bun workspaces with docker images

useful commands:

docker compose up
docker build -f docker/private.Dockerfile -t private .
docker build -f docker/public.Dockerfile -t public .