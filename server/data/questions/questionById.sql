/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Question].[Id]
      ,[ChapterId]
	  ,[ChapterName]
	  ,[CourseName]
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
  INNER JOIN [Chapter] on [Question].[ChapterId] = [Chapter].[Id]
  INNER JOIN [Course] on [Chapter].[CourseId] = [Course].[Id]
  Where [Question].[Id] = @questionId