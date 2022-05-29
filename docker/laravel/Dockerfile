FROM php:7.4-cli

WORKDIR /var/www

RUN apt-get update && \
    apt-get install libzip-dev -y && \
    docker-php-ext-install zip && \
    docker-php-ext-install pdo pdo_mysql zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

RUN apt install nodejs -y && \
    apt install npm -y && \
    npm install resolve-url-loader@^5.0.0 --save-dev --legacy-peer-deps


ENTRYPOINT ["tail", "-f", "/dev/null"]
