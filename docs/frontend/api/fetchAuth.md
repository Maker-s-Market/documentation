## Constants

<dl>
<dt><a href="#doSignIn">doSignIn</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Sign in a user.</p>
</dd>
<dt><a href="#doSignUp">doSignUp</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Sign up a new user.</p>
</dd>
<dt><a href="#confirmCode">confirmCode</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Confirm the verification code.</p>
</dd>
<dt><a href="#resendCode">resendCode</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Resend the verification code.</p>
</dd>
<dt><a href="#fetchUser">fetchUser</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch the user data.</p>
</dd>
<dt><a href="#recoverPasswordEmail">recoverPasswordEmail</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Recover the password via email.</p>
</dd>
<dt><a href="#recoverPassword">recoverPassword</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Recover the password.</p>
</dd>
<dt><a href="#editProfile">editProfile</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Edit the user profile.</p>
</dd>
<dt><a href="#fetchUserById">fetchUserById</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch a user by id.</p>
</dd>
<dt><a href="#follow">follow</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Follow a user.</p>
</dd>
<dt><a href="#unfollow">unfollow</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Unfollow a user.</p>
</dd>
<dt><a href="#fetchFollowersById">fetchFollowersById</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch followers by id.</p>
</dd>
<dt><a href="#fetchFollowingById">fetchFollowingById</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch following by id.</p>
</dd>
<dt><a href="#changeRoleStatus">changeRoleStatus</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Change the role status of a user.</p>
</dd>
<dt><a href="#signUpIdp">signUpIdp</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Sign up a user with an identity provider.</p>
</dd>
</dl>

<a name="doSignIn"></a>

## doSignIn ⇒ <code>Promise.&lt;Object&gt;</code>
Sign in a user.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | The user data. |

<a name="doSignUp"></a>

## doSignUp ⇒ <code>Promise.&lt;Object&gt;</code>
Sign up a new user.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | The user data. |
| photo | <code>File</code> | The user's photo. |

<a name="confirmCode"></a>

## confirmCode ⇒ <code>Promise.&lt;Object&gt;</code>
Confirm the verification code.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | The username of the user. |
| code | <code>string</code> | The verification code. |

<a name="resendCode"></a>

## resendCode ⇒ <code>Promise.&lt;Object&gt;</code>
Resend the verification code.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The email of the user. |

<a name="fetchUser"></a>

## fetchUser ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch the user data.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |

<a name="recoverPasswordEmail"></a>

## recoverPasswordEmail ⇒ <code>Promise.&lt;Object&gt;</code>
Recover the password via email.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The email of the user. |

<a name="recoverPassword"></a>

## recoverPassword ⇒ <code>Promise.&lt;Object&gt;</code>
Recover the password.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The email of the user. |
| code | <code>string</code> | The verification code. |
| password | <code>string</code> | The new password. |

<a name="editProfile"></a>

## editProfile ⇒ <code>Promise.&lt;Object&gt;</code>
Edit the user profile.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| id | <code>string</code> | The id of the user. |
| name | <code>string</code> | The new name of the user. |
| username | <code>string</code> | The new username of the user. |
| email | <code>string</code> | The new email of the user. |
| city | <code>string</code> | The new city of the user. |
| region | <code>string</code> | The new region of the user. |
| photo | <code>File</code> | The new photo of the user. |

<a name="fetchUserById"></a>

## fetchUserById ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch a user by id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user. |

<a name="follow"></a>

## follow ⇒ <code>Promise.&lt;Object&gt;</code>
Follow a user.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| id | <code>string</code> | The id of the user to follow. |

<a name="unfollow"></a>

## unfollow ⇒ <code>Promise.&lt;Object&gt;</code>
Unfollow a user.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| id | <code>string</code> | The id of the user to unfollow. |

<a name="fetchFollowersById"></a>

## fetchFollowersById ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch followers by id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| sort | <code>string</code> | The sort order. |

<a name="fetchFollowingById"></a>

## fetchFollowingById ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch following by id.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| sort | <code>string</code> | The sort order. |

<a name="changeRoleStatus"></a>

## changeRoleStatus ⇒ <code>Promise.&lt;Object&gt;</code>
Change the role status of a user.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 200.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authorization token. |
| role | <code>string</code> | The new role of the user. |

<a name="signUpIdp"></a>

## signUpIdp ⇒ <code>Promise.&lt;Object&gt;</code>
Sign up a user with an identity provider.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response data.  
**Throws**:

- <code>Error</code> If the response status is not 201.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the user. |
| username | <code>string</code> | The username of the user. |
| email | <code>string</code> | The email of the user. |
| city | <code>string</code> | The city of the user. |
| region | <code>string</code> | The region of the user. |
| photo | <code>string</code> | The photo of the user. |

