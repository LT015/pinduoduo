import { Injectable, Type, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { DomService, ChildConfig } from './dom.service';

@Injectable({ providedIn: 'root' })
export class DialogService {
    private dialogElementId = 'dialog-container';
    private overlayElementId = 'overlay';
    private data$ = new BehaviorSubject<object | null>(null);
    constructor(
        private domService: DomService,
        @Inject(DOCUMENT) private document: Document
    ) {
        const initialData = localStorage.getItem('data');
        this.data$ = new BehaviorSubject<object | null>(JSON.parse(initialData));
    }

    open(component: Type<any>, config: ChildConfig) {
        this.domService.appendComponentTo(this.dialogElementId, component, config);
        if (config.position) {
            const element = this.document.getElementById(this.dialogElementId);
            element.style.width = config.position.width;
            element.style.height = config.position.height;
            element.style.top = config.position.top;
            element.style.left = config.position.left;
        }
        this.toggleAll();
        this.data$.next(null);
    }

    close() {
        this.domService.removeComponent();
        this.toggleAll();
    }

    saveData(data: object | null) {
        this.data$.next(data);
        // 这里只是做个演示，其实应该存储的 key 是订单 id
        localStorage.setItem('data', JSON.stringify(data));
    }

    getData() {
        return this.data$.asObservable();
    }

    private toggleAll() {
        this.toggleVisibility(this.document.getElementById(this.dialogElementId));
        this.toggleVisibility(this.document.getElementById(this.overlayElementId));
    }

    private toggleVisibility(element: HTMLElement) {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hidden');
            return;
        }
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            element.classList.add('show');
        }
    }
}
