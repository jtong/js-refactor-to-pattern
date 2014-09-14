在main.js中加入下列代码：
    
    window.nodeFactory = {
        createStringNode: function(textBuffer,  textBegin,  textEnd,  shouldDecode) {
            if (shouldDecode) {
                return new DecodingStringNode(new StringNode(textBuffer, textBegin, textEnd));
            }
            return new StringNode(textBuffer, textBegin, textEnd);
        }
    }
 
                                   