import { AnswerQuestionUseCase } from "./answer-question";
import { AnswersRepository } from "../repositories/answers-repository";
import { Answer } from "../../enterprise/entities/answer";

const fakeAnswerRepository: AnswersRepository = {
	create: async (answer: Answer) => {
		return;
	},
};

test("create a answer", async () => {
	const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

	const answer = await answerQuestion.execute({
		instructorId: "1",
		questionId: "1",
		content: "Nova resposta",
	});

	expect(answer.content).toEqual("Nova resposta");
});