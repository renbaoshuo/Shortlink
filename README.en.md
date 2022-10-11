# ShortLink

[简体中文](./README.md) | **English**

The code is based on secondary development of [CRZ.im](https://github.com/Caringor/CRZ.im), thanks for the hard work of the original author @Caringor!

## Overview

A web URL shortener source code.

## Installation

### Environment

+ Compatible with `PHP 7.x`
+ `Nginx 1.15+`
+ ~~`MySQL 5.5+`~~ (Not required for current version)

Suggestion: Please install it on a SSD server if the website will be heavily used.

### Configuration

Modify the settings in `config.php` and change the permissions of the folder `inc` to `755`.

### URL rewrite rules

#### For Apache

Just directly use the file `.htaccess`.

#### For Nginx

Add the content of `nginx-rewrite.conf` to the `Nginx` server block being used.

## Features

+ URL shortener
+ Concise page
+ One-click copy

## Todo List

+ Add the support of `MySQL`
+ More...
