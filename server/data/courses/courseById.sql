SELECT TOP (1000) [Id]
      ,[CourseName]
      ,[Code]
      ,[CourseDescription]
      ,[DateBegin]
  FROM [System_Create_Exam].[dbo].[Course]
  WHERE [Id] = @courseId