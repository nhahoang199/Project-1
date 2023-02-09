SELECT *
  FROM [System_Create_Exam].[dbo].[Question]
  Inner Join [ExamQuestion] on [Question].[Id] = [ExamQuestion].[QuestionId] and [ExamQuestion].[ExamId] = @examId
  Order By [Question].[Id]