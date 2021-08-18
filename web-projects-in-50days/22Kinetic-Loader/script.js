var conn=new ActiveXObject("ADODB.Connection")
var rs=new ActiveXObject("ADODB.Recordset")
try{
    var connectionString="DRIVER={MYSQL ODBC 8.0 Driver};option=3;SERVER=101.34.46.183;UserID=root;Password=Qq153977.;DataBase=test;Port=3306";
    conn.open(connectionString);
    rs.open("select * from table1",conn)
    rs.moveNext()
}catch (e) {
    console.log(e.massage)
}finally {
    //
}


