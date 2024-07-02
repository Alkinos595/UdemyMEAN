import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-personas',
	standalone: true,
	imports: [PersonaComponent, FormsModule],
	templateUrl: './personas.component.html',
	styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
	deshabilitar: boolean = false;
	mostrar: Boolean = false;
	mensaje: string = 'No hay gente agregada, esto es: 		';
	titulon: string = 'inge mamalo';
	agregarPersona() {
		this.mensaje = "persona agregada";
	}
	cambiar(){
		if(this.mostrar == false)
			this.mostrar = true
		else
			this.mostrar = false
	}
	disable(){
		if(this.deshabilitar == false)
			this.deshabilitar = true
		else
			this.deshabilitar = false
	}
/* 	modificarTitulo(event: Event){
		this.titulo = (<HTMLInputElement>event.target).value;
	} */
}

//& styleUrl es para solo 1 css, styleUrls sirve para varios css
//& styles y template es para escribir poco codigo css y html inline o usando backtick