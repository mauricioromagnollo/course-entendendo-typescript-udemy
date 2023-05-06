import { expect, test } from 'vitest'

import { AnswerQuestionUseCase } from '../../../src/domain/usecases/answer-question'
import { AnswersRepository } from '../../../src/domain/repositories/answers-repository'
import { Answer } from '../../../src/domain/entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return
  } 
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova Resposta'
  })

  expect(answer.content).toEqual('Nova Resposta')
})