import { QuestionsRepository } from "../repositories/question-repository";
import { Question } from "../../enterprise/entities/question";
import { CreateQuestionUseCase } from "./create-question";

const fakeQuestionsRepository: QuestionsRepository = {
	create: async (question: Question) => {
		return;
	},
};

test("create a question", async () => {
	const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository);

	const { question } = await createQuestion.execute({
		authorId: "1",
		title: "Nova Pergunta",
		content: "Conteúdo da pergunta",
	});

	expect(question.id).toBeTruthy();
});
