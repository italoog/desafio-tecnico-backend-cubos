import RulesRepository from '../repositories/RulesRepository';

interface Request {
  id: string;
}

class DeleteRuleService {
  private rulesRepository: RulesRepository;

  constructor(rulesRepository: RulesRepository) {
    this.rulesRepository = rulesRepository;
  }

  public execute({ id }: Request): void {
    const itWorked = this.rulesRepository.delete(id);

    if (!itWorked) {
      throw Error('The item does not exist');
    }
  }
}

export default DeleteRuleService;
