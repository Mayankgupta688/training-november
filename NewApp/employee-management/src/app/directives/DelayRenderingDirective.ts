import { Directive, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: "*[delayRendering]"
})
export class DelayRenderingDirective {
    constructor(private template: TemplateRef, private container: ViewContainerRef) {}

    ngOnInit() {
        setTimeout(() => {
            debugger;
            this.container.createEmbeddedView(this.template)
        }, 10000)
    }
}