FROM nginx:stable-alpine
COPY ./src/ /usr/share/nginx/html/
COPY --chown=nginx:nginx ./data/nginx/conf/ /etc/nginx/conf.d/