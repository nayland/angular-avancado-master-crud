import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import {Category} from "./pages/categories/shared/category.model.ts"

export class InMemoryDatabase implements InMemoryDbService{

createDb()  {
  const categories: Category[]=[
    {id: 1, name: 'Moradia' , description: 'Pagamento de contas da casa' },
    {id: 2, name: 'Saúde' , description: 'Plano de saúde e remadios' },
    {id: 3, name: 'Lazer' , description: 'Cinema, parques, etc..' },
    {id: 4, name: 'Salário' , description: 'Recebumento de salario' },
    {id: 5, name: 'Frelance' , description: 'Trabalhos com freelance' }
  ];

  return {categories}

  }
}
