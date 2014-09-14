
function AttributeDescriptor(){

};

AttributeDescriptor().prototype.method_a = function(){
    console.log("I would be extended");
};

function BooleanDescriptor(){

};

BooleanDescriptor.prototype = new _AttributeDescriptor();

function DefaultDescriptor(){

};

DefaultDescriptor.prototype = new _AttributeDescriptor();

function IntegerDescriptor(){

};

IntegerDescriptor.prototype = new _AttributeDescriptor();

AttributeDescriptor.createBooleanDescriptor = function(){
    return new BooleanDescriptor();
};

AttributeDescriptor.createIntegerDescriptor = function(){
    return new IntegerDescriptor();
};

AttributeDescriptor.createDefaultDescriptor = function(){
    return new DefaultDescriptor();
};
