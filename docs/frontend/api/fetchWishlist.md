## Constants

<dl>
<dt><a href="#fetchWishlist">fetchWishlist</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch the wishlist.</p>
</dd>
<dt><a href="#addToWishlist">addToWishlist</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Add a product to the wishlist.</p>
</dd>
<dt><a href="#deleteFromWishlist">deleteFromWishlist</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Delete a product from the wishlist.</p>
</dd>
</dl>

<a name="fetchWishlist"></a>

## fetchWishlist ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch the wishlist.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |

<a name="addToWishlist"></a>

## addToWishlist ⇒ <code>Promise.&lt;Object&gt;</code>
Add a product to the wishlist.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| product | <code>string</code> | The id of the product. |
| token | <code>string</code> | The authorization token. |

<a name="deleteFromWishlist"></a>

## deleteFromWishlist ⇒ <code>Promise.&lt;Object&gt;</code>
Delete a product from the wishlist.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| product | <code>string</code> | The id of the product. |
| token | <code>string</code> | The authorization token. |

