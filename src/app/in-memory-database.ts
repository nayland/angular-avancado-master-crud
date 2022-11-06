import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'

export class InMemoryDatabase implements InMemoryDbService{

createDb: any  {
  const categorias =[
    {id: 1, name: 'Moradia' , description: 'Pagamento de contas da casa' },
    {id: 2, name: 'Saúde' , description: 'Pagamento de contas da casa' },
    {id: 3, name: 'Lazer' , description: 'Pagamento de contas da casa' },
    {id: 4, name: 'Salário' , description: 'Pagamento de contas da casa' },
    {id: 5, name: 'Frelance' , description: 'Pagamento de contas da casa' }
  ];

  return {categorias}

}
