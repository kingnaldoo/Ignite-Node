import { Category } from '../model/category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
    findByname(name: string): Category {
        throw new Error('Method not implemented.');
    }
    list(): Category[] {
        throw new Error('Method not implemented.');
    }
    create({ name, description }: ICreateCategoryDTO): void {
        throw new Error('Method not implemented.');
    }

}

export { PostgresCategoriesRepository };