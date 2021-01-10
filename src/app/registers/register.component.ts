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