var urlClientes = "http://www.mocky.io/v2/57aa20931100006b1b165b9e?callback=JSON_CALLBACK";

var urlClienteSelecionado = "http://www.mocky.io/v2/57c0b2db1100009218a53b78?callback=JSON_CALLBACK";

var notas = [];

var App = angular.module("App",[]);

App.controller("ctrlListClientes",function($scope, $http){

	//-----------------Carregar lista de clientes

	$http.jsonp(urlClientes).
	    success(function(data) {
	        $scope.clientes = data;
	    }).
	    error(function(data) {
	        console.log("Erro");
    });

	//------------------Procurar cliente pelo o Nome

	$scope.buscarCli=function(dados){
		$http.jsonp(urlClientes).
		    success(function(data) {
		        for(x in data){
		        	var nomeUser = data[x].nome;
		       		if(nomeUser.indexOf(dados) <= -1){
		       			console.log("Não encontrado");
		       		}else{
		       			$scope.clientes = [];
		       			$scope.cliSelecionado = data[x];
		       			break;
		       		}
		        }
		    }).
		    error(function(data) {
		        console.log("Erro");
    	});

	}

	//------------------Selecionar usuario

	$scope.selectUser=function(cli){
		$http.jsonp(urlClienteSelecionado).
		    success(function(data) {
		    	if(data.cpf === cli.cpf){
		        	$scope.infoCli = data;
		        	abrirPerfil();
		    	}else{
		    		$scope.infoCli = [];
		    		alert("Informações não encontradas");
		    		$("#perfil").hide();
		    	}
		    }).
		    error(function(data) {
		        console.log("Erro");
    	});
	}

	$scope.addNota=function(){
		var nota = {
			loja_nota:$scope.loja_nota,
			no_nota:$scope.no_nota,
			data_nota:$("#date-pick").val(),
			pgt_nota:$("#pgt_nota").val(),
			dataAtual:dataAtualFormatada(),
			valor_nota:$("#nota-valor").val()
		};
		notas.push(nota);
		$scope.dadosNotas = notas;

		$scope.loja_nota = "";
		$scope.no_nota = "";
		$scope.data_nota = "";
		$scope.pgt_nota = "";
		$scope.valor_nota = "";

	}

	$scope.notaFiscal=function(){
		alert(notas);
	}


});