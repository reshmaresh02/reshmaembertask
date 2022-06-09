import Controller from '@ember/controller';

export default Controller.extend({


    id: '',
    name: '',
    description: '',
    price: '',
    type: [],

    products: [
        { id: 1, name: 'Sony', description: 'lcd 40inch', price: '30,000', type: 'tv' },
        { id: 2, name: 'Samsung', description: 'Android 6inch', price: '20,000', type: 'mobile' },
        { id: 3, name: 'LG', description: 'double door 6.5 ltrs', price: '25,000', type: 'refrigerator' },

    ],

    actions: {
        add() {
            console.log('add')
            const name = this.get('name');
            const description = this.get('description');
            const price = this.get('price');
            const type = this.get('type')
            const productDetails = this.get('products');
            const details = {
                name: name,
               description: description,
                price: price,
                type: type,
            }
            productDetails.pushObject(details);
            this.set('name', 'Vivo')
            this.set('description', 'Android 5inch smartphone')
            this.set('price', '10,000')
            this.set('type','mobile' )

            console.log(productDetails)
            this.set('products', productDetails);
        },
        delete() {
            const productDetails = this.get('products');
            productDetails.removeAt(0)
            console.log(productDetails)
            this.set('employees', productDetails);
        },



    }

});



