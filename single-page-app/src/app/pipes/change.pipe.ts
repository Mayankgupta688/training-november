import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "changedata"
})
export class ChangePipe implements PipeTransform {
    transform(value: string) {
        return `Welcome to the Application ${value}`
    }
}