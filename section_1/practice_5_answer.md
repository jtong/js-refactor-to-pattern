将main.js中代码改为下列的样子：
    
    function StudentBuilder(){
    };
    
    StudentBuilder.prototype.withName = function(name){
        this.name = name;
    };
    
    StudentBuilder.prototype.withGender = function(gender){
        this.gender = gender;
    };
    
    StudentBuilder.prototype.withClassRoom = function(class_room){
        this.class_room = class_room;
    };
    
    StudentBuilder.prototype.build = function(){
        var result = new Student();
        result.name = this.name;
        result.gender = this.gender;
        result.class_room = this.class_room;
        return result;
    };
    
    
    
    
    

 
                                   