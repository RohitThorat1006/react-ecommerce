import React from "react";

import  CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOPDATA from './shop.data.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPDATA
    };
  }

  render() {
    const  { collections } = this.state;
      return (
          <div className='shop-page'>
              {
                collections.map((collection) => (
                  <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
                ))
              }
          </div>
      )
  }
}

export default ShopPage
