/*
Ts provides three types of access modifiers:

* private:only accessible within the class
* protected: accessible within the class and subclasses.
* public : accessible everywhere.

*/

class MyCar{
    public make:string;
    public model:string;
    public year:number;
    protected vinNumber=921439 
    private doorLockCode=9342190;
    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }
} 

class Buggati extends MyCar{
    //class Buggati can access both protected and public members but not private members.
    constructor(make:string,model:string,year:number){
        super(make,model,year);
    }
    
    
}

const buggati1=new Buggati("buggati","buggati",2017);//buggati1 can only access public members.

