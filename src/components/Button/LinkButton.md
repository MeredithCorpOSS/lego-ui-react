LinkButton example:

```js
const LinkButton = require('./LinkButton').LinkButton;
<div>
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    text="Primary Button"
  /> {" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    text="Secondary Button"
    theme="secondary"
  />{" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    text="warning Button"
    theme="warning"
  />{" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    text="Danger Button"
    theme="danger"
  />{" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    text="Success Button"
    theme="success"
  />{" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    text="Transparent Button"
    theme="transparent"
  />
</div>
```

LinkButton with sizes:

```js
const LinkButton = require('./LinkButton').LinkButton;
<div>
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    size="small"
    text="Small Button"
  /> {" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    text="Regular Button"
    size="regular"
  />{" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    text="Large Button"
    size="large"
  />{" "}
</div>
```

LinkButton with looks:

```js
const LinkButton = require('./LinkButton').LinkButton;
<div>
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    look="normal"
    text="Normal Button"
  /> {" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    look="rounded"
    text="Rounded Button"
  /> {" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    look="clear"
    text="Clear Button"
    theme="transparent"
  /> {" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    look="square"
    text="Square Button"
  /> {" "}
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    look="circle"
    text="C"
  /> {" "}

</div>
```
LinkButton with icons:

```js
const LinkButton = require('./LinkButton').LinkButton;
const Correct = require('../SvgIcons/SvgIcons').Correct;
<div>
  <LinkButton
    href="mailto:prathik.shetty@timeinc.com"
    size="small"
    text="With Icon Button"
    icon={Correct}
  />
</div>
```


LinkButton with highlight state:

```js
const LinkButton = require('./LinkButton').LinkButton;
const Correct = require('../SvgIcons/SvgIcons').Correct;
<div>

  <span className="Column-small">
    <LinkButton
      href="mailto:prathik.shetty@timeinc.com"
      text="Primary"
      highlight={true}
    />
  </span>

  <span className="Column-small">
     <LinkButton
      href="mailto:prathik.shetty@timeinc.com"
      theme="secondary"
      text="Primary"
      highlight={true}
    />

  </span>

  <span className="Column-small">
   <LinkButton
      href="mailto:prathik.shetty@timeinc.com"
      theme="warning"
      text="Warning"
      highlight={true}
    />
  </span>

  <span className="Column-small">
   <LinkButton
      href="mailto:prathik.shetty@timeinc.com"
      theme="danger"
      text="Danger"
      highlight={true}
    />
  </span>
</div>
```
