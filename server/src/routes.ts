import express, { Request, Response } from 'express'
import { prisma } from './prisma';
import { SubmitFeedbackUseCase } from './use-cases/SubmitFeedbackUseCase';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { NodeMailerMailAdapter } from './adapters/nodemailer/NodeMailerMailAdapter';

const routes = express.Router();

routes.post('/feedbacks', async (request: Request, response: Response) => {
  const { type, comment, screenshot } = request.body
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodeMailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    comment,
    type,
    screenshot
  })

  return response.status(201).send();
});

export {
  routes
}