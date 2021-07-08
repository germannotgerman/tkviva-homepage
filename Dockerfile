FROM nginx:stable
RUN mkdir -p /home/tkviva
COPY . /home/tkviva
COPY --chown=nginx:nginx ./default.conf /etc/nginx/conf.d/

