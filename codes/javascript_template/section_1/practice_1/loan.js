function Loan( commitment,outstanding, riskRating,
               capitalStrategy, maturity, expiry) {
    this.commitment = commitment;
    this.outstanding = outstanding;
    this.riskRating = riskRating;
    this.maturity = maturity;
    this.expiry = expiry;
    this.capitalStrategy = capitalStrategy;

    if (capitalStrategy == null) {
        if (expiry == null)
            this.capitalStrategy = new CapitalStrategyTermLoan();
        else if (maturity == null)
            this.capitalStrategy = new CapitalStrategyRevolver();
        else
            this.capitalStrategy = new CapitalStrategyRCTL();
    }
}

function  CapitalStrategyTermLoan(){
    //blah blah
}

function CapitalStrategyRevolver(){
    //blah blah
}

function CapitalStrategyRCTL(){
    //blah blah
}


