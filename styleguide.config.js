const path = require('path')
module.exports = {
  require: [
    path.join(__dirname, 'src/Base.css'),
    path.join(__dirname, 'src/Docs.css')
  ],
  styleguideDir: "docs/styleguide",
  showUsage: true,
  ignore:['**/*.types.{js,ts,,jsx,tsx}'],
  sections: [
    {
      name: 'Buttons',
      sections: [
        {
          name: 'Basic',
          components: '{./src/components/Button/LinkButton.jsx,./src/components/Button/Button.jsx}',
        },
        {
          name: 'CustomButtons',
          components: './src/components/CustomButton/index.jsx',
        },
      ]
    },
    {
      name: 'Forms',
      components: '{./src/components/Input/Input.jsx,./src/components/Textarea/Textarea.jsx,./src/components/Select/Select.jsx,./src/components/Checkbox/Checkbox.jsx}',
    },
    {
      name: 'Others',
      components: '{./src/components/Alert/*.jsx,./src/components/CSSTransition/*.jsx,./src/components/Donut/*.jsx,./src/components/Dropdown/*.jsx,./src/components/Grid/*.jsx,./src/components/HighlightWrapper/*.jsx,./src/components/Label/*.jsx,./src/components/Loading/*.jsx,./src/components/OverUnderLine/*.jsx,./src/components/Pagination/*.jsx,./src/components/SvgIcons/*.jsx,./src/components/Tabs/*.jsx,./src/components/Tooltip/*.jsx,./src/components/MenuTooltip/*.jsx}'
    }
  ]
};

