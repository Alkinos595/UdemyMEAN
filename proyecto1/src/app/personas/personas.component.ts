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
	mensaje: string = 'no se ha agregar gente';
	titulon: string = 'inge mamalo';
	agregarPersona() {
		this.mensaje = "persona agregada";
	}
/* 	modificarTitulo(event: Event){
		this.titulo = (<HTMLInputElement>event.target).value;
	} */
}

//& styleUrl es para solo 1 css, styleUrls sirve para varios css
//& styles y template es para escribir poco codigo css y html inline o usando backtick