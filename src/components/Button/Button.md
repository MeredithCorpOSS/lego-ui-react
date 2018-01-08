Button example:
```js
const Button = require('./Button').Button;
<Button text="Primary" />
```

Button with disabled state:

```js
const Button = require('./Button').Button;
const Correct = require('../SvgIcons/SvgIcons').Correct;
<div>

  <span className="Column-small">
    <Button
      text="Primary"
      disabled={true}
    />
  </span>

  <span className="Column-small">
     <Button
      theme="secondary"
      text="Primary"
      disabled={true}
    />

  </span>

  <span className="Column-small">
   <Button
      theme="warning"
      text="Warning"
      disabled={true}
    />
  </span>

  <span className="Column-small">
   <Button
      theme="danger"
      text="Danger"
      disabled={true}
    />
  </span>

  <span className="Column-small">
   <Button
      theme="transparent"
      text="Transparent"
      disabled={true}
    />
  </span>
</div>
```

Refer to [LinkButton](#linkbutton) for more examples
