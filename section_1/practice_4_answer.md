将main.js中代码改为下列的样子：
    
    function XMLBuilder(){
    
    };
    
    function DOMBuilder(){
    
    };
    
    function AbstractBuilderTest(){
    
    };
    
    AbstractBuilderTest().prototype.getOrders = function(){
        builder = this.createBuilder("orders");
        builder.addBelow("order");
        builder.addAbove("customer");
        return builder.build();
    };
    
    function XMLBuilderTest(){
    
    };
    
    XMLBuilderTest.prototype = new AbstractBuilderTest();
    
    XMLBuilderTest.prototype.createBuilder = function(){
        return new XMLBuilder("orders");
    };
    
    function DOMBuilderTest(){
    
    };
    DOMBuilderTest.prototype = new AbstractBuilderTest();
    
    DOMBuilderTest.prototype.createBuilder = function(){
        return new DOMBuilders("orders");
    };
    
    
    
    
    

 
                                   