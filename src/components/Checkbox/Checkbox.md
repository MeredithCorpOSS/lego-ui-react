#### Checkbox example:

```js
const Checkbox = require('./Checkbox').Checkbox;

<div>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="transparent"
      name="name"
      index="1"
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="primary"
      name="name"
      index="2"
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="secondary"
      name="name"
      index="3"
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="danger"
      name="name"
      index="4"
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="success"
      name="name"
      index="5"
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="warning"
      name="name"
      index="6"
    />
  </span>

</div>
```
#### Checkbox with size:

```js
const Checkbox = require('./Checkbox').Checkbox;

<div>
  <span className="Column-small">
    <Checkbox
      size="small"
      theme="transparent"
      name="name"
      index="1"
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="transparent"
      name="name"
      index="2"
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="large"
      theme="transparent"
      name="name"
      index="3"
    />
  </span>
</div>
```

#### Checkbox with checked:

```js
const Checkbox = require('./Checkbox').Checkbox;

<div>
  <span className="Column-small">
    <Checkbox
      size="small"
      theme="transparent"
      name="name"
      index="1"
      checked={true}
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="secondary"
      name="name"
      index="2"
      checked={true}
    />
  </span>
</div>
```

#### Checkbox with partial checked:

```js
const Checkbox = require('./Checkbox').Checkbox;

<div>
  <span className="Column-small">
    <Checkbox
      size="regular"
      theme="transparent"
      name="name"
      index="1"
      checked={true}
      partial={true}
    />
  </span>
  <span className="Column-small">
    <Checkbox
      size="small"
      theme="secondary"
      name="name"
      index="2"
      checked={true}
      partial={true}
    />
  </span>
</div>
```
