import { CSSTransitionGroup } from 'react-css-transition';
import FadeInOut from './FadeInOut';
import React from 'react';
/**
 *
 *
 * @export
 * @class FadeInOutGroup
 * @extends {React.Component}
 */
export default class FadeInOutGroup extends React.Component {
  /**
   * Render method
   * @return {Object}JSX
   */
  render() {
    return (
      <CSSTransitionGroup {...this.props}>
        {React.Children.map(this.props.children, child => (
          <FadeInOut>{child}</FadeInOut>
        ))}
      </CSSTransitionGroup>
    );
  }
}
