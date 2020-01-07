import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    ComponentRef,
    Type,
    Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface DialogPos {
    top: string;
    left: string;
    width: string;
    height: string;
}

export interface ChildConfig {
    inputs: object;
    outputs: object;
    position?: DialogPos;
}

@Injectable({ providedIn: 'root' })
export class DomService {
    private childComponentRef: ComponentRef<any>;
    constructor(
        private resolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        @Inject(DOCUMENT) private document: Document
    ) {}
    /**
     * appendComponentTo
     */
    public appendComponentTo(
        parentId: string,
        child: Type<any>,
        childConfig: ChildConfig
    ) {
        // 创建一个组件
        const childComponentRef = this.resolver
            .resolveComponentFactory(child)
            .create(this.injector);
        // 给组件增加input 和 output属性
        this.attachConfig(childConfig, childComponentRef);
        this.childComponentRef = childComponentRef;
        // 把新创建的组件加入application的组件树
        this.appRef.attachView(childComponentRef.hostView);
        // 把组件的视图部分得到html的渲染表达
        const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        // 得到parentId对应的结点，然后增加子节点
        this.document.getElementById(parentId).appendChild(childDOMElement);
    }

    /**
     * attachConfig
     */
    public attachConfig(config: ChildConfig, componentRef: ComponentRef<any>) {
        const inputs = config.inputs;
        const outputs = config.outputs;
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                componentRef.instance[key] = element;
            }
        }
        for (const key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                const element = outputs[key];
                componentRef.instance[key] = element;
            }
        }
    }

    /**
     * removeComponent
     */
    public removeComponent() {
        // 关闭对话框时把添加的结点删除
        this.appRef.detachView(this.childComponentRef.hostView);
    }
}
