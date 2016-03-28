//Definicion del modulo
var curriculum = angular.module('joaquin');

curriculum.controller('OthersController', function(){
	//Variables
	this.datos = [{"name":"Java","percent":"65","exp":"2 años"},
	{"name":"JavaScript","percent":"65","exp":"1 año"},
	{"name":"Ionic","percent":"65","exp":"1 año"},
	{"name":"MySQL","percent":"80","exp":"5 años"},
	{"name":"SQLite","percent":"50","exp":"Menos de un año"},
	{"name":"HTML","percent":"90","exp":"6 años"},
	{"name":"Gimp","percent":"50","exp":"4 años"},
	{"name":"Python","percent":"25","exp":"Menos de un año"}];
})