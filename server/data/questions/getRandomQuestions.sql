SELECT TOP (@count) [Id]
      ,[ChapterId]
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
  Where [ChapterId] = @chapterId and [QuestionLevel] = @questionLevel
  order by NEWID()
  