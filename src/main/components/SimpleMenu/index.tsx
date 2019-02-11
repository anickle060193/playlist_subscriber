import React = require( 'react' );
import { Popper, Paper, ClickAwayListener, MenuList, Grow } from '@material-ui/core';
import { PopperProps } from '@material-ui/core/Popper';

interface Props
{
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  placement?: PopperProps[ 'placement' ];
}

export default class SimpleMenu extends React.PureComponent<Props>
{
  public render()
  {
    const { open, onClose, anchorEl, placement, children } = this.props;

    return (
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition={true}
        placement={placement}
      >
        {( { TransitionProps } ) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={onClose}>
                <MenuList>
                  {children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  }
}
