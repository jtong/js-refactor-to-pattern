
function StringParser(){

}

StringParser.prototype.find = function(options){
    //find by options
    var textBuffer, textBegin, textEnd;//these would find in real code
    //after finding
    return StringNode.createStringNode(
        textBuffer, textBegin, textEnd,
        options.shouldDecodeNodes()
    )
};

function StringNode(){

}

StringNode.createStringNode = function(textBuffer,  textBegin,  textEnd,  shouldDecode){
    if (shouldDecode) {
        return new DecodingStringNode(new StringNode(textBuffer, textBegin, textEnd));
    }
    return new StringNode(textBuffer, textBegin, textEnd);
};
