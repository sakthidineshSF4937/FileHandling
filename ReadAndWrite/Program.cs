using System;


public class Program{
    public static void Main(string[] args)
    {
        if(!Directory.Exists("TestFolder")){
           System.Console.WriteLine("Creating Folder");
           Directory.CreateDirectory("TestFolder");
        }
        else{
            System.Console.WriteLine("Directory is already Exits");
        }
         if(!File.Exists("TestFolder/MyFile.txt")){
           System.Console.WriteLine("Creating File");
           File.Create("TestFolder/MyFile.txt").Close();
        }
        else{
            System.Console.WriteLine("File is already Exits");
            }
            System.Console.WriteLine("\nSelect 1 to Read from file.\n2.Write to file");
            int option=int.Parse(Console.ReadLine());
            switch(option){
                case 1:
                {
                    StreamReader sr=new StreamReader("TestFolder/MyFile.txt");
                    string data =sr.ReadLine();
                    while(data!=null){
                        System.Console.WriteLine(data);
                        data=sr.ReadLine();
                    }
                    sr.Close();
                    System.Console.WriteLine(data);
                    break;
                }
                case 2:{
                    string[] contents=File.ReadAllLines("TestFolder/MyFile.txt");
                    StreamWriter sw=new StreamWriter("TestFolder/MyFile.txt");
                    System.Console.WriteLine("Enter what uou need to write");
                    string data=Console.ReadLine();
                    string old="";
                    foreach(string line in contents){
                        old=old+line+"\n";
                    }
                    old=old+data+"\n";
                    sw.WriteLine(old);
                    sw.Close();
                    break;
                }
            }
}
}
