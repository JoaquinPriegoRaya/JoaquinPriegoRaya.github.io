//Definicion del modulo
var curriculum = angular.module('joaquin');

curriculum.controller('CVController', function(){
	//Variables
	this.nombre = "Joaquín Priego Raya";
	this.fechaNacimiento = "06/09/1933";
	this.dni = "20226616W (Nacionalidad: Española)";
	this.domicilio = "C/ Benedicto XIII nº10 puerta 2";
	this.cp = "14550 Montilla - Córdoba (España)";
	this.tlfn = "639527096 - Hora de contacto: todo el día";
	this.email = "Kin_PR@hotmail.com";
	this.ultimaExpLaboral = "Técnico de reparaciones"
	
	this.showExp = false;
})