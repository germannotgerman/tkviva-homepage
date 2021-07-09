# TK Viva website

## Prerequisites
- Docker
- docker-compose
- add user to docker group to execute docker without sudo

## Local development

Pull code.  
Build image from Dockerfile:  
```
docker build -t image-tkviva .
```
Create container with docker-compose:  
```
docker-compose up -d
```

## Debugging
Check docker compose logs for startup errors:  
```
docker-compose logs -f
```
