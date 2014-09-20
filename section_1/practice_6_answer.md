    
    function Card(number, display, card_color){
        this.number = number,
        this.display = display,
        this.card_color = card_color
    };
    
    Card.prototype.is_bigger_than = function(card){
        return ! card.number > this.number;
    };