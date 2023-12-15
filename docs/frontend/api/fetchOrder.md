## Constants

<dl>
<dt><a href="#fetchOrder">fetchOrder</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch the order.</p>
</dd>
<dt><a href="#placeOrder">placeOrder</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Place an order.</p>
</dd>
<dt><a href="#getPaymentIntent">getPaymentIntent</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Get payment intent.</p>
</dd>
</dl>

<a name="fetchOrder"></a>

## fetchOrder ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch the order.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |

<a name="placeOrder"></a>

## placeOrder ⇒ <code>Promise.&lt;Object&gt;</code>
Place an order.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| order | <code>Object</code> | The order data. |

<a name="getPaymentIntent"></a>

## getPaymentIntent ⇒ <code>Promise.&lt;Object&gt;</code>
Get payment intent.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| amount | <code>number</code> | The amount to be paid. |

