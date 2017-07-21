import { Component } from '@angular/core';

//@component indica que esto es un componente
@Component({
    //Lo requisitos minimos que debe tener un componente son: selector - template
    selector: 'app-header',
    templateUrl: './header-component.html',
})

//indica que sera exportado por lo que debe ser importado 
export class HeaderComponent
{
    
}
