import { Article } from './article';
export declare class ArticleListComponent {
    articlesJson: string;
    articles: Article[];
    heading: string;
    static readonly TAG_NAME = "snt-article-list";
    componentWillLoad(): void;
    render(): any;
}
