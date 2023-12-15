<a name="PrivateRoute"></a>

## PrivateRoute ⇒ <code>React.Component</code>
PrivateRoute component.
This component is used to protect routes that require authentication.
If the user is authenticated, it renders the passed component.
If the user is not authenticated, it redirects to the signIn page.

**Kind**: global constant  
**Returns**: <code>React.Component</code> - - The Component if the user is authenticated, otherwise a Navigate component to the signIn page.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The properties passed to the component. |
| props.component | <code>React.Component</code> | The component to render if the user is authenticated. |
| props.rest | <code>Object</code> | The rest of the properties passed to the component. |

