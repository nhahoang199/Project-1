INSERT INTO [System_Create_Exam].[dbo].[Exam] 
(
    [CourseId]
    ,[ExamName]
    ,[ExamType]
    ,[DayCreate]
    ,[Author]
    ,[Reviewer]
)
VALUES (
    @courseId,
    @examName,
    @examType,
    @dayCreate,
    @author,
    @reviewer
)

SELECT SCOPE_IDENTITY() as Id