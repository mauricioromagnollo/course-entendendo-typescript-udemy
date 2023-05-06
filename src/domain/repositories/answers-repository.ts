import { Answer } from "../entities/answer";

interface AnswersRepository {
  create(answers: Answer): Promise<void>
}

export {
  AnswersRepository
}