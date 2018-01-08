import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Tabs.css';

const tabShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool
});

class Tabs extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    classes: PropTypes.string,
    style: PropTypes.array,
    onTabClick: PropTypes.func.isRequired,
    tabList: PropTypes.arrayOf(tabShape).isRequired,
    tabContent: PropTypes.PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    tabListBefore: PropTypes.node,
    tabListAfter: PropTypes.node,
    attach: PropTypes.oneOf(['before', 'after']),
    theme: PropTypes.oneOf([
      'primary',
      'warning',
      'danger',
      'success',
      'transparent',
      'secondary'
    ]),
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    align: PropTypes.oneOf(['start', 'end', 'center']),
    size: PropTypes.oneOf(['small', 'regular', 'large'])
  };

  static defaultProps = {
    theme: 'transparent',
    attach: 'before',
    align: 'start',
    direction: 'horizontal',
    size: 'regular'
  };

  onTabClick = (tab, name) => {
    if (this.props.onTabClick) {
      this.props.onTabClick(tab, name);
    }
  };

  getCssClasses(props, state) {
    let classNames = classnames(
      'Tabs',
      `Tabs-${props.size}`,
      `Tabs-${props.align}`,
      `Tabs-${props.attach}`,
      `Tabs-${props.direction}`,
      `Theme-${props.theme}`,
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Tabs-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  renderTab = (props, tab, index) => {
    const classNames = classnames(
      'TabItem',
      { 'TabItem-selected': tab.selected },
      props.tabItemClasses
    );

    return (
      <div
        onClick={e => this.onTabClick(tab, props.name)}
        className={classNames}
        key={index}
      >
        {tab.text}
      </div>
    );
  };

  renderTabList = props => {
    return (
      <div className="Tabs-list">
        {props.tabListBefore}
        <div className="Tabs-list-tabs">
          {props.tabList.map((tab, key) => this.renderTab(props, tab, key))}
        </div>
        {props.tabListAfter}
      </div>
    );
  };

  render() {
    const { props, state } = this;
    const classNames = this.getCssClasses(props, state);

    return (
      <div className={classNames}>
        {props.attach === 'before' ? this.renderTabList(props) : ''}
        <div className="Tab-content">{props.tabContent}</div>
        {props.attach === 'after' ? this.renderTabList(props) : ''}
      </div>
    );
  }
}

export default Tabs;
