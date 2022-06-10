import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import { computed } from '@ember/object';


export default Controller.extend({


    products: [
        { id: 1, name: 'Sony', description: 'LCD 40inch', price: '30,000', type: 'Television' },
        { id: 2, name: 'Shirt', description: '100% cotton', price: '3,000', type: 'Apparel' },
        { id: 3, name: 'Samsung', description: 'Android 6inch', price: '20,000', type: 'Mobile' },
        { id: 4, name: 'LG', description: 'Double door 6.5 ltrs', price: '25,000', type: 'Refrigerator' },
        { id: 5, name: 'Jeans', description: 'Denim 36', price: '5,000', type: 'Apparel' },
        
    ],
    store: service(),
    // init() {
    //   this._super(...arguments);
    //   const storedProducts = products.map((product) => {
    //     console.log(storedProducts);
    //     return this.store.createRecord("product", product);
    //   });
    //   this.set("products", storedProducts);
    // },

    // actions: {
    //     add() {
    //         console.log('add')
    //         const name = this.get('name');
    //         const description = this.get('description');
    //         const price = this.get('price');
    //         const type = this.get('type')
    //         const productDetails = this.get('products');
    //         const details = {
    //             name: name,
    //            description: description,
    //             price: price,
    //             type: type,
    //         }
    //        
    //     },
    //     delete() {
    //         const productDetails = this.get('products');
    //         productDetails.removeAt(0)
    //         console.log(productDetails)
    //         this.set('employees', productDetails);
    //     },



    // }
    actions: {
        delete(index) {    
            const productDetails = this.get('products');
            productDetails.removeAt(index)
            console.log(productDetails)
            this.set('products', productDetails);
        },

        changeColor : function(index){
            const productDetails = this.get('products');
            // productDetails.removeAt(index)

        	this.toggleProperty("usered", index);
            this.set('products', productDetails);

      }

    }

});



