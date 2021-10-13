import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByname(name);

        if(categoryAlreadyExists) {
            throw new Error('Category Already exists');
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };