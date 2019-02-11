import React = require( 'react' );

export default class NoReferrerAnchor extends React.PureComponent<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>
{
  public render()
  {
    const { children, ...props } = this.props;

    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
}
