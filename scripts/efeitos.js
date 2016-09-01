$("#sizing-addon1").click(function(){
	setTimeout(function(){
		$("#li-selecionado").show(500);
	},2000);
});

$("#date-pick").datepicker({
    language: "pt"
});
$("#date-pick").mask("99/99/9999");

$("#nota-valor").maskMoney();

function abrirPerfil(){
	$("#perfil").show();
	$("#perfil").removeClass("animated fadeOutLeft");
	$("#perfil").addClass("animated fadeInLeft");
	$(".form-control").removeAttr("disabled");
	$(".btn").removeAttr("disabled");
};

$("#voltar-menu").click(function(){
	$("#perfil").removeClass("animated fadeInLeft");
	$("#perfil").addClass("animated fadeOutLeft");
	$(".form-control").attr("disabled","true");
	$(".btn").attr("disabled","true");
});

function dataAtualFormatada(){
    var data = new Date();
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();  
    return dia+"/"+mes+"/"+ano;
}

$("#painelPrincipal .list-options .options-li").css("border-bottom","2px solid #45cffe");
