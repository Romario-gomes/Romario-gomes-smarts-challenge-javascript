import { Component, OnInit } from "@angular/core";
import { Register } from "./register";
import { RegisterService } from "./register.service";
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
     _register: Register[] = [];
    filteredRegister: Register[] = [];
    constructor(private registerService: RegisterService) { } 

    ngOnInit(): void{
        this.retrieveAll()
    } 
    retrieveAll(): void{
        this.registerService.retriveAll().subscribe({
            next: register => {
                this._register = register;
                this.filteredRegister = this._register;
            },
            error: err => console.log('Error', err)
        });
    }
} 
 /*   registers: Register[] = []

    ngOnInit(): void{
        this.registers = [
            {
                id: 1,
                name: 'Angular: CLI',
                releaseDate: 'November 2, 2019',
                description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
                duration: 120,
                code: 'XLF-1212',
                rating: 3,
                price: 12.99,
                imageUrl: '/assets/images/cli.png',
            },
            {
                id: 2,
                name: 'Angular: Forms',
                releaseDate: 'November 4, 2019',
                description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
                duration: 80,
                code: 'DWQ-3412',
                rating: 3.5,
                price: 24.99,
                imageUrl: '/assets/images/forms.png',
            }
        ]
    }
} */