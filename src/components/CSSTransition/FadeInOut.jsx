import { CSSTransition, transit } from 'react-css-transition';
import React from 'react';
/**
 *
 *
 * @export
 * @class FadeInOut
 * @extends {React.Component}
 */
export default class FadeInOut extends React.Component {
  /**
   * Render method
   * @return {Object}JSX
   */
  render() {
    return (
      <CSSTransition
        {...this.props}
        defaultStyle={{ opacity: 0 }}
        enterStyle={{ opacity: transit(1.0, 100, 'ease-in-out') }}
        leaveStyle={{ opacity: transit(0, 100, 'ease-in-out') }}
        activeStyle={{ opacity: 1.0 }}
      />
    );
  }
}
