
using System;
using System.Text.Json;
using FileHandlingAssignment;


class Program{
    public static void Main(string[] args)
    {
        if(!Directory.Exists("TestFolder")){
            System.Console.WriteLine("Creating folder");
            Directory.CreateDirectory("TestFolder");
        }
        else{
            System.Console.WriteLine("Directory Exists");
        }
        //csv
        if(!File.Exists("TestFolder/Data.csv")){
            System.Console.WriteLine("Creating File");
            File.Create("TestFolder/Data.csv");
        }
        else{
            System.Console.WriteLine("File Already Exits");
        }
        //json file creation
            if(!File.Exists("TestFolder/Data1.json")){
            System.Console.WriteLine("Creating JSon File");
            File.Create("TestFolder/Data1.json");
        }
        else{
            System.Console.WriteLine("json File Already Exits");
        }
        List<Student> studentList=new List<Student>();
        studentList.Add(new Student(){Name="Ravi",FatherName="Chandran",DOB=new DateTime(1999,11,11),StudentGender=Gender.Male,TotalMark=400});
        studentList.Add(new Student(){Name="Baskaran",FatherName="sethu",DOB=new DateTime(1997,11,11),StudentGender=Gender.Male,TotalMark=450});
        studentList.Add(new Student(){Name="Sandhya",FatherName="Raj",DOB=new DateTime(1996,11,11),StudentGender=Gender.Female,TotalMark=400});
    
       WriteToCSV(studentList);
       ReadToCSV();
       WriteToJSON(studentList);
       ReadJSON();
    }

   static void WriteToCSV(List<Student> studentList){
         StreamWriter sw=new StreamWriter("TestFolder/Data.csv");
         foreach(Student student in studentList){
            string line=student.Name+","+student.FatherName+","+student.DOB.ToString("dd/MM/yyyy")+","+student.StudentGender+
            ","+student.TotalMark;
          sw .WriteLine(line);
         }
         sw.Close();
   }
   static void ReadToCSV(){
    List<Student> newList=new List<Student>();
    StreamReader sr=new StreamReader("TestFolder/Data.csv");
    string line=sr.ReadLine();
    while(line!=null){
        string[] values=line.Split(",");
        if(values[0]!=""){
            Student student=new Student(){
                Name=values[0],
                FatherName=values[1],
                StudentGender=Enum.Parse<Gender>(values[3]),
                DOB=DateTime.ParseExact(values[2],"dd/MM/yyyy",null),
                TotalMark=int.Parse(values[4])

            };
            newList.Add(student);
        }
        line=sr.ReadLine();
    }
    sr.Close();
    foreach(Student student1 in newList){
        System.Console.WriteLine("Name:"+student1.Name+"FatherNaame:"+student1.FatherName);
        System.Console.WriteLine("Gender:"+student1.StudentGender+"DOB"+student1.DOB.ToString("dd/MM/yyyy")+"Students Marks"+student1.TotalMark);
    }
   }

static void WriteToJSON(List<Student> studentList){
    StreamWriter sw=new StreamWriter("TestFolder/Data1.json");
    var option=new JsonSerializerOptions{
      WriteIndented=true
    };
    string jsonData=JsonSerializer.Serialize(studentList,option);
    sw.WriteLine(jsonData);
    sw.Close();

}
static void ReadJSON(){
    // StreamReader sr=new StreamReader("TestFolder/Data1.json");
    List<Student> students=JsonSerializer.Deserialize<List<Student>>(File.ReadAllText("TestFolder/Data1.json"));
     foreach(Student student1 in students){
        System.Console.WriteLine("Name:"+student1.Name+"FatherNaame:"+student1.FatherName);
        System.Console.WriteLine("Gender:"+student1.StudentGender+"DOB"+student1.DOB.ToString("dd/MM/yyyy")+"Students Marks"+student1.TotalMark);
    }
}
    }

