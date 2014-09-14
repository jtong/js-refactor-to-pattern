将main.js中代码改为下列的样子：
    
    var AttributeDescriptor = (function(){
        var _AttributeDescriptor = function(){
    
        };
    
        _AttributeDescriptor().prototype.method_a = function(){
            console.log("I would be extended")
        };
    
        var BooleanDescriptor = function(){
    
        };
    
        BooleanDescriptor.prototype = new _AttributeDescriptor();
    
        var DefaultDescriptor = function(){
    
        };
        DefaultDescriptor.prototype = new _AttributeDescriptor();
    
        var IntegerDescriptor = function(){
    
        };
    
        IntegerDescriptor.prototype = new _AttributeDescriptor();
    
        _AttributeDescriptor.createBooleanDescriptor = function(){
            return new BooleanDescriptor();
        };
    
        _AttributeDescriptor.createIntegerDescriptor = function(){
            return new IntegerDescriptor();
        };
    
        _AttributeDescriptor.createDefaultDescriptor = function(){
            return new DefaultDescriptor();
        };
    
        return _AttributeDescriptor;
    })();
 
                                   