(function(){
  /*    this is another angular store app update */
  var app = angular.module("store",[]);
  
  
  var gem = [{
    productId :0,
    name : 'Dodecahedron',
    price: 2,
    description: 'the Dodecahedron is used for gem purposes',
    canpurchase: false,
    specialOffer : "Twee halen, 1 betalen",
    soldOut: false,
    img:[{
      full:'http://thumbs4.ebaystatic.com/m/mth8Zf6GvzlE59Dg-5tvNKw/140.jpg',
      thumb:'http://www.brickshelf.com/gallery/Polegon/Polyhedrons/thumb/icosidodecahedronr.jpg_thumb.jpg'
    },
    {
      full:'http://thumbs4.ebaystatic.com/m/mth8Zf6GvzlE59Dg-5tvNKw/140.jpg',
      thumb:'https://img1.etsystatic.com/003/0/6063289/il_340x270.403024229_b9ae.jpg'
    }],
    reviews: [
      {
        stars:3,
        body:"Awesome dodecahedron",
        author:"john@doe.com"
      },
      {
        stars:5,
        body:"really nice dodecahedron",
        author:"dra@doe.com"
      },
      {
        stars:1,
        body:"I dont like it, fraggin dodecahedron",
        author:"orca@doe.com"
      }
    ]
  },{
    productId :1,
    name : 'Megacahedron',
    price: 12.45,
    description: 'the Megacahedron is used for gem purposes',
    canpurchase: false,
    specialOffer : "Drie halen, 1 betalen",
    soldOut: false,
    img:[{
      full:'http://thumbs4.ebaystatic.com/m/mth8Zf6GvzlE59Dg-5tvNKw/140.jpg',
      thumb:'http://www.brickshelf.com/gallery/Polegon/Polyhedrons/thumb/icosidodecahedronr.jpg_thumb.jpg'
    },
    {
      full:'http://thumbs4.ebaystatic.com/m/mth8Zf6GvzlE59Dg-5tvNKw/140.jpg',
      thumb:'https://img1.etsystatic.com/003/0/6063289/il_340x270.403024229_b9ae.jpg'
    }],
    reviews: [
      {
        stars:5,
        body:"relly nice megacahedron",
        author:"dra@doe.com"
      },
      {
        stars:3,
        body:"Awesome megacahedron",
        author:"john@doe.com"
      },
      {
        stars:1,
        body:"I dont like it, fraggin megacahedron",
        author:"orca@doe.com"
      }
    ]
  },{
    productId :2,
    name : 'Gigacahedron',
    price: 112.45,
    description: 'the Gigacahedron is used for gem purposes',
    canpurchase: false,
    specialOffer : "none",
    soldOut: false,
    img:[{
      full:'http://thumbs4.ebaystatic.com/m/mth8Zf6GvzlE59Dg-5tvNKw/140.jpg',
      thumb:'http://www.brickshelf.com/gallery/Polegon/Polyhedrons/thumb/icosidodecahedronr.jpg_thumb.jpg'
    },
    {
      full:'http://thumbs4.ebaystatic.com/m/mth8Zf6GvzlE59Dg-5tvNKw/140.jpg',
      thumb:'https://img1.etsystatic.com/003/0/6063289/il_340x270.403024229_b9ae.jpg'
    }],
    reviews: [
      {
        stars:3,
        body:"Awesome Gigacahedron",
        author:"john@doe.com"
      },
      {
        stars:5,
        body:"really nice Gigacahedron",
        author:"dra@doe.com"
      },
      {
        stars:4,
        body:"I like it, the coolest Gigacahedron evvah",
        author:"orca@doe.com"
      }
    ]
  }];
  
 
  app.controller("reviewController",function(){
    this.review = {};
    this.addReview = function(activeProduct){
      activeProduct.reviews.push(this.review);
        this.review = {};
    }
  });

  app.controller("storeController",function(){
    this.activeProduct = 0;
    this.products = gem;
    this.selectProduct = function(productIndex){
      this.activeProduct = productIndex;
    }
  });
  

  
  
  /** CUSTOM DIRECTIVES **/
  
   app.directive('productTitle',function(){
    return{
      restrict:'E',
      templateUrl: 'product-title.html'
    }
  });
  
  app.directive('productPanels',function(){
    return{
      restrict:'E',
      templateUrl:'product-panels.html',
      controller:function(){
          this.activePanel = 1;
          this.selectPanel = function(panelIndex){
              this.activePanel = panelIndex;
          };
          this.isActivePanel = function(panelIndex){
              var isActive = false;
              if(panelIndex === this.activePanel){
                  isActive = true;
              }
              return isActive;
          }
      },
      controllerAs:"panel"
    }
  })
  
})();