import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"

type AnswerQuestionUseCaseParams = {
  instructorId: string
  questionId: string
  content: string
}

class AnswerQuestionUseCase {
  constructor(
    private readonly answersRepository: AnswersRepository
  ) {}

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseParams) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId
    })

    await this.answersRepository.create(answer)

    return answer
  }
}

export {
  AnswerQuestionUseCase
}