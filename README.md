# React Component for Iubenda.com Cookie and Privacy Policy

[![npm package version](https://badge.fury.io/js/react-iubenda-policy.svg)](https://www.npmjs.com/package/react-iubenda-policy)
[![npm downloads](https://img.shields.io/npm/dm/react-iubenda-policy.svg)](https://www.npmjs.com/package/react-iubenda-policy)

This component will let you easily use the embedded Iubenda generated policies in your React project.

## Install

```bash
npm i -S react-iubenda-policy
```

## Usage

1. Import the Iubenda component
2. Find your policy id in your Iubenda dashboard. The policy id is the number at the end of the policy direct link.
   -  For example: https://www.iubenda.com/privacy-policy/123456
   -  Your policy id will be **123456**
3. Put the component in your page.

### Properties

- `id`: the policy id.
- `type`: one of the following options:
  - `privacy` to show the *Privacy Policy* button (default)
  - `cookie` to show the *Cookie Policy* button
  - `terms-and-conditions` to show the *Terms and conditions* button
- `style`: one of the following options:
  - `nostyle`: renders the link as text. You can style the link in the wrapping div or span. (default)
  - `black`: renders a black button with white text.
  - `white`: renders a white button with black text.


Note that for the *Terms and Conditions* you should use the internationalized type, for example `termini-e-condizioni` for the Italian language or `condiciones-de-uso` for Spanish. Check the Integration section in your Iubenda dashboard.


### Example

```jsx
import React from 'react'
import Iubenda from 'react-iubenda-policy'

const Policy = () => {
  const myPolicy = 123 // your policy id
  return (
    <div>

      {/* Renders the Privacy Policy link with the text 'Privacy Policy' */}
      <Iubenda id={myPolicy}/>

      <Iubenda id={myPolicy} type='terms-and-conditions' styling='nostyle'>
        Terms and conditions
      </Iubenda>

      <Iubenda id={myPolicy} type='privacy' styling='white'>
        Privacy Policy
      </Iubenda>

      <Iubenda id={myPolicy} type='cookie' styling='black'>
        Cookie Policy
      </Iubenda>
    </div>
  )
}
```

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/react-iubenda-policy.svg
[npm-url]: https://npmjs.org/package/react-iubenda-policy
