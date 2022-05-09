import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../FeedbacRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository
{
  async create({comment,type,screenshot}: FeedbackCreateData) {
    const feedback = await prisma.feedback.create({
      data: {
        comment,
        type,
        screenshot
      }
    })
  }
}