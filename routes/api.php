<?php

//require_once($_SERVER['DOCUMENT_ROOT'].'/jquery/vendor/autoloader.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/MVC-jquery/app/controllers/UserController.php');

//use App\Controllers\UserController;

//if ($_GET['action'] == 'getUsers'){
////    echo (new UserController())->getUsers();
//    echo (new Route($_GET['uri'], $_GET['action']))->getController();
//

    $route = new \vendor\Route($_GET['uri'], $_GET['action']);
    $controllerName = $route->getControllerName();

    $controller = new $controllerName();
    $func = $route->getFunc();

    var_dump($controller);
//    $controller->$func();

//}


