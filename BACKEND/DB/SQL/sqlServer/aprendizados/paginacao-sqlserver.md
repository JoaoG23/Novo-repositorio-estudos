### Como fazer paginacao com sql server

https://www.sqlshack.com/pagination-in-sql-server/

select \* from port01.visitante
ORDER BY id
OFFSET 2 ROWS FETCH NEXT 2 ROWS ONLY;

DECLARE @PageNumber AS INT
DECLARE @RowsOfPage AS INT
SET @PageNumber=2
SET @RowsOfPage=4

SELECT FruitName,Price FROM SampleFruits
ORDER BY Price
OFFSET (@PageNumber-1)\*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY
