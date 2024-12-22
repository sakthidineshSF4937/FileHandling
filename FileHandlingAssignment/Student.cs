using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace FileHandlingAssignment
{
    public enum Gender {Select,Male,Female,Transgender}
    public class Student
    {
        public string Name{get;set;}
        public string FatherName{get;set;}
        public Gender StudentGender{get;set;}
        public DateTime DOB {get;set;}
        public int TotalMark{get;set;}

    }
}