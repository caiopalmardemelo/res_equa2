function calculadora(opera) {

let ax2 = parseFloat(document.getElementById('a').value);
let bx = parseFloat(document.getElementById('b').value);
let cc = parseFloat(document.getElementById('c').value);

let dlta = (b*b)*(-4*a*c);
let nmr1 = (-b+dlta)/(2*a);
let nmr2 = (-b-dlta)/(2*a);
res_dlta = Math.sqrt(dlta);
let asnw = 0;

if (ax2>0){
    alert('oi');
}else if (ax2<0){

}else {

}
document.getElementById('rslt').textContent = 'Resultado:' + asnw;

}