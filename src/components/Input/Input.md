Input example:

```js
const Input = require('./Input').Input;

<div>
  <span className="Column-small">
    <Input
      name="input"
      placeholder="Primary"
    />
  </span>

  <span className="Column-small">
    <Input
      name="input"
      placeholder="Secondary"
      theme="secondary"
    />
  </span>

  <span className="Column-small">
    <Input
      name="input"
      placeholder="warning"
      theme="warning"
    />
  </span>

  <span className="Column-small">
    <Input
      name="input"
      placeholder="Danger"
      theme="danger"
    />
  </span>

  <span className="Column-small">
    <Input
      name="input"
      placeholder="Success"
      theme="success"
    />
  </span>

  <span className="Column-small">
    <Input
      name="input"
      placeholder="Transparent"
      theme="transparent"
    />
  </span>
</div>
```

Input with sizes:

```js
const Input = require('./Input').Input;
<div>

  <span className="Column-small">
    <Input
      name="input"
      size="small"
      placeholder="Small"
      theme="transparent"
    /> {" "}
  </span>

  <span className="Column-small">
    <Input
      name="input"
      placeholder="Regular"
      size="regular"
      theme="transparent"
    />{" "}
  </span>

  <span className="Column-small">
    <Input
      name="input"
      placeholder="Large"
      size="large"
      theme="transparent"
    />{" "}
  </span>
</div>
```

Input with looks:

```js
const Input = require('./Input').Input;
<div>
  <span className="Column-small">
    <Input
      name="input"
      look="normal"
      placeholder="Normal"
      theme="transparent"
    /> {" "}
  </span>

  <span className="Column-small">
    <Input
      name="input"
      look="rounded"
      placeholder="Rounded"
      theme="transparent"
    /> {" "}
  </span>

</div>
```
Search Input:

```js
const Input = require('./Input').Input;
const Correct = require('../SvgIcons/SvgIcons').Correct;
<div>
  <Input
    type="search"
    name="input"
    size="small"
    text="With Icon"
    theme="transparent"
  />
</div>
```


 Input with icon:

```js
const Input = require('./Input').Input;
const Correct = require('../SvgIcons/SvgIcons').Correct;
<div>
  <Input
    name="input"
    size="small"
    text="With Icon"
    theme="transparent"
    iconBefore={Correct}
  />
</div>
```
