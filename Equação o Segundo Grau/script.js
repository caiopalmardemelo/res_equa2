function bask() {

    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let dlta = (b*b)-(4*a*c);
    let res_dlta = Math.sqrt(dlta);

    if (dlta == 0){
        alert('Você é gay!');
    }else if (dlta < 0){
        let nmr1 = (-b)/(2*a);
        document.getElementById('rslt').innerText = nmr1;
    }else {
        let nmr1 = (-b+dlta)/(2*a);
        let nmr2 = (-b-dlta)/(2*a);
        document.getElementById('rslt').innerText = 'Resultado:' + nmr1 + 'E' + nmr2;
    }
}