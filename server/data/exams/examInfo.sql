/****** Script for SelectTopNRows command from SSMS  ******/
SELECT Exam.[Id]
      ,[CourseId]
      ,[ExamName]
      ,[ExamType]
      ,[DayCreate]
      ,[Author]
      ,[Reviewer]
	  ,[Course].[CourseName]
  FROM [System_Create_Exam].[dbo].[Exam]
  inner join [Course] on [Exam].[CourseId] = [Course].[Id]
  where [Exam].[Id] = @examId