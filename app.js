(function(){
    var app = angular.module('store', []);
    app.controller("StoreController", function(){
        this.products = gems;
    });
    var gems = [
        {
            name: "First Product",
            price: 2.95,
            description: "asnvlaieur aev erv aev eav aev",
            soldOut: false,
            images: [
                {
                    full: "images/denis-bigus1.jpg",
                    thumbs: "images/denis-bigus1.jpg"
                },
                {
                    full: "images/denis-bigus1.jpg",
                    thumbs: "images/denis-bigus1.jpg"
                }
            ]
        },
        {
            name: "Second product",
            price: 2.5,
            description: "asnvlaieur aev erv aev eav aev",
            soldOut: false
        }
    ]
})();