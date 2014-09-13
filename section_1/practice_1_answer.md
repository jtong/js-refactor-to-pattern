在loan.js中加入下列代码：
    
    Loan.createTermLoan = function(commitment,outstanding, riskRating,
                                   capitalStrategy, maturity, expiry) {
        return new Loan(commitment,outstanding, riskRating, capitalStrategy, maturity, expiry);
    }
 
在js中无法设置私有构造器，所以并不能直接使别人无法访问Loan的构造函数。更多的是靠约定俗成的力量去约束。
静态工厂比起直接new，最大的优势就是封装了创建的细节，使得有一天，我们修改创建的细节的时候，比如
我们不想每次使用Loan都new，只需要简单的修改createTermLoan的实现就可以了，而不用每个使用的地方都去改。                                   