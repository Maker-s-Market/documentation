## Constants

<dl>
<dt><a href="#fetchRatingById">fetchRatingById</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch the rating of a product by id.</p>
</dd>
<dt><a href="#addRating">addRating</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Add a rating for a product.</p>
</dd>
<dt><a href="#editRating">editRating</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Edit a rating for a product.</p>
</dd>
<dt><a href="#fetchUserRatingById">fetchUserRatingById</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch the user&#39;s rating by id.</p>
</dd>
<dt><a href="#addUserRating">addUserRating</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Add a rating for a user.</p>
</dd>
<dt><a href="#editUserRating">editUserRating</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Edit a rating for a user.</p>
</dd>
</dl>

<a name="fetchRatingById"></a>

## fetchRatingById ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch the rating of a product by id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200 or 204.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the product. |
| token | <code>string</code> | The authorization token. |

<a name="addRating"></a>

## addRating ⇒ <code>Promise.&lt;Object&gt;</code>
Add a rating for a product.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| rating | <code>number</code> | The rating value. |
| product | <code>string</code> | The id of the product. |
| token | <code>string</code> | The authorization token. |

<a name="editRating"></a>

## editRating ⇒ <code>Promise.&lt;Object&gt;</code>
Edit a rating for a product.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| rating | <code>number</code> | The new rating value. |
| product | <code>string</code> | The id of the product. |
| token | <code>string</code> | The authorization token. |

<a name="fetchUserRatingById"></a>

## fetchUserRatingById ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch the user's rating by id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200 or 204.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user. |
| token | <code>string</code> | The authorization token. |

<a name="addUserRating"></a>

## addUserRating ⇒ <code>Promise.&lt;Object&gt;</code>
Add a rating for a user.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| rating | <code>number</code> | The rating value. |
| seller | <code>string</code> | The id of the seller. |
| token | <code>string</code> | The authorization token. |

<a name="editUserRating"></a>

## editUserRating ⇒ <code>Promise.&lt;Object&gt;</code>
Edit a rating for a user.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| rating | <code>number</code> | The new rating value. |
| seller | <code>string</code> | The id of the seller. |
| token | <code>string</code> | The authorization token. |

