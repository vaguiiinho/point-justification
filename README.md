<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

install docker

run command:

docker-compose --project-directory docker up -d --build

docker exec laravel php composer.phar -d justification-controller install

docker exec laravel npm i --prefix ./justification-controller

docker exec laravel npm run --prefix ./justification-controller dev

docker exec laravel chown -R www-data.www-data /var/www/justification-controller/storage

docker exec laravel chown -R www-data.www-data /var/www/justification-controller/bootstrap/cache

docker exec laravel php -f justification-controller/artisan migrate
