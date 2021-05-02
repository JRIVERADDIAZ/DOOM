let pintador = document.getElementById('costos')
  const costoPorFlotilla = [];    
 
  class PrecioSeguroAut {
      constructor(precio, interes, año) {
          this.precio = precio
          this.interes = interes
          this.año = año
      } 

      //  esta funcion retornara el calor del seguro a un costo neto 
      cotizador = () => { 
        if (this.precio <= 135000){
        let  porcentaje = this.interes * .01;
          let costoSeg =  this.precio * porcentaje;
          return costoSeg
          } else {
            let porcentaje = (12 * .01) * this.precio;
            return porcentaje
          }
        } 
      
      
// esta funcion retornara el descuento otorgado por parte del gobierno =o
      promoAutoViejo = (porcentaje) => {
      if(this.año <= 2005 && this.año >= 1999){
          
        return porcentaje - 900; 
      } else if (this.año <= 1998 && this.año >= 1993) {
          
          return porcentaje - 1000;
      } else if ( this.año <= 1998 && this.año >= 1993){
          
          return porcentaje - 1000; 
      } else if (this.año <= 1992 && this.año >= 1980){
          
          return porcentaje - 1300;
      } else {
          
          return porcentaje
      }
      
  }    
  }
        // cundo un cliente solo requiere un seguro en total 
   
cotizar = () => {
    let tipoDeCliente = prompt("bienvenido si desea comprar un solo seguro presione 1 si no presione 2 ");
            if (tipoDeCliente == 1){
                costoPorFlotilla.push(new PrecioSeguroAut(
                  prompt("ingrese precio del auto"),
                   parseInt(prompt("ingrese interes de la tabla")),
                    parseInt(prompt("ingrese año de fabricacion"))));
                    return PrecioSeguroAut
          } else {
             while (costoPorFlotilla.length < 2) {
              costoPorFlotilla.push(new PrecioSeguroAut(
                prompt("ingrese precio del auto"),
                 parseInt(prompt("ingrese interes de la tabla")),
                  parseInt(prompt("ingrese año de fabricacion"))))};
                  }
                return PrecioSeguroAut
                }
cotizar()
// recorrer arrays -- (ejecutar metodo)

costoPorFlotilla.forEach( (PrecioSeguroAut) => {
pintador.innerHTML += ` 
 elcosto del seguro neto es = ${PrecioSeguroAut.cotizador()} <br>
  el costo con descuento es =  ${PrecioSeguroAut.promoAutoViejo(PrecioSeguroAut.cotizador())} <br>
  ` })