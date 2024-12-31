using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection;
namespace EcommersApplication
{/// <summary>
    /// Class GridView <see cref="GridVieW"/> used for Showing table like view in output />
    /// </summary>
    public class Grid<DataType>
    {/// <summary>
    /// This method display user property in table like Format
    /// </summary>
    /// <param name="list"></param>
         public void ShowTable(CustomList<DataType> list){
            if(list !=null && list.Count>0){
                PropertyInfo[] properties=typeof(DataType).GetProperties();
                //line
                Console.WriteLine(new string('-',properties.Length*20));
                //property names
                Console.WriteLine(new string('-',properties.Length*20));
             
               
                foreach(var property in properties){//get property one by one to form a row{
                    System.Console.Write($"{property.Name,-15} |");
                }
                System.Console.WriteLine();
                System.Console.WriteLine(new string('-',properties.Length*20));

               foreach(var data in list){//tranverse list
                
                foreach(var property in properties){
                    if(property.CanRead){
                        if(property.PropertyType==typeof(DateTime)){
                            var value=((DateTime)property.GetValue(data)).ToString("dd/MM/yyyy");
                            Console.Write($"{value,-15} |");
                        }
                        else{
                            var  value=property.GetValue(data);
                            System.Console.Write($"{value,-15} |");
                        }
                    }
                }
                System.Console.WriteLine();
               }
                  System.Console.WriteLine(new string('-',properties.Length*20));
            }
        }
    }
}