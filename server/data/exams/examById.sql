SELECT TOP (1000) [Id]
      ,[CourseId]
      ,[ExamName]
      ,[ExamType]
      ,[DayCreate]
      ,[Author]
      ,[Reviewer]
  FROM [System_Create_Exam].[dbo].[Exam]
WHERE [Id] = @examId