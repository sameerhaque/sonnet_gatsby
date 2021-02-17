import { AxiosResponse } from 'axios';
export declare class BlogSearch {
    static search(languageId: string, category: string, resultSize?: number, page?: number): Promise<AxiosResponse<any>>;
    static buildSearchQuery(category: string, languageId?: string, page?: number, limit?: number): string;
}
