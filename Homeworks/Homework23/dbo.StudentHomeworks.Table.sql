USE [TMS]
GO
/****** Object:  Table [dbo].[StudentHomeworks]    Script Date: 9/19/2022 11:35:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentHomeworks](
	[Id] [int] NOT NULL,
	[StudentId] [int] NOT NULL,
	[Title] [varchar](max) NOT NULL,
	[Mark] [tinyint] NULL,
	[OuterId] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[StudentHomeworks]  WITH CHECK ADD FOREIGN KEY([StudentId])
REFERENCES [dbo].[Students] ([StudentId])
ON UPDATE CASCADE
GO
