insert into [System_Create_Exam].[dbo].[ExamQuestion] (
    [ExamId]
    ,[QuestionId]
) 
values (@examId, @questionId);

SELECT SCOPE_IDENTITY() as Id
