/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (@count + 1) [Exam].[Id]
      ,[CourseId]
      ,[Course].[CourseName]
      ,[ExamName]
      ,[ExamType]
      ,[DayCreate]
      ,[Author]
      ,[Reviewer]
  FROM [System_Create_Exam].[dbo].[Exam]
  Inner JOIN [Course] ON [Exam].[CourseId] = [Course].[Id]
  ORDER BY [Id] DESC
