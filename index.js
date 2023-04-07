
 let x= window.document.getElementById('input_idade')
 let y= window.document.getElementById('bt1')
 let z= window.document.getElementById('resul')
 let w = window.document.getElementById('name')
 

y.addEventListener ('click', function(){
    
    w.innerText=`Você tem ${x.value} anos`
    if (x.value < 16) {
       
        z.innerText='Não tem idade suficiente para votar'
    } else {
        if (x.value>=16 && x.value<18 || x.value>70 ){
            z.innerText='Voto Facultativo' 
        }
        else {
            z.innerText=' Voto Obrigatótio'
        }
    }

})

