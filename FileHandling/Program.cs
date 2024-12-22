using System;
using System.Runtime.Intrinsics.Arm;

public class Program(){
/// <summary>
    /// Class Program <see cref="Program"/> used for creating instance for a Program/>
    /// </summary>
    public static void Main(string[] args)
    {
        //storing path
        string path=@"D:\MyFolder";
        //storing folder path
        string folderPath=path+"/Ravi";

        if(!Directory.Exists(folderPath)){
            System.Console.WriteLine("Creating Folder....");
            Directory.CreateDirectory(folderPath);
        }
        else{
            System.Console.WriteLine("Folder already Exists");
        }

//Storing file path
        string filePath=path+"/myfile.txt";
        if(!File.Exists(filePath)){
            System.Console.WriteLine("Creating file..");
            File.Create(filePath);
        
        }
        else{
            System.Console.WriteLine("File already exists");
        }
        System.Console.WriteLine("\n1.Create Folder\n2.Create file\n3.Delete Folder\n4.DeleteFile");
        System.Console.WriteLine("Enter the choice");
        int choice=int.Parse(Console.ReadLine());
        switch(choice){
        case 1:{
            System.Console.WriteLine("enter the folder you want to create");
            string folder=Console.ReadLine();
            string newPath=path+"/"+folder;
            if(!Directory.Exists(newPath)){
                System.Console.WriteLine("Creting folder");
                Directory.CreateDirectory(newPath);
            }
            else{
                System.Console.WriteLine("Folder already Exists");
            }
            break;
        }
        case 2:{
            System.Console.WriteLine("Enter the file you want to create");
            string file=Console.ReadLine();
            System.Console.WriteLine("Enter the Extension");
            string extension=Console.ReadLine();
            string newFilePath=path+"/"+file+"."+extension;
            if(!File.Exists(newFilePath)){
                System.Console.WriteLine("Creating file");
                File.Create(newFilePath);
            }
            else{
                System.Console.WriteLine("File already Exists");
            }
            break;
        }
        case 3:{
            foreach(string path1 in Directory.GetDirectories(path))
             {
                System.Console.WriteLine(path1);
             }
             System.Console.WriteLine("Select the folder to remove");
             string folder=Console.ReadLine();
             foreach(string path1 in Directory.GetDirectories(path)){
                if(path1.Contains(folder)){
                    Directory.Delete(path1);
                }
             }
             break;
        }
        case 4:{
            foreach(string file1 in Directory.GetFiles(path)){
                System.Console.WriteLine(file1);
            }
            System.Console.WriteLine("Enter the file name to be removed");
            string fileName=Console.ReadLine();
            foreach(string file1 in Directory.GetFiles(path)){
                if(file1.Contains(fileName)){
                    File.Delete(file1);
                }
            }
            break;
        }
    }
}
}
