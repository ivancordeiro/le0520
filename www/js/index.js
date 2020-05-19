document.addEventListener("deviceready", onDeviceReady, false); 


function onDeviceReady() {


atualizar();

}



function fechar(){
navigator.app.exitApp();
}







function atualizar(){


var conn = navigator.connection.type;
if( conn == 'none' || conn == 'NONE' ){ //conn

alert('O aplicativo nao detectou conexao com internet.');

} else {

var altTela = parseInt( screen.height ) ;
if( altTela != '' && altTela != 'undefined'  && altTela != 0 ){
//alert(altTela);
document.getElementById("ifrBrowser").style.height = altTela - 70 +"px";
}

var urlBrow = 'https://sistemaleiloes.com.br/t130520';
ifrBrowser.location.href =  urlBrow;

}



}
	   

