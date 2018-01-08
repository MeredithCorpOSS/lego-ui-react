#### Select example:

```js
  const selectData = [
    {
      value: "Soprts Illustrated",
      text: "Soprts Illustrated"
    },
    {
      value: "Fortune",
      text: "Fortune"
    },
    {
      value: "Time",
      text: "Time"
    },
    {
      value: "Money",
      text: "Money"
    },
    {
      value: "Entertainment",
      text: "Entertainment Weekly"
    }
  ];
const Select = require('./Select').Select;

<div>
  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      allowEmpty={true}
      emptyText="Primary"
      theme="Primary"
  />
  </span>

  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      allowEmpty={true}
      emptyText="Secondary"
      theme="secondary"
    />
  </span>

  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      allowEmpty={true}
      emptyText="Warning"
      theme="warning"
    />
  </span>

  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      allowEmpty={true}
      emptyText="Danger"
      theme="danger"
    />
  </span>

  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      allowEmpty={true}
      emptyText="Success"
      theme="success"
    />
  </span>

  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      allowEmpty={true}
      emptyText="Transparent"
      theme="transparent"
    />
  </span>
</div>
```

#### Select with sizes:

```js
const Select = require('./Select').Select;
const selectData = [
  {
    value: "Soprts Illustrated",
    text: "Soprts Illustrated"
  },
  {
    value: "Fortune",
    text: "Fortune"
  },
  {
    value: "Time",
    text: "Time"
  },
  {
    value: "Money",
    text: "Money"
  },
  {
    value: "Entertainment",
    text: "Entertainment Weekly"
  }
];

<div>
  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      size="small"
      allowEmpty={true}
      emptyText="Small"
      theme="secondary"
    /> {" "}
  </span>

  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      allowEmpty={true}
      emptyText="Regular"
      size="regular"
      theme="secondary"
    />{" "}
  </span>

  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      allowEmpty={true}
      emptyText="Large"
      size="large"
      theme="secondary"
    />{" "}
  </span>
</div>
```

#### Select with looks:

```js
const Select = require('./Select').Select;
  const selectData = [
    {
      value: "Soprts Illustrated",
      text: "Soprts Illustrated"
    },
    {
      value: "Fortune",
      text: "Fortune"
    },
    {
      value: "Time",
      text: "Time"
    },
    {
      value: "Money",
      text: "Money"
    },
    {
      value: "Entertainment",
      text: "Entertainment Weekly"
    }
  ];

<div>
  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      look="normal"
      allowEmpty={true}
      emptyText="Normal"
      theme="secondary"
    /> {" "}
  </span>

  <span className="Column-small">
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      look="rounded"
      allowEmpty={true}
      emptyText="Rounded"
      theme="secondary"
    /> {" "}
  </span>

</div>
```


#### Select with allow empty and different empty text
By defualt empty option is not allowed. Default empty text is "Select".
All above examples use allow empty with diff empty text


#### Select with selected

```js
const Select = require('./Select').Select;
  const selectData = [
    {
      value: "Soprts Illustrated",
      text: "Soprts Illustrated",
      selected: true,
    },
    {
      value: "Fortune",
      text: "Fortune"
    },
    {
      value: "Time",
      text: "Time"
    },
    {
      value: "Money",
      text: "Money"
    },
    {
      value: "Entertainment",
      text: "Entertainment Weekly"
    }
  ];

<div>
  <span>
    <Select
      name="select"
      options={selectData}
      onSelect={console.log}
      look="normal"
      theme="secondary"
    /> {" "}
  </span>

</div>
```
