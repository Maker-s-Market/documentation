## Constants

<dl>
<dt><a href="#addReview">addReview</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Add a review for a product.</p>
</dd>
<dt><a href="#fetchReviewsById">fetchReviewsById</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch reviews by product id.</p>
</dd>
<dt><a href="#deleteReview">deleteReview</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Delete a review by id.</p>
</dd>
</dl>

<a name="addReview"></a>

## addReview ⇒ <code>Promise.&lt;Object&gt;</code>
Add a review for a product.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the product. |
| review | <code>string</code> | The review text. |
| token | <code>string</code> | The authorization token. |

<a name="fetchReviewsById"></a>

## fetchReviewsById ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch reviews by product id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the product. |

<a name="deleteReview"></a>

## deleteReview ⇒ <code>Promise.&lt;Object&gt;</code>
Delete a review by id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the review. |
| token | <code>string</code> | The authorization token. |

