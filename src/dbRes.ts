import { Movie } from './movie';

export class DbRes {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}