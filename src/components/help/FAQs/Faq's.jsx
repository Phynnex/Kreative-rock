import React from "react"
import { FaqsContainer, FaqsDiv, FaqsRep, FaqsHeader, InnerDiv, Question, QuestionNumber, QuestionsContainer, QuestionsDiv, Response, ResponseDiv } from "./style"

const faqs = () => {
	return (
		<>
			<FaqsRep>
				<FaqsContainer>
					<FaqsDiv>
						<FaqsHeader>FAQ’S</FaqsHeader>
						<QuestionsDiv>
							<InnerDiv>
								<QuestionsContainer>
									<QuestionNumber>Q1</QuestionNumber>
									<ResponseDiv>
										<Question>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Question>
										<Response>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus turpis condimentum scelerisque laoreet gravida consectetur sapien laoreet. Ultricies eget venenatis quam
											bibendum. Aliquam volutpat viverra{" "}
										</Response>
									</ResponseDiv>
								</QuestionsContainer>
							</InnerDiv>
						</QuestionsDiv>
						<QuestionsDiv>
							<InnerDiv>
								<QuestionsContainer>
									<QuestionNumber>Q1</QuestionNumber>
									<ResponseDiv>
										<Question>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Question>
										<Response>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus turpis condimentum scelerisque laoreet gravida consectetur sapien laoreet. Ultricies eget venenatis quam
											bibendum. Aliquam volutpat viverra{" "}
										</Response>
									</ResponseDiv>
								</QuestionsContainer>
							</InnerDiv>
						</QuestionsDiv>
					</FaqsDiv>
				</FaqsContainer>
			</FaqsRep>
		</>
	)
}

export default faqs
