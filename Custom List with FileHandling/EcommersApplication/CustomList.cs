using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommersApplication
{
    public partial class CustomList<Type> 
    {
        
        private int _count;
        /// <summary>
        /// This field is used to store the capacity value
        /// </summary>
        private int _capacity;
        private Type [] _array;
        /// <summary>
        /// This property get Capacity value
        /// </summary>
        /// <value></value>
       public int Capacity{get{return _capacity;}}
       /// <summary>
       ///  This property get Count value
       /// </summary>
       /// <value></value>
        public int Count{get{return _count;}}

        public Type this[int index]{
        get{return _array[index];}
        set{ _array[index]=value;}    
    }

        
        /// <summary>
        /// this constructor is used to initial the values
        /// </summary>
        public CustomList(){
             _count=0;
             _capacity=4;
             _array=new Type[_capacity];
        }
        /// <summary>
        /// Add method is used to add the value to the element
        /// </summary>
        /// <param name="element"></param>
        public void Add(Type element){
            if(_count==_capacity){
                GrowSize();
            }
          _array[_count]=element;
          _count++;
        }
        
        
        /// <summary>
        /// GrowSize method is used to increase the size of the value;
        /// </summary>
        public void GrowSize(){
            _capacity=Capacity*2;
            Type [] temp=new Type[_capacity];
            for(int i =0;i<_count;i++){
                temp[i]=_array[i];
            }
            _array=temp;

        }
        //This method is used to Add the range
        public void AddRange(CustomList<Type> element){
               _capacity=_count+element.Count+4;
               Type[] temp=new Type[_capacity];
               for(int i=0;i<_count;i++){
                temp[i]=_array[i];
               }
               int k=0;
               for(int i=_count;i<_count+element.Count;i++){
                temp[i]=element[k];
                k++;
               }
               _array=temp;
               _count=_count+element.Count;

        }
        //this method  is used to check the  values
        public bool Contains(Type element){
            bool temp=false;
            foreach(Type data in _array){
                if(data.Equals(element)){
                    temp=true;
                    break;
                }
            }
            return temp;
        }
   //this method is used to insert the value
        // public void Insert(int position,Type element){
        //     _capacity=_capacity+1+4;
        //     Type[] temp=new Type[_capacity];
        //     for(int i=0;i<_count;i++){
        //         if(i<position){
        //             temp[i]=_array[i];
        //         }
        //         else if(i==position){
        //             temp[i]=element;
        //         }
        //         else{
        //             temp[i]=_array[i-1];
        //         }
        //     }
        //     _count++;//we insert the the number so we increase the count value  by one 
        //     _array=temp;
        // }
        //it is used to remove the particular element
        public void RemoveAt(int position){
            
            for(int i=0;i<_count-1;i++){
               if(i>=position){
                   _array[i]=_array[i+1];
               }
            }
            _count--;
        }
        //This method is used to Remove the Element
        public bool Remove(Type element){
          int position=IndexOf(element);
           if(position>=0){
               RemoveAt(position);
               return true;
           }
           else{
            return false;
           }
        }
        //This method is used to find the index of an element
        public int IndexOf(Type element){
            int index=-1;
            for(int i=0;i<_count;i++){
                if(element.Equals(_array[i])){
                    index=i;
                    break;
                }
            }
            return index;
        }

       
        

        public void Insert(int position ,Type element){
            _capacity=_capacity+1+4;
            Type [] temp =new Type[_capacity];
            for(int i=0;i<_count+1;i++){
                if(i<position){
                    temp[i]=_array[i];
                }
                else if(i==position){
                    temp[i]=element;
                }
                else{
                    temp[i]=_array[i-1];
                }
            }
            _count++;
            _array=temp;
        }
    //This method is used for sort
   
      public  void Sort(){
        
        for(int i=0;i<_count-1;i++){
            for(int j=0;j<_count-1;j++){
                if(IsGreater(_array[j],_array[j+1])){
                     Type temp=_array[j+1];
                    _array[j+1]=_array[j];
                    _array[j]=temp;

                }
            }
        }
    }


    public bool IsGreater(Type value1,Type value2){
       int result=Comparer<Type>.Default.Compare(value1,value2);
      if(result>0){
        return true;
      }
      return false;

    }

   
    }
}