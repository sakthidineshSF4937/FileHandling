using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace EcommersApplication
{
    public static class ReadAndWrite<T>
    {
        public static void WriteToCSV<Type>(CustomList<Type> dataList)
        {
            string filepath = $"SavedData/{typeof(Type).Name}.csv";
            //Check if the file exists,and if not create it
            if (!File.Exists(filepath))
            {
                File.Create(filepath).Close();
            }
            List<String> fileData = new List<string>();//List to store row to CSV file
            //get all properties of the type(class) being passed
            PropertyInfo[] names = typeof(Type).GetProperties();
            //Loop through each object in the dataList
            //Iterating the passed Object
            foreach (Type info in dataList)
            {
                List<string> rowData = new List<string>();//List to store values of each row
                //loop through each property of object and get its value
                foreach (PropertyInfo prop in names)
                {
                    //skip the index
                    if (prop.GetIndexParameters().Length == 0)
                    {
                        //check if the property type is not datetime,then add value to the row
                        if (!(prop.PropertyType.Name == "DateTime"))
                        {
                            rowData.Add(prop.GetValue(info)?.ToString() ?? "");//Add value or empty string if null
                        }
                        else
                        {
                            DateTime date = (DateTime)prop.GetValue(info);//Get DateTimevalue
                            rowData.Add(date.ToString("dd/MM/yyyy"));//Format DateTime value;
                        }
                    }
                }
                //join the row data with commas and add it to the file data
                string row = string.Join(",", rowData);
                fileData.Add(row);
                File.WriteAllLines(filepath, fileData);
                
            }
        
        }
        public static CustomList<T> ReadToCSV()
        {
            string filepath = $"SavedData/{typeof(T).Name}.csv";
            CustomList<T> data = new CustomList<T>();
            PropertyInfo[] properties = typeof(T).GetProperties();
            if (File.Exists(filepath))
            {
                StreamReader sr = new StreamReader(filepath);
                string line = sr.ReadLine();
                while(line != null)
                {
                    string[] values = line.Split(",");
                    T obj = (T)Activator.CreateInstance(typeof(T));
                    int i = 0;
                    foreach (var prop in properties)
                    {
                        if (prop.PropertyType == typeof(DateTime))
                        {
                            prop.SetValue(obj, DateTime.ParseExact(values[i++], "dd/MM/yyyy", null));
                        }
                        else if (prop.PropertyType == typeof(double))
                        {
                            prop.SetValue(obj, double.Parse(values[i++]));
                        }
                        else if (prop.PropertyType == typeof(int))
                        {
                            prop.SetValue(obj,int.Parse(values[i++]));
                        }
                        else if(prop.PropertyType.IsEnum){
                            prop.SetValue(obj,Enum.Parse(prop.PropertyType,values[i++]));
                        }
                        else
                        {
                            prop.SetValue(obj, Convert.ChangeType(values[i++],prop.PropertyType));
                        }
                    }
                    data.Add(obj);
                    line = sr.ReadLine();
                }
                sr.Close();
            }

            return data;


        }
    }
}