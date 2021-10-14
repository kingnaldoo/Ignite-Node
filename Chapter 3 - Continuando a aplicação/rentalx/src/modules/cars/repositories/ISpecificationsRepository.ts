import { Specification } from '../entities/Specification';

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationsDTO): void;
    findByname(name: string): Specification
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };