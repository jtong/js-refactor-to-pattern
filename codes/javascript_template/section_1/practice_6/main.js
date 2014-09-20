window.card_red_heart_A = {
    number: 1,
    display: "A",
    card_color: "red heart"
};

window.card_red_heart_A.is_bigger_than = function(card){
    return ! card.number > this.number;
};