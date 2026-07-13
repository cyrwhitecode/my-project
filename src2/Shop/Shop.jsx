import './Shop.css'

function Shop () {

    const products = [
        {'id': 1, 'name': 'Latte', 'price': 1300, 'image': '/cafe/latte.jpg'},
        {'id': 2, 'name': 'Mocha', 'price': 2000, 'image': '/cafe/mocha.jpg'},
        {'id': 3, 'name': 'Wendys Chocolate Frosty', 'price': 3000, 'image': '/cafe/milk3.jpg'},
        {'id': 4, 'name': 'Espresso', 'price': 1500, 'image': '/cafe/espres_a.jpg'},
        {'id': 5, 'name': 'Café noir', 'price': 1000, 'image': '/cafe/a.jpg'},
        {'id': 6, 'name': 'Mocha chantilly', 'price': 2500, 'image': '/cafe/j(1).jpg'},
        {'id': 7, 'name': 'Flat White', 'price': 3500, 'image': '/cafe/z1.jpg'},
        {'id': 8, 'name': 'Smoothie', 'price': 1500, 'image': '/cafe/milk1.jpg'},
        {'id': 9, 'name': 'Concrete', 'price': 4000, 'image': '/cafe/milk2.jpg'},
        {'id': 10, 'name': 'Malt', 'price': 3500, 'image': '/cafe/choco1.jpg'},
        {'id': 11, 'name': 'Capuccino', 'price': 1500, 'image': '/cafe/m.jpg'},
        {'id': 12, 'name': 'Americano', 'price': 1500, 'image': '/cafe/k.jpg'}
    ];

    return (
        <div className='shop-container'>
            <div className='search-container'>
                <div className='under-container'>
                    <div>
                        <h4 className='search-text'>Search</h4>
                    </div>

                    <div className='under2-container'>
                        <input className='search' type="search" placeholder='Make your searchs' />
                        <button className='go'>Go</button>
                    </div>
                </div>
            </div>
            
            <div className='welcome-shop'>
                <h3>Shop now and bring the café experience home</h3>
            </div>

            <div className='products-container'>
                <div>
                    <h2 className='all-products'>All products</h2>
                </div>
                <section className='products'>
                    {products.map((product) => (
                        <div className='item' key={product.id}>
                            <img className='img' src={product.image} alt="" />
                            <p className='product-name'> {product.name} </p>
                            <div className='product-btn'>
                                <h4 className='product-price'> {product.price} FCFA </h4>
                                <h4 className='add-panier'>Panier</h4>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Shop