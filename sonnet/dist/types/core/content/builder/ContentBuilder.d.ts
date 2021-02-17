export interface ContentBuilder<T> {
    build(): Promise<T>;
}
