<?php


namespace vendor;


class Route
{
    public $uri;
    public $method;
    public $action;
    public $parameters;
    public $controller;


    public function __construct($uri, $action, $parameters = null){
        $this->uri = $uri;
        $this->action = $action;
    }


    /**
     * @return mixed
     */
    public function getAction()
    {
        return $this->action;
    }

    public function getControllerName()
    {
        return ucfirst(str_replace('/', '', $this->uri).'Controller');
    }

    public function getFunc($params = null){
        return $this->getAction();
    }

}
