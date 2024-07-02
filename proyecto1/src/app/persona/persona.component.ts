import { Component } from '@angular/core';

@Component({
	selector: 'app-persona',
	standalone: true,
	imports: [],
	templateUrl: './persona.component.html',
	styleUrl: './persona.component.css'
})
export class PersonaComponent {
	nombre: string = 'Juan';
	apellido: string = 'Lopez';
	edad: number = 28;
	
	//&-----------------------------------------------------------------------
	/* 
	& Obtener un elemento HTML de id #entrada y 
	& especificar que lo que devuelva eso se 
	& convierta en un input al que se le obtendra el value
	inputEntrada(): string{
		return (document.getElementById("entrada") as HTMLInputElement).value;
	} 
	*/
	//& Metodo y variable privada
	/*
	private edad: number = 28;
	getEdad(): number{
		return this.edad;
	} 
	*/
}
