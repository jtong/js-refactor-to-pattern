function XMLBuilder(){

}

function DOMBuilder(){

}

function XMLBuilderTest(){

};

XMLBuilderTest.prototype = new AbstractBuilderTest();

XMLBuilderTest.prototype.getOrders = function(){
    builder = new XMLBuilder("orders");
    builder.addBelow("order");
    builder.addAbove("customer");
    return builder.build();
};

function DOMBuilderTest(){

};

XMLBuilderTest.prototype.getOrders = function(){
    builder = new DOMBuilder("orders");
    builder.addBelow("order");
    builder.addAbove("customer");
    return builder.build();
};





