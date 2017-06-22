const app = angular.module('librosApp', [])
const librosService = app.service('librosService', LibrosService)
app.controller('TodosLosLibrosCtrl', LibrosController)



