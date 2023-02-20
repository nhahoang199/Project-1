SELECT [Question].[Id],
      [ChapterId]
      ,[QuestionName]
      ,[QuestionLevel]
      ,[QuestionWeight]
      ,[QuestionImage]
      ,[AnswerA]
      ,[AnswerB]
      ,[AnswerC]
      ,[AnswerD]
      ,[CorrectAnswer]

FROM [System_Create_Exam].[dbo].[Question]
Inner Join [ExamQuestion] on [Question].[Id] = [ExamQuestion].[QuestionId] and [ExamQuestion].[ExamId] = @examId

