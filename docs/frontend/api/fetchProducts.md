## Constants

<dl>
<dt><a href="#fetchProductById">fetchProductById</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch a product by id.</p>
</dd>
<dt><a href="#fetchTopProducts">fetchTopProducts</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch top products.</p>
</dd>
<dt><a href="#fetchProductsByCategory">fetchProductsByCategory</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch products by category.</p>
</dd>
<dt><a href="#searchProducts">searchProducts</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Search products.</p>
</dd>
<dt><a href="#addProduct">addProduct</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Add a product.</p>
</dd>
<dt><a href="#deleteProduct">deleteProduct</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Delete a product by id.</p>
</dd>
<dt><a href="#editProduct">editProduct</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Edit a product.</p>
</dd>
<dt><a href="#editProductAvailability">editProductAvailability</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Edit product availability.</p>
</dd>
<dt><a href="#fetchUserProducts">fetchUserProducts</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch user&#39;s products.</p>
</dd>
<dt><a href="#fetchProductsReviewRatings">fetchProductsReviewRatings</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch products review ratings.</p>
</dd>
</dl>

<a name="fetchProductById"></a>

## fetchProductById ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch a product by id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the product. |

<a name="fetchTopProducts"></a>

## fetchTopProducts ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch top products.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| limit | <code>number</code> | The number of top products to fetch. |

<a name="fetchProductsByCategory"></a>

## fetchProductsByCategory ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch products by category.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| category | <code>string</code> | The category of the products. |

<a name="searchProducts"></a>

## searchProducts ⇒ <code>Promise.&lt;Object&gt;</code>
Search products.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query. |
| categoryId | <code>string</code> | The id of the category. |
| sort | <code>string</code> | The sort order. |
| discount | <code>boolean</code> | Whether to include discounted products. |

<a name="addProduct"></a>

## addProduct ⇒ <code>Promise.&lt;Object&gt;</code>
Add a product.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| product | <code>Object</code> | The product data. |
| photo | <code>File</code> | The product photo. |

<a name="deleteProduct"></a>

## deleteProduct ⇒ <code>Promise.&lt;Object&gt;</code>
Delete a product by id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the product. |

<a name="editProduct"></a>

## editProduct ⇒ <code>Promise.&lt;Object&gt;</code>
Edit a product.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| id | <code>string</code> | The id of the product. |
| product | <code>Object</code> | The new product data. |
| photo | <code>File</code> | The new product photo. |

<a name="editProductAvailability"></a>

## editProductAvailability ⇒ <code>Promise.&lt;Object&gt;</code>
Edit product availability.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| id | <code>string</code> | The id of the product. |
| availability | <code>boolean</code> | The new availability status. |

<a name="fetchUserProducts"></a>

## fetchUserProducts ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch user's products.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |

<a name="fetchProductsReviewRatings"></a>

## fetchProductsReviewRatings ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch products review ratings.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |

