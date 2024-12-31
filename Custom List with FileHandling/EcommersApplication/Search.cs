using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace EcommersApplication
{
    public static class Search
    {
        public static DataType BinarySearch<DataType>(CustomList<DataType> list,string Id,string propertyName)
      {
       int left=0;int right=list.Count-1;
    //    DataType currentObject=null;
      
       while(left<=right){
       int mid=(left+right)/2;
       //Getting the middle element object
       DataType currentObject=list[mid];
       PropertyInfo property=typeof(DataType).GetProperty(propertyName);
       if(property==null){
        System.Console.WriteLine("Property not found");
        return default;
       }
       string currentId=(string)property.GetValue(currentObject);

       if(currentId.Equals(Id)){
        return currentObject;
       }
       else if(currentId.CompareTo(Id)<0){
           left=mid+1;
       }
       else{
        right=mid-1;
       }

       }
       return default;
      }
       
         
    }
}
