FROM php:7.4-cli

WORKDIR /var/www

RUN apt-get update && \
    apt-get install libzip-dev -y && \
    docker-php-ext-install zip && \
    docker-php-ext-install pdo pdo_mysql zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

RUN apt install nodejs -y    
RUN apt install npm -y    


ENTRYPOINT ["tail", "-f", "/dev/null"]