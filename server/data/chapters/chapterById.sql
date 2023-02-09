SELECT TOP (1000) [Id]
      ,[CourseId]
      ,[ChapterName]
      ,[OrdinalNumbers]
      ,[ChapterDescription]
  FROM [System_Create_Exam].[dbo].[Chapter]
  WHERE [Id]  = @chapterId