SELECT [Id]
      ,[CourseId]
      ,[ChapterName]
      ,[OrdinalNumbers]
      ,[ChapterDescription]
  FROM [System_Create_Exam].[dbo].[Chapter]
  WHERE [CourseId] = @courseId