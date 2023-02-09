CREATE DATABASE System_Create_Exam
GO
USE System_Create_Exam
Go

CREATE Table Course (
	Id int IDENTITY(1,1) PRIMARY KEY  ,
	CourseName nvarchar(255),
	Code nvarchar(255),
	CourseDescription nvarchar(max),
	DateBegin date,
)

Go

CREATE Table Chapter (
	Id int IDENTITY(1,1) PRIMARY KEY,
	CourseId int FOREIGN KEY REFERENCES dbo.Course(Id) ON DELETE SET Null,
	ChapterName nvarchar(255),
	OrdinalNumbers nvarchar(10),
	ChapterDescription nvarchar(max),
)

Go

CREATE Table Exam (
	Id int IDENTITY(1,1) PRIMARY KEY,
	CourseId int FOREIGN KEY REFERENCES dbo.Course(Id) ON DELETE SET Null,
	ExamName nvarchar(255),
	ExamType nvarchar(255),
	DayCreate date,
	Author nvarchar(255),
	Reviewer nvarchar(255),
)

Go

CREATE Table Question (
	Id int IDENTITY(1,1) PRIMARY KEY,
	ChapterId int FOREIGN KEY REFERENCES dbo.Chapter(Id) ON DELETE SET Null,
	QuestionName nvarchar(500),
	QuestionLevel nvarchar(20),
	QuestionWeight float,
	QuestionImage nvarchar(max),
	AnswerA nvarchar(500),
	AnswerB nvarchar(500),
	AnswerC nvarchar(500),
	AnswerD nvarchar(500),
	CorrectAnswer nvarchar(10),
)

Go

CREATE Table ExamQuestion(
	Id int IDENTITY(1,1) PRIMARY KEY,
	ExamId int FOREIGN KEY REFERENCES dbo.Exam(Id) ON DELETE SET Null,
	QuestionId int FOREIGN KEY REFERENCES dbo.Question(Id) ON DELETE SET Null,
)