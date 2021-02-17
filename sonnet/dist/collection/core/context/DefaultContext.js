import { AbstractContext } from "./AbstractContext";
export class DefaultContext extends AbstractContext {
    static create() {
        return new DefaultContext();
    }
}
