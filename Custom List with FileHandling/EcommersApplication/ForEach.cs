using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommersApplication
{
    public partial class CustomList<Type>:IEnumerable,IEnumerator
    {
        
        int position;
        public IEnumerator GetEnumerator(){
            position=-1;
            return (IEnumerator) this;
        }
        public bool MoveNext(){
               if(position<_count-1){
                position++;
                return true;
               }
               Reset();
               return false;
        }

       public  void Reset(){
            position=-1;
        }
      public Object Current{get{return _array[position];}}
/// <summary>
/// This method is used to reverse the list
/// </summary>
      public void Reverse(){
        Type[] temp=new Type[_capacity];
        int j=0;
        for(int i=_count-1;i>=0;i--){
            temp[j]=_array[i];
            j++;
        }
        _array=temp;
      }
      /// <summary>
      /// This method is used the particular element in the range.
      /// </summary>
      /// <param name="position"></param>
      /// <param name="elements"></param>
      public void InsertRange(int position,CustomList<Type> elements){
        _capacity=_count+elements.Count+4;
        Type[] temp=new Type[_capacity];
        for(int i=0;i<position;i++){
            temp[i]=_array[i];
        }
        int j=0;
        for(int i=position;i<position+elements.Count;i++){
            temp[i]=elements[j];
            j++;
        }
        int k=position;
        for(int i=position+elements.Count;i<_count+elements.Count;i++){
            temp[i]=_array[k];
            k++;
        }
        _array=temp;
        _count=_count+elements.Count;
      }
    }


}