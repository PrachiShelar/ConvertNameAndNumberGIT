import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Global } from '../Shared/global';

@Component({
    selector: 'my-app',
    providers: [UserService],
    templateUrl: 'app/Components/user.component.html',
})
export class UserComponent {
    userfrm: FormGroup;
    msg: string;
    fName: string;
    numberString: string;

    constructor(private service: UserService, private fb: FormBuilder) { }

    ngOnInit() {
        this.userfrm = new FormGroup({
            name: new FormControl(''),
            number: new FormControl('')
        });
    }
    onSubmit() { 
        console.log(this.userfrm.value, this.userfrm.get('name').value);

        this.service.get(Global.BASE_URL_NAMEANDNUMBER + this.userfrm.get('name').value
                                                                 + "&number=" + this.userfrm.get('number').value)
            .subscribe(userwe => {
                this.fName = userwe.name;
                this.numberString = userwe.number;
                if (this.userfrm) { this.msg = "success" }
            });
    }
}
